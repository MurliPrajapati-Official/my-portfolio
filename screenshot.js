const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  // Since we are running locally, we need the app to be running. 
  // We'll assume it's on localhost:5173 (standard Vite port)
  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('Screenshot taken successfully');
  } catch (e) {
    console.error('Error taking screenshot: ' + e);
    process.exit(1);
  }
  await browser.close();
})();
