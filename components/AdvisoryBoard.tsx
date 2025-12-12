import React from 'react';
import SectionHeading from './ui/SectionHeading';

const ADVISORS = [
    {
        name: "Balaji Jagannathan",
        role: "Strategic Advisor",
        image: "https://picsum.photos/id/1062/200/200",
        bio: "Former CEO of TechGiant with 20+ years in digital transformation."
    },
    {
        name: "Sarah Jenkins",
        role: "Marketing Tech Lead",
        image: "https://picsum.photos/id/338/200/200",
        bio: "Pioneer in AI-driven marketing automation and consumer analytics."
    },
    {
        name: "David Chen",
        role: "Global Expansion",
        image: "https://picsum.photos/id/1025/200/200",
        bio: "Expert in scaling operations across APAC and EMEA regions."
    }
];

const AdvisoryBoard: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
       <div className="container mx-auto px-6">
          <div className="flex justify-center mb-4">
             <span className="border border-white/20 px-3 py-1 text-xs uppercase">Board</span>
          </div>
          <SectionHeading pre="ADVISORY" highlight="BOARD" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
               {ADVISORS.map((advisor, index) => (
                   <div key={index} className="bg-[#0b1623] p-8 flex flex-col items-center text-center group hover:bg-[#112233] transition-all border border-transparent hover:border-accent/30 rounded-lg">
                      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-gray-800 grayscale group-hover:grayscale-0 transition-all duration-500">
                          <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold uppercase mb-2 text-white">{advisor.name}</h3>
                      <p className="text-accent text-xs font-bold uppercase tracking-widest mb-4">{advisor.role}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                          {advisor.bio}
                      </p>
                   </div>
               ))}
          </div>
       </div>
    </section>
  );
};

export default AdvisoryBoard;