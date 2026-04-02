'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Clock, ChevronDown, ChevronUp, User } from 'lucide-react';
import Image from 'next/image';

const tracks = ['All', 'Grid & Infrastructure', 'AI & Energy', 'Policy & Markets'];

const day1Schedule = [
  {
    time: '8:30 – 9:00 AM',
    type: 'break' as const,
    title: 'Registration',
    track: null,
    description: '',
    speakers: [],
  },
  {
    time: '9:10 – 9:30 AM',
    type: 'keynote' as const,
    title: 'Opening Keynote: Welcome to the Electrocene',
    track: null,
    description: '',
    speakers: [
      { name: 'Amaani Hamid', title: 'Head of Flexibility as a Service, Octopus Energy' },
    ],
  },
  {
    time: '9:30 – 10:00 AM',
    type: 'fireside' as const,
    title: 'Fireside Chat: Financing the Next Wave of Energy Infrastructure',
    track: null,
    description: 'In conversation with Sage Geosystems, hosted by Node.',
    speakers: [
      { name: 'Jack Fritzinger', title: 'Founder, Node' },
      { name: 'Jason Peart', title: 'COO, Sage Geosystems' },
    ],
  },
  {
    time: '10:00 – 11:00 AM',
    type: 'workshop' as const,
    title: 'Workshop: Project Finance — How Project Finance Determines What Gets Built',
    track: 'Policy & Markets',
    description: 'Equip attendees with a practical understanding of how project finance works for renewable energy projects—how debt is sized, how lenders assess risk, and how financial structures determine whether a project is viable.',
    speakers: [
      { name: 'Clearway Energy', title: 'Capital Markets Team' },
    ],
  },
  {
    time: '11:00 AM – 12:00 PM',
    type: 'workshop' as const,
    title: 'Workshop: PPAs in Practice — Behind-the-Meter vs. Front-of-Meter PPAs',
    track: 'Policy & Markets',
    description: 'Enable participants to evaluate and compare behind-the-meter and front-of-meter PPAs by understanding the tradeoffs in revenue certainty, risk allocation, and financing implications across different project structures.',
    speakers: [
      { name: 'Evan Riley', title: 'Founder of White Pine' },
    ],
  },
  {
    time: '12:00 – 1:00 PM',
    type: 'break' as const,
    title: 'Lunch & Networking',
    track: null,
    description: '',
    speakers: [],
  },
  {
    time: '1:00 – 2:00 PM',
    type: 'workshop' as const,
    title: 'Workshop: Financing the Energy Transition — Impact Measurement and Diligence',
    track: 'Policy & Markets',
    description: 'This workshop covers impact measurement in the energy transition, including methodologies to model avoided emissions, assess resilience and reliability, and determine a company\'s net impact. Participants will evaluate the products and services of complex companies to assess whether they meaningfully advance decarbonization or are not fit for purpose. The workshop is facilitated by an impact professional from Energy Impact Partners, a global energy technology investor with a proprietary model designed to drive innovation in the energy industry.',
    speakers: [
      { name: 'Natàlia Costa i Coromina', title: 'Sr. Associate, Impact, Energy Impact Partners' },
    ],
  },
  {
    time: '2:00 – 3:00 PM',
    type: 'workshop' as const,
    title: 'Workshop: Interconnection — Unlocking the Grid Expansion',
    track: 'Grid & Infrastructure',
    description: 'Give participants a practical, end-to-end understanding of the interconnection process, why timelines have exploded, and what emerging regulatory, technological, and market reforms could unlock faster grid expansion — with a special focus on new AI-driven load growth.',
    speakers: [],
  },
  {
    time: '3:00 – 4:00 PM',
    type: 'workshop' as const,
    title: 'Workshop: Data Centers — The Energy Problem',
    track: 'AI & Energy',
    description: 'What are the unique challenges AI data centers pose for the US electric grid, how developers and utilities evaluate sites, and what emerging clean energy solutions could sustainably power AI\'s massive load growth.',
    speakers: [
      { name: 'Luis Gonzalez', title: 'Microsoft' },
      { name: 'Nehali Jain', title: 'Antora Energy' },
      { name: 'PG&E', title: '' },
    ],
  },
  {
    time: '4:00 – 4:30 PM',
    type: 'closing' as const,
    title: 'Closing Fireside Chat: Blending Expertise in Pursuit of the Clean Energy Transition',
    track: null,
    description: 'Closing conversation on how diverse expertise—from venture investing to policy and the built environment—can come together to accelerate the clean energy transition. This fireside chat will explore how cross-sector collaboration is unlocking scalable climate solutions, the role of capital in driving innovation, and what it takes to turn ambitious climate goals into real-world impact.',
    speakers: [
      { name: 'Elaine Hsieh', title: 'COO of Volo Earth Ventures' },
      { name: 'Panama Bartholomy', title: 'Director of the Building Decarbonization Coalition' },
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
    title: 'Capacity for Tomorrow: Storage, Transmission, and the Infrastructure Tradeoff',
    track: 'Grid & Infrastructure',
    description: 'This panel brings together companies on both sides of energy storage and demand: those deploying storage solutions and those facing capacity constraints. We\'ll explore why different technologies get built, what load profiles and technoeconomics drive those choices, and whether storage is genuinely solving capacity shortage or substituting for transmission infrastructure we should be building instead.',
    speakers: [
      { name: 'Jonathan Lesh', title: 'Project Finance Associate, Antora Energy' },
      { name: 'Suraj Patel', title: 'Senior Manager, Solutions Engineering, Calibrant Energy' },
      { name: 'Arnaud Paquet', title: 'Senior Manager, Energy & Infrastructure Development, Crusoe' },
      { name: 'Phillipe Phanivong', title: 'Senior Program Manager, Grid Lab (Moderator)' },
    ],
  },
  {
    title: 'Infrastructure Supercycle: A Capital Markets Update',
    track: 'Policy & Markets',
    description: 'In this era of the Electrocene, electricity demand is accelerating, driven by AI, data center expansion, electrification, and industrial growth. Meeting this surge requires unprecedented investment in large-scale energy infrastructure. How is capital flowing across growth, infrastructure, and platform phases to finance what gets built? This panel brings together investors and a late-stage operator to examine how markets are responding to policy shifts, rising load, and the need to balance reliability, affordability, and decarbonization.',
    speakers: [
      { name: 'Margaret Roddy', title: 'Vice President, TPG Rise Climate' },
      { name: 'Natalia Costa i Coromina', title: 'Senior Associate, Impact, Energy Impact Partners' },
      { name: 'Daniel Kriozere', title: 'Moderator' },
    ],
  },
  {
    title: 'Building the Electrocene: A Resilient Supply Chain for Critical Minerals',
    track: 'Policy & Markets',
    description: 'Metals & Minerals of the Electrocene explores the critical role of materials supply chains in enabling 24/7 clean energy reliability - from firm power and grid infrastructure to electrification at scale. As the U.S. accelerates reshoring and domestic capacity-building across mining, processing, and advanced manufacturing, investors and entrepreneurs are navigating both strategic opportunity and geopolitical constraint. This panel will examine how capital, innovation, and industrial policy are converging to build resilient, secure, and scalable domestic supply chains for the next era of energy.',
    speakers: [
      { name: 'Melissa Zhang', title: 'Principal, Azimuth Capital Management' },
      { name: 'Leonardo Banchik, PhD', title: 'Director, Voyager Ventures' },
      { name: 'Dave Snydacker', title: 'Founder and CTO, Lilac Solutions' },
    ],
  },
  {
    title: 'Unplugged: Global Energy Policy Realignment in the Electrocene',
    track: 'Policy & Markets',
    description: 'In the midst of global realignment and turbulence, how are countries reassessing their energy strategies to address the urgent issues of energy sovereignty, affordability, and decarbonization. This panel takes a deep dive into how China, India, and the UK are approaching the Electrocene.',
    speakers: [
      { name: 'Fan Dai', title: 'Co-founder of UC Berkeley California-China Climate Institute' },
      { name: 'Nikit Abhyankar', title: 'Co-Faculty Director, India Energy & Climate Center' },
      { name: 'Rachel Kyte', title: 'UK Special Representative for Climate' },
      { name: 'Sarah Brady', title: 'Director of the California Energy Commission Office of Governmental and International Affairs' },
    ],
  },
];

const day2EmergingTech = [
  {
    company: 'CalWave',
    description: "CalWave develops scalable ocean wave energy converters that harness offshore wave power to deliver reliable, cost-effective clean electricity.",
    speaker: { name: 'Marcus Lehmann', title: 'CEO and Founder' },
  },
  {
    company: 'Hammerhead AI',
    description: "Hammerhead.ai builds AI-native software for grid operators and utilities to transform stranded power in data centers into AI-ready capacity.",
    speaker: { name: 'Surya Swamy', title: 'Head of Product Strategy', headshot: '/images/Power Hour/Surya headshot final.png' },
  },
  {
    company: 'Kairos Power',
    description: "Kairos Power is commercializing a fluoride salt-cooled high-temperature reactor designed to deliver safe, affordable, and dispatchable clean energy at scale.",
    speaker: { name: 'Candice Yu', title: 'Director of Business Development', headshot: '/images/Power Hour/Candice Yu.jpeg' },
  },
];

export default function Agenda() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const [activeTrack, setActiveTrack] = useState('All');
  const [expandedSession, setExpandedSession] = useState<string | null>(null);

  const filteredDay1 = activeTrack === 'All'
    ? day1Schedule
    : day1Schedule.filter(s => s.track === null || s.track === activeTrack);

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
            <div className="space-y-3">
              {filteredDay1.map((item, index) => {
                const isBreak = item.type === 'break';
                const isExpandable = !isBreak && (item.description || item.speakers.length > 0);
                const isExpanded = expandedSession === item.title;

                if (isBreak) {
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.05 * index }}
                      className="flex items-center gap-4 px-4 py-3 border border-[var(--text-gray)]/15 bg-[var(--gray-dark)]/40"
                    >
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Clock className="w-3 h-3 text-[var(--text-gray)]/50" />
                        <span className="font-typewriter text-xs text-[var(--text-gray)]/60 whitespace-nowrap">
                          {item.time}
                        </span>
                      </div>
                      <div className="h-px flex-1 bg-[var(--text-gray)]/15" />
                      <span className="font-typewriter text-sm text-[var(--text-gray)]/70 tracking-wider uppercase whitespace-nowrap">
                        {item.title}
                      </span>
                      <div className="h-px flex-1 bg-[var(--text-gray)]/15" />
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 * index }}
                    className={`vintage-border bg-[var(--gray-light)]/50 transition-all ${isExpandable ? 'hover:bg-[var(--gray-light)]/70 cursor-pointer' : ''}`}
                    onClick={() => isExpandable && setExpandedSession(isExpanded ? null : item.title)}
                  >
                    <div className="p-4 md:p-6">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3 h-3 text-[var(--text-gray)]/60" />
                            <span className="font-typewriter text-xs text-[var(--text-gray)]/70 whitespace-nowrap">
                              {item.time}
                            </span>
                          </div>
                          {item.track && (
                            <span className="text-xs px-2 py-1 bg-[var(--accent-electric)]/20 text-[var(--accent-electric)] rounded">
                              {item.track}
                            </span>
                          )}
                          {(item.type === 'keynote' || item.type === 'fireside' || item.type === 'closing') && (
                            <span className="text-xs px-2 py-1 bg-[var(--text-gray)]/10 text-[var(--text-gray)] rounded">
                              {item.type === 'keynote' ? 'Keynote' : item.type === 'fireside' ? 'Fireside Chat' : 'Closing'}
                            </span>
                          )}
                        </div>
                        {isExpandable && (
                          <button className="text-[var(--text-gray)] flex-shrink-0">
                            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                          </button>
                        )}
                      </div>

                      <h3 className="font-typewriter text-lg md:text-xl text-[var(--text-white)] mb-2">
                        {item.title}
                      </h3>

                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-4 border-t border-[var(--text-gray)]/20 pt-4"
                        >
                          {item.description && (
                            <p className="text-[var(--text-gray)] leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}
                          {item.speakers.length > 0 && (
                            <div>
                              <h4 className="font-typewriter text-sm text-[var(--accent-electric)] uppercase tracking-wider mb-3">
                                Speakers
                              </h4>
                              <div className="space-y-2">
                                {item.speakers.map((speaker) => (
                                  <div key={speaker.name} className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[var(--accent-electric)]/20 flex items-center justify-center flex-shrink-0">
                                      <User className="w-4 h-4 text-[var(--accent-electric)]" />
                                    </div>
                                    <div>
                                      <span className="text-[var(--text-white)] font-medium">{speaker.name}</span>
                                      {speaker.title && (
                                        <span className="text-[var(--text-gray)] text-sm"> — {speaker.title}</span>
                                      )}
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
                );
              })}
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

            {/* Emerging Tech Showcase */}
            <div>
              <h3 className="font-typewriter text-2xl text-[var(--text-white)] mb-4 text-center">
                Emerging Tech Showcase
              </h3>
              <p className="text-[var(--text-gray)] text-base leading-relaxed text-left mb-6">
                The Emerging Tech Showcase is a curated showcase featuring 10-minute presentations from early-stage clean energy companies — spanning industrial decarbonization, advanced storage, home electrification, and advanced nuclear. Speakers cover their core technology, founding thesis, and deployment progress to date.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {day2EmergingTech.map((item, index) => (
                  <motion.div
                    key={item.company}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="vintage-border bg-[var(--gray-light)]/50 p-5 flex flex-col gap-4"
                  >
                    <div>
                      <h4 className="font-typewriter text-lg text-[var(--text-white)] mb-2">
                        {item.company}
                      </h4>
                      <p className="text-[var(--text-gray)] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="border-t border-[var(--text-gray)]/20 pt-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-[var(--accent-electric)]/20 flex items-center justify-center flex-shrink-0">
                        {item.speaker.headshot ? (
                          <img src={item.speaker.headshot} alt={item.speaker.name} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-5 h-5 text-[var(--accent-electric)]" />
                        )}
                      </div>
                      <div>
                        <p className="text-[var(--text-white)] font-medium text-sm">{item.speaker.name}</p>
                        <p className="text-[var(--text-gray)] text-xs">{item.speaker.title}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
