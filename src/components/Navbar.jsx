import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Milestones', path: '/milestones' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
        <div className="flex items-center gap-2 bg-slate-50/50 p-1 rounded-full border border-slate-100">
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

        <div className="md:w-24"></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
