import React from 'react';
import { motion } from 'framer-motion';
import { story, principles, facts } from '../content';

export const About = () => (
  <section id="about" className="px-site py-28 md:py-44">
    <h2 className="sr-only">About Murli Prajapati</h2>

    <div className="flex flex-col gap-20 md:gap-32">
      {/* 1. The Narrative: High-impact intro with portrait integration */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        <div className="md:col-span-8">
          <p className="text-[clamp(2rem,4vw,5rem)] font-semibold leading-[1.1] tracking-[-0.04em] text-balance" data-skew>
            {story[0]}
            <img
              src="/murli-prajapati-professional-portrait.jpeg"
              alt="Murli Prajapati"
              width={160}
              height={160}
              className="mx-[0.18em] inline-block h-[0.8em] w-[0.8em] -translate-y-[0.04em] rounded-full border border-stone object-cover align-middle"
            />
            {story[1]}
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col gap-6 text-graphite">
          <p className="text-lg leading-relaxed">
            I pair rigorous business fundamentals with modern web engineering. From winning state-wide academic honors to shipping full-stack SaaS, the goal never changes: fast, scalable and quietly beautiful.
          </p>
          <div className="grid gap-4 pt-4">
            <div className="p-5 rounded-2xl border border-stone bg-paper-2 hover:border-clay transition-colors duration-300">
              <p className="text-sm font-semibold text-ink">Academic Excellence</p>
              <p className="text-sm text-graphite mt-1">Ranked in the Top 100 state-wide in the MVPP exam; awarded government scholarship and merit medal.</p>
            </div>
            <div className="p-5 rounded-2xl border border-stone bg-paper-2 hover:border-clay transition-colors duration-300">
              <p className="text-sm font-semibold text-ink">Engineering Innovation</p>
              <p className="text-sm text-graphite mt-1">1st place in school robotics competition for designing an automatic collision-avoidance braking system.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Philosophy: Structural grid for core principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-stone pt-16">
        {principles.map((p, i) => (
          <div key={p.title} className="group flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-clay text-paper text-xs font-bold">{i + 1}</span>
              <h3 className="text-xl font-semibold tracking-tight group-hover:text-clay transition-colors duration-300">{p.title}</h3>
            </div>
            <p className="text-graphite leading-relaxed">
              {p.line}
            </p>
          </div>
        ))}
      </div>

      {/* 3. The Fact-Sheet: Uniform structured data */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 border-t border-stone pt-16">
        {facts.map(([k, v]) => (
          <div key={k} className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-graphite/60">{k}</span>
            <span className="text-lg font-medium text-ink">{v}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
