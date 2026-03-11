'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Ticket, Users, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const tickets = [
  {
    type: 'Student',
    earlyPrice: '$50',
    latePrice: '$60',
    icon: GraduationCap,
    features: [
      'Two-day access (April 20 & 22)',
      'Breakfast & lunch included',
      'Networking reception',
      'Digital materials',
    ],
    note: 'Valid .edu email required',
  },
  {
    type: 'Professional',
    earlyPrice: '$75',
    latePrice: '$100',
    icon: Users,
    features: [
      'Two-day access (April 20 & 22)',
      'Breakfast & lunch included',
      'Networking reception',
      'Digital materials',
    ],
  },
];

export default function Register() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="register" className="py-24 px-4 bg-[var(--bg-dark)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="regGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#ffffff" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#regGrid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-typewriter text-[var(--accent-electric)] text-sm tracking-[0.2em] uppercase mb-4 block">
            Secure Your Spot
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-white mb-6">
            Register Now
          </h2>
          <div className="w-24 h-0.5 bg-[var(--accent-electric)] mx-auto mb-6" />
          <p className="text-white/60 max-w-xl mx-auto">
            Join us April 20 & 22, 2026 for two days of insights, networking, and action.
            All tickets include both days of the summit.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.type}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="h-full border border-white/20 bg-white/5 hover:border-white/40 p-8 transition-all duration-200 flex flex-col">
                <div className="text-center mb-6">
                  <ticket.icon className="w-10 h-10 mx-auto mb-4 text-white" />
                  <h3 className="font-typewriter text-lg mb-3 text-white">
                    {ticket.type}
                  </h3>
                  <div className="mb-1">
                    <span className="text-xs font-typewriter text-[var(--accent-electric)] uppercase tracking-widest block mb-0.5">Early Bird</span>
                    <div className="font-typewriter text-3xl text-[var(--accent-electric)]">
                      {ticket.earlyPrice}
                    </div>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs font-typewriter text-white/50 uppercase tracking-widest block mb-0.5">Late Bird</span>
                    <div className="font-typewriter text-xl text-white/70">
                      {ticket.latePrice}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                      <Ticket className="w-4 h-4 flex-shrink-0 text-[var(--accent-electric)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  {ticket.note && (
                    <p className="text-xs mb-4 text-white/40">
                      *{ticket.note}
                    </p>
                  )}
                  <a
                    href="https://luma.com/electrocene"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full font-typewriter py-3 transition-all duration-200 border border-white/40 text-white hover:bg-white hover:text-[var(--bg-dark)] text-center"
                  >
                    Register
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-[var(--accent-electric)]/80 text-sm mb-3">
            Early Bird pricing valid through March 2026 — prices will rise on April 1, 2026.
          </p>
          <p className="text-white/50 text-sm mb-3">
            Check{' '}
            <a href="https://luma.com/electrocene" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-electric)] hover:underline">luma</a>
            {' '}for all tickets. If you are a Cal student, check{' '}
            <a href="https://haas.campusgroups.com/bercathaas/rsvp_boot?id=2251145" target="_blank" rel="noopener noreferrer" className="text-[var(--accent-electric)] hover:underline">Campus Groups</a>.
          </p>
          <p className="text-white/50 text-sm">
            Group discounts available for 5+ attendees.{' '}
            <a href="mailto:sponsors@bercsummit.com" className="text-[var(--accent-electric)] hover:underline">
              Contact us
            </a>{' '}
            for details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
