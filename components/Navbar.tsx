
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-[#0f172a]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo removed as requested */}
        <div className="w-10 md:hidden"></div> {/* Spacer for mobile alignment if needed */}
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
          <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a 
            href="https://t.me/father_teresa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20"
          >
            Hire Me
          </a>
          
          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-200 hover:text-indigo-400 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-[72px] bg-[#0f172a] z-[-1] transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 p-6 text-center">
          <a href="#about" onClick={toggleMobileMenu} className="text-2xl font-bold uppercase tracking-[0.2em] hover:text-indigo-400 transition-colors">About</a>
          <a href="#services" onClick={toggleMobileMenu} className="text-2xl font-bold uppercase tracking-[0.2em] hover:text-indigo-400 transition-colors">Services</a>
          <a href="#contact" onClick={toggleMobileMenu} className="text-2xl font-bold uppercase tracking-[0.2em] hover:text-indigo-400 transition-colors">Contact</a>
          <a 
            href="https://t.me/father_teresa" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl text-lg font-bold shadow-xl shadow-indigo-600/20"
          >
            Hire Me Now
          </a>
        </div>
      </div>
    </nav>
  );
};
