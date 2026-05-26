import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths in ES module scope
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define dist directory path (Vite default output)
const distPath = path.resolve(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Safety check: ensure build has run before pre-rendering
if (!fs.existsSync(indexHtmlPath)) {
  console.error("dist/index.html not found. Did you run your build command first (e.g., 'vite build')?");
  process.exit(1);
}

// Read the compiled base HTML template
const originalHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// ==========================================
// 1. ROUTE DEFINITIONS CONFIGURATION
// Add all of your application pages here.
// ==========================================
const routes = [
  {
    path: '/about',
    title: 'About Murli Prajapati | Education & Robotics Background',
    description: 'Discover Murli Prajapati\'s academic journey at CM Shri School, MVPP scholarship qualification, and school robotics achievements.',
  },
  {
    path: '/services',
    title: 'Full Stack & AI Automation Services | Beilco Agency',
    description: 'Explore web engineering and AI automation services provided by Murli Prajapati and Beilco: React, Next.js, and n8n workflows.',
  },
  {
    path: '/contact',
    title: 'Contact Murli Prajapati | Founder of Beilco Agency',
    description: 'Get in touch with Murli Prajapati at murliprajpatiofficial@zohomail.in or connect via LinkedIn and GitHub for custom software projects.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Murli Prajapati Portfolio',
    description: 'Privacy guidelines and data usage terms for Murli Prajapati\'s official portfolio site.',
  },
  {
    path: '/terms',
    title: 'Terms & Conditions | Murli Prajapati Portfolio',
    description: 'Read the terms of service and general user guidelines for using Murli Prajapati\'s digital platforms.',
  },
  {
    path: '/cookie-policy',
    title: 'Cookie Policy | Murli Prajapati Portfolio',
    description: 'Learn about cookies and tracking tags used on Murli Prajapati\'s official website.',
  }
];

// ==========================================
// 2. SEO META INJECTION LOGIC
// Uses RegExp to locate and replace tags dynamically.
// ==========================================
function injectSEO(html, route) {
  let newHtml = html;
  const siteDomain = 'https://murliprajapati.pages.dev';
  
  // Replace Title tag
  newHtml = newHtml.replace(/<title>.*?<\/title>/, `<title>${route.title}</title>`);
  
  // Replace Meta Description tag (supports standard and self-closing, single/multi-line)
  newHtml = newHtml.replace(/<meta name="description"[\s\S]*?content="[^"]*"\s*\/?>/, `<meta name="description" content="${route.description}" />`);
  
  // Replace Open Graph Title tag
  newHtml = newHtml.replace(/<meta property="og:title"[\s\S]*?content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${route.title}" />`);
  
  // Replace Open Graph Description tag
  newHtml = newHtml.replace(/<meta property="og:description"[\s\S]*?content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${route.description}" />`);

  // Replace Twitter Title tag
  newHtml = newHtml.replace(/<meta property="twitter:title"[\s\S]*?content="[^"]*"\s*\/?>/, `<meta property="twitter:title" content="${route.title}" />`);
  
  // Replace Twitter Description tag
  newHtml = newHtml.replace(/<meta property="twitter:description"[\s\S]*?content="[^"]*"\s*\/?>/, `<meta property="twitter:description" content="${route.description}" />`);
  
  // Replace Canonical Link tag
  newHtml = newHtml.replace(/<link rel="canonical"[\s\S]*?href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${siteDomain}${route.path}/" />`);

  return newHtml;
}

// ==========================================
// 3. STATIC DIRECTORY GENERATOR
// Iterates routes, makes subdirectories, and writes index.html.
// ==========================================
routes.forEach(route => {
  // strip leading slash for path generation
  const routeDir = path.join(distPath, route.path.substring(1));
  
  // Create subdirectory recursively if it doesn't exist
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  
  // Inject the specific route metadata into our base HTML content
  const routeHtml = injectSEO(originalHtml, route);
  
  // Write index.html file into the specific route directory
  fs.writeFileSync(path.join(routeDir, 'index.html'), routeHtml);
  console.log(`Generated prerendered HTML for ${route.path} -> /${route.path.substring(1)}/index.html`);
});

console.log('Prerendering complete! Deployment ready.');
