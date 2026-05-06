import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'py-8 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between md:justify-center">
          {/* Mobile Spacer (replaces logo) */}
          <div className="md:hidden"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-slate-50/50 p-1 rounded-full border border-slate-100">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="relative px-5 py-2 group"
              >
                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 relative z-10 ${
                  location.pathname === link.path 
                    ? 'text-indigo-600' 
                    : 'text-slate-500 hover:text-slate-900'
                }`}>
                  {link.name}
                </span>
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-pill-bg"
                    className="absolute inset-0 bg-white rounded-full shadow-sm z-0"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-xl border border-slate-100"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Spacer for desktop centering */}
          <div className="hidden md:block md:w-24"></div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-sm font-black text-slate-900 tracking-tighter uppercase">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-50 rounded-xl border border-slate-100">
                <X size={20} />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className="group flex items-center justify-between"
                  >
                    <span className={`text-4xl font-black tracking-tighter transition-all group-hover:text-indigo-600 ${
                      location.pathname === link.path ? 'text-indigo-600' : 'text-slate-900'
                    }`}>
                      {link.name}
                    </span>
                    <div className={`w-2 h-2 rounded-full bg-indigo-600 transition-all ${
                      location.pathname === link.path ? 'opacity-100' : 'opacity-0'
                    }`} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-slate-50">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Connect</p>
              <div className="flex gap-6 text-sm font-bold text-slate-900">
                <a href="https://github.com/kkrishkataria" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/krish-kataria-0b46bb321" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
