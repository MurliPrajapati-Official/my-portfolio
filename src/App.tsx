import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Github, Linkedin, Youtube, Instagram, ArrowUpRight, Mail, Download, Sparkles, Layout, Server, Bot, Video, Lightbulb, Zap, Globe, Shield } from 'lucide-react';

// --- Types ---
interface Project {
  id: string;
  number: string;
  title: string;
  tags: string[];
  description: string;
  details?: string[];
  link: string;
}

interface Experience {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
}

interface Skill {
  title: string;
  details: string;
  icon: React.ReactNode;
}

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest('a, button, .interactive'));
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHover);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHover);
    };
  }, []);

  return (
    <div
      className={`custom-cursor hidden md:block ${isHovering ? 'custom-cursor-hover' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px`, transition: 'transform 0.15s ease-out, background-color 0.3s ease' }}
    />
  );
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="font-dm-mono text-lg md:text-2xl uppercase tracking-[4px] md:tracking-[8px] text-accent-fix mb-10 md:mb-16 flex items-center gap-4 md:gap-6"
  >
    <span className="w-10 md:w-16 h-px bg-accent-fix"></span>
    {children}
  </motion.h2>
);

const ProjectRow = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className="border-b border-border-dim py-8 md:py-12 px-4 md:px-8 transition-all hover:bg-surface/50 group cursor-pointer relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8">
        <div className="flex items-center gap-6 md:gap-24">
          <span className="font-jetbrains text-accent-fix text-[12px] md:text-[14px] font-bold uppercase tracking-[2px] md:tracking-[3px]">{project.number}</span>
          <h3 className="text-3xl md:text-7xl font-instrument font-medium text-text-primary group-hover:text-accent-fix transition-colors duration-500 break-words">{project.title}</h3>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 md:ml-auto items-center">
          {project.tags.map(tag => (
            <span key={tag} className="font-jetbrains text-[10px] md:text-[12px] uppercase tracking-[1px] md:tracking-[2px] px-3 py-1.5 md:px-4 md:py-2 bg-accent/5 border border-accent/20 text-accent/80">
              {tag}
            </span>
          ))}
          <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-border-dim flex items-center justify-center group-hover:border-accent group-hover:bg-accent-fix group-hover:text-bg-primary transition-all duration-500 ml-2 md:ml-6">
            <ArrowUpRight size={20} className="md:w-6 md:h-6" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-8 md:pt-12 md:pl-40 max-w-4xl">
              <p className="text-text-secondary text-lg md:text-2xl leading-relaxed mb-8 md:mb-10 font-instrument">
                {project.description}
              </p>
              {project.details && project.details.length > 0 && (
                <ul className="flex flex-col gap-4 md:gap-6 mb-8 md:mb-12">
                  {project.details.map((detail, i) => (
                    <li key={i} className="text-text-secondary text-base md:text-lg leading-relaxed font-instrument flex gap-4 md:gap-6 group/bullet">
                      <span className="text-accent-fix mt-1.5 shrink-0 group-hover/bullet:translate-x-2 transition-transform">→</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex gap-6 md:gap-10">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[2px] md:tracking-[3px] text-accent-fix hover:text-accent-hover transition-colors flex items-center gap-3 interactive group/link">
                  Visit Platform <div className="w-8 md:w-12 h-px bg-accent group-hover/link:bg-accent-hover group-hover/link:w-16 transition-all"></div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isExpanded ? 1 : 0 }}
        className="absolute left-0 top-0 bottom-0 w-1.5 md:w-2 bg-accent origin-top"
      />
    </motion.div>
  );
};

const SkillCategory = ({ title, skills }: { title: string, skills: Skill[] }) => (
  <div className="flex flex-col gap-8 md:gap-12">
    <h4 className="font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[6px] md:tracking-[10px] text-accent-fix border-b border-accent/10 pb-4 md:pb-6">{title}</h4>
    <ul className="flex flex-col gap-8 md:gap-12">
      {skills.map(skill => (
        <li key={skill.title} className="group">
          <div className="flex items-center gap-4 md:gap-6 mb-3 md:mb-4">
            <div className="p-3 md:p-4 rounded-lg md:rounded-xl bg-accent/5 text-accent-fix group-hover:bg-accent-fix group-hover:text-bg-primary transition-all duration-500">
              {skill.icon}
            </div>
            <span className="text-text-primary text-xl md:text-3xl font-instrument group-hover:translate-x-4 transition-transform duration-500">{skill.title}</span>
          </div>
          <p className="text-text-secondary text-base md:text-lg font-instrument leading-relaxed pl-4 md:pl-6 border-l-2 border-border-dim/50 group-hover:border-accent-fix transition-colors">
            {skill.details}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

const EducationBlock = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="mb-24 md:mb-40">
      <SectionLabel>Education</SectionLabel>
      <div
        className="relative pl-8 md:pl-16 border-l-2 border-border-dim group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`absolute left-[-2px] top-0 w-1 h-full transition-colors duration-700 ${isHovered ? 'bg-accent-fix' : 'bg-border-dim'}`} />
        <div className={`absolute left-[-6px] md:left-[-8px] top-2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-bg-primary border-2 transition-all duration-500 ${isHovered ? 'border-accent-fix scale-125' : 'border-border-dim'}`} />

        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-6 mb-6 md:mb-8">
          <h4 className="text-3xl md:text-5xl font-instrument font-medium text-text-primary">CM Shri School</h4>
          <span className="font-jetbrains text-[12px] md:text-[14px] uppercase tracking-[4px] md:tracking-[6px] text-accent-fix/50">2024 — 2028 (Expected)</span>
        </div>

        <div className="font-dm-mono text-base md:text-xl uppercase tracking-[3px] md:tracking-[4px] text-accent-fix mb-8 md:mb-10">11th Grade — Commerce</div>

        <p className="text-text-secondary text-xl md:text-2xl leading-relaxed font-instrument mb-12 md:mb-16 max-w-4xl">
          Studying commerce while actively building robotics projects and preparing to launch a startup. Focusing on business fundamentals and technical execution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl">
          <div className="bg-surface/30 border border-border-dim p-6 md:p-10 rounded-sm hover:border-accent-fix/40 transition-colors group/card">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-fix mb-6 md:mb-8 group-hover/card:bg-accent-fix group-hover/card:text-bg-primary transition-all">
              <Sparkles size={20} className="md:w-6 md:h-6" />
            </div>
            <h5 className="font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[3px] md:tracking-[4px] text-text-primary mb-4 md:mb-6">Academic Excellence</h5>
            <p className="text-text-secondary text-base md:text-lg font-instrument leading-relaxed">
              Won ₹5,000 scholarship and medal for qualifying in the top 100 students in the MVPP exam.
            </p>
          </div>
          <div className="bg-surface/30 border border-border-dim p-6 md:p-10 rounded-sm hover:border-accent-fix/40 transition-colors group/card">
            <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent-fix mb-6 md:mb-8 group-hover/card:bg-accent-fix group-hover/card:text-bg-primary transition-all">
              <Zap size={20} className="md:w-6 md:h-6" />
            </div>
            <h5 className="font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[3px] md:tracking-[4px] text-text-primary mb-4 md:mb-6">Robotics Leadership</h5>
            <p className="text-text-secondary text-base md:text-lg font-instrument leading-relaxed">
              1st Position in School Robotics Competition: Designed an automatic braking system on a model car, qualifying for zonals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceItem = ({ exp }: { exp: Experience }) => (
  <div className="relative pl-8 md:pl-16 border-l-2 border-border-dim group pb-20 md:pb-32 last:pb-0">
    <div className="absolute left-[-2px] top-0 w-1 h-full bg-border-dim group-hover:bg-accent-fix transition-colors duration-700" />
    <div className="absolute left-[-6px] md:left-[-8px] top-2 w-3 md:w-4 h-3 md:h-4 rounded-full bg-bg-primary border-2 border-border-dim group-hover:border-accent-fix transition-all duration-500" />

    <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-6 mb-6 md:mb-8">
      <h4 className="text-3xl md:text-5xl font-instrument font-medium text-text-primary group-hover:text-accent-fix transition-colors">{exp.company}</h4>
      <span className="font-jetbrains text-[12px] md:text-[14px] uppercase tracking-[4px] md:tracking-[6px] text-accent-fix/50">{exp.dates}</span>
    </div>

    <div className="font-dm-mono text-base md:text-xl uppercase tracking-[3px] md:tracking-[4px] text-accent-fix mb-8 md:mb-10 bg-accent/5 inline-block px-3 py-1.5 md:px-4 md:py-2">{exp.role}</div>

    <ul className="flex flex-col gap-6 md:gap-8 max-w-5xl">
      {exp.bullets.map((bullet, i) => (
        <li key={i} className="text-text-secondary text-lg md:text-xl leading-relaxed font-instrument flex gap-4 md:gap-6 group/bullet">
          <span className="text-accent-fix mt-2 shrink-0 group-hover/bullet:translate-x-2 transition-transform">→</span>
          {bullet}
        </li>
      ))}
    </ul>
  </div>
);

const CertBadge = ({ title, issuer, link, onClick }: { title: string, issuer: string, link?: string, onClick?: () => void }) => {
  const content = (
    <>
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent/10 flex items-center justify-center font-bebas text-2xl md:text-4xl text-accent-fix group-hover:bg-accent-fix group-hover:text-bg-primary transition-all duration-500">{title[0]}</div>
      <div>
        <h4 className="text-text-primary text-xl md:text-2xl font-instrument font-medium leading-tight">{title}</h4>
        <p className="text-text-tertiary text-[10px] md:text-[12px] font-dm-mono uppercase tracking-[2px] md:tracking-[4px] group-hover:text-accent-fix/70 transition-colors">{issuer}</p>
      </div>
    </>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-6 md:gap-8 bg-surface/50 p-6 md:p-8 border border-border-dim hover:border-accent-fix transition-all group interactive text-left w-full"
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      className="flex items-center gap-6 md:gap-8 bg-surface/50 p-6 md:p-8 border border-border-dim hover:border-accent-fix transition-all group interactive"
    >
      {content}
    </a>
  );
};

// --- Main Application ---

export default function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Web Developer", "AI Engineer", "Agency Founder (Bielco)"];
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [showCert, setShowCert] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects: Project[] = [
    {
      id: "1",
      number: "01",
      title: "Tempio",
      tags: ["Full Stack", "Render", "Database"],
      description: "A comprehensive platform deployed on Render featuring robust full-stack integrations. Architected for scalability and real-time data handling.",
      details: [
        "Built a robust PostgreSQL database architecture to handle high-concurrency workloads securely.",
        "Engineered a custom authentication flow with role-based access controls.",
        "Integrated real-time websocket connections for instant data synchronization across clients."
      ],
      link: "https://tempio.onrender.com"
    },
    {
      id: "2",
      number: "02",
      title: "Uniform Trends",
      tags: ["E-commerce", "Cloudflare", "React"],
      description: "A modern digital storefront optimized for rapid delivery and performance. Features a seamless shopping experience with serverless backend logic.",
      details: [
        "Optimized front-end rendering leading to a perfect 100 lighthouse performance score.",
        "Implemented complex e-commerce logic including cart state management and secure checkout.",
        "Deployed on Cloudflare Workers for ultra-low latency edge computing."
      ],
      link: "https://uniformtrends.in"
    },
    {
      id: "3",
      number: "03",
      title: "Bielco Agency",
      tags: ["Next.js", "Motion", "Business"],
      description: "The digital heartbeat of Bielco agency. Designed to convert small business challenges into global growth opportunities through high-end engineering.",
      details: [
        "Designed a high-end, motion-rich user interface using Framer Motion and Next.js.",
        "Architected a scalable content management system allowing the team to easily update case studies.",
        "Integrated advanced SEO strategies ensuring top ranking for targeted local business keywords."
      ],
      link: "https://www.bielco.in"
    },
    {
      id: "4",
      number: "04",
      title: "Ominiflow",
      tags: ["B2B SaaS", "Product", "Web"],
      description: "A comprehensive B2B SaaS product designed to streamline workflows and optimize business operations.",
      details: [
        "Developed a comprehensive B2B SaaS dashboard tailored for workflow automation.",
        "Integrated complex multi-tenant data structures to ensure complete isolation between enterprise clients.",
        "Built custom API endpoints to allow seamless integrations with third-party enterprise tools."
      ],
      link: "https://ominiflow.pages.dev/#pricing"
    }
  ];

  const experience: Experience[] = [
    {
      company: "Bielco Agency",
      role: "Co-Founder & Full Stack Developer",
      dates: "2026 — PRESENT",
      bullets: [
        "Solving complex digital presence challenges for small businesses by creating high-impact, custom software solutions.",
        "Building full-scale websites from inception to deployment with deep search optimization and secure database architectures.",
        "Pioneering AI-driven development workflows and scalable marketing strategies to drive measurable growth for clients."
      ]
    }
  ];

  const skillCategories = [
    {
      title: "Engineering",
      skills: [
        { title: "Full Stack", icon: <Layout size={24} />, details: "Expert in end-to-end deployment, building full-scale websites using React, TypeScript, HTML, CSS, JavaScript, and Python." },
        { title: "Google Ads & SEO", icon: <Globe size={24} />, details: "Crafting data-driven targeted ad campaigns, deep search optimization, and conversion funnels to help enterprise clients scale." }
      ]
    },
    {
      title: "Intelligence & Architecture",
      skills: [
        { title: "AI Systems", icon: <Bot size={24} />, details: "Mastery in Vibe Coding and AI Agent architectures. Deep integration with n8n for enterprise-wide automation." },
        { title: "Security & Database", icon: <Shield size={24} />, details: "Implementing hardened backend infrastructures, secure database architectures, and robust encryption standards." }
      ]
    },
    {
      title: "Creative",
      skills: [
        { title: "Motion Design", icon: <Video size={24} />, details: "Professional-grade CapCut and After Effects production for motion graphics, high-conversion brand assets, and marketing content." },
        { title: "Product UI / UX", icon: <Sparkles size={24} />, details: "Designing premium, conversion-focused user interfaces using Figma and Canva that turn local businesses into worldwide brands." }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen selection:bg-accent-fix selection:text-bg-primary overflow-x-hidden">
      <CustomCursor />

      {/* Ambient Green Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[150px] pointer-events-none z-0" />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] md:h-[4px] bg-accent-fix z-[60] origin-left shadow-[0_0_15px_rgba(232,255,71,0.5)]"
        style={{ scaleX }}
      />

      <nav className={`fixed top-0 left-0 right-0 h-20 md:h-24 z-50 transition-all duration-500 border-b ${isNavScrolled ? 'bg-bg-primary/95 backdrop-blur-xl border-border-dim py-0' : 'bg-transparent border-transparent py-4 md:py-6'}`}>
        <div className="max-w-[1700px] mx-auto px-6 md:px-8 h-full flex items-center justify-between">
          <a href="#" className="font-bebas text-3xl md:text-5xl text-accent-fix tracking-[4px] md:tracking-[6px] hover:text-accent-hover hover:scale-110 transition-all interactive">MP</a>

          <div className="hidden md:flex items-center gap-12 md:gap-20">
            {['About', 'Work', 'Skills', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[3px] md:tracking-[4px] text-text-secondary hover:text-accent-fix transition-colors interactive"
              >
                {item}
                <span className="absolute -bottom-2 md:-bottom-3 left-0 w-0 h-1 bg-accent-fix group-hover:w-full group-hover:bg-accent-hover transition-all duration-300" />
              </a>
            ))}
          </div>

          <a href="#contact" className="md:hidden font-dm-mono text-[11px] uppercase tracking-[2px] text-accent-fix border border-accent-fix/30 px-4 py-2 rounded-full interactive">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-[90vh] md:min-h-screen flex flex-col justify-center max-w-[1700px] mx-auto px-6 md:px-8 pt-20 md:pt-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="mb-6 md:mb-8 flex items-center gap-4 md:gap-6 font-dm-mono text-[11px] md:text-[14px] uppercase tracking-[4px] md:tracking-[6px] text-accent-fix">
              <span className="w-12 md:w-20 h-px bg-accent-fix"></span>
              Established 2026
            </div>

            <h1 className="font-bebas text-[clamp(2.5rem,15vw,13rem)] leading-[0.9] md:leading-[0.85] text-text-primary tracking-tighter mb-8 md:mb-12 select-none">
              MURLI <span className="text-accent-fix">PRAJAPATI</span> <span className="text-accent-fix hover:text-white transition-colors duration-500">.</span>
            </h1>

            <div className="h-8 md:h-12 mb-12 md:mb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="font-dm-mono text-lg md:text-3xl text-accent-fix uppercase tracking-[4px] md:tracking-[8px] font-bold"
                >
                  {roles[roleIndex]}
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="font-instrument italic text-3xl md:text-7xl text-text-secondary max-w-6xl leading-[1.2] md:leading-[1.1] mb-12 md:20">
              Co-Founder of <span className="text-text-primary border-b-2 md:border-b-4 border-accent-fix">Bielco</span>. Translating complex business challenges into <span className="text-accent-fix">worldwide</span> digital solutions.
            </p>

            <div className="flex flex-wrap items-center gap-8 md:gap-20">
              <a
                href="#work"
                className="group relative inline-flex items-center px-8 py-4 md:px-16 md:py-7 border-2 border-accent-fix text-accent-fix font-dm-mono text-[11px] md:text-[14px] uppercase tracking-[2px] md:tracking-[4px] font-bold overflow-hidden transition-all hover:bg-accent-fix hover:text-bg-primary hover:pr-12 md:hover:pr-20 interactive"
              >
                <span className="relative z-10">View Projects</span>
                <ArrowUpRight size={18} className="absolute right-4 md:right-8 opacity-0 group-hover:opacity-100 transition-all z-10 md:w-6 md:h-6" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-48 max-w-[1700px] mx-auto px-6 md:px-8 relative z-10">
          <SectionLabel>About Me</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <h3 className="font-instrument text-4xl md:text-6xl text-text-primary mb-8 leading-tight">
                Bridging the gap between <span className="text-accent-fix italic">business logic</span> and <span className="text-accent-fix italic">technical execution</span>.
              </h3>
              <p className="text-text-secondary text-lg md:text-2xl leading-relaxed font-instrument mb-6">
                I am an 11th-grade commerce student with a deep passion for technology. Unlike traditional paths, I combine my understanding of business fundamentals with high-level software engineering to build products that actually solve real-world problems.
              </p>
              <p className="text-text-secondary text-lg md:text-2xl leading-relaxed font-instrument mb-12">
                As the Co-Founder of Bielco Agency, I don't just write code; I architect solutions. From winning robotics competitions to developing full-stack SaaS platforms like Ominiflow, my goal is always to deliver scalable, high-performance, and visually stunning digital experiences.
              </p>

              <div className="grid grid-cols-2 gap-8 border-t border-border-dim pt-12">
                <div>
                  <div className="text-4xl md:text-6xl font-bebas text-accent-fix mb-2">15+</div>
                  <div className="font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[2px] text-text-secondary">Projects Completed</div>
                </div>
                <div>
                  <div className="text-4xl md:text-6xl font-bebas text-accent-fix mb-2">100%</div>
                  <div className="font-dm-mono text-[12px] md:text-[14px] uppercase tracking-[2px] text-text-secondary">Client Satisfaction</div>
                </div>
              </div>
            </div>

            <div className="relative group mt-8 lg:mt-0">
              <div className="absolute inset-0 bg-accent-fix translate-x-4 translate-y-4 rounded-lg transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
              <div className="relative bg-surface border border-border-dim p-8 md:p-12 rounded-lg z-10 flex flex-col items-center justify-center min-h-[400px]">
                <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center text-accent-fix mb-8 group-hover:scale-110 transition-transform duration-500">
                  <Bot size={48} />
                </div>
                <h4 className="font-dm-mono text-xl md:text-2xl uppercase tracking-[4px] text-black mb-4 text-center">Tech Enthusiast</h4>
                <p className="text-black text-center text-lg font-instrument">
                  Whether it's training AI models, building complex React applications, or optimizing cloud infrastructure, I thrive on pushing the boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-24 md:py-64 max-w-[1700px] mx-auto px-6 md:px-8 relative z-10">
          <SectionLabel>My Projects</SectionLabel>
          <div className="flex flex-col border-t border-border-dim">
            {projects.map((project) => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="skills" className="py-24 md:py-64 max-w-[1700px] mx-auto px-6 md:px-8 relative z-10">
          <SectionLabel>Core Expertise</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-40">
            {skillCategories.map((cat, i) => (
              <SkillCategory key={i} title={cat.title} skills={cat.skills} />
            ))}
          </div>
        </section>

        {/* Experience & Education Section */}
        <section id="experience" className="py-24 md:py-64 max-w-[1700px] mx-auto px-6 md:px-8 relative z-10">
          <EducationBlock />

          <div className="mt-32 md:mt-64">
            <SectionLabel>Professional History</SectionLabel>
            <div className="flex flex-col gap-4 md:gap-6">
              {experience.map((exp, i) => (
                <ExperienceItem key={i} exp={exp} />
              ))}
            </div>
          </div>

          <div className="mt-40 md:mt-80">
            <SectionLabel>Certifications & Milestones</SectionLabel>
            <p className="text-text-secondary text-xl md:text-2xl mb-12 max-w-4xl font-instrument leading-relaxed">
              Continuous learning and competitive participation drive my technical growth. Here are some of my key credentials and achievements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
              <CertBadge title="Yuva AI" issuer="Govt AI Initiative" onClick={() => setShowCert(true)} />
              <CertBadge title="Data Analytics" issuer="Coursera Specialization" link="#" />
              <CertBadge title="MVPP Scholar" issuer="State Level Top 100" link="#" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="pt-24 md:pt-64 pb-12 md:pb-24 max-w-[1700px] mx-auto px-6 md:px-8 text-center border-t border-border-dim mt-24 md:mt-48 relative z-10">
          <SectionLabel>Global Connect</SectionLabel>

          <h2 className="font-instrument italic text-4xl md:text-8xl text-text-primary mb-12 md:mb-20 leading-tight">
            Ready to scale your <span className="text-accent-fix underline underline-offset-8 md:underline-offset-12">digital presence</span>?
          </h2>

          <a
            href="mailto:murliprajpatiofficial@zohomail.in"
            className="font-bebas text-[clamp(1rem,5.5vw,5.5rem)] text-text-primary block mb-24 md:mb-32 tracking-[1px] md:tracking-[4px] whitespace-nowrap select-all max-w-full px-6 overflow-hidden text-ellipsis"
          >
            murliprajpatiofficial@zohomail.in
          </a>

          <div className="flex justify-center items-center gap-12 md:gap-24 mb-32 md:mb-48">
            <a href="https://github.com/MurliPrajapati-Official" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-fix transition-all hover:scale-125 interactive">
              <Github size={32} className="md:w-12 md:h-12" />
            </a>
            <a href="https://www.linkedin.com/in/murli-prajapatiofficial/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-fix transition-all hover:scale-125 interactive">
              <Linkedin size={32} className="md:w-12 md:h-12" />
            </a>
            <a href="https://www.instagram.com/murliprajapati.in/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-fix transition-all hover:scale-125 interactive">
              <Instagram size={32} className="md:w-12 md:h-12" />
            </a>
            <a href="https://www.youtube.com/@Dravynz" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent-fix transition-all hover:scale-125 interactive">
              <Youtube size={32} className="md:w-12 md:h-12" />
            </a>
          </div>

          <footer className="pt-8 md:pt-12 border-t border-border-dim/30 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <p className="font-dm-mono text-[11px] md:text-[14px] uppercase tracking-[4px] md:tracking-[8px] text-accent-fix/60">© 2026 MURLI PRAJAPATI · CO-FOUNDER @ BIELCO</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-dm-mono text-[11px] md:text-[14px] uppercase tracking-[4px] md:tracking-[6px] text-text-secondary hover:text-accent-fix transition-all flex items-center gap-3 md:gap-4 interactive group"
            >
              Back to top <div className="w-10 md:w-12 h-px bg-text-secondary group-hover:bg-accent-fix group-hover:w-16 md:group-hover:w-20 transition-all"></div>
            </button>
          </footer>
        </section>
      </main>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowCert(false)}
          >
            <div className="relative w-full max-w-4xl h-[80vh] bg-surface border border-border-dim rounded-xl overflow-hidden shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
              <div className="flex justify-between items-center p-4 border-b border-border-dim bg-bg-primary">
                <h3 className="text-text-primary font-dm-mono uppercase tracking-[2px]">Yuva AI Certificate</h3>
                <button
                  onClick={() => setShowCert(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-accent-fix hover:bg-surface transition-all"
                >
                  ✕
                </button>
              </div>
              <div className="w-full flex-1 relative bg-surface">
                {/* PDF Viewer - Disabling toolbar to make download harder */}
                <iframe
                  src="/futureskills.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  className="w-full h-full border-none"
                  title="Yuva AI Certificate"
                />
                {/* Transparent overlay over the iframe to prevent right clicks and interactions that could lead to download */}
                <div
                  className="absolute inset-0 z-10"
                  onContextMenu={(e) => e.preventDefault()}
                  title="Certificate preview (Download disabled)"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
