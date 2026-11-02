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

// Route Definitions Configuration
const routes = [
  {
    path: '/about',
    title: 'About Murli Prajapati | Co-Founder of Bielco & Developer',
    description: 'Discover Murli Prajapati\'s academic journey at CM Shri School, MVPP scholarship, robotics achievements, and role as Co-Founder of Bielco.',
  },
  {
    path: '/projects',
    title: 'Projects & Interactive Prototypes | Murli Prajapati',
    description: '14 live projects built by Murli Prajapati — Daily Drama, Divine Herbalife, Uniform Trends, NutriScan, Portaleap, KODEX, Em Connect, Optiq, Presence and more.',
  },
  {
    path: '/skills',
    title: 'Skills, Bot Development & Business Systems | Murli Prajapati',
    description: 'Explore Murli Prajapati\'s capabilities: Web Development, UI/UX Design, Video Editing, and custom business bot systems (Telegram, WhatsApp, Discord).',
  },
  {
    path: '/experience',
    title: 'Experience & Education | Murli Prajapati',
    description: 'Murli Prajapati’s experience as Co-Founder of Bielco and Editor at Hoollow, plus education at CM Shri School, MVPP scholarship and robotics honours.',
  },
  {
    path: '/certificates',
    title: 'Certificates | Murli Prajapati',
    description: 'Certificates earned by Murli Prajapati: Adobe Generative AI Content Creation, be10x AI Tools & Claude Workshop, Hoollow Certificate of Employment, and Yuva AI for All (IndiaAI × Nasscom).',
  },
  {
    path: '/contact',
    title: 'Contact Murli Prajapati | Co-Founder of Bielco',
    description: 'Get in touch with Murli Prajapati at murliprajpatiofficial@zohomail.in or connect via LinkedIn and GitHub for custom software and bot systems.',
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

// SEO Meta Injection Logic
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

// Static Directory Generator
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
