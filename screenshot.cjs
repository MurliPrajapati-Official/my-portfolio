const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  
  try {
    // The previous log showed the port was 3001
    await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('Screenshot taken successfully');
  } catch (e) {
    console.error('Error taking screenshot: ' + e);
    process.exit(1);
  }
  await browser.close();
})();
