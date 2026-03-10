'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

// Start year used for proportional positioning on the timeline
const eraYears = [1760, 1870, 1900, 1950, 1988, 2010, 2022, 2026];
const eraShortNames = ['Steam Age', 'Electrification', 'Oil Century', 'Great Acceleration', 'Climate Reckoning', 'Energy Transition', 'Inflection Point', 'Electrocene'];

const TIMELINE_MIN = 1760;
const TIMELINE_MAX = 2030;
const getTimelinePos = (year: number) =>
  ((year - TIMELINE_MIN) / (TIMELINE_MAX - TIMELINE_MIN)) * 100;

const eras = [
  {
    id: 1,
    title: 'The Steam Age',
    years: '1760 – 1850',
    description: 'The Industrial Revolution transforms human muscle into machine power. Coal-fired steam engines remake manufacturing, transportation, and urban life. For the first time, humanity begins drawing down millions of years of stored carbon — and the clock starts ticking.',
    image: '/images/Carousel/era1.jpeg',
  },
  {
    id: 2,
    title: 'The Age of Electrification',
    years: '1870 – 1930',
    description: 'Edison, Tesla, and Westinghouse wire the world. Electric light replaces gas lamps, motors replace draft animals, and cities begin to hum. Electricity touches daily life for the first time — but only for the privileged few.',
    image: '/images/Carousel/era2.jpeg',
  },
  {
    id: 3,
    title: 'The Oil Century',
    years: '1900 – 1970',
    description: 'Petroleum becomes the master resource. The automobile, the airplane, and petrochemical agriculture reshape civilization. Economic growth becomes inseparable from burning fossil fuels. The modern energy system — and its dependencies — is locked in.',
    image: '/images/Carousel/era3.jpeg',
  },
  {
    id: 4,
    title: 'The Great Acceleration',
    years: '1950 – 1990',
    description: 'Post-war prosperity triggers an explosion in consumption, population, and emissions. GDP, carbon output, and resource extraction all surge in tandem. Scientists begin detecting the fingerprint of human activity in the atmosphere, oceans, and ecosystems. The term Anthropocene is quietly being born.',
    image: '/images/Carousel/era4.jpeg',
  },
  {
    id: 5,
    title: 'The Climate Reckoning',
    years: '1988 – 2015',
    description: 'The IPCC is founded. The Kyoto Protocol. Hurricane Katrina. The 2008 financial crisis exposes the fragility of fossil fuel dependency. The Paris Agreement marks the first global acknowledgment that the old energy system must end — but offers no clear successor.',
    image: '/images/Carousel/era5.jpeg',
  },
  {
    id: 6,
    title: 'The Energy Transition',
    years: '2010 – 2022',
    description: 'Solar and wind costs collapse by over 90%. Battery storage goes from novelty to grid asset. Electric vehicles cross the chasm from early adopters to mainstream markets. The economics of clean energy invert — renewables become the cheapest power source in history. The transition is no longer theoretical.',
    image: '/images/Carousel/era6.jpeg',
  },
  {
    id: 7,
    title: 'The Inflection Point',
    years: '2022 – Present',
    description: 'The IRA, REPowerEU, and global industrial policy ignite a clean energy capital surge. AI data centers, EV fleets, and electrified industry create demand unlike anything the grid has seen. Energy security, climate, and economic competitiveness converge into a single imperative. The old system is ending. The new one is being built in real time.',
    image: '/images/Carousel/era7.jpg',
  },
  {
    id: 8,
    title: 'The Electrocene',
    years: 'Now → ?',
    description: 'Electricity becomes the organizing principle of civilization. How we generate, distribute, store, and access energy will define economies, geopolitics, and quality of life for generations. This is not just an energy transition — it is a civilizational one. The question is no longer if but how and for whom.',
    image: '/images/Carousel/era8.jpeg',
  },
];

export default function EnergyEras() {
  const [currentEra, setCurrentEra] = useState(0);

  const nextEra = () => {
    setCurrentEra((prev) => (prev + 1) % eras.length);
  };

  const prevEra = () => {
    setCurrentEra((prev) => (prev - 1 + eras.length) % eras.length);
  };

  const goToEra = (index: number) => {
    setCurrentEra(index);
  };

  return (
    <div className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <span className="font-typewriter text-[var(--accent-cyan)] text-sm tracking-[0.2em] uppercase mb-2 block">
          A Journey Through Time
        </span>
        <h3 className="font-typewriter text-2xl md:text-3xl text-[var(--text-white)]">
          The Path to the Electrocene
        </h3>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Carousel Card + Arrows */}
        <div className="relative">
          <div className="vintage-border bg-[var(--teal-light)]/40 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentEra}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col md:flex-row"
              >
                {/* Image */}
                <div className="md:w-1/2 aspect-video md:aspect-auto relative bg-[var(--teal-dark)] min-h-[250px]">
                  <Image
                    src={eras[currentEra].image}
                    alt={eras[currentEra].title}
                    fill
                    className="object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--teal-dark)]/50" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                  <div className="mb-2">
                    <span className="text-[var(--accent-cyan)] text-sm font-typewriter tracking-wider">
                      Era {eras[currentEra].id}
                    </span>
                  </div>
                  <h4 className="font-typewriter text-xl md:text-2xl text-[var(--text-white)] mb-2">
                    {eras[currentEra].title}
                  </h4>
                  <p className="text-[var(--accent-electric)] text-sm font-typewriter mb-4 italic">
                    {eras[currentEra].years}
                  </p>
                  <p className="text-[var(--text-gray)] text-sm md:text-base leading-relaxed">
                    {eras[currentEra].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevEra}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-[var(--teal-light)] border border-[var(--accent-cyan)]/30 flex items-center justify-center text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/20 transition-colors"
            aria-label="Previous era"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextEra}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-[var(--teal-light)] border border-[var(--accent-cyan)]/30 flex items-center justify-center text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)]/20 transition-colors"
            aria-label="Next era"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Horizontal Timeline */}
        <div className="mt-8 px-4 md:px-10">
          {/* Era name marker */}
          <div className="relative h-6 mb-1">
            <motion.div
              className="absolute"
              animate={{ left: `${getTimelinePos(eraYears[currentEra])}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ transform: 'translateX(-50%)' }}
            >
              <span
                className="font-typewriter text-[var(--accent-cyan)] whitespace-nowrap block text-center"
                style={{ fontSize: '10px', letterSpacing: '0.08em' }}
              >
                {eraShortNames[currentEra]}
              </span>
            </motion.div>
          </div>

          {/* Active era pointer — sits directly above the track */}
          <div className="relative h-4">
            <motion.div
              className="absolute flex flex-col items-center"
              animate={{ left: `${getTimelinePos(eraYears[currentEra])}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              style={{ transform: 'translateX(-50%)', bottom: 0 }}
            >
              {/* Vertical stem */}
              <div style={{ width: '1px', height: '6px', background: 'var(--accent-cyan)', opacity: 0.6 }} />
              {/* Downward triangle */}
              <div
                style={{
                  width: 0, height: 0,
                  borderLeft: '4px solid transparent',
                  borderRight: '4px solid transparent',
                  borderTop: '5px solid var(--accent-cyan)',
                }}
              />
            </motion.div>
          </div>

          {/* Track + nodes */}
          {/* Track centred at top:32px; labels above sit at top:10px, labels below at top:42px */}
          <div className="relative" style={{ height: '64px' }}>
            {/* Dimmed full gradient track */}
            <div
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: '32px',
                height: '1px',
                background: 'linear-gradient(to right, var(--accent-electric), var(--accent-cyan))',
                opacity: 0.15,
              }}
            />

            {/* Animated progress fill */}
            <motion.div
              className="absolute left-0 pointer-events-none"
              style={{
                top: '31px',
                height: '2px',
                background: 'linear-gradient(to right, var(--accent-electric), var(--accent-cyan))',
              }}
              animate={{ width: `${getTimelinePos(eraYears[currentEra])}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />

            {/* Nodes + year labels */}
            {eras.map((era, index) => {
              const isActive = index === currentEra;
              const isPast = index < currentEra;
              const labelAbove = index % 2 === 0;
              const pos = getTimelinePos(eraYears[index]);
              const yearLabel = eraYears[index] === 2026 ? 'Now' : String(eraYears[index]);

              return (
                <div
                  key={era.id}
                  className="absolute"
                  style={{ left: `${pos}%`, top: 0, bottom: 0, transform: 'translateX(-50%)' }}
                >
                  {/* Year label ABOVE the track */}
                  {labelAbove && (
                    <div
                      className="absolute text-center"
                      style={{ top: '10px', left: '50%', transform: 'translateX(-50%)' }}
                    >
                      <span
                        className={`font-typewriter block whitespace-nowrap transition-colors duration-300 ${
                          isActive
                            ? 'text-[var(--accent-cyan)]'
                            : isPast
                            ? 'text-[var(--text-gray)]/45'
                            : 'text-[var(--text-gray)]/20'
                        }`}
                        style={{ fontSize: '9px', letterSpacing: '0.06em' }}
                      >
                        {yearLabel}
                      </span>
                    </div>
                  )}

                  {/* Year label BELOW the track */}
                  {!labelAbove && (
                    <div
                      className="absolute text-center"
                      style={{ top: '42px', left: '50%', transform: 'translateX(-50%)' }}
                    >
                      <span
                        className={`font-typewriter block whitespace-nowrap transition-colors duration-300 ${
                          isActive
                            ? 'text-[var(--accent-cyan)]'
                            : isPast
                            ? 'text-[var(--text-gray)]/45'
                            : 'text-[var(--text-gray)]/20'
                        }`}
                        style={{ fontSize: '9px', letterSpacing: '0.06em' }}
                      >
                        {yearLabel}
                      </span>
                    </div>
                  )}

                  {/* Clickable node — centred on the track at top:32px */}
                  <button
                    onClick={() => goToEra(index)}
                    className="absolute flex items-center justify-center"
                    style={{
                      top: '32px',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '28px',
                      height: '28px',
                    }}
                    aria-label={`Go to ${era.title}`}
                  >
                    {isActive ? (
                      <div className="relative flex items-center justify-center">
                        <motion.div
                          className="absolute rounded-full"
                          style={{ background: 'var(--accent-cyan)', opacity: 0.2 }}
                          animate={{ width: [10, 18, 10], height: [10, 18, 10] }}
                          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <div
                          className="relative rounded-full z-10"
                          style={{
                            width: '8px',
                            height: '8px',
                            background: 'var(--accent-cyan)',
                            boxShadow: '0 0 8px var(--accent-cyan)',
                          }}
                        />
                      </div>
                    ) : (
                      <div
                        className="rounded-full transition-all duration-200 hover:scale-150"
                        style={{
                          width: isPast ? '5px' : '4px',
                          height: isPast ? '5px' : '4px',
                          background: isPast ? 'var(--accent-electric)' : 'rgba(255,255,255,0.2)',
                          opacity: isPast ? 0.65 : 0.35,
                        }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Footer: era count */}
          <div className="flex items-center justify-center gap-3 mt-1">
            <div className="h-px w-8 bg-[var(--text-gray)]/15" />
            <span className="font-typewriter text-[var(--text-gray)]/40 tracking-widest" style={{ fontSize: '9px' }}>
              {currentEra + 1} of {eras.length}
            </span>
            <div className="h-px w-8 bg-[var(--text-gray)]/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
