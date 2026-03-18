import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-4"
    )}>
      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src="/logo.png" 
              alt="CM Acoustic LLC" 
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-none">CM ACOUSTIC LLC</span>
              <span className="text-[10px] font-semibold tracking-widest text-dark/60 uppercase">Ceilings & Wall Panels</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-semibold hover:text-primary transition-colors",
                  location.pathname === link.path ? "text-primary" : "text-dark"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-primary flex items-center gap-2 text-sm py-2 px-4">
              <Phone size={16} />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-dark p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-in slide-in-from-top duration-300">
          <div className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-semibold py-2 border-b border-gray-50",
                  location.pathname === link.path ? "text-primary" : "text-dark"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="btn btn-primary flex items-center justify-center gap-2 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={20} />
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
