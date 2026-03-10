'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import TypewriterText from './TypewriterText';
import { Calendar, MapPin, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture paper-overlay">
      {/* MIT Electron Vortex background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/MIT_Electron-Vortex-01-PRESS_0.jpg"
          alt="Electron Vortex visualization"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--teal-darkest)]/80 via-[var(--teal-base)]/70 to-[var(--teal-darkest)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--teal-darkest)]/60 via-transparent to-[var(--teal-darkest)]/60" />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="var(--sepia)" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Decorative sketch elements */}
      <div className="absolute top-20 left-10 opacity-20 hidden lg:block">
        <svg width="150" height="200" viewBox="0 0 150 200">
          <motion.path
            d="M75,10 L75,190 M50,30 L75,10 L100,30 M40,60 L110,60 M40,100 L110,100 M40,140 L110,140 M50,170 L75,190 L100,170"
            stroke="var(--sepia)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
          />
        </svg>
      </div>

      <div className="absolute bottom-20 right-10 opacity-20 hidden lg:block">
        <svg width="200" height="150" viewBox="0 0 200 150">
          <motion.path
            d="M20,75 L180,75 M40,50 L40,100 M80,40 L80,110 M120,40 L120,110 M160,50 L160,100"
            stroke="var(--sepia)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 1 }}
          />
          <motion.circle
            cx="100"
            cy="75"
            r="40"
            stroke="var(--sepia)"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 2 }}
          />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <span className="font-typewriter text-[var(--sepia-light)] text-xs sm:text-sm tracking-[0.25em] uppercase block">
            Berkeley Energy & Resources Collaborative presents
          </span>
          <span className="font-typewriter text-[var(--sepia-light)] text-xs sm:text-sm tracking-[0.25em] uppercase block mt-2">
            The 19th Annual Energy Summit
          </span>
        </motion.div>

        <h1 className="font-typewriter mb-8 text-[var(--ink-brown)]">
          <TypewriterText
            text="Welcome to the"
            speed={60}
            delay={500}
            showCursor={false}
            onComplete={() => setShowSubtitle(true)}
            className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-2"
          />
          {showSubtitle && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="block"
            >
              <TypewriterText
                text="ELECTROCENE"
                speed={100}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.06em] font-bold"
                onComplete={() => setShowContent(true)}
              />
              <span className="inline-block w-3 h-3 bg-[var(--accent-electric)] ml-2 rounded-full align-middle" />
            </motion.span>
          )}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-typewriter text-base sm:text-lg md:text-xl text-[var(--sepia)] mb-10 max-w-2xl mx-auto">
            Powering the Future of Energy Now!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-[var(--ink-brown)]">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[var(--accent-electric)]" />
              <span className="font-typewriter text-sm sm:text-base">April 20 & 22, 2026</span>
            </div>
            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[var(--accent-electric)]" />
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-[var(--accent-electric)]" />
              <span className="font-typewriter text-sm sm:text-base">UC Berkeley</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#register" className="btn-vintage text-sm sm:text-base">
              Register Now
            </Link>
            <Link href="#about" className="btn-vintage-outline text-sm sm:text-base">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Link href="#about" className="text-[var(--text-muted)] hover:text-[var(--accent-electric)] transition-colors">
            <ArrowDown size={28} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
