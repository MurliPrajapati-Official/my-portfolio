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

export const projects: Project[] = [
  {
    title: 'Daily Drama',
    domain: 'daily-drama-cub.pages.dev',
    link: 'https://daily-drama-cub.pages.dev/',
    kind: 'Restaurant · Brand site',
    description: 'A two-floor café in Defence Colony, New Delhi — coffee, matcha and all-day dining, staged with theatrical flair.',
    video: '/work/murli-prajapati-daily-drama-preview.mp4',
    poster: '/work/murli-prajapati-daily-drama-preview.webp',
  },
  {
    title: 'Divine Herbalife',
    domain: 'divineherbalife.in',
    link: 'https://divineherbalife.in/',
    kind: 'E-commerce · Ayurveda',
    description: 'A storefront for an Ayurvedic hair-care brand rooted in family wisdom from Tiruchirappalli.',
    video: '/work/murli-prajapati-divine-herbalife-preview.mp4',
    poster: '/work/murli-prajapati-divine-herbalife-preview.webp',
  },
  {
    title: 'Uniform Trends',
    domain: 'uniformtrends.pages.dev',
    link: 'https://uniformtrends.pages.dev/',
    kind: 'E-commerce · React · Cloudflare',
    description: 'A fast storefront with cart, checkout and a full admin dashboard behind it.',
    video: '/work/murli-prajapati-uniform-trends-preview.mp4',
    poster: '/work/murli-prajapati-uniform-trends-preview.webp',
  },
  {
    title: 'NutriScan',
    domain: 'nutri-scan-9ur.pages.dev',
    link: 'https://nutri-scan-9ur.pages.dev/',
    kind: 'AI · Health',
    description: 'Snap a photo of your plate and get a nutrition breakdown in seconds — an AI food scanner and tracker.',
    video: '/work/murli-prajapati-nutriscan-preview.mp4',
    poster: '/work/murli-prajapati-nutriscan-preview.webp',
  },
  {
    title: 'Portaleap',
    domain: 'portaleap.pages.dev',
    link: 'https://portaleap.pages.dev/',
    kind: 'B2B SaaS · Product design',
    description: 'One workspace to onboard clients, collect files and sign agreements.',
    video: '/work/murli-prajapati-portaleap-preview.mp4',
    poster: '/work/murli-prajapati-portaleap-preview.webp',
  },
  {
    title: 'Rashtraneeti',
    domain: 'rashtraneeti.pages.dev',
    link: 'https://rashtraneeti.pages.dev/',
    kind: 'Web app · Education',
    description: 'A school civic-operations app for prefect duties, event staffing, handovers and staff instructions.',
    video: '/work/murli-prajapati-rashtraneeti-preview.mp4',
    poster: '/work/murli-prajapati-rashtraneeti-preview.webp',
  },
  {
    title: 'KODEX',
    domain: 'kodexstore.pages.dev',
    link: 'https://kodexstore.pages.dev/',
    kind: 'Digital store · Neo-brutalist',
    description: 'A storefront for website assets, UI component libraries, prompt vaults and developer toolkits.',
    video: '/work/murli-prajapati-kodex-preview.mp4',
    poster: '/work/murli-prajapati-kodex-preview.webp',
  },
  {
    title: 'Em Connect',
    domain: 'em-connects.pages.dev',
    link: 'https://em-connects.pages.dev/',
    kind: 'Marketplace · Talent',
    description: 'A curated network where startups meet vetted freelancers, teams and agencies.',
    video: '/work/murli-prajapati-em-connect-preview.mp4',
    poster: '/work/murli-prajapati-em-connect-preview.webp',
  },
  {
    title: 'Next Hub',
    domain: 'next-hub-web.pages.dev',
    link: 'https://next-hub-web.pages.dev/',
    kind: 'Directory · Developers',
    description: 'The fastest way to discover quality developer resources — trending and newly added, in one place.',
    video: '/work/murli-prajapati-next-hub-preview.mp4',
    poster: '/work/murli-prajapati-next-hub-preview.webp',
  },
  {
    title: 'Optiq',
    domain: 'optiq-2jz.pages.dev',
    link: 'https://optiq-2jz.pages.dev/',
    kind: 'Agency site · Services',
    description: 'A digital-solutions agency site for websites, custom software, AI automation and growth.',
    video: '/work/murli-prajapati-optiq-preview.mp4',
    poster: '/work/murli-prajapati-optiq-preview.webp',
  },
  {
    title: 'CleanOS',
    domain: 'clean-os.pages.dev',
    link: 'https://clean-os.pages.dev/',
    kind: 'Operations · Field service',
    description: 'Field-service operations management with separate Admin and Crew workspaces.',
    video: '/work/murli-prajapati-clean-os-preview.mp4',
    poster: '/work/murli-prajapati-clean-os-preview.webp',
  },
  {
    title: 'Presence',
    domain: 'gym-system.edgeone.dev',
    link: 'https://gym-system.edgeone.dev/',
    kind: 'SaaS · Fitness',
    description: 'Attendance, streaks and follow-ups for gyms — see which members are drifting before they leave.',
    video: '/work/murli-prajapati-presence-preview.mp4',
    poster: '/work/murli-prajapati-presence-preview.webp',
  },
  {
    title: 'Bielco',
    domain: 'bielco.in',
    link: 'https://www.bielco.in',
    kind: 'Brand site · Motion · SEO',
    description: 'The studio I co-founded — a motion-led site that ranks for local business searches.',
    video: '/work/murli-prajapati-bielco-preview.mp4',
    poster: '/work/murli-prajapati-bielco-preview.webp',
  },
  {
    title: 'Prototypes',
    domain: 'prototype.bielco.in',
    link: 'https://prototype.bielco.in/',
    kind: 'Templates · Live demos',
    description: 'A live library of client prototypes and experimental interfaces.',
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
