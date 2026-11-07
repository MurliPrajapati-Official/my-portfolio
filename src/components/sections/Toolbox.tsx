import React from 'react';
import { motion } from 'framer-motion';

const TOOLS = {
  Frontend: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion', 'Vite'],
  Backend: ['Node.js', 'Express', 'Cloudflare Workers', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  Design: ['Figma', 'Design Systems', 'Neo-Brutalism', 'Fluid Typography', 'Apple Aesthetics'],
  Automation: ['Telegram Bots', 'WhatsApp API', 'Discord.js', 'AI Agents', 'JSON-LD Schema'],
};

export const Toolbox = () => {
  return (
    <section id="toolbox" className="px-site py-28 md:py-44 border-t border-bone">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        <div className="max-w-[48ch]">
          <span className="eyebrow">Technical Arsenal</span>
          <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]" data-skew>
            The Toolbox
          </h2>
        </div>
        <p className="md:max-w-[36ch] text-lg text-muted leading-relaxed">
          A curated stack of modern technologies used to build high-performance,
          scalable digital products with a focus on speed and accessibility.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(TOOLS).map(([category, tools]) => (
          <div key={category} className="p-8 rounded-3xl border border-stone bg-paper-2 group hover:border-clay transition-colors duration-500">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-clay" />
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="px-3 py-1 rounded-full bg-white border border-stone text-sm font-medium text-ink group-hover:border-clay transition-colors duration-300"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
