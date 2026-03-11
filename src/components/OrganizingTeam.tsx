'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';

const coVPs = [
  { name: 'Iliana Griva', role: 'Co-VP', image: '/images/OrgTeam/Iliana Griva.jpeg' },
  { name: 'Samuel Houmaoui', role: 'Co-VP', image: '/images/OrgTeam/Samuel Houmaoui.jpeg' },
];

const directors = [
  { name: 'Tomas Diez Canedo', role: 'Director of Engagement', image: '/images/OrgTeam/Tomas Canedo.jpeg' },
  { name: 'Jen Chan', role: 'Director of Design', image: '/images/OrgTeam/Jen Chan.jpeg' },
  { name: 'Tomas Augusto Coello', role: 'Director of Workshops', image: '/images/OrgTeam/Tomas Coello.png' },
  { name: 'Lukin (Louie) Jacobs', role: 'Director of Headline Speakers', image: '/images/OrgTeam/Lukin Jacob.jpeg' },
  { name: 'Patricia Nader', role: 'Director of Workshops', image: '/images/OrgTeam/Patricia Nader.jpeg' },
  { name: 'Frances Swanson', role: 'Director of Content', image: '/images/OrgTeam/Frances Swanson.jpeg' },
];

const MemberCard = ({ member, index, isInView, large = false }: {
  member: { name: string; role: string; image: string };
  index: number;
  isInView: boolean;
  large?: boolean;
}) => (
  <motion.div
    key={member.name}
    initial={{ opacity: 0, y: 10 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
    className={`bg-[var(--teal-light)]/40 border border-[var(--accent-cyan)]/10 p-4 text-center rounded-sm ${large ? 'w-44' : 'w-36'}`}
  >
    <div className={`${large ? 'w-20 h-20' : 'w-16 h-16'} rounded-full overflow-hidden mx-auto mb-2 relative`}>
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
    <h3 className={`font-typewriter ${large ? 'text-base' : 'text-sm'} text-[var(--text-white)] mb-0.5 truncate`}>
      {member.name}
    </h3>
    <p className={`${large ? 'text-sm' : 'text-xs'} text-[var(--text-gray)] truncate`}>
      {member.role}
    </p>
  </motion.div>
);

export default function OrganizingTeam() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="team" className="py-16 px-4 bg-[var(--teal-base)]/30 relative">
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="font-typewriter text-2xl md:text-3xl text-[var(--text-white)] mb-3">
            Organizing Team
          </h2>
          <div className="w-16 h-0.5 bg-[var(--accent-cyan)] mx-auto" />
        </motion.div>

        {/* Co-VPs row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-4 mb-6"
        >
          {coVPs.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index} isInView={isInView} />
          ))}
        </motion.div>

        {/* Directors row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid grid-cols-3 md:grid-cols-6 gap-3"
        >
          {directors.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index + 2} isInView={isInView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
