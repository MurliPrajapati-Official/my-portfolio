import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, MotionConfig, AnimatePresence, useReducedMotion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowUpRight, ArrowDown, ArrowUp, Menu, X, Mail, Copy, Check } from 'lucide-react';
import { InfiniteSlider } from './components/motion-primitives/infinite-slider';
import { TextEffect } from './components/motion-primitives/text-effect';
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogContainer,
  MorphingDialogImage,
  MorphingDialogTitle,
  MorphingDialogSubtitle,
  MorphingDialogClose,
} from './components/motion-primitives/morphing-dialog';
import { projects, experience, education, certificates, socials, EMAIL, type Project } from './content';

const EASE = [0.22, 1, 0.36, 1] as const;

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#certificates' },
];

const CAPABILITIES = ['Web Development', 'UI/UX Design', 'AI Agents & Bots', 'SEO & AEO', 'Business Systems', 'Video Editing'];

// ---------- Nav ----------

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 bg-paper transition-[border-color] duration-500 border-b ${scrolled || open ? 'border-stone' : 'border-transparent'}`}>
      <nav className="px-site flex h-16 items-center justify-between" aria-label="Primary">
        <a href="#top" onClick={() => setOpen(false)} className="text-[15px] font-semibold tracking-[-0.01em]">Murli Prajapati</a>
        <ul className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <li key={n.href}><a href={n.href} className="text-[15px] text-ink/75 transition-colors duration-300 hover:text-ink">{n.label}</a></li>
          ))}
          <li>
            <a href="#contact" className="group inline-flex h-11 items-center gap-2 rounded-full bg-ink pl-5 pr-4 text-[15px] font-medium text-paper transition-colors duration-300 hover:bg-graphite">
              Contact
              <ArrowUpRight size={16} strokeWidth={2} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </li>
        </ul>
        <button
          type="button"
          className="md:hidden -mr-2 inline-flex h-10 w-10 items-center justify-center"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul
            id="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="px-site md:hidden overflow-hidden"
          >
            {[...NAV, { label: 'Contact', href: '#contact' }].map((n) => (
              <li key={n.href} className="border-t border-stone first:border-t-0">
                <a href={n.href} onClick={() => setOpen(false)} className="block py-4 text-3xl font-semibold tracking-[-0.03em]">{n.label}</a>
              </li>
            ))}
            <li className="border-t border-stone py-5"><SocialIcons /></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

// ---------- Social buttons (logos via 21st `logo` → svgl.app) ----------

const SocialIcons = () => (
  <ul className="flex items-center gap-2.5" aria-label="Social profiles">
    {socials.map((s) => (
      <li key={s.label}>
        <a
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Murli Prajapati on ${s.label}`}
          title={s.label}
          className="inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-[1.5px] border-stone bg-white transition-[transform,border-color] duration-300 ease-[var(--ease-apple)] hover:-translate-y-1 hover:border-ink"
        >
          <img src={s.icon} alt="" width={24} height={24} className="h-6 w-6 object-contain" />
        </a>
      </li>
    ))}
  </ul>
);

// ---------- Hero ----------

const Hero = () => (
  <section id="top" className="px-site flex min-h-[78svh] md:min-h-[100svh] flex-col pt-16">
    <div className="flex items-start justify-between gap-6 pt-8 md:pt-10 text-sm md:text-base text-graphite">
      <p>Web developer &amp; UI/UX designer</p>
      <p className="text-right">
        <span className="mr-2 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-clay" aria-hidden />
        Available for projects
      </p>
    </div>

    <div className="@container mt-auto pb-10 md:pb-14">
      <TextEffect
        as="h1"
        per="char"
        className="-ml-[0.05em] whitespace-nowrap text-[calc(100cqi/6.3)] font-semibold leading-[0.86] tracking-[-0.06em]"
        segmentWrapperClassName="overflow-hidden pb-[0.06em]"
        variants={{
          container: { hidden: {}, visible: { transition: { staggerChildren: 0.028, delayChildren: 0.15 } } },
          item: { hidden: { y: '110%' }, visible: { y: 0, transition: { duration: 1, ease: EASE } } },
        }}
      >
        Murli Prajapati
      </TextEffect>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.75 }}
        className="mt-8 md:mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
      >
        <p className="max-w-[34ch] text-[clamp(1.25rem,1.9vw,2rem)] leading-[1.25] tracking-[-0.02em] text-graphite">
          Co&#8209;founder of <a href="https://www.bielco.in" target="_blank" rel="noopener noreferrer" className="link-draw text-ink">Bielco</a>.
          I design and build websites, products and bots that make businesses{' '}
          <em className="font-serif text-[1.1em] italic text-clay-ink">simpler</em>.
        </p>
        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap items-center gap-2.5 md:gap-3">
            <a href="#work" className="group inline-flex h-14 md:h-16 items-center gap-2.5 md:gap-3 rounded-full bg-ink pl-6 pr-5 md:pl-7 md:pr-6 text-base md:text-lg font-medium text-paper transition-colors duration-300 hover:bg-graphite">
              See the work
              <ArrowDown size={20} strokeWidth={2} className="transition-transform duration-500 group-hover:translate-y-1" aria-hidden />
            </a>
            <a href={`mailto:${EMAIL}`} className="group inline-flex h-14 md:h-16 items-center gap-2.5 md:gap-3 rounded-full border-[1.5px] border-ink/80 px-5 md:px-7 text-base md:text-lg font-medium transition-colors duration-300 hover:bg-ink hover:text-paper">
              <Mail size={20} strokeWidth={1.75} aria-hidden />
              Email me
            </a>
          </div>
          <SocialIcons />
        </div>
      </motion.div>
    </div>
  </section>
);

// ---------- Capabilities marquee (21st: Infinite Slider) ----------

const Marquee = () => (
  <section aria-label="Capabilities" className="border-y border-stone py-6 md:py-8">
    <h2 className="sr-only">Capabilities</h2>
    <InfiniteSlider gap={0} speed={60} speedOnHover={20}>
      {CAPABILITIES.map((c) => (
        <span key={c} className="flex items-center whitespace-nowrap text-[clamp(1.75rem,4vw,4rem)] font-semibold tracking-[-0.04em]">
          {c}
          <span className="mx-[0.6em] text-clay" aria-hidden>✳</span>
        </span>
      ))}
    </InfiniteSlider>
  </section>
);

// ---------- Work: horizontal scroll gallery ----------
// Vertical scrolling drives the track sideways (sticky scroll-linked carousel, the pattern
// behind 21st.dev's horizontal-scroll sections), built with Framer Motion.

const Preview = ({ p }: { p: Project }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? v.play().catch(() => {}) : v.pause()),
      { threshold: 0.35 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <video
      ref={ref}
      className="aspect-[16/10] w-full rounded-xl md:rounded-2xl border border-stone bg-paper-2 object-cover object-top transition-transform duration-[1200ms] ease-[var(--ease-apple)] group-hover:scale-[1.015]"
      src={p.video}
      poster={p.poster}
      width={1280}
      height={800}
      muted
      loop
      playsInline
      preload="none"
      aria-label={`Screen recording of the ${p.title} website by Murli Prajapati`}
    />
  );
};

const ProjectCard = ({ p, onFocus }: { p: Project; onFocus?: (el: HTMLElement) => void }) => (
  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    onFocus={(e) => onFocus?.(e.currentTarget)}
    className="group flex w-[86vw] shrink-0 flex-col sm:w-[min(62vw,calc((100svh-19rem)*1.6))] lg:w-[min(56vw,calc((100svh-19rem)*1.6))]"
  >
    <div className="overflow-hidden rounded-xl md:rounded-2xl">
      <Preview p={p} />
    </div>
    <div className="mt-5 md:mt-6 flex items-start justify-between gap-6">
      <div className="min-w-0">
        <h3 className="text-[clamp(1.75rem,2.6vw,2.75rem)] font-semibold leading-none tracking-[-0.045em] transition-colors duration-500 group-hover:text-clay">
          {p.title}
        </h3>
        <p className="mt-3 max-w-[52ch] text-base md:text-lg leading-snug text-graphite">{p.description}</p>
        <p className="mt-2 text-sm text-graphite/80">{p.kind}</p>
      </div>
      <span className="hidden sm:inline-flex h-12 shrink-0 items-center gap-2 rounded-full border-[1.5px] border-ink/80 pl-5 pr-4 text-[15px] font-medium transition-colors duration-300 group-hover:bg-ink group-hover:text-paper">
        Visit
        <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
      </span>
    </div>
  </a>
);

const WorkHeader = ({ progress }: { progress?: ReturnType<typeof useSpring> }) => (
  <div className="px-site flex items-end justify-between gap-6">
    <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]">Selected work</h2>
    <div className="hidden sm:flex flex-col items-end gap-3 pb-2 text-sm text-graphite">
      <span>{projects.length} live projects — scroll to explore</span>
      {progress && (
        <span className="block h-[2px] w-40 overflow-hidden rounded-full bg-stone" aria-hidden>
          <motion.span className="block h-full origin-left bg-ink" style={{ scaleX: progress }} />
        </span>
      )}
    </div>
  </div>
);

// Vertical pixels scrolled per horizontal pixel moved (< 1 = the gallery travels faster than the page).
const SCROLL_RATIO = 0.7;

const Work = () => {
  const reduce = useReducedMotion();
  const outerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [vh, setVh] = useState(0);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
      setVh(window.innerHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener('resize', measure);
    return () => { ro.disconnect(); window.removeEventListener('resize', measure); };
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ['start start', 'end end'] });
  const rawX = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const x = useSpring(rawX, { stiffness: 140, damping: 30, mass: 0.35 });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.35 });

  // Keyboard users: tabbing to an off-screen card scrolls the page to bring it into view.
  const focusCard = (el: HTMLElement) => {
    const outer = outerRef.current;
    if (!outer || !distance) return;
    const target = Math.min(distance, Math.max(0, el.offsetLeft - window.innerWidth * 0.1));
    const top = outer.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + target * SCROLL_RATIO, behavior: 'auto' });
  };

  if (reduce) {
    // Reduced motion: a plain swipeable row, no scroll-linked movement.
    return (
      <section id="work" className="pt-28 md:pt-40">
        <WorkHeader />
        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-[clamp(1.25rem,3.5vw,5rem)] pb-6">
          {projects.map((p) => <div key={p.title} className="snap-start"><ProjectCard p={p} /></div>)}
        </div>
      </section>
    );
  }

  return (
    <section id="work" ref={outerRef} className="relative" style={{ height: distance ? distance * SCROLL_RATIO + vh : undefined }}>
      <div className="sticky top-0 flex h-[100svh] flex-col justify-center gap-8 md:gap-12 overflow-clip pt-20 pb-6">
        <WorkHeader progress={progress} />
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-6 md:gap-10 px-[clamp(1.25rem,3.5vw,5rem)] will-change-transform"
        >
          {projects.map((p) => <ProjectCard key={p.title} p={p} onFocus={focusCard} />)}
        </motion.div>
      </div>
    </section>
  );
};

// ---------- About ----------

const About = () => (
  <section id="about" className="px-site py-28 md:py-44">
    <h2 className="sr-only">About Murli Prajapati</h2>
    <p className="max-w-[28ch] text-[clamp(2rem,4.6vw,5.5rem)] font-semibold leading-[1.04] tracking-[-0.045em] text-balance">
      I'm Murli
      <img
        src="/pixelart.jpg"
        alt="Murli Prajapati"
        width={160}
        height={160}
        className="mx-[0.18em] inline-block h-[0.9em] w-[0.9em] -translate-y-[0.06em] rounded-full border border-stone object-cover align-middle"
      />
      — a commerce student from Delhi who designs and engineers products that{' '}
      <span className="text-graphite">solve real business problems.</span>
    </p>

    <div className="mt-16 md:mt-24 grid gap-10 md:grid-cols-12">
      <p className="md:col-span-5 md:col-start-1 max-w-[46ch] text-lg leading-relaxed text-graphite">
        I pair business fundamentals with modern engineering. From winning robotics competitions to shipping full-stack SaaS,
        the goal never changes: fast, scalable and quietly beautiful.
      </p>
      <dl className="md:col-span-6 md:col-start-7 grid grid-cols-3 gap-6">
        {[
          { k: '15+', v: 'Projects delivered' },
          { k: String(certificates.length), v: 'Certificates' },
          { k: '100%', v: 'Client satisfaction' },
        ].map((f) => (
          <div key={f.v}>
            <dt className="sr-only">{f.v}</dt>
            <dd className="text-[clamp(2.25rem,4vw,4rem)] font-semibold leading-none tracking-[-0.05em]">{f.k}</dd>
            <dd className="mt-3 text-sm text-graphite">{f.v}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

// ---------- Experience ----------

const ROWS = [
  ...experience.map((r) => ({ org: r.org, role: r.role, dates: r.dates })),
  { org: education.org, role: 'Commerce, expected 2028', dates: education.dates },
  { org: 'MVPP Exam', role: 'Top 100 — ₹5,000 scholarship & medal', dates: 'Honour' },
  { org: 'School Robotics', role: '1st place — automatic braking system', dates: 'Honour' },
];

const Experience = () => (
  <section id="experience" className="px-site pb-28 md:pb-44">
    <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">Experience</h2>
    <ul className="mt-14 md:mt-20 border-b border-stone">
      {ROWS.map((r) => (
        <li key={r.org} className="grid grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 border-t border-stone py-6 md:grid-cols-12 md:py-8">
          <p className="col-start-1 row-start-1 text-2xl md:col-span-5 md:text-[clamp(1.5rem,2.2vw,2.25rem)] font-semibold tracking-[-0.035em]">{r.org}</p>
          <p className="col-span-2 col-start-1 row-start-2 text-graphite md:col-span-5 md:col-start-6 md:row-start-1 md:text-lg">{r.role}</p>
          <p className="col-start-2 row-start-1 text-right text-sm text-graphite md:col-span-2 md:col-start-11">{r.dates}</p>
        </li>
      ))}
    </ul>
  </section>
);

// ---------- Certificates (21st: Morphing Dialog) ----------

const Certificates = () => (
  <section id="certificates" className="px-site pb-28 md:pb-44">
    <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">Certificates</h2>
    <ul className="mt-14 md:mt-20 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
      {certificates.map((c) => (
        <li key={c.slug}>
          <MorphingDialog transition={{ type: 'spring', bounce: 0.05, duration: 0.55 }}>
            <MorphingDialogTrigger label={`View the ${c.title} certificate from ${c.issuer}`} className="group block w-full text-left">
              <div className="overflow-hidden rounded-xl border border-stone bg-white">
                <MorphingDialogImage
                  src={c.image}
                  alt={c.alt}
                  className="aspect-[3/2] w-full object-contain transition-transform duration-[1200ms] ease-[var(--ease-apple)] group-hover:scale-[1.03]"
                />
              </div>
              <MorphingDialogTitle className="mt-5 text-lg font-semibold tracking-[-0.02em]">{c.title}</MorphingDialogTitle>
              <MorphingDialogSubtitle className="mt-1 text-sm text-graphite">{c.issuer} · {c.date}</MorphingDialogSubtitle>
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
              <MorphingDialogContent className="relative w-[min(94vw,1280px)] rounded-2xl bg-paper p-2 md:p-3">
                <MorphingDialogImage src={c.image} alt={c.alt} className="max-h-[78svh] w-full rounded-xl bg-white object-contain" />
                <div className="flex flex-col gap-1 px-2 pb-2 pt-4 md:flex-row md:items-baseline md:justify-between md:px-3">
                  <MorphingDialogTitle className="text-lg md:text-xl font-semibold tracking-[-0.02em]">{c.title}</MorphingDialogTitle>
                  <MorphingDialogSubtitle className="text-sm text-graphite">{c.issuer} · {c.date}</MorphingDialogSubtitle>
                </div>
                <MorphingDialogClose className="top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-ink text-paper md:top-5 md:right-5">
                  <X size={18} strokeWidth={1.75} />
                </MorphingDialogClose>
              </MorphingDialogContent>
            </MorphingDialogContainer>
          </MorphingDialog>
        </li>
      ))}
    </ul>
  </section>
);

// ---------- Contact ----------

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex h-14 md:h-16 items-center gap-3 rounded-full border-[1.5px] border-paper/40 px-7 text-base md:text-lg font-medium text-paper transition-colors duration-300 hover:border-paper hover:bg-paper hover:text-ink"
    >
      {copied ? <Check size={20} strokeWidth={2} aria-hidden /> : <Copy size={20} strokeWidth={1.75} aria-hidden />}
      <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
    </button>
  );
};

const Contact = () => (
  <section id="contact" className="bg-ink text-paper">
    <div className="px-site pt-28 md:pt-44 pb-10">
      <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
        Let's build something<span className="text-clay">.</span>
      </h2>
      <a href={`mailto:${EMAIL}`} className="group mt-10 md:mt-14 inline-flex max-w-full items-center gap-[0.3em] text-[clamp(1.25rem,3.4vw,3.5rem)] font-medium tracking-[-0.03em]">
        <span className="link-draw truncate">{EMAIL}</span>
        <ArrowUpRight className="h-[0.8em] w-[0.8em] shrink-0 text-clay transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.5} aria-hidden />
      </a>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex h-14 md:h-16 items-center gap-3 rounded-full bg-paper pl-7 pr-6 text-base md:text-lg font-medium text-ink transition-colors duration-300 hover:bg-white"
        >
          <Mail size={20} strokeWidth={1.75} aria-hidden />
          Send an email
          <ArrowUpRight size={18} strokeWidth={2} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
        </a>
        <CopyEmail />
      </div>

      <h3 className="sr-only">Find Murli Prajapati online</h3>
      <ul className="mt-20 md:mt-28 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 md:gap-5 rounded-2xl bg-paper p-5 md:p-6 text-ink transition-[transform,background-color] duration-300 ease-[var(--ease-apple)] hover:-translate-y-1 hover:bg-white"
            >
              <span className="flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-stone">
                <img src={s.icon} alt="" width={32} height={32} className="h-8 w-8 md:h-9 md:w-9 object-contain" />
              </span>
              <span className="min-w-0">
                <span className="block text-xl md:text-2xl font-semibold tracking-[-0.03em]">{s.label}</span>
                <span className="block truncate text-sm text-graphite">{s.handle}</span>
              </span>
              <ArrowUpRight size={22} strokeWidth={1.75} className="ml-auto shrink-0 text-graphite transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden />
            </a>
          </li>
        ))}
      </ul>

      <footer className="mt-20 md:mt-28 flex flex-col-reverse gap-6 border-t border-ink-2 pt-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-stone">© 2026 Murli Prajapati — Delhi, India</p>
        <a
          href="#top"
          className="group inline-flex h-12 w-fit items-center gap-2 rounded-full border-[1.5px] border-paper/30 px-5 text-[15px] font-medium transition-colors duration-300 hover:border-paper"
        >
          Back to top
          <ArrowUp size={16} strokeWidth={2} className="transition-transform duration-500 group-hover:-translate-y-0.5" aria-hidden />
        </a>
      </footer>
    </div>
  </section>
);

// ---------- App ----------

const ROUTE_TO_SECTION: Record<string, string> = {
  '/about': 'about',
  '/projects': 'work',
  '/skills': 'work',
  '/experience': 'experience',
  '/certificates': 'certificates',
  '/contact': 'contact',
};

export default function App() {
  // Pre-rendered routes (/certificates, /about…) land on their section.
  useEffect(() => {
    const id = ROUTE_TO_SECTION[window.location.pathname.replace(/\/$/, '')];
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'auto' }));
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#work" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper">
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </MotionConfig>
  );
}
