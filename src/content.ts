export const SITE_URL = 'https://murliprajapati.pages.dev';
export const EMAIL = 'murliprajpatiofficial@zohomail.in';

export interface Project {
  title: string;
  domain: string;
  link: string;
  kind: string;
  description: string;
  video: string;
  poster: string;
}

export interface Role {
  dates: string;
  org: string;
  role: string;
  meta?: string;
  bullets: string[];
}

export interface Certificate {
  slug: string;
  title: string;
  issuer: string;
  date: string;       // human readable
  isoDate: string;    // for structured data
  image: string;
  width: number;
  height: number;
  alt: string;
}

export const story = [
  'I’m Murli — a developer and designer from Delhi, and co-founder of Bielco, a web studio in Rohini. For over two years I’ve been designing and shipping websites, online stores, SaaS dashboards and the bots that run quietly behind them.',
  'I’m also a commerce student, and it shapes how I build: every screen has to earn its place in the business. The same instinct won me a school robotics championship for an automatic braking system — think in systems, sweat the details.',
];

export const principles = [
  { icon: 'bolt', title: 'Performance first', line: 'Fast is a feature. Every build is measured against Core Web Vitals.' },
  { icon: 'compass', title: 'Thoughtful design', line: 'Type, spacing and motion that each have a reason to exist.' },
  { icon: 'hand', title: 'Real-world usability', line: 'Made for the people who use it daily — not for the screenshot.' },
] as const;

export const facts = [
  ['Based in', 'Delhi, India'],
  ['Studio', 'Bielco, Rohini'],
  ['Studying', 'Commerce, CM Shri School'],
  ['Expertise', 'Claude Code & AI Agents'],
] as const;

export const process = [
  { title: 'Discover', line: 'A free discovery call and a scoped estimate before anything is built.' },
  { title: 'Design', line: 'Wireframes to high-fidelity Figma, with the motion planned upfront.' },
  { title: 'Build', line: 'Production code on fast edge infrastructure, with SEO baked in.' },
  { title: 'Hand over', line: 'Source code, Figma files, schemas and deploy config — all yours.' },
];

export const faqs = [
  {
    q: 'What does Murli Prajapati do?',
    a: 'Murli is a web developer, UI/UX designer and co-founder of Bielco in Delhi. He designs and builds websites, online stores, SaaS dashboards and custom bot systems for growing businesses.',
  },
  {
    q: 'Can you build a website for my business?',
    a: 'Yes — landing pages, online stores, custom platforms and dashboards, designed and built end to end. Most custom websites take two to five weeks from discovery to launch.',
  },
  {
    q: 'What are custom bot systems?',
    a: 'Telegram, WhatsApp and Discord bots that automate the repetitive parts of a business: daily reports, employee attendance, inventory updates and system health checks.',
  },
  {
    q: 'Do I own the code and design files?',
    a: 'Yes. Every project ends with a full handover — source code, Figma files, database schemas, deployment configuration and brand assets.',
  },
  {
    q: 'Do you work with clients outside Delhi?',
    a: 'Yes. Work happens remotely with clients anywhere, and replies to new enquiries usually arrive within 24 hours.',
  },
];

export const projects: Project[] = [
  {
    title: 'Daily Drama',
    domain: 'daily-drama-cub.pages.dev',
    link: 'https://daily-drama-cub.pages.dev/',
    kind: 'Hospitality · Restaurant & Café Brand Site',
    description: 'Experience site for a premier two-floor café in Defence Colony, New Delhi. Features curated menus for specialty coffee, matcha, all-day dining, and an atmospheric theatrical visual theme.',
    video: '/work/murli-prajapati-daily-drama-preview.mp4',
    poster: '/work/murli-prajapati-daily-drama-preview.webp',
  },
  {
    title: 'Divine Herbalife',
    domain: 'divineherbalife.in',
    link: 'https://divineherbalife.in/',
    kind: 'E-Commerce · Direct-to-Consumer Ayurveda',
    description: 'Conversion-driven storefront for an Ayurvedic hair-care formulation rooted in Tiruchirappalli family heritage. Includes secure ordering flow and high-trust testimonial architecture.',
    video: '/work/murli-prajapati-divine-herbalife-preview.mp4',
    poster: '/work/murli-prajapati-divine-herbalife-preview.webp',
  },
  {
    title: 'Uniform Trends',
    domain: 'uniformtrends.pages.dev',
    link: 'https://uniformtrends.pages.dev/',
    kind: 'E-Commerce · React · Cloudflare Architecture',
    description: 'High-performance apparel storefront with real-time shopping cart, streamlined checkout experience, and a dedicated administrative dashboard for inventory and order management.',
    video: '/work/murli-prajapati-uniform-trends-preview.mp4',
    poster: '/work/murli-prajapati-uniform-trends-preview.webp',
  },
  {
    title: 'NutriScan',
    domain: 'nutri-scan-9ur.pages.dev',
    link: 'https://nutri-scan-9ur.pages.dev/',
    kind: 'AI Application · HealthTech & Computer Vision',
    description: 'Computer vision-powered nutrition tracker. Users upload or capture food photos to instantly receive estimated macronutrient breakdowns, calorie counts, and dietary insights.',
    video: '/work/murli-prajapati-nutriscan-preview.mp4',
    poster: '/work/murli-prajapati-nutriscan-preview.webp',
  },
  {
    title: 'Portaleap',
    domain: 'portaleap.pages.dev',
    link: 'https://portaleap.pages.dev/',
    kind: 'B2B SaaS · Client Onboarding Platform',
    description: 'Unified client collaboration workspace designed to replace chaotic email threads. Centralizes onboarding workflows, secure document collection, and e-signature execution.',
    video: '/work/murli-prajapati-portaleap-preview.mp4',
    poster: '/work/murli-prajapati-portaleap-preview.webp',
  },
  {
    title: 'Rashtraneeti',
    domain: 'rashtraneeti.pages.dev',
    link: 'https://rashtraneeti.pages.dev/',
    kind: 'Web Application · Civic & Educational Operations',
    description: 'Operations management platform for school civic duties, prefect staffing allocations, daily protocol checklists, automated handovers, and official staff broadcasting.',
    video: '/work/murli-prajapati-rashtraneeti-preview.mp4',
    poster: '/work/murli-prajapati-rashtraneeti-preview.webp',
  },
  {
    title: 'KODEX',
    domain: 'kodexstore.pages.dev',
    link: 'https://kodexstore.pages.dev/',
    kind: 'Digital Store · Neo-Brutalist Architecture',
    description: 'Digital asset marketplace engineered with high-contrast neo-brutalist styling. Hosts downloadable UI component kits, curated prompt libraries, and developer toolkits.',
    video: '/work/murli-prajapati-kodex-preview.mp4',
    poster: '/work/murli-prajapati-kodex-preview.webp',
  },
  {
    title: 'Em Connect',
    domain: 'em-connects.pages.dev',
    link: 'https://em-connects.pages.dev/',
    kind: 'Talent Marketplace · Startup Network',
    description: 'Specialized vetting platform connecting high-growth startups directly with audited indie developers, creative teams, and agency specialists.',
    video: '/work/murli-prajapati-em-connect-preview.mp4',
    poster: '/work/murli-prajapati-em-connect-preview.webp',
  },
  {
    title: 'Next Hub',
    domain: 'next-hub-web.pages.dev',
    link: 'https://next-hub-web.pages.dev/',
    kind: 'Web Directory · Developer Ecosystem',
    description: 'Clean, lightning-fast curated resource directory indexing trending libraries, AI toolkits, design kits, and open-source packages for modern software creators.',
    video: '/work/murli-prajapati-next-hub-preview.mp4',
    poster: '/work/murli-prajapati-next-hub-preview.webp',
  },
  {
    title: 'Optiq',
    domain: 'optiq-2jz.pages.dev',
    link: 'https://optiq-2jz.pages.dev/',
    kind: 'Agency Showcase · Digital Solutions',
    description: 'Sleek agency presentation highlighting bespoke web applications, AI automation integrations, SEO strategies, and custom business workflow consulting.',
    video: '/work/murli-prajapati-optiq-preview.mp4',
    poster: '/work/murli-prajapati-optiq-preview.webp',
  },
  {
    title: 'CleanOS',
    domain: 'clean-os.pages.dev',
    link: 'https://clean-os.pages.dev/',
    kind: 'Operations SaaS · Field Service Management',
    description: 'End-to-end operational software for commercial cleaning and maintenance teams. Features analytics-driven Admin Portal and an agile mobile Crew Workspace.',
    video: '/work/murli-prajapati-clean-os-preview.mp4',
    poster: '/work/murli-prajapati-clean-os-preview.webp',
  },
  {
    title: 'Presence',
    domain: 'gym-system.edgeone.dev',
    link: 'https://gym-system.edgeone.dev/',
    kind: 'SaaS · Fitness Retention & Churn Prevention',
    description: 'Member attendance analytics and streak tracking platform for gyms. Detects declining attendance early to trigger automated re-engagement workflows.',
    video: '/work/murli-prajapati-presence-preview.mp4',
    poster: '/work/murli-prajapati-presence-preview.webp',
  },
  {
    title: 'Bielco',
    domain: 'bielco.in',
    link: 'https://www.bielco.in',
    kind: 'Brand Site · Motion · Local SEO',
    description: 'Official website for Bielco digital studio. Engineered with fluid motion interactions, performance-first architecture, and optimized for regional small-business searches.',
    video: '/work/murli-prajapati-bielco-preview.mp4',
    poster: '/work/murli-prajapati-bielco-preview.webp',
  },
  {
    title: 'Prototypes',
    domain: 'prototype.bielco.in',
    link: 'https://prototype.bielco.in/',
    kind: 'Interactive Sandbox · Live Design Demos',
    description: 'Public testbed hosting experimental UI components, client interactive mockups, and cutting-edge web motion concepts.',
    video: '/work/murli-prajapati-prototypes-preview.mp4',
    poster: '/work/murli-prajapati-prototypes-preview.webp',
  },
];

export const experience: Role[] = [
  {
    dates: '2026 — Present',
    org: 'Bielco',
    role: 'Co-Founder, Founding Team',
    bullets: [
      'Solving digital-presence problems for small businesses with high-impact custom software.',
      'Shipping full websites from first sketch to deployment, with search optimisation and secure data architecture.',
      'Leading AI-assisted development workflows and growth-focused marketing for clients.',
    ],
  },
  {
    dates: 'Jul — Aug 2026',
    org: 'Hoollow',
    role: 'Editor',
    meta: 'General team · Full-time, remote',
    bullets: ['Full-time remote editor in the General team. Certificate of employment issued 22 Aug 2026.'],
  },
];

export const education: Role = {
  dates: '2024 — 2028',
  org: 'CM Shri School',
  role: '11th Grade — Commerce',
  meta: 'Expected 2028',
  bullets: [
    'Top 100 in the MVPP exam — awarded a ₹5,000 scholarship and medal.',
    '1st place, school robotics competition — designed an automatic braking system for a model car and qualified for zonals.',
  ],
};

export const certificates: Certificate[] = [
  {
    slug: 'adobe-generative-ai-content-creation',
    title: 'Generative AI Content Creation',
    issuer: 'Adobe × Ladli Foundation',
    date: '1 Nov 2026',
    isoDate: '2026-11-01',
    image: '/certificates/murli-prajapati-adobe-generative-ai-content-creation-certificate.webp',
    width: 1600,
    height: 1132,
    alt: 'Murli Prajapati — Adobe Generative AI Content Creation certificate of completion, Ladli Foundation Skill For All program',
  },
  {
    slug: 'be10x-ai-tools-workshop',
    title: 'AI Tools & Claude Workshop',
    issuer: 'be10x',
    date: '23 Sep 2026',
    isoDate: '2026-09-23',
    image: '/certificates/murli-prajapati-be10x-ai-tools-workshop-certificate.webp',
    width: 1600,
    height: 1067,
    alt: 'Murli Prajapati — be10x AI Tools and Claude Workshop certificate of completion',
  },
  {
    slug: 'hoollow-editor-employment',
    title: 'Certificate of Employment — Editor',
    issuer: 'Hoollow',
    date: '22 Aug 2026',
    isoDate: '2026-08-22',
    image: '/certificates/murli-prajapati-hoollow-editor-employment-certificate.webp',
    width: 1600,
    height: 1057,
    alt: 'Murli Prajapati — Hoollow certificate of employment as Editor, July to August 2026',
  },
  {
    slug: 'yuva-ai-for-all',
    title: 'Yuva AI for All',
    issuer: 'IndiaAI × Nasscom FutureSkills Prime',
    date: '3 Apr 2026',
    isoDate: '2026-04-03',
    image: '/certificates/murli-prajapati-yuva-ai-for-all-certificate.webp',
    width: 1600,
    height: 1132,
    alt: 'Murli Prajapati — Yuva AI for All certificate of participation, IndiaAI and Nasscom FutureSkills Prime',
  },
];

export const socials = [
  { label: 'Instagram', handle: '@murliprajapati.in', href: 'https://www.instagram.com/murliprajapati.in/', icon: '/icons/instagram.svg' },
  { label: 'LinkedIn', handle: 'murli-prajapatiofficial', href: 'https://www.linkedin.com/in/murli-prajapatiofficial/', icon: '/icons/linkedin.svg' },
  { label: 'GitHub', handle: 'MurliPrajapati-Official', href: 'https://github.com/MurliPrajapati-Official', icon: '/icons/github.svg' },
  { label: 'YouTube', handle: '@Dravynz', href: 'https://www.youtube.com/@Dravynz', icon: '/icons/youtube.svg' },
];
