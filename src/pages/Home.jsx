import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Layers, ShieldCheck, Zap, Cpu, CloudSun, DollarSign, Scissors, Microscope, Droplet, Bot, Lock, Globe } from 'lucide-react';
import Hero from '../components/Hero';

const Home = () => {
  const values = [
    {
      icon: <Layers size={24} />,
      title: "Solid Structure",
      desc: "Building software that is easy to manage and grow.",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Fast & Stable",
      desc: "Making sure everything runs smoothly and stays reliable.",
    },
    {
      icon: <Zap size={24} />,
      title: "Modern Tools",
      desc: "Using the latest technology to build better solutions.",
    }
  ];

  return (
    <div className="animate-fade-in bg-white">
      <Hero />
      
      {/* Philosophy Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="h-[1px] w-12 bg-indigo-500"></div>
              <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">Philosophy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter">
              How I <span className="text-indigo-600">Work.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500 mb-6 shadow-sm">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">{value.title}</h4>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* New GitHub Repositories Spotlight */}
          <div className="pt-12 border-t border-slate-200/60">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-[1px] w-8 bg-slate-300"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Codebase</span>
                </div>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter italic">GitHub <span className="text-indigo-600">Spotlight.</span></h3>
              </div>
              <a href="https://github.com/kkrishkataria" target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-slate-400 hover:text-indigo-600 uppercase tracking-widest transition-colors flex items-center gap-2">
                View All Repositories <span className="text-lg">→</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'CPU Prediction', link: 'https://github.com/kkrishkataria/CPU-Prediction', icon: <Cpu size={16} /> },
                { name: 'Weather App', link: 'https://github.com/kkrishkataria/Weather-App', icon: <CloudSun size={16} /> },
                { name: 'Currency Converter', link: 'https://github.com/kkrishkataria/Currency-Converter', icon: <DollarSign size={16} /> },
                { name: 'Stone Paper Scissors', link: 'https://github.com/kkrishkataria/Stone-Paper-Scissors', icon: <Scissors size={16} /> },
                { name: 'Malaria Predictor', link: 'https://github.com/kkrishkataria/Malaria-Cell-prediction', icon: <Microscope size={16} /> },
                { name: 'Blood Bank', link: 'https://github.com/kkrishkataria/Blood-Bank', icon: <Droplet size={16} /> },
                { name: 'Robotics Pipeline', link: 'https://github.com/kkrishkataria/Robotics-Egocentric-Data-Pipeline', icon: <Bot size={16} /> },
                { name: 'Password Generator', link: 'https://github.com/kkrishkataria/Password-Generator', icon: <Lock size={16} /> },
                { name: 'Personal Website', link: 'https://github.com/kkrishkataria/krishkataria.github.io', icon: <Globe size={16} /> }
              ].map((repo, idx) => (
                <motion.a
                  key={idx}
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white border border-slate-100 rounded-[1.5rem] hover:border-indigo-600 hover:shadow-xl hover:shadow-indigo-500/5 transition-all group flex flex-col justify-between min-h-[140px]"
                >
                  <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all mb-4">
                    {repo.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors leading-tight">{repo.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Snapshot Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            
            {/* Core Metrics */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-slate-200"></div>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">Snapshot</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:border-indigo-100 transition-all duration-300">
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">9.66</div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Current CGPA</p>
                </div>
                <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] hover:border-indigo-100 transition-all duration-300">
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tighter">500+</div>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">Problems Solved</p>
                </div>
              </div>
            </div>

            {/* Current Focus */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-slate-200"></div>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">The Now</span>
              </div>
              <div className="p-10 bg-indigo-50/20 border border-indigo-100/30 rounded-[3rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-all"></div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></div>
                  <span className="text-[9px] font-black text-indigo-600 uppercase tracking-[0.2em]">Active Development</span>
                </div>
                <p className="text-base text-slate-600 font-medium leading-relaxed relative z-10">
                  Currently mastering <span className="text-slate-900 font-bold tracking-tight underline decoration-indigo-200 underline-offset-4">Advanced Data Structures</span> and exploring <span className="text-slate-900 font-bold tracking-tight underline decoration-indigo-200 underline-offset-4">AI-driven diagnostics</span> for medical technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-8xl text-indigo-50 font-serif leading-none mb-0 block opacity-50">"</span>
            <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-12">
              I enjoy solving problems and <span className="text-indigo-600">building things</span> that people can actually use.
            </p>
            <div className="flex items-center justify-center gap-6">
               <div className="h-[1px] w-12 bg-slate-100"></div>
               <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Krish Kataria</span>
               <div className="h-[1px] w-12 bg-slate-100"></div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
