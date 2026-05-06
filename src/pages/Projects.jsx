import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Sparkles, FolderGit2, Terminal, Cpu, Droplet } from 'lucide-react';
import { GithubIcon } from '../components/Icons';

const Projects = () => {
  const mainProjects = [
    {
      title: 'Malaria Cell Prediction',
      desc: 'An AI-powered diagnostic platform using deep learning to predict malaria from cell images.',
      tech: ['Python', 'PyTorch', 'FastAPI', 'React'],
      icon: <Cpu className="text-indigo-600" size={24} />,
      github: 'https://github.com/kkrishkataria/Malaria-Cell-prediction',
      accent: "border-indigo-100 bg-indigo-50/20"
    },
    {
      title: 'Blood Bank Management',
      desc: 'Full-stack application for managing blood donations and bank inventories with real-time tracking.',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      icon: <Droplet className="text-sky-600" size={24} />,
      github: 'https://github.com/kkrishkataria/Blood-Bank',
      accent: "border-sky-100 bg-sky-50/20"
    },
    {
      title: 'Robotics Data Pipeline',
      desc: 'Egocentric data pipeline for robotics applications, focusing on efficient data processing.',
      tech: ['Python', 'Robotics', 'Data Engineering'],
      icon: <Terminal className="text-emerald-600" size={24} />,
      github: 'https://github.com/kkrishkataria/Robotics-Egocentric-Data-Pipeline',
      accent: "border-emerald-100 bg-emerald-50/20"
    },
    {
      title: 'CPU Prediction',
      desc: 'Machine learning model designed to predict CPU performance metrics and utilization patterns.',
      tech: ['Python', 'ML', 'Data Analysis'],
      icon: <Sparkles className="text-amber-600" size={24} />,
      github: 'https://github.com/kkrishkataria/CPU-Prediction',
      accent: "border-amber-100 bg-amber-50/20"
    },
    {
      title: 'Secure Password Tool',
      desc: 'Cryptographic tool for generating secure, customizable passwords with strength analysis.',
      tech: ['JavaScript', 'HTML', 'CSS'],
      icon: <Code2 className="text-slate-900" size={24} />,
      github: 'https://github.com/kkrishkataria/Password-Generator',
      accent: "border-slate-100 bg-slate-50/20"
    }
  ];

  const minorProjects = [
    { name: 'Weather App', tech: 'HTML, CSS, JS', github: 'https://github.com/kkrishkataria/Weather-App' },
    { name: 'Currency Converter', tech: 'JavaScript, API', github: 'https://github.com/kkrishkataria/Currency-Converter' },
    { name: 'Stone Paper Scissors', tech: 'JavaScript, Game', github: 'https://github.com/kkrishkataria/Stone-Paper-Scissors' },
    { name: 'Personal Website', tech: 'React, Vite', github: 'https://github.com/kkrishkataria/krishkataria.github.io' },
    { name: 'Spotify Clone', tech: 'HTML, CSS, JS', github: '#' },
    { name: 'Netflix Clone', tech: 'HTML, CSS', github: '#' }
  ];

  return (
    <div className="pt-32 pb-12 max-w-6xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center md:text-left"
      >
        <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
          <div className="h-[1px] w-12 bg-indigo-500"></div>
          <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">Works</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          My <span className="text-indigo-600">Projects.</span>
        </h1>
        <p className="text-base text-slate-500 font-medium max-w-2xl leading-relaxed mx-auto md:mx-0">
          Here are some things I have built. I like working on AI, web apps, and coding tools.
        </p>
      </motion.div>

      {/* Main Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {mainProjects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className={`group p-6 border rounded-[1.5rem] transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 flex flex-col justify-between ${project.accent} hover:bg-white`}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-white group-hover:scale-110 transition-transform duration-500 text-indigo-600">
                  {React.cloneElement(project.icon, { size: 20 })}
                </div>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-indigo-600 hover:border-indigo-100 transition-all">
                  <GithubIcon size={18} />
                </a>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">{project.title}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{project.desc}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-white border border-slate-50 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-wider group-hover:border-indigo-50">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Minor Projects - Clean List Style */}
      <div className="pt-20 border-t border-slate-100">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-slate-50 rounded-lg flex items-center justify-center text-slate-400">
            <FolderGit2 size={16} />
          </div>
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">Supplementary Repository</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {minorProjects.map((project, idx) => (
            <motion.a 
              key={idx}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="p-5 bg-slate-50/50 border border-slate-50 rounded-2xl hover:bg-white hover:border-indigo-100 hover:shadow-lg transition-all block group"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-50 text-slate-400 group-hover:text-indigo-600 transition-colors mb-4">
                <GithubIcon size={14} />
              </div>
              <h4 className="text-sm font-bold text-slate-900 mb-1 leading-tight group-hover:text-indigo-600 transition-colors">{project.name}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{project.tech}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
