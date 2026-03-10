'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Calendar, GraduationCap, Handshake } from 'lucide-react';
import Image from 'next/image';

const highlights = [
  { icon: Users, label: 'Student-Run', value: '100%' },
  { icon: GraduationCap, label: 'Colleges', value: '11' },
  { icon: Calendar, label: 'Departments', value: '28' },
  { icon: Handshake, label: 'Annual Events', value: '5+' },
];

export default function AboutBERC() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about-berc" className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Dusk_Chao_694f32bf0e9ef81016789076834d1a45.jpg"
          alt="Dusk landscape"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--teal-darkest)]/85 via-[var(--teal-base)]/80 to-[var(--teal-darkest)]/90" />
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-30" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-typewriter text-[var(--accent-cyan)] text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Organization
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-[var(--text-white)] mb-6">
            About BERC
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-cyan)] mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="vintage-border bg-[var(--teal-light)]/60 p-8 md:p-12 mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-[var(--text-white)] leading-relaxed mb-6">
              The <span className="font-typewriter text-[var(--accent-electric)] font-semibold">Berkeley Energy and Resources Collaborative (BERC)</span> is a multidisciplinary network of UC Berkeley students, alumni, faculty, and industry professionals. BERC is entirely student-run and spans 11 colleges and 28 departments across UC Berkeley.
            </p>
            <p className="text-lg text-[var(--text-gray)] leading-relaxed">
              We plan and host a variety of conferences and events across the year, including the annual Energy Summit and Resources Symposium, monthly &ldquo;BERCshop&rdquo; panels, the Clean Energy Speaker Series course at the Haas School of Business, and the annual Climate Change 101 event for Berkeley students. Our partnership with the Energy Institute at Haas helps us provide our members with opportunities to engage with cutting-edge research and current industry applications.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="vintage-border bg-[var(--teal-light)]/40 p-6 text-center"
            >
              <item.icon className="w-8 h-8 text-[var(--accent-cyan)] mx-auto mb-3" />
              <div className="font-typewriter text-3xl text-[var(--accent-electric)] font-bold mb-1">
                {item.value}
              </div>
              <div className="text-sm text-[var(--text-gray)]">
                {item.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
