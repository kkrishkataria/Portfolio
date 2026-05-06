import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './Icons';

const Contact = () => {
  const socialLinks = [
    { name: 'Email', value: 'kkrishkataria@gmail.com', icon: <Mail size={20} />, link: 'mailto:kkrishkataria@gmail.com', desc: 'Drop me a line' },
    { name: 'LinkedIn', value: 'Krish Kataria', icon: <LinkedinIcon size={20} />, link: 'https://www.linkedin.com/in/krish-kataria-0b46bb321', desc: 'Connect professionally' },
    { name: 'GitHub', value: '@kkrishkataria', icon: <GithubIcon size={20} />, link: 'https://github.com/kkrishkataria', desc: 'Check my code' },
    { name: 'Instagram', value: '@_krishkataria', icon: <InstagramIcon size={20} />, link: 'https://www.instagram.com/_krishkataria/', desc: 'Follow me' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative p-8 md:p-16 bg-white border border-slate-100 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-indigo-500/5"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-30"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Let's connect.</h2>
            <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10">
              I'm currently looking for new opportunities and my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] bg-slate-50 w-fit px-5 py-2.5 rounded-2xl border border-slate-100/50">
              <MapPin size={14} className="text-indigo-600" /> Punjab, India
            </div>
          </div>

          <div className="space-y-4">
            {socialLinks.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-between p-6 bg-slate-50/50 hover:bg-white border border-transparent hover:border-slate-100 rounded-3xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 shadow-sm transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1.5">{item.name}</p>
                    <p className="text-base font-black text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">{item.value}</p>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-slate-200 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-all duration-300">
                  <ArrowUpRight size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
