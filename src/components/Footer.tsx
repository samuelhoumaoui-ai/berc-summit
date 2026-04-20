'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--ink-dark)] text-[var(--parchment)] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[var(--accent-electric)] flex items-center justify-center">
                <span className="font-typewriter text-[var(--accent-electric)] text-sm font-medium">BE</span>
              </div>
              <div>
                <span className="font-typewriter text-white text-lg block">
                  BERC Summit 2026
                </span>
                <span className="text-white/50 text-sm">
                  Welcome to the Electrocene
                </span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed mb-6 max-w-md text-sm">
              The Berkeley Energy & Resources Collaborative (BERC) is a student-run organization 
              at UC Berkeley dedicated to accelerating the transition to a sustainable energy future.
            </p>
            <div className="flex gap-3">
<a href="https://www.linkedin.com/company/ucberc" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-[var(--accent-electric)] hover:text-[var(--accent-electric)] transition-colors">
                <Linkedin size={16} />
              </a>
              <a href="https://www.instagram.com/ucberc?igsh=NTc4MTIwNjQ2YQ==" target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-[var(--accent-electric)] hover:text-[var(--accent-electric)] transition-colors">
                <Instagram size={16} />
              </a>
              <a href="mailto:samuelhoumaoui@berkeley.edu"
                 className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-[var(--accent-electric)] hover:text-[var(--accent-electric)] transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-typewriter text-[var(--accent-electric)] mb-4 text-sm tracking-wide">Resources</h4>
            <a
              href="/Summit-Agenda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-bold text-[var(--accent-electric)] text-sm hover:underline"
            >
              Agenda PDF-Version
            </a>
          </div>

          <div>
            <h4 className="font-typewriter text-[var(--accent-electric)] mb-4 text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-white/60 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="#agenda" className="text-white/60 hover:text-white transition-colors text-sm">Agenda</Link></li>
              <li><Link href="#speakers" className="text-white/60 hover:text-white transition-colors text-sm">Speakers</Link></li>
              <li><Link href="#sponsors" className="text-white/60 hover:text-white transition-colors text-sm">Sponsors</Link></li>
              <li><Link href="#register" className="text-white/60 hover:text-white transition-colors text-sm">Register</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-typewriter text-[var(--accent-electric)] mb-4 text-sm tracking-wide">Contact</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>
                <a href="mailto:info@bercsummit.com" className="hover:text-white transition-colors">
                  info@bercsummit.com
                </a>
              </li>
              <li>
                <a href="mailto:sponsors@bercsummit.com" className="hover:text-white transition-colors">
                  sponsors@bercsummit.com
                </a>
              </li>
              <li className="pt-4">
                <span className="block text-white/40 text-xs mb-1">Event Location</span>
                UC Berkeley<br />
                Haas School of Business
              </li>
            </ul>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-xs">
            © 2026 Berkeley Energy & Resources Collaborative. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
