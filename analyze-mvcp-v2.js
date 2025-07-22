const puppeteer = require('puppeteer');
const fs = require('fs').promises;

async function analyzeMVCP() {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1440, height: 900 }
  });
  
  const analysisResults = {
    timestamp: new Date().toISOString(),
    navigation: {},
    screenshots: [],
    findings: {}
  };
  
  try {
    const page = await browser.newPage();
    console.log('Navigating to MVCP portal...');
    
    // Navigate to login page
    await page.goto('https://portal.myanthealth.com', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Take screenshot of login page
    await page.screenshot({ 
      path: 'screenshots/01-login-page.png',
      fullPage: true 
    });
    analysisResults.screenshots.push('01-login-page.png');
    
    // Fill in login form
    await page.waitForSelector('input[type="text"], input[type="email"]', { timeout: 5000 });
    
    // Type email
    const emailInput = await page.$('input[type="text"], input[type="email"]');
    await emailInput.type('bp_chart@myant.ca');
    
    // Type password
    const passwordInput = await page.$('input[type="password"]');
    await passwordInput.type('My@nt123');
    
    // Click Sign In button
    await page.waitForSelector('button:has-text("Sign In"), button.sign-in, button[type="submit"]', { timeout: 5000 });
    
    // Take screenshot before clicking
    await page.screenshot({ 
      path: 'screenshots/02-login-filled.png',
      fullPage: true 
    });
    
    // Click the Sign In button by evaluating in page context
    await page.evaluate(() => {
      const buttons = document.querySelectorAll('button');
      for (const button of buttons) {
        if (button.textContent.includes('Sign In')) {
          button.click();
          break;
        }
      }
    });
    
    console.log('Login submitted, waiting for dashboard...');
    
    // Wait for either navigation or content change
    try {
      await Promise.race([
        page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }),
        page.waitForSelector('.dashboard, .patient-list, table, [data-testid*="patient"]', { timeout: 10000 })
      ]);
    } catch (e) {
      console.log('Navigation timeout, checking current page state...');
    }
    
    await page.waitForTimeout(3000);
    
    // Take screenshot of whatever loaded
    await page.screenshot({ 
      path: 'screenshots/03-after-login.png',
      fullPage: true 
    });
    analysisResults.screenshots.push('03-after-login.png');
    
    // Analyze current page structure
    const pageAnalysis = await page.evaluate(() => {
      const analysis = {
        url: window.location.href,
        title: document.title,
        navigation: {
          topNav: [],
          tabs: [],
          links: []
        },
        content: {
          hasPatientList: false,
          hasHolterMention: false,
          hasStudiesMention: false,
          hasVirtualConsultation: false
        }
      };
      
      // Find all navigation elements
      const navElements = document.querySelectorAll('nav a, header a, [role="navigation"] a, .nav-link, .tab');
      navElements.forEach(el => {
        if (el.textContent.trim()) {
          analysis.navigation.topNav.push(el.textContent.trim());
        }
      });
      
      // Find tabs
      const tabs = document.querySelectorAll('[role="tab"], .tab, .nav-tab');
      tabs.forEach(tab => {
        if (tab.textContent.trim()) {
          analysis.navigation.tabs.push(tab.textContent.trim());
        }
      });
      
      // Find all links
      const allLinks = document.querySelectorAll('a');
      allLinks.forEach(link => {
        const text = link.textContent.trim();
        if (text) {
          analysis.navigation.links.push(text);
          
          // Check for specific content
          const lowerText = text.toLowerCase();
          if (lowerText.includes('holter')) analysis.content.hasHolterMention = true;
          if (lowerText.includes('studies')) analysis.content.hasStudiesMention = true;
          if (lowerText.includes('virtual consult')) analysis.content.hasVirtualConsultation = true;
        }
      });
      
      // Check for patient list
      analysis.content.hasPatientList = !!document.querySelector('table, .patient-list, [data-testid*="patient"]');
      
      return analysis;
    });
    
    analysisResults.currentPage = pageAnalysis;
    console.log('Page Analysis:', JSON.stringify(pageAnalysis, null, 2));
    
    // Try to find and interact with navigation elements
    const navItems = await page.$$('a, button, [role="tab"]');
    for (const item of navItems) {
      const text = await item.evaluate(el => el.textContent?.trim());
      if (text && (text.includes('Patients') || text.includes('Holter') || text.includes('Studies'))) {
        console.log(`Found navigation item: ${text}`);
      }
    }
    
    // Save all results
    await fs.writeFile(
      'mvcp-analysis-results.json',
      JSON.stringify(analysisResults, null, 2)
    );
    
    console.log('\nAnalysis Summary:');
    console.log('- Current URL:', pageAnalysis.url);
    console.log('- Page Title:', pageAnalysis.title);
    console.log('- Navigation Items Found:', pageAnalysis.navigation.topNav.length);
    console.log('- Has Holter Mention:', pageAnalysis.content.hasHolterMention);
    console.log('- Has Studies Mention:', pageAnalysis.content.hasStudiesMention);
    console.log('- Has Virtual Consultation:', pageAnalysis.content.hasVirtualConsultation);
    console.log('\nCheck screenshots folder for visual captures.');
    
  } catch (error) {
    console.error('Error during analysis:', error);
    analysisResults.error = error.message;
  } finally {
    // Keep browser open for manual inspection
    console.log('\nBrowser will remain open for manual inspection. Close it when done.');
    // await browser.close();
  }
}

// Create screenshots directory and run analysis
async function main() {
  try {
    await fs.mkdir('screenshots', { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  await analyzeMVCP();
}

main();