import React, { useRef, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, X, Send } from 'lucide-react';
import { Testimonial } from '../types';

const SERVICES = [
  "Branding", "Social Media Management", "Content Creation & Marketing",
  "Ad Film/Video Production", "SEO", "Website Transformation",
  "Mobile App Development & UI/UX", "CRM/Sales Pipeline Development",
  "Influencer Marketing", "IP Creation", "Email & SMS Marketing Automation",
  "Performance Media", "Growth via Media Buying", "Social Listening & ORM",
  "Consumer & Market Research", "Integrated Campaigns", "Others"
];

const OFFICES = [
  "Mumbai", "Bangalore", "Delhi", "UK (London)", "Amsterdam"
];

const SOURCES = [
  "Referral", "Media & News", "LinkedIn", "Instagram/Facebook",
  "Emails/Newsletter", "Search", "Other Sources"
];

const Testimonials: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Form State
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState<string | null>(null);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleInteraction = () => {
    setShowModal(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    // 50px threshold for swipe detection
    if (Math.abs(touchStartX.current - touchEndX.current) > 50) {
      handleInteraction();
    }
  };

  // Use specific testimonials for the visual arrangement
  // Main is index 0, Ghosts are index 2 (left) and index 1 (right) to show variety
  const mainTestimonial = TESTIMONIALS[0];
  const prevTestimonial = TESTIMONIALS[2] || TESTIMONIALS[0];
  const nextTestimonial = TESTIMONIALS[1] || TESTIMONIALS[0];

  const TestimonialCard = ({ data, blur = false, className = '' }: { data: Testimonial; blur?: boolean; className?: string }) => (
    <div className={`bg-[#0b1623] rounded-2xl overflow-hidden flex flex-col lg:flex-row h-full w-full border border-white/5 shadow-2xl transition-all duration-500 ${blur ? 'blur-[2px] grayscale opacity-40' : 'opacity-100'} ${className}`}>
        {/* Content Side */}
        <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center relative order-2 lg:order-1">
            <div className="text-accent text-6xl font-serif absolute top-6 left-8 opacity-20 leading-none">"</div>
            <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 relative z-10 pt-4 text-gray-100">
                “{data.quote}”
            </blockquote>
            
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
                {data.stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider leading-tight">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Image Side */}
        <div className="lg:w-1/2 relative h-[300px] lg:h-auto bg-gray-800 order-1 lg:order-2">
            <img 
                src={data.image} 
                alt={data.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay opacity-80"
            />
            {/* Image Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1623] via-transparent to-transparent lg:bg-gradient-to-l"></div>
            
            <div className="absolute bottom-0 left-0 w-full p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{data.name}</h3>
                <p className="text-accent text-sm font-bold uppercase tracking-widest">{data.company}</p>
                <div className="text-white/60 text-xs mt-1">{data.role}</div>
            </div>
        </div>
    </div>
  );

  return (
    <section id="testimonials" className="py-24 bg-dark overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center mb-12">
            <div className="border border-white/20 px-4 py-2 text-xs uppercase tracking-widest">Client Success</div>
        </div>
        
        <h2 className="text-center text-5xl md:text-7xl font-bold text-accent uppercase mb-20 tracking-tighter">
            TESTIMONIALS
        </h2>

        {/* Carousel Container */}
        <div 
            className="relative max-w-[1600px] mx-auto h-auto lg:h-[600px] flex items-center justify-center py-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Left Ghost Card */}
            <div 
                className="absolute left-0 top-1/2 -translate-y-1/2 w-[800px] h-[500px] hidden xl:block pointer-events-none transform -translate-x-[20%] scale-90"
                aria-hidden="true"
            >
                <TestimonialCard data={prevTestimonial} blur={true} />
            </div>

            {/* Right Ghost Card */}
            <div 
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[500px] hidden xl:block pointer-events-none transform translate-x-[20%] scale-90"
                aria-hidden="true"
            >
                <TestimonialCard data={nextTestimonial} blur={true} />
            </div>

            {/* Main Card */}
            <div className="relative z-20 w-full max-w-5xl h-full shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <TestimonialCard data={mainTestimonial} />

                {/* Navigation Arrows */}
                <button 
                    onClick={handleInteraction}
                    className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-30 bg-dark hover:bg-accent text-white hover:text-dark p-4 rounded-full border border-white/10 transition-all shadow-xl hover:scale-110 group"
                    aria-label="Previous"
                >
                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button 
                    onClick={handleInteraction}
                    className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-30 bg-dark hover:bg-accent text-white hover:text-dark p-4 rounded-full border border-white/10 transition-all shadow-xl hover:scale-110 group"
                    aria-label="Next"
                >
                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
            </div>
        </div>
        
      </div>

      {/* Popup Modal with Full Form */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity" onClick={() => setShowModal(false)} />
            
            <div className="relative bg-[#0F1520] border border-white/10 rounded-3xl w-full max-w-4xl shadow-[0_0_50px_rgba(52,204,50,0.1)] animate-[fadeIn_0.3s_ease-out] max-h-[90vh] overflow-y-auto hide-scrollbar flex flex-col">
                <button 
                    onClick={() => setShowModal(false)}
                    className="absolute top-6 right-6 z-50 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 md:p-12">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4 text-white">
                             Get In <span className="text-accent">Touch</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Unlock full case studies or start a conversation about your project.
                        </p>
                    </div>

                    <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
                        {/* Personal Info */}
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="block text-sm md:text-base font-medium text-gray-400 mb-2">Your Name</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-lg focus:border-accent outline-none transition-all placeholder-gray-700" placeholder="John Doe" />
                                </div>
                                <div className="group">
                                    <label className="block text-sm md:text-base font-medium text-gray-400 mb-2">Organization</label>
                                    <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-lg focus:border-accent outline-none transition-all placeholder-gray-700" placeholder="Company Ltd." />
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="group">
                                    <label className="block text-sm md:text-base font-medium text-gray-400 mb-2">Email</label>
                                    <input type="email" className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-lg focus:border-accent outline-none transition-all placeholder-gray-700" placeholder="john@company.com" />
                                </div>
                                <div className="group">
                                    <label className="block text-sm md:text-base font-medium text-gray-400 mb-2">Number</label>
                                    <input type="tel" className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-lg focus:border-accent outline-none transition-all placeholder-gray-700" placeholder="+1 (555) 000-0000" />
                                </div>
                            </div>
                            
                            <div className="group">
                                <label className="block text-sm md:text-base font-medium text-gray-400 mb-2">Website/Link</label>
                                <input type="text" className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-lg focus:border-accent outline-none transition-all placeholder-gray-700" placeholder="https://" />
                            </div>
                        </div>

                        {/* Services */}
                        <div>
                            <label className="block text-lg md:text-xl font-bold text-white mb-6">Interested Services</label>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {SERVICES.map((service) => (
                                    <button
                                        key={service}
                                        type="button"
                                        onClick={() => toggleService(service)}
                                        className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full border text-xs md:text-sm transition-all duration-200 ${
                                            selectedServices.includes(service)
                                            ? 'bg-accent text-dark border-accent font-bold shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                            : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500 hover:bg-white/5'
                                        }`}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Office Selector */}
                        <div>
                            <label className="block text-lg md:text-xl font-bold text-white mb-6">Preferred Office</label>
                            <div className="flex flex-wrap gap-3">
                                {OFFICES.map((office) => (
                                    <button
                                        key={office}
                                        type="button"
                                        onClick={() => setSelectedOffice(office)}
                                        className={`px-5 py-2.5 rounded-full border text-sm transition-all duration-200 ${
                                            selectedOffice === office
                                            ? 'bg-white text-dark border-white font-bold shadow-lg'
                                            : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500 hover:bg-white/5'
                                        }`}
                                    >
                                        {office}
                                    </button>
                                ))}
                            </div>
                        </div>

                         {/* Message Area */}
                        <div className="group">
                            <label className="block text-lg md:text-xl font-bold text-white mb-4">What's on your mind?</label>
                            <textarea 
                                rows={2}
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-lg focus:border-accent outline-none transition-all placeholder-gray-700 resize-none"
                                placeholder="Tell us a bit more about your project..."
                            />
                        </div>
                        
                        {/* Source Selector */}
                        <div>
                             <label className="block text-lg md:text-xl font-bold text-white mb-6">How did you hear about us?</label>
                             <div className="flex flex-wrap gap-2 md:gap-3">
                                {SOURCES.map((source) => (
                                    <button
                                        key={source}
                                        type="button"
                                        onClick={() => setSelectedSource(source)}
                                        className={`px-4 py-2 rounded-full border text-xs md:text-sm transition-all duration-200 ${
                                            selectedSource === source
                                            ? 'bg-accent text-dark border-accent font-bold shadow-[0_0_15px_rgba(57,255,20,0.4)]'
                                            : 'bg-transparent text-gray-300 border-gray-700 hover:border-gray-500 hover:bg-white/5'
                                        }`}
                                    >
                                        {source}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-6 flex justify-center">
                            <button className="group relative bg-white text-dark font-bold uppercase text-lg md:text-xl py-4 px-12 md:px-16 rounded-full tracking-widest hover:bg-accent transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_30px_rgba(57,255,20,0.4)] hover:scale-105">
                                <span className="flex items-center gap-3">
                                    Submit <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;