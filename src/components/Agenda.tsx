'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, ChevronDown, ChevronUp, User } from 'lucide-react';
import Image from 'next/image';

const tracks = ['All', 'Grid & Infrastructure', 'AI & Energy', 'Policy & Markets'];

const day1Sessions = [
  {
    title: 'Financing the Energy Transition: How Project Finance Determines What Gets Built',
    track: 'Policy & Markets',
    description: 'Equip attendees with a practical understanding of how project finance works for renewable energy projects—how debt is sized, how lenders assess risk, and how financial structures determine whether a project is viable.',
    speakers: [
      { name: 'Clearway Energy', title: 'Capital Markets Team' },
    ],
  },
  {
    title: 'PPAs in Practice: Behind-the-Meter vs. Front-of-Meter PPAs',
    track: 'Policy & Markets',
    description: 'Enable participants to evaluate and compare behind-the-meter and front-of-meter PPAs by understanding the tradeoffs in revenue certainty, risk allocation, and financing implications across different project structures.',
    speakers: [
      { name: 'Evan Riley', title: 'Founder of White Pine' },
    ],
  },
  {
    title: 'Interconnection',
    track: 'Grid & Infrastructure',
    description: 'Give participants a practical, end-to-end understanding of the interconnection process, why timelines have exploded, and what emerging regulatory, technological, and market reforms could unlock faster grid expansion — with a special focus on new AI-driven load growth.',
    speakers: [],
  },
  {
    title: 'Data Centers - The Energy Problem',
    track: 'AI & Energy',
    description: 'What are the unique challenges AI data centers pose for the US electric grid, how developers and utilities evaluate sites, and what emerging clean energy solutions could sustainably power AI\'s massive load growth.',
    speakers: [
      { name: 'Luis Gonzalez', title: 'Microsoft' },
      { name: 'Nehali Jain', title: 'Antora Energy' },
    ],
  },
];

const headlineSpeakers = [
  { name: 'David Hochschild', title: 'Chair of the California Energy Commission', image: '/images/Headline Speakers/David Hochschild.jpg', imagePosition: 'center 30%' },
  { name: 'Sarah Jewett', title: 'Vice President of Strategy at Fervo Energy', image: '/images/Headline Speakers/Sarah Jewett.jpg', imagePosition: 'center center' },
  { name: 'Gerard Reid', title: 'Host of the Redefining Energy Podcast & Co-Founder of Alexa Capital', image: '/images/Headline Speakers/Gerard Reid.jpg', imagePosition: 'center center' },
];

const keynotePresentations = [
  {
    title: 'The State of U.S. Electricity Prices',
    speaker: { name: 'Ryan Wiser', title: 'Senior Scientist & Senior Advisor, Lawrence Berkeley National Laboratory', image: '/images/Headline Speakers/Ryan Wiser.jpg', imagePosition: 'center center' },
  },
];

const day2Panels = [
  {
    title: 'Unlocking Existing Abundance with Grid Enhancing Technologies',
    track: 'Grid & Infrastructure',
    description: 'This panel will explore the technologies unlocking capacity quickly and cheaply, from flexible loads and dynamic line ratings to consumer products. We\'ll examine how policy, community engagement, and innovation are reshaping how much power our grid can deliver before we build a single new line.',
    speakers: [
      { name: 'Julia Selker', title: 'Executive Director, Watt Coalition' },
      { name: 'Tom Nudell', title: 'CEO, Piq Energy' },
      { name: 'Matthew Baker', title: 'Commissioner, California Public Utilities Commission' },
    ],
  },
  {
    title: 'Economic Development Strategies for Booming Energy Demand',
    track: 'Policy & Markets',
    description: 'This panel will explore the strategies communities and their partners can employ to harness this new era of energy growth to their benefit. From working with developers to government agencies, we\'ll dig into how communities can be strategic about surging energy demand and leverage the energy boom for local economic development.',
    speakers: [
      { name: 'Kate Gordon', title: 'CEO, California Forward' },
      { name: 'Wahleah Johns', title: 'Managing Director, Four Directions Fund' },
      { name: 'Sarah Friedman', title: 'Founder, Building Better Data Centers' },
    ],
  },
  {
    title: 'Breaking the Interconnection Bottleneck: How Projects Actually Get Built',
    track: 'Grid & Infrastructure',
    description: 'This panel seeks to explain why interconnection has become such a critical bottleneck for energy developers and explore some of the strategies developers are using to work around it. We will weigh behind-the-meter/on-site microgrids, software, and permitting reform as potential solutions.',
    speakers: [
      { name: 'Liane Randolph', title: 'Former Chair of the California Air Resources Board & California Public Utilities Commissioner' },
      { name: 'Andrew Spurling', title: 'Director of Development, White Pine Renewables' },
    ],
  },
  {
    title: 'The Proactive Grid Citizen: Turning Large Loads into Grid Assets',
    track: 'AI & Energy',
    description: 'This panel will explore whether these surging electricity demand from AI data centers and electrification can be managed as active partners in grid stability rather than just being viewed as a strain on our existing infrastructure. We\'ll dig into the technical and regulatory hurdles that prevent flexible energy resources from scaling and look at why traditional planning often struggles to trust these new flexible solutions.',
    speakers: [
      { name: 'Pete Edmunds', title: 'Partnerships Director, Voltus' },
      { name: 'Zachary Struyk', title: 'Associate Director, San Jose Clean Energy' },
      { name: 'Eric Gimon', title: 'Senior Fellow, Energy Innovation' },
      { name: 'Jeff Deason', title: 'Energy and Environmental Policy Researcher, Lawrence Berkeley National Laboratory' },
    ],
  },
  {
    title: 'Capacity for Tomorrow: Storage and the Infrastructure Tradeoff',
    track: 'Grid & Infrastructure',
    description: 'This panel brings together companies on both sides of energy storage and demand: those deploying storage solutions and those facing capacity constraints. We\'ll explore why different technologies get built, what load profiles and technoeconomics drive those choices, and whether storage is genuinely solving capacity shortage or substituting for transmission infrastructure we should be building instead.',
    speakers: [
      { name: 'Jonathan Lesh', title: 'Finance, Antora' },
    ],
  },
  {
    title: 'Infrastructure Supercycle: A Capital Markets Update',
    track: 'Policy & Markets',
    description: 'In this era of the Electrocene, electricity demand is accelerating, driven by AI, data center expansion, electrification, and industrial growth. Meeting this surge requires unprecedented investment in large-scale energy infrastructure. How is capital flowing across growth, infrastructure, and platform phases to finance what gets built? This panel brings together investors and a late-stage operator to examine how markets are responding to policy shifts, rising load, and the need to balance reliability, affordability, and decarbonization.',
    speakers: [
      { name: 'Margaret Roddy', title: 'Vice President, TPG Rise Climate' },
    ],
  },
  {
    title: 'Metals & Minerals of the Electrocene',
    track: 'Policy & Markets',
    description: 'Exploring what it takes to build the supply chains required for reliable, electrified energy systems from the perspective of investors and entrepreneurs.',
    speakers: [
      { name: 'Melissa Zhang', title: 'Principal, Azimuth Capital Management' },
      { name: 'Leonardo Banchik, PhD', title: 'Director, Voyager Ventures' },
    ],
  },
  {
    title: 'Unplugged: Global Energy Policy Realignment in the Electrocene',
    track: 'Policy & Markets',
    description: 'In the midst of global realignment and turbulence, how are countries reassessing their energy strategies to address the urgent issues of energy sovereignty, affordability, and decarbonization. This panel takes a deep dive into how China and India are approaching the Electrocene.',
    speakers: [
      { name: 'Fan Dai', title: 'Co-founder of UC Berkeley California-China Climate Institute' },
      { name: 'Nikit Abhyankar', title: 'Co-Faculty Director, India Energy & Climate Center' },
    ],
  },
];

const day2EmergingTech = [
  {
    company: 'CalWave',
    description: "CalWave's mission is to provide reliable, cost-effective ocean wave technologies for secure energy access.",
    speaker: { name: 'Marcus Lehmann', title: 'CEO and Founder' },
  },
];

export default function Agenda() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [activeTrack, setActiveTrack] = useState('All');
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const filteredDay1 = activeTrack === 'All' 
    ? day1Sessions 
    : day1Sessions.filter(s => s.track === activeTrack);

  const filteredDay2Panels = activeTrack === 'All' 
    ? day2Panels 
    : day2Panels.filter(s => s.track === activeTrack);

  return (
    <section id="agenda" className="py-24 px-4 bg-[var(--gray-dark)]/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-electric)] to-transparent opacity-30" />
      
      <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="font-typewriter text-[var(--text-gray)] text-sm tracking-[0.2em] uppercase mb-4 block">
            April 20 & 22, 2026
          </span>
          <h2 className="font-typewriter text-4xl md:text-5xl text-[var(--text-white)] mb-6">
            Summit Agenda
          </h2>
          <div className="w-24 h-1 bg-[var(--accent-electric)] mx-auto" />
        </motion.div>

        {/* Day Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setActiveDay(1)}
            className={`font-typewriter px-6 py-3 text-base transition-all duration-300 ${
              activeDay === 1
                ? 'bg-[var(--accent-electric)] text-[var(--gray-darkest)] font-semibold'
                : 'bg-[var(--gray-light)] text-[var(--text-white)] hover:bg-[var(--gray-base)]'
            }`}
          >
            <span className="block text-xs uppercase tracking-wider mb-1">Day 1</span>
            Monday, April 20
          </button>
          <button
            onClick={() => setActiveDay(2)}
            className={`font-typewriter px-6 py-3 text-base transition-all duration-300 ${
              activeDay === 2
                ? 'bg-[var(--accent-electric)] text-[var(--gray-darkest)] font-semibold'
                : 'bg-[var(--gray-light)] text-[var(--text-white)] hover:bg-[var(--gray-base)]'
            }`}
          >
            <span className="block text-xs uppercase tracking-wider mb-1">Day 2</span>
            Wednesday, April 22
          </button>
        </motion.div>

        {/* Track Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setActiveTrack(track)}
              className={`font-typewriter px-4 py-2 text-sm transition-all duration-300 ${
                activeTrack === track
                  ? 'bg-[var(--text-gray)] text-[var(--gray-darkest)]'
                  : 'bg-transparent text-[var(--text-gray)] border border-[var(--text-gray)]/30 hover:border-[var(--text-gray)]'
              }`}
            >
              {track}
            </button>
          ))}
        </motion.div>

        {/* Day 1 Content */}
        {activeDay === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="font-typewriter text-2xl text-[var(--text-white)] mb-6 text-center">
              Workshops
            </h3>
            <div className="space-y-4">
              {filteredDay1.map((session, index) => (
                <motion.div
                  key={session.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="vintage-border bg-[var(--gray-light)]/50 hover:bg-[var(--gray-light)]/70 transition-all cursor-pointer"
                  onClick={() => setExpandedSession(expandedSession === session.title ? null : session.title)}
                >
                  <div className="p-4 md:p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs px-2 py-1 bg-[var(--accent-electric)]/20 text-[var(--accent-electric)] rounded">
                        {session.track}
                      </span>
                      <button className="text-[var(--text-gray)]">
                        {expandedSession === session.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    
                    <h3 className="font-typewriter text-lg md:text-xl text-[var(--text-white)] mb-2">
                      {session.title}
                    </h3>
                    
                    {expandedSession === session.title && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 border-t border-[var(--text-gray)]/20 pt-4"
                      >
                        <p className="text-[var(--text-gray)] leading-relaxed mb-4">
                          {session.description}
                        </p>
                        {session.speakers.length > 0 && (
                          <div>
                            <h4 className="font-typewriter text-sm text-[var(--accent-electric)] uppercase tracking-wider mb-3">
                              Speakers
                            </h4>
                            <div className="space-y-2">
                              {session.speakers.map((speaker) => (
                                <div key={speaker.name} className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-[var(--accent-electric)]/20 flex items-center justify-center flex-shrink-0">
                                    <User className="w-4 h-4 text-[var(--accent-electric)]" />
                                  </div>
                                  <div>
                                    <span className="text-[var(--text-white)] font-medium">{speaker.name}</span>
                                    <span className="text-[var(--text-gray)] text-sm"> — {speaker.title}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
              
              <div className="text-center py-8">
                <p className="font-typewriter text-[var(--accent-electric)] text-lg italic">
                  And more to come!
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Day 2 Content */}
        {activeDay === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {/* Headline Speakers */}
            <div className="mb-12">
              <h3 className="font-typewriter text-2xl text-[var(--text-white)] mb-6 text-center">
                Headline Speakers
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {headlineSpeakers.map((speaker, index) => (
                  <motion.div
                    key={speaker.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="vintage-border bg-[var(--gray-light)]/50 p-6 text-center w-64"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 relative border-2 border-[var(--accent-electric)]/30">
                      <Image
                        src={speaker.image}
                        alt={speaker.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: speaker.imagePosition }}
                      />
                    </div>
                    <h4 className="font-typewriter text-base text-[var(--text-white)] mb-1">
                      {speaker.name}
                    </h4>
                    <p className="text-xs text-[var(--text-gray)] leading-snug">
                      {speaker.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Keynote Presentations */}
            <div className="mb-12">
              <h3 className="font-typewriter text-2xl text-[var(--text-white)] mb-6 text-center">
                Keynote Presentations
              </h3>
              <div className="flex justify-center gap-4">
                {keynotePresentations.map((keynote, index) => (
                  <motion.div
                    key={keynote.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="vintage-border bg-[var(--gray-light)]/50 p-6 text-center w-64"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 relative border-2 border-[var(--accent-electric)]/30">
                      <Image
                        src={keynote.speaker.image}
                        alt={keynote.speaker.name}
                        fill
                        className="object-cover"
                        style={{ objectPosition: keynote.speaker.imagePosition }}
                      />
                    </div>
                    <h4 className="font-typewriter text-base text-[var(--text-white)] mb-1">
                      {keynote.speaker.name}
                    </h4>
                    <p className="text-xs text-[var(--text-gray)] leading-snug mb-3">
                      {keynote.speaker.title}
                    </p>
                    <p className="font-typewriter text-sm text-[var(--accent-electric)] italic">
                      {keynote.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Panels */}
            <div className="mb-12">
              <h3 className="font-typewriter text-2xl text-[var(--text-white)] mb-6 text-center">
                Panels
              </h3>
              <div className="space-y-4">
                {filteredDay2Panels.map((panel, index) => (
                  <motion.div
                    key={panel.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="vintage-border bg-[var(--gray-light)]/50 hover:bg-[var(--gray-light)]/70 transition-all cursor-pointer"
                    onClick={() => setExpandedSession(expandedSession === panel.title ? null : panel.title)}
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-[var(--accent-electric)]/20 text-[var(--accent-electric)] rounded">
                          {panel.track}
                        </span>
                        <button className="text-[var(--text-gray)]">
                          {expandedSession === panel.title ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>
                      
                      <h3 className="font-typewriter text-lg md:text-xl text-[var(--text-white)] mb-2">
                        {panel.title}
                      </h3>
                      
                      {expandedSession === panel.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 border-t border-[var(--text-gray)]/20 pt-4"
                        >
                          <p className="text-[var(--text-gray)] leading-relaxed mb-4">
                            {panel.description}
                          </p>
                          {panel.speakers.length > 0 && (
                            <div>
                              <h4 className="font-typewriter text-sm text-[var(--accent-electric)] uppercase tracking-wider mb-3">
                                Speakers
                              </h4>
                              <div className="space-y-2">
                                {panel.speakers.map((speaker) => (
                                  <div key={speaker.name} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[var(--accent-electric)]/20 flex items-center justify-center flex-shrink-0">
                                      <User className="w-4 h-4 text-[var(--accent-electric)]" />
                                    </div>
                                    <div>
                                      <span className="text-[var(--text-white)] font-medium">{speaker.name}</span>
                                      <span className="text-[var(--text-gray)] text-sm"> — {speaker.title}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
                
              </div>
            </div>

            {/* Emerging Tech Power Hour */}
            <div>
              <h3 className="font-typewriter text-2xl text-[var(--text-white)] mb-4 text-center">
                Emerging Tech Power Hour
              </h3>
              <p className="text-[var(--text-gray)] text-base leading-relaxed text-left mb-6">
                The Emerging Tech Power Hour is a curated showcase featuring 10-minute presentations from early-stage clean energy companies — spanning industrial decarbonization, advanced storage, home electrification, and advanced nuclear. Speakers cover their core technology, founding thesis, and deployment progress to date.
              </p>
              {/* CalWave card hidden for now — re-enable by removing the false && condition */}
              <div className="space-y-4">
                {false && day2EmergingTech.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="vintage-border bg-[var(--gray-light)]/50 hover:bg-[var(--gray-light)]/70 transition-all cursor-pointer"
                    onClick={() => setExpandedSession(expandedSession === item.company ? null : item.company)}
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-typewriter text-lg md:text-xl text-[var(--text-white)]">
                          {item.company}
                        </h3>
                        <button className="text-[var(--text-gray)]">
                          {expandedSession === item.company ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                      </div>

                      {expandedSession === item.company && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 border-t border-[var(--text-gray)]/20 pt-4"
                        >
                          <p className="text-[var(--text-gray)] leading-relaxed mb-4">
                            {item.description}
                          </p>
                          <div>
                            <h4 className="font-typewriter text-sm text-[var(--accent-electric)] uppercase tracking-wider mb-3">
                              Speaker
                            </h4>
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-[var(--accent-electric)]/20 flex items-center justify-center flex-shrink-0">
                                <User className="w-4 h-4 text-[var(--accent-electric)]" />
                              </div>
                              <div>
                                <span className="text-[var(--text-white)] font-medium">{item.speaker.name}</span>
                                <span className="text-[var(--text-gray)] text-sm"> — {item.speaker.title}</span>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="text-center py-8">
                <p className="font-typewriter text-[var(--accent-electric)] text-lg italic">
                  More to come!
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
