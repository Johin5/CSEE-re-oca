import React from 'react';
import SectionHeading from './ui/SectionHeading';

const Resources: React.FC = () => {
  const cards = [
      { label: 'Our blogs', image: 'https://picsum.photos/id/180/400/300' },
      { label: 'OUR SOCIALS', image: 'https://picsum.photos/id/366/400/300' },
      { label: 'OUR WORK', image: 'https://picsum.photos/id/250/400/300' },
  ];

  return (
    <section className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-4">
            <span className="border border-white/20 px-3 py-1 text-xs uppercase">More</span>
        </div>
        <SectionHeading pre="WANT" highlight="MORE?" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {cards.map((card, i) => (
                <div key={i} className="group relative aspect-[4/3] overflow-hidden bg-gray-900 cursor-pointer">
                    <img 
                        src={card.image} 
                        alt={card.label} 
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark/90 to-transparent p-6">
                         <h3 className="text-2xl font-bold uppercase">
                            <span className={i === 0 ? 'text-white' : 'text-white'}>{card.label.split(' ')[0]}</span> <span className="text-accent">{card.label.split(' ').slice(1).join(' ')}</span>
                         </h3>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;