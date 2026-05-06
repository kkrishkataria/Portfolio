import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { LeetCodeIcon } from './Icons';

const Education = () => {
  const eduData = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Thapar Institute of Engineering and Technology',
      period: '2024 - 2028',
      location: 'Patiala, Punjab',
      score: '9.66 CGPA',
      description: 'Major in Computer Science with focus on software engineering and algorithms.',
      icon: <GraduationCap size={18} />
    },
    {
      degree: 'JEE Main 2024',
      institution: 'National Level Exam',
      period: '2024',
      location: 'India',
      score: '95.7 Percentile',
      description: 'Core focus on Physics, Chemistry, and Mathematics.',
      icon: <Award size={18} />
    }
  ];

  const courses = [
    'AI for Engineers', 'Computer Networks', 'Database Management System', 
    'Design and Analysis of Algorithms', 'Data Structures', 'Operating Systems',
    'Object Oriented Programming', 'Discrete Mathematical Structures', 
    'Discrete Mathematics', 'Numerical Linear Algebra', 'Probability and Statistics'
  ];

  return (
    <div className="py-12">
      <div className="space-y-12 mb-20">
        {eduData.map((edu, idx) => (
          <div key={idx} className="flex gap-8 group">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                {edu.icon}
              </div>
              <div className="flex-1 w-[1px] bg-slate-100 mt-4"></div>
            </div>
            
            <div className="flex-1 pb-12">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                  <div className="text-indigo-600 font-medium">{edu.institution}</div>
                </div>
                <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{edu.period}</div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                  <MapPin size={14} className="text-slate-400" /> {edu.location}
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Score:</span>
                  <span className="text-sm font-black text-slate-900">{edu.score}</span>
                </div>

                {edu.degree.includes('B.Tech') && (
                  <a 
                    href="https://leetcode.com/u/krishkataria123/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors bg-slate-50 hover:bg-indigo-50 px-4 py-2 rounded-2xl border border-slate-100 hover:border-indigo-100 group/lc"
                  >
                    <LeetCodeIcon size={16} />
                    <span className="group-hover/lc:translate-x-0.5 group-hover/lc:-translate-y-0.5 transition-transform">LeetCode Profile ↗</span>
                  </a>
                )}
              </div>
              
              <p className="text-slate-600 leading-relaxed max-w-2xl">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-12 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Relevant Coursework</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-50 hover:border-indigo-100 transition-colors">
              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
              <span className="text-sm font-semibold text-slate-700">{course}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Education;
