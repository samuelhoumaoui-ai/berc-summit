'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

const speakers = [
  {
    name: 'Dr. Sarah Chen',
    title: 'Chief Sustainability Officer',
    company: 'Global Energy Corp',
    bio: 'Dr. Chen leads sustainability initiatives across 40 countries, focusing on industrial decarbonization and renewable energy integration. She previously served as Director of Energy Policy at the World Resources Institute.',
    image: '/speakers/placeholder-1.jpg',
  },
  {
    name: 'Marcus Williams',
    title: 'VP of Infrastructure',
    company: 'CloudScale AI',
    bio: 'Marcus oversees the deployment of carbon-neutral data centers, pioneering 24/7 clean energy matching for AI workloads. His team has reduced data center emissions by 80% since 2022.',
    image: '/speakers/placeholder-2.jpg',
  },
  {
    name: 'Dr. Elena Rodriguez',
    title: 'Director of Grid Modernization',
    company: 'California ISO',
    bio: 'Elena leads California\'s effort to integrate 100% clean energy into the grid by 2045. She specializes in grid stability and distributed energy resource management.',
    image: '/speakers/placeholder-3.jpg',
  },
  {
    name: 'James Okonkwo',
    title: 'Founder & CEO',
    company: 'AfriCharge',
    bio: 'James founded AfriCharge to bring electric mobility to African cities. His company has deployed over 5,000 EV charging stations across 15 countries.',
    image: '/speakers/placeholder-4.jpg',
  },
  {
    name: 'Dr. Lisa Park',
    title: 'Professor of Energy Economics',
    company: 'UC Berkeley',
    bio: 'Lisa\'s research focuses on energy affordability and equity. She advises multiple state governments on designing inclusive clean energy policies.',
    image: '/speakers/placeholder-5.jpg',
  },
  {
    name: 'Michael Torres',
    title: 'Secretary of Energy',
    company: 'State of California',
    bio: 'Secretary Torres leads California\'s ambitious clean energy agenda, including the state\'s transition to 100% clean electricity and ban on new gas vehicle sales.',
    image: '/speakers/placeholder-6.jpg',
  },
  {
    name: 'Dr. Aisha Patel',
    title: 'Head of Battery Research',
    company: 'QuantumCell Labs',
    bio: 'Aisha leads development of next-generation solid-state batteries, with breakthroughs in energy density and charging speed that could revolutionize EVs.',
    image: '/speakers/placeholder-7.jpg',
  },
  {
    name: 'Robert Kim',
    title: 'Managing Partner',
    company: 'Climate Ventures',
    bio: 'Robert has invested over $2B in climate tech startups, with a focus on grid-scale storage, green hydrogen, and industrial decarbonization.',
    image: '/speakers/placeholder-8.jpg',
  },
];

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedSpeaker, setSelectedSpeaker] = useState<typeof speakers[0] | null>(null);

  return (
    <section id="speakers" className="py-24 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-typewriter text-[var(--sepia)] text-sm tracking-[0.2em] uppercase mb-4 block">
            Learn from the Best
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-[var(--ink-brown)] mb-6">
            Featured Speakers
          </h2>
          <div className="w-24 h-1 bg-[var(--sepia)] mx-auto mb-6" />
          <p className="text-[var(--ink-brown)]/70 max-w-2xl mx-auto">
            Industry leaders, policymakers, and innovators shaping the future of energy
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group cursor-pointer"
            >
              <div className="vintage-border bg-[var(--parchment-light)]/30 overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:translate-y-[-4px]">
                <div className="aspect-square bg-[var(--parchment-dark)] relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--sepia)]/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-2 border-[var(--sepia)]/30 flex items-center justify-center">
                      <span className="font-typewriter text-2xl text-[var(--sepia)]/50">
                        {speaker.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-[var(--ink-brown)]/0 group-hover:bg-[var(--ink-brown)]/60 transition-all duration-300 flex items-center justify-center">
                    <span className="font-typewriter text-[var(--parchment-light)] opacity-0 group-hover:opacity-100 transition-opacity text-sm">
                      View Bio
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-typewriter text-[var(--ink-brown)] text-sm md:text-base mb-1 truncate">
                    {speaker.name}
                  </h3>
                  <p className="text-[var(--sepia)] text-xs truncate">
                    {speaker.title}
                  </p>
                  <p className="text-[var(--ink-brown)]/60 text-xs truncate">
                    {speaker.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="font-typewriter text-[var(--sepia)]">
            More speakers to be announced...
          </p>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[var(--ink-dark)]/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="vintage-border bg-[var(--parchment)] max-w-lg w-full p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-4 right-4 text-[var(--ink-brown)] hover:text-[var(--sepia)]"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-32 h-32 rounded-full border-2 border-[var(--sepia)] flex items-center justify-center bg-[var(--parchment-dark)] mx-auto md:mx-0 flex-shrink-0">
                  <span className="font-typewriter text-3xl text-[var(--sepia)]">
                    {selectedSpeaker.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <div className="text-center md:text-left">
                  <h3 className="font-typewriter text-2xl text-[var(--ink-brown)] mb-1">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-[var(--sepia)] font-medium mb-1">
                    {selectedSpeaker.title}
                  </p>
                  <p className="text-[var(--ink-brown)]/60 mb-4">
                    {selectedSpeaker.company}
                  </p>
                  
                  <div className="flex gap-3 justify-center md:justify-start mb-4">
                    <a href="#" className="text-[var(--sepia)] hover:text-[var(--ink-brown)] transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-[var(--sepia)] hover:text-[var(--ink-brown)] transition-colors">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-[var(--sepia)]/20">
                <p className="text-[var(--ink-brown)]/80 leading-relaxed">
                  {selectedSpeaker.bio}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
