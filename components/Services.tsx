import React from 'react';
import SectionHeading from './ui/SectionHeading';

const SERVICE_ITEMS = [
  {
    title: 'UI/UX DEVELOPMENT',
    description: "You're getting the clicks, but poor experience is killing conversion. We craft interfaces that customers love to use.",
    cta: "FIX WHAT'S BREAKING THE JOURNEY",
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'SOCIAL MEDIA MANAGEMENT',
    description: "Posting isn't presence. We turn your content into real connection.",
    cta: "LET'S TURN SCROLLS INTO STORIES",
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'LOCATION PAGES',
    description: "One homepage doesn't serve every city. We build SEO-friendly pages that put every location on the map.",
    cta: "MAKE EVERY SEARCH FEEL PERSONAL",
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'FRAUD MANAGEMENT',
    description: "Fake listings and impersonators hijack trust. We help you take back control.",
    cta: "PROTECT YOUR BRAND'S PRESENCE",
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'SEO',
    description: "If you're not on page one, you're not in the game. We fix that.",
    cta: "GET FOUND WHERE IT MATTERS MOST",
    image: 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'LOCAL PRESENCE MANAGEMENT',
    description: "Wrong hours and missing info cost you real customers. We fix the final mile.",
    cta: "GET DISCOVERED, NOT DISMISSED",
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'INFLUENCER MARKETING',
    description: "One-off collabs don't build credibility. We connect you with creators who convert.",
    cta: "LET'S TURN INFLUENCE INTO IMPACT",
    image: 'https://images.unsplash.com/photo-1516251193000-18e6586ee186?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'ONLINE REPUTATION MANAGEMENT',
    description: "Reviews shape your brand before your ads do. We make sure they work for you.",
    cta: "TAKE CONTROL OF THE CONVERSATION",
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'CONTENT CREATION & LOCALISATION',
    description: "Generic content misses the mark. We help you speak every market's language.",
    cta: "LET'S MAKE CONTENT FEEL PERSONAL",
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'PERFORMANCE MARKETING',
    description: "Good ads get clicks. Great ones drive growth. We build for the full funnel.",
    cta: "MAKE YOUR SPEND COUNT",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'CREATIVE PRODUCTION',
    description: "Disconnected teams and rushed edits kill great ideas. We bring structure so creativity scales without chaos.",
    cta: "LET'S TURN PROCESS INTO PERFORMANCE",
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop',
  },
];

const Services: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('audit-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-12 bg-dark scroll-mt-24">
      <div className="container mx-auto px-6">
        
        {/* 
            Mobile: Horizontal Scroll Carousel
            Desktop (sm+): Grid Layout 
        */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-6 px-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:pb-0 sm:mx-0 sm:px-0 sm:overflow-visible hide-scrollbar">
          {SERVICE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="shrink-0 w-[85vw] sm:w-auto snap-center group relative h-[300px] overflow-hidden bg-gray-900 border border-white/10 hover:border-accent/50 transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-95"></div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10">
                <h3 className="text-xl font-bold uppercase text-white mb-2 leading-none tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs mb-4 leading-relaxed font-medium line-clamp-3">
                  {item.description}
                </p>
                <button 
                  onClick={scrollToForm}
                  className="border border-white/20 text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-accent hover:border-accent hover:text-dark transition-all duration-300 w-full"
                >
                  {item.cta}
                </button>
              </div>

              {/* Hover Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="flex sm:hidden justify-center gap-2 mt-2 opacity-30">
            <div className="w-12 h-1 rounded-full bg-accent"></div>
            <div className="w-2 h-1 rounded-full bg-white"></div>
            <div className="w-2 h-1 rounded-full bg-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;