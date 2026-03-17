import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="CM Acoustic LLC" 
                className="h-10 w-auto object-contain"
              />
              <span className="text-2xl font-bold text-white">CM ACOUSTIC</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional acoustical ceiling systems, acoustic baffles, ceiling tile installation, and wall panel contractor serving Mesa and the Phoenix Metro area. Quality installations for offices, schools, retail, and healthcare facilities.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors"><Instagram size={18} /></a>
              <a href="https://www.tiktok.com/@cmacoustic?_r=1&_t=ZT-94hTxUcPLqA" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              <li><Link to="/services" className="hover:text-accent flex items-center gap-2"><ChevronRight size={14} /> Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-accent flex items-center gap-2"><ChevronRight size={14} /> Project Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-accent flex items-center gap-2"><ChevronRight size={14} /> About Us</Link></li>
              <li><Link to="/contact" className="hover:text-accent flex items-center gap-2"><ChevronRight size={14} /> Get a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">Our Services</h3>
            <ul className="flex flex-col gap-3 text-gray-400">
              {SERVICES.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services#${service.slug}`} className="hover:text-accent flex items-center gap-2">
                    <ChevronRight size={14} /> {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-l-4 border-accent pl-3">Contact Us</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span className="text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-accent shrink-0" size={20} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-sm hover:text-white">{BUSINESS_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-accent shrink-0" size={20} />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-sm hover:text-white">{BUSINESS_INFO.email}</a>
              </li>
              <li className="pt-4 border-t border-gray-800">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">License Number</p>
                <p className="text-sm text-white font-mono">{BUSINESS_INFO.license}</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
