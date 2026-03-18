import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import { useMeta } from '../components/SEO';

export const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  useMeta(
    'Contact CM Acoustic LLC | Free Estimates in Mesa & Phoenix',
    'Get a free quote for your acoustic ceiling or drywall project. Contact CM Acoustic LLC today at (480) 417-8443 or visit us in Mesa, AZ.'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      project: formData.get('project') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or call us directly.');
      setFormState('idle');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get a Free Estimate</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to start your project? Reach out today and we'll provide a detailed quote for your ceiling or drywall needs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-xl font-bold hover:text-primary transition-colors">{BUSINESS_INFO.phone}</a>
                    <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 7am-5pm</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email Us</p>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-lg font-bold hover:text-primary transition-colors">{BUSINESS_INFO.email}</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Visit Us</p>
                    <p className="text-lg font-bold">{BUSINESS_INFO.address}</p>
                    <p className="text-sm text-gray-500 mt-1">Mesa, AZ 85207</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary h-fit">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Business Hours</p>
                    <p className="text-sm font-medium">{BUSINESS_INFO.hours}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-light rounded-2xl border border-gray-200">
                <h3 className="font-bold mb-4">Service Area</h3>
                <p className="text-sm text-gray-600 mb-4">We proudly serve property owners and general contractors across:</p>
                <ul className="grid grid-cols-2 gap-2 text-xs font-bold text-dark/70">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Mesa</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Phoenix</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Scottsdale</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Gilbert</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Chandler</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-primary" /> Tempe</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center text-green-600 mx-auto mb-6">
                      <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Message Sent!</h2>
                    <p className="text-gray-600 mb-8">Thank you for reaching out. A member of our team will contact you shortly to discuss your project.</p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-sm font-bold text-gray-700">Full Name *</label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            required 
                            className="bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address *</label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            required 
                            className="bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="phone" className="text-sm font-bold text-gray-700">Phone Number *</label>
                          <input 
                            type="tel" 
                            id="phone" 
                            name="phone"
                            required 
                            className="bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                            placeholder="(480) 000-0000"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="project" className="text-sm font-bold text-gray-700">Project Type</label>
                          <select 
                            id="project" 
                            name="project"
                            className="bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                          >
                            <option>Acoustic Ceiling Installation</option>
                            <option>Drywall Installation/Repair</option>
                            <option>Acoustic Panel Systems</option>
                            <option>Commercial Tenant Improvement</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-bold text-gray-700">Project Details *</label>
                        <textarea 
                          id="message" 
                          name="message"
                          required 
                          rows={5}
                          className="bg-light border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="Tell us about your project, square footage, and timeline..."
                        ></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={formState === 'submitting'}
                        className="btn btn-primary w-full py-4 text-lg flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {formState === 'submitting' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span>Send Estimate Request</span>
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] bg-gray-200 relative">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1067.506962593307!2d-111.635!3d33.4236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872baf5c2c2e4b6b%3A0x8b8b8b8b8b8b8b8b!2s${encodeURIComponent(BUSINESS_INFO.address)}!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CM Acoustic LLC Location"
        ></iframe>
      </section>
    </div>
  );
};
