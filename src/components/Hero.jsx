import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Globe, Cpu, Mail, ArrowRight, Code2, Sparkles, Fingerprint } from 'lucide-react';

const Hero = () => {
  const navigationItems = [
    { name: 'About Me', to: '/about', desc: 'Personality & Tech Stack.', icon: <User size={20} /> },
    { name: 'Projects', to: '/projects', desc: 'Building digital systems.', icon: <Globe size={20} /> },
    { name: 'Education', to: '/education', desc: 'Academic background.', icon: <Cpu size={20} /> },
    { name: 'Contact', to: '/contact', desc: 'Let\'s start a conversation.', icon: <Mail size={20} /> },
  ];

  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-[80vh] pt-16 pb-8 px-6 max-w-7xl mx-auto flex flex-col justify-center relative">
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
          
          {/* Left Column: Focused Introduction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 text-slate-400 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] mb-10">
              <Fingerprint size={14} className="text-indigo-600" />
              <span>Computer Engineer</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-tight">
              Krish <br className="hidden md:block" />
              <span className="text-indigo-600">Kataria.</span>
            </h1>
            
            <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium max-w-xl mb-10 mx-auto lg:mx-0">
              I'm a Computer Engineering student at <span className="text-slate-900 font-bold">Thapar Institute of Engineering and Technology</span> dedicated to building efficient software and solving real-world problems.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link to="/projects" className="px-8 py-4 bg-slate-900 text-white rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest hover:bg-indigo-600 transition-all flex items-center gap-3 group shadow-2xl shadow-slate-200">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-8 py-4 bg-white border border-slate-100 text-slate-900 rounded-[1.5rem] font-black uppercase text-[10px] tracking-widest hover:border-indigo-600 hover:text-indigo-600 transition-all">
                Let's Connect
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Quick Navigation List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {navigationItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
              >
                <Link to={item.to} className="group flex items-center gap-6 p-5 bg-white border border-slate-100 rounded-[2rem] hover:border-slate-900 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all duration-500">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:text-white group-hover:rotate-6 transition-all duration-500 shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-slate-900 mb-0.5 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest leading-tight">{item.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all">
                    <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Home Content - Vision Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border-t border-slate-50 pt-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-[1px] w-12 bg-indigo-500"></div>
                  <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">My Goal</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">Making <br /><span className="text-indigo-600">Useful Apps.</span></h2>
                <p className="text-lg text-slate-500 font-medium leading-relaxed mb-8">
                  I focus on writing good code and helping others. Whether it's teaching kids or building new apps, I try to make things that actually matter.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-[10px] font-black text-indigo-600 uppercase tracking-widest group">
                  Learn more about me
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between h-56">
                   <Code2 className="text-indigo-600 mb-4" size={24} />
                   <div>
                     <h3 className="text-base font-bold text-slate-900 mb-2">Good Code</h3>
                     <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Clean & Simple</p>
                   </div>
                </div>
                <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col justify-between h-56">
                   <Sparkles className="text-indigo-400 mb-4" size={24} />
                   <div>
                     <h3 className="text-base font-bold mb-2">Smart Ideas</h3>
                     <p className="text-[10px] text-indigo-300 font-bold uppercase tracking-widest">Creative Solutions</p>
                   </div>
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 max-w-7xl mx-auto px-6 w-full">
        <div className="p-10 md:p-20 bg-slate-900 rounded-[3rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-indigo-900/20">
          <div className="absolute top-0 right-0 p-20 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
            <Globe size={400} className="text-white" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">Ready to build <span className="text-indigo-400">something?</span></h2>
            <Link to="/contact" className="inline-flex px-10 py-5 md:px-12 md:py-6 bg-indigo-600 text-white rounded-[1.5rem] md:rounded-[2rem] font-black uppercase text-[10px] md:text-xs tracking-[0.2em] hover:bg-indigo-500 hover:scale-105 transition-all shadow-2xl shadow-indigo-500/40">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
