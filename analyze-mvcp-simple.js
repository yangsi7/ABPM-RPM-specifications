const puppeteer = require('puppeteer');
const fs = require('fs').promises;

async function analyzeMVCP() {
  const browser = await puppeteer.launch({ 
    headless: false,
    defaultViewport: { width: 1440, height: 900 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    console.log('Navigating to MVCP portal...');
    
    // Navigate to login page
    await page.goto('https://portal.myanthealth.com', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    console.log('On login page, filling credentials...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Fill email - using the actual input fields from the screenshot
    await page.type('input[type="text"]', 'bp_chart@myant.ca');
    
    // Fill password
    await page.type('input[type="password"]', 'My@nt123');
    
    // Take screenshot before submitting
    await page.screenshot({ 
      path: 'screenshots/login-filled.png',
      fullPage: true 
    });
    
    // Click the blue Sign In button
    await page.evaluate(() => {
      // Find the blue Sign In button
      const buttons = document.querySelectorAll('button');
      for (const button of buttons) {
        if (button.textContent.trim() === 'Sign In' && 
            window.getComputedStyle(button).backgroundColor.includes('rgb')) {
          console.log('Clicking Sign In button');
          button.click();
          break;
        }
      }
    });
    
    console.log('Login submitted, waiting for page change...');
    
    // Wait for page to change
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Take screenshot of current state
    await page.screenshot({ 
      path: 'screenshots/after-login-attempt.png',
      fullPage: true 
    });
    
    // Analyze whatever page we're on
    const currentState = await page.evaluate(() => {
      return {
        url: window.location.href,
        title: document.title,
        bodyText: document.body.innerText.substring(0, 500),
        hasLoginForm: !!document.querySelector('input[type="password"]'),
        buttons: Array.from(document.querySelectorAll('button')).map(b => b.textContent.trim()),
        links: Array.from(document.querySelectorAll('a')).map(a => ({
          text: a.textContent.trim(),
          href: a.href
        })).filter(l => l.text)
      };
    });
    
    console.log('\nCurrent Page State:');
    console.log('URL:', currentState.url);
    console.log('Title:', currentState.title);
    console.log('Still on login?:', currentState.hasLoginForm);
    console.log('\nButtons found:', currentState.buttons);
    console.log('\nLinks found:', currentState.links.map(l => l.text));
    
    // Save analysis
    await fs.writeFile(
      'mvcp-current-state.json',
      JSON.stringify(currentState, null, 2)
    );
    
    console.log('\nAnalysis saved to mvcp-current-state.json');
    console.log('Screenshots saved in screenshots folder');
    console.log('\nBrowser will remain open for manual inspection.');
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Run analysis
async function main() {
  try {
    await fs.mkdir('screenshots', { recursive: true });
  } catch (error) {
    // Directory exists
  }
  
  await analyzeMVCP();
}

main();