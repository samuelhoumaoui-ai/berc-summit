'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Location() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="location" className="py-24 px-4 paper-texture relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="font-typewriter text-[var(--sepia)] text-sm tracking-[0.2em] uppercase mb-4 block">
            Join Us
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-[var(--ink-brown)] mb-6">
            Event Details
          </h2>
          <div className="w-24 h-1 bg-[var(--sepia)] mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="vintage-border bg-[var(--parchment-light)]/50 p-8"
          >
            <h3 className="font-typewriter text-2xl text-[var(--ink-brown)] mb-6">
              Venue Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--sepia)] flex items-center justify-center bg-[var(--parchment)] flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[var(--sepia)]" />
                </div>
                <div>
                  <h4 className="font-typewriter text-[var(--ink-brown)] mb-1">Location</h4>
                  <p className="text-[var(--ink-brown)]/70">
                    Spieker Hall - Chou 6th Floor<br />
                    Haas School of Business<br />
                    University of California, Berkeley<br />
                    2220 Piedmont Avenue<br />
                    Berkeley, CA 94720
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--sepia)] flex items-center justify-center bg-[var(--parchment)] flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[var(--sepia)]" />
                </div>
                <div>
                  <h4 className="font-typewriter text-[var(--ink-brown)] mb-1">Date</h4>
                  <p className="text-[var(--ink-brown)]/70">
                    April 20 & 22, 2026<br />
                    <span className="text-sm italic">Earth Day</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border-2 border-[var(--sepia)] flex items-center justify-center bg-[var(--parchment)] flex-shrink-0">
                  <Clock className="w-5 h-5 text-[var(--sepia)]" />
                </div>
                <div>
                  <h4 className="font-typewriter text-[var(--ink-brown)] mb-1">Time</h4>
                  <p className="text-[var(--ink-brown)]/70">
                    8:00 AM - 7:00 PM PDT<br />
                    <span className="text-sm">Breakfast & Registration at 8:00 AM</span>
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Haas+School+of+Business+Berkeley"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 font-typewriter text-[var(--sepia)] hover:text-[var(--ink-brown)] transition-colors"
            >
              View on Google Maps <ExternalLink size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="vintage-border bg-[var(--parchment-dark)]/30 overflow-hidden"
          >
            <div className="h-full min-h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d787.3823814599712!2d-122.25395!3d37.8716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c2574c9e439%3A0x5c5d3a5c5b3c5e5f!2sHaas%20School%20of%20Business%2C%20UC%20Berkeley!5e0!3m2!1sen!2sus!4v1709427600000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haas School of Business Location"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-6"
        >
          <div className="vintage-border bg-[var(--parchment-light)]/30 p-6 text-center">
            <h4 className="font-typewriter text-[var(--ink-brown)] mb-2">By BART</h4>
            <p className="text-[var(--ink-brown)]/70 text-sm">
              Downtown Berkeley station, 10 min walk to campus
            </p>
          </div>
          <div className="vintage-border bg-[var(--parchment-light)]/30 p-6 text-center">
            <h4 className="font-typewriter text-[var(--ink-brown)] mb-2">By Car</h4>
            <p className="text-[var(--ink-brown)]/70 text-sm">
              Parking available in campus garages (fees apply)
            </p>
          </div>
          <div className="vintage-border bg-[var(--parchment-light)]/30 p-6 text-center">
            <h4 className="font-typewriter text-[var(--ink-brown)] mb-2">Hotels</h4>
            <p className="text-[var(--ink-brown)]/70 text-sm">
              Graduate Berkeley, Hotel Shattuck Plaza nearby
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
