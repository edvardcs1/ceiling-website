import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Star, MapPin, CheckCircle2, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS, FAQS, PROJECTS } from '../constants';
import { useMeta } from '../components/SEO';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export const Home = () => {
  useMeta(
    'Acoustical Ceiling Systems & Wall Panels Contractor Mesa AZ',
    'Professional installation of acoustical ceiling systems, ceiling tiles, acoustic baffles, and wall panels for commercial spaces in Mesa, Phoenix, and Maricopa County. ROC356053.'
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Construction background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold mb-6 border border-accent/30"
            >
              <MapPin size={16} />
              <span>Serving Mesa, AZ & Phoenix Metro</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              Professional <span className="text-accent">Acoustical Ceiling</span> Systems & Wall Panels
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed"
            >
              Expert installation of suspended ceilings, acoustic baffles, ceiling tiles, and wall panels for commercial spaces. Serving offices, schools, retail stores, and healthcare facilities across Mesa and Phoenix.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link to="/contact" className="btn btn-accent text-dark px-8 py-4 text-lg">
                Request a Free Estimate
              </Link>
              <a href={`tel:${BUSINESS_INFO.phone}`} className="btn btn-outline border-white text-white hover:bg-white hover:text-dark px-8 py-4 text-lg flex items-center gap-2">
                <Phone size={20} />
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="bg-primary py-6 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-start lg:items-center justify-items-start lg:justify-items-center">
            <div className="flex items-start gap-2 md:gap-3">
              <ShieldCheck className="text-accent shrink-0 mt-1 lg:mt-0" size={28} md:size={32} />
              <div className="flex flex-col">
                <span className="font-bold leading-tight text-sm md:text-base">Licensed & Bonded</span>
                <span className="text-xs opacity-80">ROC356053</span>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <Star className="text-accent shrink-0 mt-1 lg:mt-0" size={28} md:size={32} fill="currentColor" />
              <div className="flex flex-col">
                <span className="font-bold leading-tight text-sm md:text-base">5-Star Rated</span>
                <span className="text-xs opacity-80">Top Quality Service</span>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <CheckCircle2 className="text-accent shrink-0 mt-1 lg:mt-0" size={28} md:size={32} />
              <div className="flex flex-col">
                <span className="font-bold leading-tight text-sm md:text-base">Local Experts</span>
                <span className="text-xs opacity-80">Based in Mesa, AZ</span>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <Building2 className="text-accent shrink-0 mt-1 lg:mt-0" size={28} md:size={32} />
              <div className="flex flex-col">
                <span className="font-bold leading-tight text-sm md:text-base">Comm. & Res.</span>
                <span className="text-xs opacity-80">Full Service Contractor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After Slider - Mobile Only, Full Width, No Gap */}
      <section className="bg-gray-100 md:hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <BeforeAfterSlider
            beforeImage="/before.jpg"
            afterImage="/after.jpg"
            beforeLabel="Antes"
            afterLabel="Después"
          />
        </motion.div>
      </section>

      {/* Services Highlight */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Specialties</h2>
            <p className="text-gray-600">Professional acoustic ceiling systems, tile installation, baffles, and wall panels for commercial spaces. Quality installations for offices, schools, retail, and healthcare facilities.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/20"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{service.title}</h3>
                    <div className="w-12 h-1 bg-accent rounded-full"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-5 leading-relaxed text-sm">{service.longDescription}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={feature} className="flex items-center gap-3 text-sm">
                          <div className="bg-primary text-white w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/services" 
                    className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary/90 transition-all group/btn"
                  >
                    Learn More 
                    <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn btn-primary px-8 py-4 text-lg">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/images/about.jpg" 
                alt="Construction site" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-accent p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-dark">ROC</p>
                <p className="text-xl font-bold text-dark/80">356053</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Craftsmanship You Can Trust</h2>
              <p className="text-gray-600 mb-6 text-lg">
                CM Acoustic LLC is a locally owned and operated specialty contractor based in Mesa, Arizona. We specialize in acoustic ceiling systems, baffles, and wall panel installations for both commercial and residential clients.
              </p>
              <p className="text-gray-600 mb-8">
                With years of experience in the Arizona construction market, we understand the importance of precision, reliability, and clear communication. Our mission is to provide superior interior finishes that enhance the value and functionality of your property.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold">On-Time Delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold">Expert Crew</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold">Fair Pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-accent/20 p-2 rounded-lg text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-bold">Superior Finish</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline">Read Our Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recent Projects</h2>
              <p className="text-gray-400">Take a look at some of our completed work across the Phoenix Metro area, from medical plazas to custom residential remodels.</p>
            </div>
            <Link to="/portfolio" className="btn btn-accent text-dark">View Full Portfolio</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="inline-block bg-accent text-dark text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.service} • {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 text-accent mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm relative">
                <div className="absolute -top-4 left-8 text-accent opacity-20">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L22.017 3V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM2.01697 21L2.01697 18C2.01697 16.8954 2.9124 16 4.01697 16H7.01697C7.56925 16 8.01697 15.5523 8.01697 15V9C8.01697 8.44772 7.56925 8 7.01697 8H4.01697C2.9124 8 2.01697 7.10457 2.01697 6V3L10.017 3V15C10.017 18.3137 7.33068 21 4.01697 21H2.01697Z" /></svg>
                </div>
                <p className="text-gray-600 italic mb-8 relative z-10">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold leading-none mb-1">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.role}{t.company ? ` at ${t.company}` : ''}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {FAQS.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold mb-3 flex items-start gap-3">
                    <span className="text-primary">Q:</span>
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 pl-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Get a professional estimate for your acoustic ceiling or wall panel project in Mesa and the Phoenix Metro area.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn btn-accent text-dark px-10 py-4 text-lg">
              Get a Free Quote
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
