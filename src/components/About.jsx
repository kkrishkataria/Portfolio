import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, BrainCircuit, Terminal, Dumbbell, ExternalLink, Globe, Cpu, Wrench, BookOpen, Music, Search } from 'lucide-react';
import { LeetCodeIcon } from './Icons';

const About = () => {
  const skillGroups = [
    { 
      category: 'Languages', 
      skills: ['C++', 'Python', 'JavaScript', 'MATLAB', 'R', 'SQL'], 
      icon: <Terminal size={18} />,
      color: "text-indigo-600 bg-indigo-50"
    },
    { 
      category: 'Development', 
      skills: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'], 
      icon: <Globe size={18} />,
      color: "text-emerald-600 bg-emerald-50"
    },
    { 
      category: 'Computer Science', 
      skills: ['DSA', 'Algorithms', 'OS', 'DBMS'], 
      icon: <Cpu size={18} />,
      color: "text-blue-600 bg-blue-50"
    },
    { 
      category: 'Tools', 
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite'], 
      icon: <Wrench size={18} />,
      color: "text-orange-600 bg-orange-50"
    }
  ];

  const hobbies = [
    { name: 'Fitness', icon: <Dumbbell size={14} /> },
    { name: 'Reading', icon: <BookOpen size={14} /> },
    { name: 'Music', icon: <Music size={14} /> }
  ];

  return (
    <section className="py-12 max-w-6xl mx-auto px-6">
      <div className="flex flex-col lg:flex-row gap-12 items-start mb-16">
        
        {/* Profile Sidebar */}
        <div className="lg:w-1/3 w-full flex flex-col items-center lg:items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl relative z-10">
              <img 
                src="/profile.png" 
                alt="Krish Kataria" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x400?text=Profile"; }}
              />
            </div>
          </motion.div>

          <div className="space-y-3 w-full max-w-[280px]">
            <a href="https://leetcode.com/u/krishkataria123/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-3xl hover:border-indigo-600 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <BrainCircuit size={20} />
                </div>
                <span className="text-sm font-bold text-slate-900">LeetCode</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-slate-400 group-hover:text-indigo-600 transition-colors">500+</span>
                <LeetCodeIcon size={16} className="text-slate-300 group-hover:text-indigo-600" />
              </div>
            </a>
            
            <Link to="/projects" className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-3xl hover:border-slate-900 hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <Code2 size={20} />
                </div>
                <span className="text-sm font-bold text-slate-900">Projects</span>
              </div>
              <ExternalLink size={16} className="text-slate-300 group-hover:text-slate-900" />
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              <Search size={12} />
              <span>Academic Profile</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
              Computer Engineering. <br />
              <span className="text-indigo-600">Problem Solver.</span>
            </h1>
            <p className="text-base text-slate-500 font-medium leading-relaxed max-w-2xl">
              Second-year student at Thapar Institute (2024-2028). 
              Focused on mastering algorithms and building efficient software.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-12">
            {skillGroups.map((group, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-8 h-8 ${group.color} rounded-xl flex items-center justify-center`}>
                    {group.icon}
                  </div>
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1.5 bg-white border border-slate-100 rounded-xl text-[11px] font-bold text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition-all cursor-default shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Small Hobbies Section */}
          <div className="pt-8 border-t border-slate-100">
            <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6">Beyond the Code</h3>
            <div className="flex flex-wrap gap-4">
              {hobbies.map((hobby, idx) => (
                <div key={idx} className="flex items-center gap-3 px-4 py-2 bg-slate-50/50 rounded-2xl border border-slate-100 text-slate-500">
                  {hobby.icon}
                  <span className="text-[11px] font-bold">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
