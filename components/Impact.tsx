import React from 'react';
import { IMPACT_METRICS } from '../constants';

const Impact: React.FC = () => {
  return (
    <section id="about" className="relative z-20 -mt-8 mb-12 scroll-mt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {IMPACT_METRICS.slice(0, 3).map((metric, idx) => (
                <div key={idx} className="bg-[#0b1623]/90 backdrop-blur-md p-6 border border-white/5 hover:border-accent/50 transition-all duration-300 rounded-xl group hover:-translate-y-1 shadow-lg flex flex-col justify-center">
                    <div className="flex justify-between items-center mb-3">
                        <div className="text-4xl md:text-5xl font-bold text-white group-hover:text-accent transition-colors">{metric.value}</div>
                        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1 rounded group-hover:border-accent/20 group-hover:text-accent bg-dark/50">{metric.category}</div>
                    </div>
                    <p className="text-gray-400 text-sm leading-snug group-hover:text-white transition-colors">{metric.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;