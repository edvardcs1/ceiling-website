import React from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const FloatingCallButton = () => {
  return (
    <a 
      href={`tel:${BUSINESS_INFO.phone}`}
      className="md:hidden fixed bottom-6 right-6 z-50 bg-accent text-dark p-4 rounded-full shadow-2xl flex items-center justify-center animate-bounce"
      aria-label="Call Now"
    >
      <Phone size={24} fill="currentColor" />
    </a>
  );
};
