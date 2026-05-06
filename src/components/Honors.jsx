import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const Honors = () => {
  const honors = [
    {
      title: 'Bharti Airtel Scholar 2024',
      org: 'Bharti Airtel Foundation',
      desc: 'Selected among the top 250 students across India for academic excellence. Awarded a prestigious merit scholarship.',
      icon: <Trophy className="text-indigo-600" size={24} />,
      color: 'bg-indigo-50'
    },
    {
      title: 'College Merit Scholarship',
      org: 'TIET, Patiala',
      desc: 'Awarded for outstanding CGPA performance in the 1st and 2nd year of B.Tech at Thapar Institute.',
      icon: <Award className="text-sky-600" size={24} />,
      color: 'bg-sky-50'
    }
  ];

  return (
    <section id="honors" className="py-20">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 text-slate-500 rounded-lg text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-slate-100">
          <Star size={12} />
          <span>Academic Recognition</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Excellence & Honors
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {honors.map((honor, idx) => (
          <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2rem] hover:border-indigo-100 hover:shadow-xl transition-all duration-300 group">
            <div className={`w-12 h-12 ${honor.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {honor.icon}
            </div>
            
            <h3 className="text-xl font-bold text-slate-900 mb-1">{honor.title}</h3>
            <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-4">{honor.org}</div>
            
            <p className="text-slate-500 font-medium leading-relaxed text-sm">
              {honor.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Honors;
