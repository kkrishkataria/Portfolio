import React from 'react';
import { motion } from 'framer-motion';
import { Star, Sparkles, Trophy, Award, Heart } from 'lucide-react';

const Experience = () => {
  const honors = [
    {
      title: 'Bharti Airtel Scholar',
      org: 'Bharti Airtel Foundation',
      period: '2024 - 2028',
      desc: 'Selected among the top 250 students across India for academic excellence and leadership potential. Awarded a prestigious merit scholarship for the entire duration of the B.Tech program.',
      icon: <Trophy size={20} />,
      accent: "hover:border-amber-400 hover:shadow-amber-50/50",
      type: "Foundation"
    },
    {
      title: 'College Merit Scholarship',
      org: 'Thapar Institute (TIET)',
      period: '2024 - 2027',
      desc: 'Consistently awarded the merit scholarship for three consecutive years (1st, 2nd, and 3rd year) for maintaining an outstanding academic record and ranking among the top performers.',
      icon: <Award size={20} />,
      accent: "hover:border-indigo-600 hover:shadow-indigo-50/50",
      type: "Academic",
      tags: ['1st Year', '2nd Year', '3rd Year']
    },
    {
      title: 'Pratigya Society (NGO)',
      org: 'TIET, Patiala',
      period: '2024 - Present',
      desc: 'Active member of one of TIET’s largest societies, providing academic support and mentorship to underprivileged children and university staff families to promote community-wide literacy.',
      icon: <Heart size={20} />,
      accent: "hover:border-rose-400 hover:shadow-rose-50/50",
      type: "Volunteering"
    }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-12 max-w-7xl mx-auto px-6 animate-fade-in min-h-[calc(100vh-80px)] flex flex-col justify-center">
      <div className="mb-10 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <div className="h-[1px] w-12 bg-indigo-500"></div>
          <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">Pathways</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
          Experience & <span className="text-indigo-600">Impact.</span>
        </h1>
        <p className="text-base text-slate-500 font-medium max-w-xl leading-relaxed md:mx-0 mx-auto">
          Academic honors and community leadership roles.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {honors.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 h-full flex flex-col"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{item.period}</span>
            </div>
            
            <div className="flex-1">
              <span className="text-[8px] font-black px-2 py-0.5 bg-indigo-50 text-indigo-600 uppercase tracking-widest rounded-md mb-3 inline-block">
                {item.type}
              </span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors tracking-tight leading-tight">
                {item.title}
              </h3>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4">
                {item.org}
              </p>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>

            {item.tags && (
              <div className="flex flex-wrap gap-1.5 mt-6 pt-6 border-t border-slate-50">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="px-2 py-1 bg-slate-50 text-[8px] font-black text-slate-400 uppercase tracking-widest rounded-md border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
