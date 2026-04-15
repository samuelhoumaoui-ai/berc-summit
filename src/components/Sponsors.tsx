'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const sponsorTiers = [
  {
    tier: 'Gold',
    sponsors: [
      { name: 'PG&E', logo: '/images/sponsors/pge.svg' },
      { name: 'EDF (Électricité de France)', logo: '/images/sponsors/edf.svg' },
    ],
  },
  {
    tier: 'Silver',
    sponsors: [
      { name: 'Wilson Sonsini', logo: '/images/sponsors/wilson-sonsini.svg' },
      { name: 'Lawrence Berkeley Lab', logo: '/images/sponsors/lbl.svg' },
    ],
  },
  {
    tier: 'Bronze',
    sponsors: [
      { name: 'SoCal Edison', logo: '/images/sponsors/socal-edison.svg' },
      { name: 'Cal CCA', logo: '/images/sponsors/cal-cca.svg' },
      { name: 'InterAmerican Clean Energy Institute', logo: '/images/sponsors/iace.svg' },
      { name: 'Bakar Labs for Energy & Materials', logo: '/images/sponsors/bakar-labs.svg' },
      { name: 'Norton Rose Fulbright', logo: '/images/sponsors/norton-rose.svg' },
      { name: 'MCE', logo: '/images/sponsors/mce.svg' },
    ],
  },
];

export default function Sponsors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sponsors" className="py-24 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/sponsorbackground.jpg"
          alt="Sponsors background"
          fill
          className="object-cover opacity-25"
          style={{ objectPosition: '25% center' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--teal-darkest)]/75 via-[var(--teal-base)]/65 to-[var(--teal-darkest)]/80" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-cyan)] to-transparent opacity-30" />
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-typewriter text-[var(--sepia)] text-sm tracking-[0.2em] uppercase mb-4 block">
            Our Supporters
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-[var(--ink-brown)] mb-6">
            Sponsors & Partners
          </h2>
          <div className="w-24 h-1 bg-[var(--sepia)] mx-auto" />
        </motion.div>

        {sponsorTiers.map((tierGroup, tierIndex) => (
          <motion.div
            key={tierGroup.tier}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: tierIndex * 0.15 }}
            className="mb-12"
          >
            <h3 className="font-typewriter text-center text-white/80 text-lg mb-6 tracking-wider">
              — {tierGroup.tier} —
            </h3>
            
            <div className={`flex flex-wrap justify-center gap-6 ${
              tierGroup.tier === 'Gold' ? 'gap-8' : ''
            }`}>
              {tierGroup.sponsors.map((sponsor, index) => (
                <motion.div
                  key={sponsor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: tierIndex * 0.15 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center justify-center gap-2 p-4 cursor-pointer transition-all"
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className={`object-contain brightness-0 invert ${
                      tierGroup.tier === 'Gold' ? 'h-24 max-w-[220px]' :
                      tierGroup.tier === 'Silver' ? 'h-20 max-w-[190px]' :
                      'h-14 max-w-[160px]'
                    }`}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'block';
                    }}
                  />
                  <span className={`font-typewriter text-white text-center leading-tight hidden ${
                    tierGroup.tier === 'Gold' ? 'text-base' :
                    tierGroup.tier === 'Silver' ? 'text-sm' : 'text-xs'
                  }`}>
                    {sponsor.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 vintage-border bg-[var(--parchment-light)]/30 p-8"
        >
          <h4 className="font-typewriter text-xl text-[var(--ink-brown)] mb-4">
            Become a Sponsor
          </h4>
          <p className="text-[var(--ink-brown)]/70 mb-6 max-w-xl mx-auto">
            Join leading organizations in powering the conversation about our energy future.
            Sponsorship opportunities are available at multiple levels.
          </p>
          <a href="mailto:sponsors@bercsummit.com" className="btn-vintage-outline">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
