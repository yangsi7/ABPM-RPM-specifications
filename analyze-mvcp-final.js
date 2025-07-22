const puppeteer = require('puppeteer');
const fs = require('fs').promises;

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function analyzeMVCP() {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const analysisResults = {
    timestamp: new Date().toISOString(),
    currentNavigation: {},
    proposedChanges: {},
    screenshots: []
  };
  
  try {
    const page = await browser.newPage();
    console.log('1. Navigating to MVCP portal...');
    
    await page.goto('https://portal.myanthealth.com', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    await delay(2000);
    console.log('2. On login page, looking for email field...');
    
    // More specific selectors based on the actual page
    const emailSelector = 'input[name="email"], input[type="email"], input#email, input[placeholder*="Email"]';
    const passwordSelector = 'input[name="password"], input[type="password"], input#password';
    
    try {
      // Wait for email field
      await page.waitForSelector(emailSelector, { timeout: 5000 });
      
      // Type email
      await page.type(emailSelector, 'bp_chart@myant.ca');
      console.log('3. Email entered');
      
      // Type password
      await page.type(passwordSelector, 'My@nt123');
      console.log('4. Password entered');
      
      // Screenshot before login
      await page.screenshot({ 
        path: 'screenshots/01-login-filled.png',
        fullPage: true 
      });
      analysisResults.screenshots.push('01-login-filled.png');
      
      // Find and click Sign In button
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const signInButton = buttons.find(btn => 
          btn.textContent.toLowerCase().includes('sign in') || 
          btn.textContent.toLowerCase().includes('login')
        );
        if (signInButton) {
          signInButton.click();
          return true;
        }
        // Try submit button
        const submitButton = document.querySelector('button[type="submit"], input[type="submit"]');
        if (submitButton) {
          submitButton.click();
          return true;
        }
        return false;
      });
      
      console.log('5. Login submitted, waiting for navigation...');
      
      // Wait for navigation or content change
      await Promise.race([
        page.waitForNavigation({ waitUntil: 'networkidle2' }).catch(() => {}),
        delay(8000)
      ]);
      
    } catch (loginError) {
      console.log('Login error:', loginError.message);
      console.log('Continuing with current page analysis...');
    }
    
    // Capture current state
    await page.screenshot({ 
      path: 'screenshots/02-current-page.png',
      fullPage: true 
    });
    analysisResults.screenshots.push('02-current-page.png');
    
    // Analyze current navigation structure
    console.log('6. Analyzing navigation structure...');
    
    const navigationAnalysis = await page.evaluate(() => {
      const analysis = {
        url: window.location.href,
        title: document.title,
        topNavigation: [],
        patientNavigation: [],
        allLinks: [],
        currentIssues: []
      };
      
      // Find top navigation
      const topNav = document.querySelectorAll('nav a, header a, .navbar a, .nav-link');
      topNav.forEach(link => {
        const text = link.textContent.trim();
        if (text) {
          analysis.topNavigation.push({
            text: text,
            href: link.href,
            isActive: link.classList.contains('active')
          });
        }
      });
      
      // Find patient-level tabs
      const tabs = document.querySelectorAll('[role="tab"], .tab, .nav-tab, .patient-tab');
      tabs.forEach(tab => {
        const text = tab.textContent.trim();
        if (text) {
          analysis.patientNavigation.push({
            text: text,
            isActive: tab.getAttribute('aria-selected') === 'true' || tab.classList.contains('active')
          });
        }
      });
      
      // Find all links for comprehensive analysis
      document.querySelectorAll('a').forEach(link => {
        const text = link.textContent.trim();
        if (text) {
          analysis.allLinks.push(text);
          
          // Check for problematic navigation items
          if (text.toLowerCase().includes('virtual consultation')) {
            analysis.currentIssues.push('Found "Virtual Consultation" - needs removal');
          }
          if (text.toLowerCase().includes('holter studies')) {
            analysis.currentIssues.push('Found "Holter Studies" - should be renamed to "Studies"');
          }
        }
      });
      
      return analysis;
    });
    
    analysisResults.currentNavigation = navigationAnalysis;
    
    // Try to click on a patient if we're on the patient list
    try {
      console.log('7. Looking for patient records...');
      
      // Wait for patient list
      await page.waitForSelector('table tbody tr, .patient-row, [role="row"]', { timeout: 3000 });
      
      // Click first patient
      await page.evaluate(() => {
        const firstPatient = document.querySelector('table tbody tr:first-child, .patient-row:first-child');
        if (firstPatient) {
          firstPatient.click();
          return true;
        }
        return false;
      });
      
      await delay(3000);
      
      // Capture patient view
      await page.screenshot({ 
        path: 'screenshots/03-patient-view.png',
        fullPage: true 
      });
      analysisResults.screenshots.push('03-patient-view.png');
      
      // Analyze patient-level navigation
      const patientNavAnalysis = await page.evaluate(() => {
        const tabs = [];
        document.querySelectorAll('[role="tab"], .tab, .nav-tab, .nav-link').forEach(tab => {
          const text = tab.textContent.trim();
          if (text) {
            tabs.push({
              text: text,
              isActive: tab.getAttribute('aria-selected') === 'true' || tab.classList.contains('active')
            });
          }
        });
        return tabs;
      });
      
      analysisResults.patientTabs = patientNavAnalysis;
      
    } catch (patientError) {
      console.log('Could not access patient view:', patientError.message);
    }
    
    // Generate navigation recommendations
    analysisResults.proposedChanges = {
      topLevel: [
        { current: 'Holter Studies', proposed: 'Studies', reason: 'More inclusive for ABPM and future devices' }
      ],
      patientLevel: [
        { action: 'remove', tab: 'Virtual Consultation', reason: 'Per requirements' },
        { action: 'modify', current: 'ECG', proposed: 'ECG (Holter)', reason: 'Make specific to Holter studies' },
        { action: 'add', tab: 'ABPM', reason: 'New tab for blood pressure studies' },
        { action: 'modify', current: 'Summary', proposed: 'Summary', reason: 'Show all active studies with links' }
      ],
      navigationOptions: [
        {
          option: 'Option A: Unified Studies Tab',
          description: 'Single "Studies" tab with sub-navigation for Holter/ABPM',
          pros: ['Cleaner navigation', 'Easier to add future devices', 'Single entry point'],
          cons: ['Extra click to reach specific study type', 'May be less discoverable']
        },
        {
          option: 'Option B: Separate Tabs',
          description: 'Dedicated tabs for "Holter" and "ABPM"',
          pros: ['Direct access to each study type', 'Clear separation', 'No sub-navigation needed'],
          cons: ['More tabs in navigation', 'Need to add new tab for each device type']
        }
      ]
    };
    
    // Save comprehensive analysis
    await fs.writeFile(
      'mvcp-navigation-analysis.json',
      JSON.stringify(analysisResults, null, 2)
    );
    
    console.log('\n=== ANALYSIS COMPLETE ===');
    console.log('\nCurrent Navigation Issues Found:');
    navigationAnalysis.currentIssues.forEach(issue => console.log(`  - ${issue}`));
    
    console.log('\nProposed Changes:');
    console.log('  Top Level:');
    analysisResults.proposedChanges.topLevel.forEach(change => 
      console.log(`    - Change "${change.current}" to "${change.proposed}"`));
    
    console.log('  Patient Level:');
    analysisResults.proposedChanges.patientLevel.forEach(change => {
      if (change.action === 'remove') {
        console.log(`    - Remove "${change.tab}"`);
      } else if (change.action === 'add') {
        console.log(`    - Add "${change.tab}"`);
      } else if (change.action === 'modify') {
        console.log(`    - Modify "${change.current}" to "${change.proposed}"`);
      }
    });
    
    console.log('\nFiles created:');
    console.log('  - mvcp-navigation-analysis.json');
    console.log('  - screenshots/');
    analysisResults.screenshots.forEach(ss => console.log(`    - ${ss}`));
    
    console.log('\nBrowser will remain open for manual inspection.');
    
  } catch (error) {
    console.error('Error during analysis:', error);
    analysisResults.error = error.message;
  }
  
  // Don't close browser for manual inspection
  // await browser.close();
}

// Create screenshots directory and run
async function main() {
  try {
    await fs.mkdir('screenshots', { recursive: true });
  } catch (error) {
    // Directory exists
  }
  
  await analyzeMVCP();
}

main();