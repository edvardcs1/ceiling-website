import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Tag, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { useMeta } from '../components/SEO';

export const Portfolio = () => {
  const [filter, setFilter] = useState<'All' | 'Commercial' | 'Residential'>('All');
  
  useMeta(
    'Our Project Portfolio | CM Acoustic LLC Mesa AZ',
    'View our completed acoustic ceiling and drywall projects in Mesa, Phoenix, and Scottsdale. Commercial and residential interior construction excellence.'
  );

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div>
      {/* Header */}
      <section className="bg-dark text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern building" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Project Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our commitment to quality across Arizona's commercial and residential landscape.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-light border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {(['All', 'Commercial', 'Residential'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full font-bold transition-all ${
                  filter === cat 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-dark hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-2">
                    <Tag size={14} />
                    <span>{project.service}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin size={14} />
                      <span>{project.location}</span>
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-xl">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-light">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Have a similar project in mind?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">Let's discuss how CM Acoustic LLC can bring the same level of quality to your next construction project.</p>
          <Link to="/contact" className="btn btn-primary">Get a Free Estimate</Link>
        </div>
      </section>
    </div>
  );
};
