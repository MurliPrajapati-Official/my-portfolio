import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Linkedin, Github, Download, Code, Bot, Database, Zap, Cpu, Server, Network, Sparkles, Video, Layout, Lightbulb, ArrowUp, Twitter, Youtube } from 'lucide-react';

const TornEdge = () => (
  <svg className="w-full h-12 md:h-20 text-dark-bg fill-current -mt-11 relative z-20 block" viewBox="0 0 1200 120" preserveAspectRatio="none">
    <path d="M0,0 L0,120 L1200,120 L1200,0 L1175,30 L1150,10 L1125,40 L1100,20 L1075,50 L1050,15 L1025,45 L1000,25 L975,55 L950,20 L925,50 L900,15 L875,45 L850,25 L825,55 L800,20 L775,50 L750,15 L725,45 L700,25 L675,55 L650,20 L625,50 L600,15 L575,45 L550,25 L525,55 L500,20 L475,50 L450,15 L425,45 L400,25 L375,55 L350,20 L325,50 L300,15 L275,45 L250,25 L225,55 L200,20 L175,50 L150,15 L125,45 L100,25 L75,55 L50,20 L25,50 L0,0 Z" />
  </svg>
);

const Polaroid = () => (
  <motion.div 
    initial={{ rotate: -10, opacity: 0 }}
    animate={{ rotate: -3, opacity: 1 }}
    transition={{ type: "spring", stiffness: 100, damping: 10 }}
    className="relative w-64 md:w-80 mx-auto"
  >
    
    {/* Frame */}
    <div className="bg-white p-4 pb-16 shadow-2xl relative z-10 transform transition-transform hover:scale-[1.02] duration-300">
      {/* Tape */}
      <div className="absolute -top-4 left -2 -translate-x-1/2 w-24 h-8 bg-yellow-100/80 rotate-[-25deg] z-20 shadow-sm"></div>
        <div className="relative aspect-square overflow-hidden bg-blue-900">
          {/* Photo placeholder */}
          <img src="https://picsum.photos/seed/murli/400/400" alt="Murli" className="w-full h-full object-cover mix-blend-luminosity opacity-80" referrerPolicy="no-referrer" />
        
          {/* AI Decorations */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-neon-blue rounded-full scale-110 opacity-50"
          ></motion.div>
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-neon-purple rounded-full scale-125 opacity-50"
          ></motion.div>
        
          {/* Stickers */}
          <motion.div 
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="absolute top-2 left-2 text-neon-green bg-dark-bg/50 p-1 rounded-full backdrop-blur-sm"
          >
          <Bot size={32} className="drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]" />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.2, rotate: -10 }}
            className="absolute bottom-4 right-4 text-yellow-400 bg-dark-bg/50 p-1 rounded-full backdrop-blur-sm"
          >
            <Zap size={28} className="drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
          </motion.div>
        </div>
      <div className="absolute bottom-4 left-4 font-bold text-xl text-gray-800 font-display">
        Murli Prajapati
      </div>
    </div>
  </motion.div>
);

const ContactLink = ({ icon, text, color, href }: { icon: React.ReactNode, text: string, color: string, href: string }) => (
  <motion.a 
    href={href}
    target={href.startsWith('mailto:') ? undefined : "_blank"}
    rel={href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
    whileHover={{ y: 5 }}
    className="flex items-center gap-3 group cursor-pointer"
  >
    <div className={`p-2 rounded-full bg-gray-800 ${color} group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <span className="text-gray-300 font-mono text-sm group-hover:text-white transition-colors">{text}</span>
  </motion.a>
);

const TimelineItem = ({ year, title, subtitle, desc }: { year: string, title: string, subtitle: string, desc: string }) => (
  <div className="relative pl-6 border-l border-gray-700 hover:border-neon-blue transition-colors duration-300">
    <div className="absolute w-3 h-3 bg-neon-blue rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_#00f0ff]"></div>
    <div className="text-neon-blue font-mono text-sm mb-1">{year}</div>
    <h4 className="text-xl font-bold text-white mb-1 font-display">{title}</h4>
    <div className="text-gray-400 text-sm mb-2 italic">{subtitle}</div>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

const EducationItem = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="relative pl-6 border-l border-gray-700 hover:border-neon-blue transition-colors duration-300 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute w-3 h-3 bg-neon-blue rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_#00f0ff]"></div>
      <div className="text-neon-blue font-mono text-sm mb-1">2024 - 2028 (Expected To Finish my schooling)</div>
      <h4 className="text-xl font-bold text-white mb-1 font-display">11th Grade - Commerce</h4>
      <div className="text-gray-400 text-sm mb-2 italic">CM Shri School</div>
      <p className="text-gray-400 text-sm leading-relaxed">
        Studying Commerce while actively building robotics projects and illustrating innovative ideas. Currently working on a startup scheduled to launch by May 2026.
      </p>
      
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <h5 className="text-white font-bold mb-3 text-sm flex items-center gap-2">
            <Sparkles size={16} className="text-yellow-400" /> Key Achievements
          </h5>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-neon-green mt-0.5">▹</span>
              <span>Won ₹5,000 scholarship, certificate, and medal for qualifying in the top 100 students in the MVPP exam.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-neon-blue mt-0.5">▹</span>
              <span>Secured 1st Position in the School Robotics Competition. My team and I designed and implemented an automatic braking system on a model car, successfully testing it against various real-life scenarios. This achievement qualified us for the zonal level competition.</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

const SkillIcon = ({ icon, name, color, details }: { icon: React.ReactNode, name: string, color: string, details: string }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-col items-center p-4 rounded-xl border ${color} shadow-lg backdrop-blur-sm cursor-default overflow-hidden max-w-[320px]`}
      initial={false}
      animate={{
        width: isHovered ? 'auto' : 96,
        height: isHovered ? 'auto' : 96,
      }}
      transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
    >
      <motion.div layout className="flex flex-col items-center justify-center shrink-0">
        <motion.div layout className="mb-1">{icon}</motion.div>
        <motion.span layout className="text-xs font-mono text-center whitespace-nowrap">{name}</motion.span>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="text-sm mt-3 text-center leading-relaxed"
          >
            {details}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TraitTag = ({ text }: { text: string }) => (
  <div className="px-4 py-1.5 rounded-full border border-gray-700 text-gray-400 text-sm font-mono hover:border-neon-purple hover:text-white transition-colors cursor-default">
    {text}
  </div>
);

const ProjectCard = ({ title, desc, tags, color }: { title: string, desc: string, tags: string[], color: string }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className={`bg-gray-900 border-t-4 ${color} rounded-lg p-6 hover:bg-gray-800 transition-colors group cursor-pointer shadow-xl`}
  >
    <div className="h-32 bg-gray-800 rounded-md mb-4 overflow-hidden relative border border-gray-700">
      <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-grid-pattern-dark"></div>
      <div className="absolute inset-0 flex items-center justify-center text-gray-600 group-hover:text-white transition-colors duration-300">
        <Code size={48} />
      </div>
    </div>
    <h4 className="text-xl font-bold text-white mb-2 font-display">{title}</h4>
    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{desc}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-xs font-mono px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const CertBadge = ({ title, issuer }: { title: string, issuer: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="flex items-center gap-4 bg-gray-900 p-4 rounded-lg border border-gray-800 flex-1 shadow-lg"
  >
    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(176,38,255,0.3)]">
      {title[0]}
    </div>
    <div>
      <h4 className="text-white font-bold font-display">{title}</h4>
      <div className="text-gray-400 text-sm font-mono">{issuer}</div>
    </div>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neon-green selection:text-dark-bg">
      {/* Top Section (Light) */}
      <section className="relative pt-20 pb-32 bg-slate-50 bg-grid-pattern overflow-hidden">
        {/* Paper Texture Overlay */}
        <div className="absolute inset-0 bg-paper-texture opacity-[0.06] pointer-events-none mix-blend-multiply"></div>
        
        {/* Subtle glowing dots */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-blue-300/40 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-1/4 -translate-y-1/2 translate-x-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-300/40 rounded-full blur-3xl"
        />
        
        {/* Decorative elements */}
        <motion.div 
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-24 right-1/4 text-orange-500 font-bold text-4xl sm:text-5xl font-display"
        >
          $
        </motion.div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <motion.div 
            initial={{ y: 30, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative inline-block mb-8 mt-10 group cursor-default"
          >
            <motion.div 
              whileHover={{ scale: 1.15, rotate: -5 }}
              className="absolute -top-10 left-0 sm:-left-8 border-2 border-orange-500 rounded-[50%] px-4 py-1 rotate-[-15deg] text-orange-500 font-bold text-sm bg-transparent transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white shadow-sm z-20"
            >
              2026
            </motion.div>
            <h1 className="text-6xl sm:text-7xl md:text-9xl font-display font-black text-[#111827] tracking-tighter flex items-center justify-center transition-transform duration-300 group-hover:scale-[1.02]">
              Portfolio
              <motion.span 
                className="ml-2 text-5xl sm:text-7xl md:text-8xl inline-block origin-bottom"
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 3 }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                🤖
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="flex flex-wrap justify-center items-center gap-3 text-sm sm:text-base md:text-lg font-medium text-gray-600 font-sans bg-white/60 hover:bg-white/90 px-8 py-3 rounded-full backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
          >
            <span className="hover:text-cyan-600 transition-colors">Innovator</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="hover:text-purple-600 transition-colors">Vibe Coder</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="hover:text-orange-600 transition-colors">Video Editor</span>
          </motion.div>
        </div>
      </section>

      {/* Torn Edge Separator */}
      <TornEdge />

      {/* Main Body (Dark) */}
      <section className="bg-dark-bg text-gray-300 pt-12 pb-24 px-6 min-h-screen relative overflow-hidden">
        {/* Background ambient glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          
          {/* Hero / About */}
          <div className="mb-32 relative clear-both">
            <div className="w-full md:w-5/12 float-none md:float-left mr-0 md:mr-12 mb-8 flex justify-center md:block">
              <div className="max-w-sm mx-auto md:mx-0">
                <Polaroid />
              </div>
            </div>
            
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight pt-4"
            >
              Hello <span className="text-neon-green">!</span>
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl leading-relaxed mb-10 font-sans text-gray-400 space-y-4"
            >
              <p>
                I'm <strong className="text-white">Murli</strong>, an aspiring AI Automation Engineer and Data Analyst based in Delhi, India. Passionate about building intelligent AI agents that transform raw data into actionable business insights, I specialize in automation, data pipelines, and AI-driven intelligence tools for business and finance.
              </p>
              <p>
                Currently upskilling through hands-on projects and certifications in AI and Data Analytics, I'm focused on creating practical solutions like automated news agents, smart Google Sheets dashboards, and scheduled business intelligence systems.
              </p>
              <p>
                My goal is to develop AI-powered tools that help entrepreneurs and traders make faster, smarter decisions. Let's connect and build something intelligent together.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="clear-both pt-8"
            >
                <h3 className="text-3xl font-display font-bold text-white mb-6 flex items-center gap-3">
                  Contact <span className="h-px flex-1 bg-gray-800 ml-4"></span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <ContactLink icon={<Youtube size={18} />} text="YouTube" color="text-red-500" href="https://www.youtube.com/@Dravynz" />
                  <ContactLink icon={<Linkedin size={18} />} text="LinkedIn" color="text-neon-blue" href="https://www.linkedin.com/in/murli-prajapatiofficial/" />
                  <ContactLink icon={<Mail size={18} />} text="murliprajapati228@gmail.com" color="text-red-400" href="mailto:murliprajapati228@gmail.com" />
                  <ContactLink icon={<Github size={18} />} text="GitHub" color="text-gray-100" href="https://github.com/MurliPrajapati-Official" />
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-dark-bg px-8 py-4 rounded-full font-bold hover:bg-neon-green transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(57,255,20,0.4)]"
                >
                  <Download size={20} /> Download Resume
                </motion.button>
              </motion.div>
          </div>

          {/* Two Column: Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-display font-bold text-white mb-10 border-b border-gray-800 pb-4 inline-block">Education</h3>
              <div className="space-y-10">
                <EducationItem />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-4xl font-display font-bold text-white mb-10 border-b border-gray-800 pb-4 inline-block">Experience</h3>
              <div className="space-y-10">
                <TimelineItem 
                  year="2026 - Present" 
                  title="Independent AI Automation Projects" 
                  subtitle="Self-Employed" 
                  desc="Built multiple AI agents and automation tools from scratch. Gained hands-on experience in data pipelines, API integration, and intelligent dashboards. Combining commerce background with technical AI skills to solve business problems."
                />
              </div>
            </motion.div>
          </div>

          {/* Skills & Tools */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h3 className="text-4xl font-display font-bold text-white mb-10 border-b border-gray-800 pb-4 inline-block">Skills & Tools</h3>
            <motion.div layout className="flex flex-wrap gap-4 mb-10 items-start">
              <SkillIcon icon={<Layout size={32} />} name="Frontend" color="bg-blue-500/10 text-blue-400 border-blue-500/30 hover:border-blue-500/80" details="Proficient in HTML and CSS, and currently expanding my skillset by learning JavaScript. I have successfully built and deployed a complete frontend website from scratch." />
              <SkillIcon icon={<Server size={32} />} name="Backend" color="bg-green-500/10 text-green-400 border-green-500/30 hover:border-green-500/80" details="Currently learning Python, SQL, and backend development through a comprehensive edX course, with an expected completion date of June 2026." />
              <SkillIcon icon={<Bot size={32} />} name="AI Agents" color="bg-purple-500/10 text-purple-400 border-purple-500/30 hover:border-purple-500/80" details="Developed an automated agent that extracts the latest news and stores it directly into Google Sheets. Currently working on building an interactive chatbot." />
              <SkillIcon icon={<Video size={32} />} name="Video Edit" color="bg-pink-500/10 text-pink-400 border-pink-500/30 hover:border-pink-500/80" details="Experienced in video editing since September 2025, proficient in CapCut and Adobe After Effects. Currently running a YouTube channel dedicated to car edits, while actively learning to create complex animated videos in After Effects." />
              <SkillIcon icon={<Sparkles size={32} />} name="Vibe Code" color="bg-yellow-500/10 text-yellow-400 border-yellow-500/30 hover:border-yellow-500/80" details="Currently completing a Vibe Coding course through Replit AI, building upon a strong foundation of multiple projects previously created using vibe coding techniques." />
              <SkillIcon icon={<Lightbulb size={32} />} name="Innovator" color="bg-orange-500/10 text-orange-400 border-orange-500/30 hover:border-orange-500/80" details="Conceptualized and developed an innovative automatic braking system, demonstrating a strong aptitude for problem-solving and creative engineering." />
            </motion.div>
            
            <div className="flex flex-wrap gap-3">
              <TraitTag text="Full Frontend" />
              <TraitTag text="Backend Basics" />
              <TraitTag text="Video Editor" />
              <TraitTag text="Learning Vibe Coding" />
              <TraitTag text="Innovator" />
              <TraitTag text="Problem Solver" />
            </div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <h3 className="text-4xl font-display font-bold text-white mb-10 border-b border-gray-800 pb-4 inline-block">Featured AI Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard 
                title="Automated News Agent" 
                desc="An AI agent that aggregates news using News API, summarizes it with LLMs, and posts to Slack channels automatically."
                tags={['Python', 'News API', 'LLMs']}
                color="border-neon-blue"
              />
              <ProjectCard 
                title="Smart Sheets Dashboard" 
                desc="Google Apps Script automation that cleans incoming data and generates real-time business intelligence reports."
                tags={['Apps Script', 'Data Analytics']}
                color="border-neon-purple"
              />
              <ProjectCard 
                title="Customer Support Bot" 
                desc="Intelligent chatbot built with Botpress and Vertex AI to handle tier-1 customer queries and route complex issues."
                tags={['Botpress', 'Vertex AI']}
                color="border-neon-green"
              />
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-display font-bold text-white mb-10 border-b border-gray-800 pb-4 inline-block">Certifications</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <CertBadge title="Yuva AI" issuer="Tech Institute" />
              <CertBadge title="Vibe Coding" issuer="AI Academy" />
              <CertBadge title="Google Data Analytics" issuer="Coursera" />
            </div>
          </motion.div>

          {/* Footer */}
          <footer className="border-t border-gray-800 pt-16 mt-32 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-display font-bold text-white mb-2">Let's build together.</h2>
                <p className="text-gray-400 font-sans">Open for freelance opportunities and collaborations.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <ContactLink icon={<Mail size={20} />} text="murliprajapati228@gmail.com" color="text-red-400" href="mailto:murliprajapati228@gmail.com" />
                <ContactLink icon={<Linkedin size={20} />} text="LinkedIn" color="text-neon-blue" href="https://www.linkedin.com/in/murli-prajapatiofficial/" />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-800/50 pt-8">
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/murli-prajapatiofficial/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-neon-blue transition-colors"><Linkedin size={24} /></a>
                <a href="https://github.com/MurliPrajapati-Official" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-100 transition-colors"><Github size={24} /></a>
                <a href="https://www.youtube.com/@Dravynz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors"><Youtube size={24} /></a>
              </div>
              <p className="text-gray-500 text-sm font-mono text-center">© 2026 Murli. All rights reserved.</p>
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-500 hover:text-white flex items-center gap-2 font-mono text-sm transition-colors">
                Back to top <ArrowUp size={16} />
              </button>
            </div>
          </footer>

        </div>
      </section>
    </div>
  );
}
