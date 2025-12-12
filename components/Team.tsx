import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="board" className="py-24 bg-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
             <span className="border border-white/20 px-3 py-1 text-xs uppercase">Team</span>
        </div>
        <SectionHeading pre="MEET THE" highlight="OPPORTUNITY" post="CREATORS!" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {TEAM.map((member, i) => (
                <div key={i} className="group">
                    <div className="overflow-hidden mb-6 bg-gray-800 aspect-[3/4]">
                        <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                    <div className="bg-[#0b1623] p-6 border-t-2 border-transparent group-hover:border-accent transition-colors">
                        <h3 className="text-xl font-bold uppercase mb-1">{member.name}</h3>
                        <p className="text-gray-500 text-sm">{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="flex justify-center mt-12">
            <button className="border border-accent text-accent px-8 py-3 uppercase text-sm font-bold hover:bg-accent hover:text-dark transition-all">
                meet them all
            </button>
        </div>
      </div>
    </section>
  );
};

export default Team;