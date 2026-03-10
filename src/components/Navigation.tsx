'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#agenda', label: 'Agenda' },
  // { href: '#speakers', label: 'Speakers' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#location', label: 'Location' },
  { href: '#about-berc', label: 'About BERC' },
  { href: '#team', label: 'Organizing Team' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--parchment)]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="https://berc.berkeley.edu/" target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Image
              src="/images/berclogofinal.png"
              alt="BERC Energy Summit Logo"
              width={120}
              height={62}
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-typewriter text-[var(--ink-brown)] hover:text-[var(--sepia)] transition-colors text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#register"
              className="btn-vintage text-sm"
            >
              Register Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-[var(--ink-brown)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--parchment)] border-t border-[var(--sepia)]/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block font-typewriter text-[var(--ink-brown)] hover:text-[var(--sepia)] py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#register"
                className="btn-vintage block text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
