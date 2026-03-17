import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle2, Phone, ArrowRight, Building2, Hammer, Zap, Shield, Home as HomeIcon, Construction } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { useMeta } from '../components/SEO';

export const Services = () => {
  const { hash } = useLocation();
  
  useMeta(
    'Acoustical Ceiling Systems & Wall Panels Services Mesa AZ',
    'Professional acoustical ceiling systems, ceiling tile installation, acoustic baffles, and wall panel services for commercial spaces in Mesa and Phoenix Metro.'
  );

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  const icons = {
    'Construction': <Construction size={48} />,
    'Hammer': <Hammer size={48} />,
    'Zap': <Zap size={48} />,
    'Building2': <Building2 size={48} />,
    'Shield': <Shield size={48} />,
    'HomeIcon': <HomeIcon size={48} />,
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Ceiling installation" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Professional Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional installation of acoustical ceiling systems, ceiling tiles, baffles, and wall panels for offices, schools, retail, and healthcare facilities across Arizona.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col"
              >
                <div className="text-primary mb-6">
                  {icons[service.icon as keyof typeof icons]}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={18} className="text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact-cta" className="btn btn-outline w-full">Get a Quote</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {SERVICES.map((service, idx) => (
        <section 
          key={service.id} 
          id={service.slug}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-light'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map(feature => (
                    <div key={feature} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span className="font-semibold text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn btn-primary">Request Free Estimate</Link>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-outline flex items-center gap-2">
                    <Phone size={18} />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
              <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="rounded-2xl shadow-2xl w-full object-cover aspect-video"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ Mini Section */}
      <section className="section-padding bg-primary text-white" id="contact-cta">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to transform your space?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            From suspended acoustical ceilings to decorative wall panels and acoustic baffles, we deliver quality installations for every commercial space.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn btn-accent text-dark px-10 py-4 text-lg">
              Get Your Free Quote
            </Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn border-2 border-white text-white hover:bg-white hover:text-primary px-10 py-4 text-lg flex items-center justify-center gap-2">
              <Phone size={20} />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
