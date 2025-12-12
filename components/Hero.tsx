import React from 'react';

const Hero: React.FC = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById('audit-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-32 pb-12 flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
             <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]"></div>
             <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-green-900/20 rounded-full blur-[100px]"></div>
        </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="inline-block px-4 py-2 border border-accent/30 rounded-full bg-accent/5 mb-8 backdrop-blur-sm">
            <span className="text-accent font-bold tracking-wider text-xs uppercase">🚀 #1 Growth Agency for Tech & Retail</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-6 leading-[0.9]">
          SCALE YOUR <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-600">REVENUE</span> TODAY
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light tracking-wide mb-10 max-w-2xl mx-auto">
          We turn traffic into transactions. Stop wasting budget on "likes" and start optimizing for <span className="text-white font-semibold">ROI</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-20">
            <button 
                onClick={scrollToForm}
                className="bg-accent text-dark px-8 py-4 text-lg font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)]"
            >
                Get Your Free Audit
            </button>
            <p className="text-sm text-gray-500 uppercase tracking-widest mt-4 md:mt-0 md:ml-4">
                Limited spots available for Q3
            </p>
        </div>

        {/* Clients Strip */}
        <p className="text-xs uppercase tracking-widest text-gray-600 mb-8">Trusted by industry leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {['LIVING LIQUIDZ', 'MG', 'MindCraft', 'Aptech', 'kotak'].map((brand, i) => (
                <div key={i} className="text-xl md:text-2xl font-bold font-serif text-white/40 hover:text-white transition-colors cursor-default">
                    {brand}
                </div>
            ))}
             <svg className="h-6 w-auto text-white/40" viewBox="0 0 100 30" fill="currentColor">
               <path d="M0 15 Q 10 0 20 15 T 40 15 T 60 15" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;