import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-6 animate-fade-in">
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="h-[1px] w-12 bg-indigo-500"></div>
          <span className="text-xs font-black text-indigo-400 uppercase tracking-[0.4em]">Get In Touch</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          Contact <span className="text-indigo-600">Me.</span>
        </h1>
        <p className="text-base text-slate-500 font-medium max-w-xl leading-relaxed">
          I'm always open to discussing new opportunities or just having a chat about technology.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage;
