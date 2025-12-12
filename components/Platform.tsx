import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { FEATURES } from '../constants';

const Platform: React.FC = () => {
  return (
    <section id="platform" className="py-24 bg-dark relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <SectionHeading 
            smallTag="Why Choose Us"
            pre="OUR PROVEN" 
            highlight="METHODOLOGY" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-16">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="group p-6 border border-transparent hover:border-white/10 transition-all rounded-lg hover:bg-white/5">
              <div className="mb-6 inline-block p-3 rounded-full border border-green-900 group-hover:border-accent/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold uppercase mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
       {/* Decorative Lines */}
       <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
    </section>
  );
};

export default Platform;