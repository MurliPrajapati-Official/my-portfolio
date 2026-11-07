import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Zap, Database, MessageSquare, ShieldCheck } from 'lucide-react';

const BOT_FEATURES = [
  {
    title: 'Business Automations',
    description: 'Custom Telegram, WhatsApp, and Discord bots that eliminate manual operational bottlenecks.',
    icon: <Zap className="text-oxblood" />,
    details: ['Daily Reporting', 'Employee Attendance', 'Task Management']
  },
  {
    title: 'Operational Intelligence',
    description: 'Systems that track health and metrics in real-time, ensuring zero downtime for business critical tools.',
    icon: <Database className="text-oxblood" />,
    details: ['Inventory Trackers', 'System Health Checks', 'Real-time Logs']
  },
  {
    title: 'Client Communications',
    description: 'Intelligent agents that handle first-touch inquiries and lead qualification 24/7.',
    icon: <MessageSquare className="text-oxblood" />,
    details: ['Automated FAQs', 'Lead Qualification', 'Appointment Booking']
  },
  {
    title: 'Secure Architecture',
    description: 'Enterprise-grade security ensuring data privacy and secure API integrations across all platforms.',
    icon: <ShieldCheck className="text-oxblood" />,
    details: ['End-to-end Encryption', 'Secure Webhooks', 'Role-based Access']
  }
];

export const BotArchitect = () => {
  return (
    <section id="bots" className="px-site py-28 md:py-44 bg-ink text-paper overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-oxblood/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-20">
          <div className="max-w-[48ch]">
            <span className="eyebrow text-paper/60">Specialization</span>
            <h2 className="text-[clamp(2.75rem,7vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.05em]" data-skew>
              Bot Systems <br />
              <span className="text-oxblood">Architect</span>
            </h2>
          </div>
          <p className="md:max-w-[36ch] text-lg text-paper/70 leading-relaxed">
            Beyond standard websites, I engineer dedicated bot agents that automate
            the repetitive parts of a business, turning manual logs into automated intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BOT_FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-paper/10 bg-paper/5 backdrop-blur-sm hover:bg-paper/10 transition-all duration-500 group"
            >
              <div className="mb-6 p-3 rounded-2xl bg-paper/10 w-fit group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-paper/60 leading-relaxed mb-6">
                {feature.description}
              </p>
              <ul className="flex flex-col gap-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="text-sm text-paper/40 flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-oxblood" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
