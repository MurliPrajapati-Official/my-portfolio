import React, { useState, useEffect, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, X } from 'lucide-react';

interface CommandOption {
  label: string;
  href: string;
  category: string;
  shortcut: string;
}

const COMMANDS: CommandOption[] = [
  { label: 'Work', href: '#work', category: 'Navigation', shortcut: 'W' },
  { label: 'About', href: '#about', category: 'Navigation', shortcut: 'A' },
  { label: 'Process', href: '#process', category: 'Navigation', shortcut: 'P' },
  { label: 'Experience', href: '#experience', category: 'Navigation', shortcut: 'E' },
  { label: 'Certificates', href: '#certificates', category: 'Navigation', shortcut: 'C' },
  { label: 'Contact', href: '#contact', category: 'Navigation', shortcut: 'Enter' },
];

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredCommands = COMMANDS.filter(cmd =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-ink/40 backdrop-blur-sm transition-opacity duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-bone/20 bg-paper shadow-2xl"
      >
        <div className="flex items-center gap-3 px-4 py-4 border-b border-bone">
          <Search size={20} className="text-muted" />
          <input
            autoFocus
            className="w-full bg-transparent border-none outline-none text-ink text-lg placeholder:text-muted/50"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="flex items-center gap-1 px-2 py-1 rounded border border-bone text-[10px] font-medium text-muted uppercase">
            <Command size={10} /> K
          </div>
        </div>

        <div className="max-h-[400px] overflow-y-auto p-2">
          {filteredCommands.length > 0 ? (
            <div className="grid gap-1">
              {filteredCommands.map((cmd) => (
                <a
                  key={cmd.href}
                  href={cmd.href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between px-3 py-3 rounded-xl hover:bg-bone transition-colors duration-200"
                >
                  <div className="flex flex-col">
                    <span className="text-ink font-medium">{cmd.label}</span>
                    <span className="text-xs text-muted">{cmd.category}</span>
                  </div>
                  <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    {cmd.shortcut}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="py-10 text-center text-muted">
              No results found for "{query}"
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};
