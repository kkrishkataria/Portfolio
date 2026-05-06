import React from 'react';
import { Terminal, Globe, Cpu, Wrench, Code2 } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      category: 'Languages',
      icon: <Terminal className="text-indigo-600" size={24} />,
      skills: ['C', 'C++', 'JavaScript', 'Python', 'R', 'MATLAB', 'SQL']
    },
    {
      category: 'Development',
      icon: <Globe className="text-sky-600" size={24} />,
      skills: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS']
    },
    {
      category: 'Specialized',
      icon: <Cpu className="text-emerald-600" size={24} />,
      skills: ['Data Structures', 'Algorithms', 'AI Basics', 'Operating Systems']
    },
    {
      category: 'Tools',
      icon: <Wrench className="text-slate-900" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Vite']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold mb-6">
            <Code2 size={16} />
            <span>My Toolbox</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Technical <span className="text-indigo-600">Skills</span>
          </h2>
        </div>
        <p className="text-lg text-slate-500 font-medium max-w-sm text-right leading-tight">
          Continuously learning and expanding my stack.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                {group.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{group.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="px-3 py-1.5 bg-slate-50 text-slate-700 rounded-xl text-xs font-bold border border-slate-100 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Skills;

