import React, { useState } from 'react';
import { Send } from 'lucide-react';

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

const BrandAudit: React.FC = () => {
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

  return (
    <section id="audit-form" className="py-12 pb-24 bg-gradient-to-br from-[#020b16] to-[#051505] relative border-t border-accent/10">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 border border-accent text-accent text-xs tracking-wider uppercase font-bold mb-6">
                    Got an idea?
                </div>
                <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight mb-8 text-white">
                    Drop Us A <span className="text-accent">Message</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                    We're excited to work with you soon! Please drop an email with your details & requirements to <span className="text-white font-bold">hello@convergensee.com</span>.
                </p>
                <p className="text-gray-400 mt-4">
                    You can also fill this form & we'll get back in 2 business days.
                </p>
            </div>

            {/* Form Container */}
            <div className="bg-[#0b1623] border border-white/5 p-8 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
                <form className="space-y-12">
                    {/* Text Inputs */}
                    <div className="space-y-8">
                        <div className="group">
                            <label className="block text-lg font-medium text-gray-400 mb-2">Your Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-xl focus:border-accent outline-none transition-all placeholder-gray-700"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-lg font-medium text-gray-400 mb-2">Your Organization's Name</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-xl focus:border-accent outline-none transition-all placeholder-gray-700"
                                placeholder="Company Ltd."
                            />
                        </div>
                        <div className="group">
                            <label className="block text-lg font-medium text-gray-400 mb-2">Your Email</label>
                            <input 
                                type="email" 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-xl focus:border-accent outline-none transition-all placeholder-gray-700"
                                placeholder="john@company.com"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-lg font-medium text-gray-400 mb-2">Your Number</label>
                            <input 
                                type="tel" 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-xl focus:border-accent outline-none transition-all placeholder-gray-700"
                                placeholder="+1 (555) 000-0000"
                            />
                        </div>
                        <div className="group">
                            <label className="block text-lg font-medium text-gray-400 mb-2">Website/Social Media Link</label>
                            <input 
                                type="text" 
                                className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-xl focus:border-accent outline-none transition-all placeholder-gray-700"
                                placeholder="https://"
                            />
                        </div>
                    </div>

                    {/* Services Selector */}
                    <div>
                        <label className="block text-xl font-bold text-white mb-8">Which services are you interested in?</label>
                        <div className="flex flex-wrap gap-3">
                            {SERVICES.map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => toggleService(service)}
                                    className={`px-6 py-3 rounded-full border text-sm md:text-base transition-all duration-200 ${
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
                        <label className="block text-xl font-bold text-white mb-8">Please select our closest preferred office for servicing you</label>
                        <div className="flex flex-wrap gap-4">
                            {OFFICES.map((office) => (
                                <button
                                    key={office}
                                    type="button"
                                    onClick={() => setSelectedOffice(office)}
                                    className={`px-8 py-3 rounded-full border text-base transition-all duration-200 min-w-[140px] ${
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
                        <label className="block text-xl font-bold text-white mb-4">What's on your mind?</label>
                        <textarea 
                            rows={1}
                            className="w-full bg-transparent border-b border-gray-700 py-3 text-white text-xl focus:border-accent outline-none transition-all placeholder-gray-700 resize-none"
                            placeholder="Tell us a bit more about your project..."
                        />
                    </div>

                    {/* Source Selector */}
                    <div>
                        <label className="block text-xl font-bold text-white mb-8">How did you hear about us?</label>
                        <div className="flex flex-wrap gap-3">
                            {SOURCES.map((source) => (
                                <button
                                    key={source}
                                    type="button"
                                    onClick={() => setSelectedSource(source)}
                                    className={`px-6 py-3 rounded-full border text-sm md:text-base transition-all duration-200 ${
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
                    <div className="pt-8 flex justify-center">
                        <button 
                            type="button" 
                            className="group relative bg-white text-dark font-bold uppercase text-xl py-6 px-20 rounded-full tracking-widest hover:bg-accent transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_30px_rgba(57,255,20,0.4)] hover:scale-105"
                        >
                            <span className="flex items-center gap-3">
                                Submit <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAudit;