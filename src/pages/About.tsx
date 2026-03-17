import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle2, Award, Users, ShieldCheck, Hammer } from 'lucide-react';
import { motion } from 'motion/react';
import { BUSINESS_INFO } from '../constants';
import { useMeta } from '../components/SEO';

export const About = () => {
  useMeta(
    'About CM Acoustic LLC | Acoustic Ceilings & Wall Panels Mesa AZ',
    'Learn about CM Acoustic LLC, a leading acoustic ceiling and wall panel contractor in Mesa, Arizona. Quality, reliability, and precision since our founding. ROC356053.'
  );

  const values = [
    {
      title: 'Quality',
      description: 'We never cut corners. Every grid is level, and every seam is smooth.',
      icon: <Award className="text-accent" size={32} />,
    },
    {
      title: 'Reliability',
      description: 'We show up on time and finish on schedule. Your timeline is our priority.',
      icon: <ShieldCheck className="text-accent" size={32} />,
    },
    {
      title: 'Precision',
      description: 'Construction is a game of inches. We measure twice and cut once.',
      icon: <Hammer className="text-accent" size={32} />,
    },
    {
      title: 'Professionalism',
      description: 'Clear communication and clean job sites are part of our standard service.',
      icon: <Users className="text-accent" size={32} />,
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/images/about/hero.jpg" 
            alt="Construction background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CM Acoustic LLC</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building a reputation for excellence in acoustic solutions for ceilings and walls across Arizona.
          </p>
        </div>
      </section>

      {/* Mission & Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-6">
                At CM Acoustic LLC, our mission is simple: to provide the highest quality acoustic ceiling and wall panel solutions in the Phoenix Metro area while maintaining the highest standards of integrity and customer service.
              </p>
              <p className="text-gray-600 mb-8">
                We believe that every project, whether a small residential repair or a large commercial build-out, deserves the same level of attention to detail. We are proud to be a locally owned Mesa business contributing to the growth of our community.
              </p>
              <div className="bg-light p-8 rounded-2xl border-l-8 border-primary">
                <p className="text-xl font-bold text-primary italic">
                  "We don't just build walls and ceilings; we build lasting relationships with our clients through hard work and honest service."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/about/crew-1.jpg" alt="Crew working" className="rounded-2xl shadow-lg mt-8" />
              <img src="/images/about/crew-2.jpg" alt="Finished work" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">These principles guide every decision we make and every project we undertake.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div 
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 bg-accent">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-dark mb-2">Work With Mesa's Best</h2>
            <p className="text-dark/80 font-medium">Contact us today to discuss your next project.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn bg-white text-dark hover:bg-gray-100">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};
