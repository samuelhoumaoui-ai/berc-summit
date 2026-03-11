'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, RefreshCw, Compass, Landmark } from 'lucide-react';
import Image from 'next/image';
import EnergyEras from './EnergyEras';

const themes = [
  {
    icon: Sparkles,
    title: 'A New Epoch',
    description: 'The shift to electricity-based systems is as civilizationally significant as the Industrial Revolution. Energy is no longer just infrastructure — it has become the organizing principle of modern society itself.',
  },
  {
    icon: RefreshCw,
    title: 'Systemic Co-Evolution',
    description: 'Energy systems, economies, and societies are actively reshaping one another in real time. No single sector transforms in isolation — the feedback loops between power, capital, and human behavior run in every direction.',
  },
  {
    icon: Compass,
    title: 'The Agency Imperative',
    description: 'Unlike the Anthropocene — defined by what humans did to the planet — the Electrocene is defined by what we choose to do next. How we build, power, and deploy these systems is still an open question, and the window to answer it wisely is now.',
  },
  {
    icon: Landmark,
    title: 'Civilizational Stakes',
    description: 'The decisions made in the next few decades will compound across generations. The Electrocene doesn\'t just ask how we decarbonize — it asks who controls energy, who benefits from it, and what kind of civilization we\'re building around it.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-typewriter text-[var(--sepia)] text-sm tracking-[0.2em] uppercase mb-4 block">
            The Theme
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-[var(--ink-brown)] mb-6">
            What is the Electrocene?
          </h2>
          <div className="w-24 h-1 bg-[var(--sepia)] mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="vintage-border bg-[var(--gray-dark)]/80 p-8 md:p-12 mb-16"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="font-typewriter text-2xl md:text-3xl text-[var(--ink-brown)] mb-6 font-semibold">
              Welcome to the Electrocene: Powering the Future, Now!
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Electricity and energy systems will define the next few decades as profoundly as human activity defined the Anthropocene. The Anthropocene asked what humans have done to the planet. The <span className="font-typewriter text-[var(--accent-electric)] font-semibold">Electrocene</span> asks something harder: what will we do next? In this era, energy isn&apos;t just infrastructure — it&apos;s the organizing principle of civilization.
            </p>
            <blockquote className="border-l-4 border-[var(--accent-electric)] pl-6 py-4 my-8">
              <p className="text-xl md:text-2xl text-[var(--ink-brown)]/90 leading-relaxed italic">
                In our current epoch, we are introduced to an era in which our energy systems, economy, and society are transforming one another. How we choose to build, power, and utilize these systems is up to us.
              </p>
            </blockquote>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              BERC&apos;s 19th Annual Energy Summit will bring together investors, builders, policy leaders, and academia to explore the many facets and forces defining this era of electricity: from the urgency of firming our power system, to meeting &amp; managing exploding demand, all while serving the ever-pressing needs for affordability, reliability, and equity.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="vintage-border bg-[var(--parchment-light)]/30 p-6 h-full transition-all duration-300 hover:bg-[var(--parchment-light)]/60 hover:translate-x-1 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-[var(--sepia)] flex items-center justify-center bg-[var(--parchment)] group-hover:bg-[var(--sepia)] transition-colors">
                    <theme.icon className="w-6 h-6 text-[var(--sepia)] group-hover:text-[var(--parchment-light)] transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-typewriter text-xl text-[var(--ink-brown)] mb-2">
                      {theme.title}
                    </h3>
                    <p className="text-[var(--ink-brown)]/70 leading-relaxed text-left">
                      {theme.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Energy Eras Carousel */}
        <EnergyEras />
      </div>
    </section>
  );
}
