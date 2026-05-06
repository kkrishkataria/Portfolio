import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { GithubIcon, LinkedinIcon } from './components/Icons';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import Projects from './pages/Projects';
import EducationPage from './pages/EducationPage';
import Experience from './pages/Experience';
import ContactPage from './pages/ContactPage';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
        <Route path="/education" element={<PageTransition><EducationPage /></PageTransition>} />
        <Route path="/milestones" element={<PageTransition><Experience /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        
        <footer className="py-20 border-t border-slate-50 mt-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-2xl font-black text-slate-900 tracking-tighter">Krish Kataria</p>
              <p className="text-sm text-slate-400 font-bold mt-1">© {new Date().getFullYear()} Built with Precision.</p>
            </div>
            <div className="flex gap-8 text-sm font-black text-slate-900 uppercase tracking-widest">
              <a href="https://github.com/kkrishkataria" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-2">
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/krish-kataria-0b46bb321" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors flex items-center gap-2">
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
