const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

async function analyzeMVCPNavigation() {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1440, height: 900 }
  });
  
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
    console.log('Screenshot: Login page captured');
    
    // Wait for login form
    await page.waitForSelector('input[type="email"], input[name="email"]', { timeout: 10000 });
    
    // Login
    await page.type('input[type="email"], input[name="email"]', 'bp_chart@myant.ca');
    await page.type('input[type="password"], input[name="password"]', 'My@nt123');
    
    // Submit login - try multiple selectors
    let submitButton = await page.$('button[type="submit"]');
    if (!submitButton) submitButton = await page.$('input[type="submit"]');
    if (!submitButton) submitButton = await page.$('button');
    
    if (submitButton) {
      await submitButton.click();
    } else {
      // Try pressing Enter in password field
      await page.keyboard.press('Enter');
    }
    console.log('Login submitted, waiting for navigation...');
    
    // Wait for navigation after login
    await page.waitForNavigation({ waitUntil: 'networkidle2' });
    await page.waitForTimeout(3000); // Extra wait for dynamic content
    
    // Capture main dashboard
    await page.screenshot({ 
      path: 'screenshots/02-dashboard.png',
      fullPage: true 
    });
    console.log('Screenshot: Dashboard captured');
    
    // Analyze navigation structure
    const navigationAnalysis = await page.evaluate(() => {
      const nav = {
        topNav: [],
        sideNav: [],
        patientNav: [],
        currentStructure: {}
      };
      
      // Check for top navigation
      const topNavItems = document.querySelectorAll('nav a, header a, [role="navigation"] a');
      topNavItems.forEach(item => {
        if (item.textContent.trim()) {
          nav.topNav.push({
            text: item.textContent.trim(),
            href: item.href,
            isActive: item.classList.contains('active') || item.getAttribute('aria-current') === 'page'
          });
        }
      });
      
      // Check for tabs or secondary navigation
      const tabs = document.querySelectorAll('[role="tab"], .tab, .nav-tab');
      tabs.forEach(tab => {
        if (tab.textContent.trim()) {
          nav.patientNav.push({
            text: tab.textContent.trim(),
            isActive: tab.getAttribute('aria-selected') === 'true'
          });
        }
      });
      
      // Look for specific navigation patterns
      const allLinks = document.querySelectorAll('a');
      nav.currentStructure.hasVirtualConsultations = Array.from(allLinks).some(link => 
        link.textContent.toLowerCase().includes('virtual consultation')
      );
      nav.currentStructure.hasHolterStudies = Array.from(allLinks).some(link => 
        link.textContent.toLowerCase().includes('holter')
      );
      nav.currentStructure.hasStudies = Array.from(allLinks).some(link => 
        link.textContent.toLowerCase().includes('studies') && !link.textContent.toLowerCase().includes('holter')
      );
      
      return nav;
    });
    
    console.log('Navigation Analysis:', JSON.stringify(navigationAnalysis, null, 2));
    
    // Try to find and click on a patient
    try {
      await page.waitForSelector('table tr, .patient-row, [data-testid*="patient"]', { timeout: 5000 });
      const patientRow = await page.$('table tbody tr:first-child, .patient-row:first-child');
      if (patientRow) {
        await patientRow.click();
        await page.waitForTimeout(2000);
        
        await page.screenshot({ 
          path: 'screenshots/03-patient-profile.png',
          fullPage: true 
        });
        console.log('Screenshot: Patient profile captured');
        
        // Analyze patient-level navigation
        const patientNav = await page.evaluate(() => {
          const tabs = document.querySelectorAll('[role="tab"], .tab, .nav-tab, .nav-link');
          return Array.from(tabs).map(tab => ({
            text: tab.textContent.trim(),
            isActive: tab.getAttribute('aria-selected') === 'true' || tab.classList.contains('active')
          }));
        });
        
        console.log('Patient Navigation Tabs:', JSON.stringify(patientNav, null, 2));
        
        // Look for specific tabs
        const hasVirtualConsultTab = patientNav.some(tab => 
          tab.text.toLowerCase().includes('virtual consult')
        );
        const hasStudiesTab = patientNav.some(tab => 
          tab.text.toLowerCase().includes('studies')
        );
        const hasECGTab = patientNav.some(tab => 
          tab.text.toLowerCase().includes('ecg')
        );
        
        console.log('Tab Analysis:', {
          hasVirtualConsultTab,
          hasStudiesTab,
          hasECGTab
        });
        
        // Try to click on Studies or Holter Studies tab
        const studiesTab = await page.$('[role="tab"]:has-text("Studies"), .tab:has-text("Studies"), a:has-text("Holter Studies")');
        if (studiesTab) {
          await studiesTab.click();
          await page.waitForTimeout(2000);
          
          await page.screenshot({ 
            path: 'screenshots/04-studies-tab.png',
            fullPage: true 
          });
          console.log('Screenshot: Studies tab captured');
        }
      }
    } catch (error) {
      console.log('Could not navigate to patient profile:', error.message);
    }
    
    // Save analysis results
    await fs.writeFile(
      'navigation-analysis-results.json',
      JSON.stringify(navigationAnalysis, null, 2)
    );
    
    console.log('Analysis complete. Check screenshots folder for visual captures.');
    
  } catch (error) {
    console.error('Error during analysis:', error);
  } finally {
    await browser.close();
  }
}

// Create screenshots directory
async function setup() {
  try {
    await fs.mkdir('screenshots', { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
  
  await analyzeMVCPNavigation();
}

setup();