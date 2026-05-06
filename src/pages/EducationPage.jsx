import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award, Sparkles, Target, Star } from 'lucide-react';

const EducationPage = () => {
  const education = [
    {
      title: 'B.Tech in Computer Engineering',
      org: 'Thapar Institute of Engineering and Technology',
      period: '2024 - 2028',
      score: '9.66 CGPA',
      desc: 'Focusing on software architecture, algorithms, and high-performance computing.',
      icon: <GraduationCap size={16} />,
      status: 'Current'
    },
    {
      title: 'JEE Entrance Examination',
      org: 'National Testing Agency',
      period: '2024',
      score: '95.7 Percentile',
      desc: 'Successfully cleared JEE Mains to secure admission at Thapar Institute.',
      icon: <Award size={16} />,
      status: 'Exam'
    },
    {
      title: 'Higher Secondary (12th)',
      org: 'Holy Heart Public School',
      period: '2022 - 2024',
      score: '92.8 %',
      desc: 'Completed secondary education with a focus on Physics, Chemistry, and Mathematics.',
      icon: <BookOpen size={16} />,
      status: 'Completed'
    },
    {
      title: 'Secondary Education (10th)',
      org: 'Holy Heart Public School',
      period: '2020 - 2022',
      score: '92.8 %',
      desc: 'Completed secondary schooling with a strong academic foundation.',
      icon: <Sparkles size={16} />,
      status: 'Completed'
    }
  ];

  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6 animate-fade-in">
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-indigo-500"></div>
          <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">Academic</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Education <span className="text-indigo-600">History.</span>
        </h1>
        <p className="text-base text-slate-500 font-medium max-w-xl leading-relaxed">
          My academic path from secondary schooling to my current engineering studies at Thapar Institute.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {education.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative p-8 bg-white border border-slate-100 rounded-[2.5rem] hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-50/20 transition-all duration-500 flex flex-col md:flex-row md:items-center gap-8"
          >
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${item.status === 'Current' ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' : 'bg-slate-50 text-slate-400'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.org}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1">{item.period}</span>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Score:</span>
                    <span className="text-sm font-black text-slate-900">{item.score}</span>
                  </div>
                </div>
              </div>

              <p className="text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EducationPage;
