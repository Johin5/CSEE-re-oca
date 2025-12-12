import React, { useState } from 'react';
import { Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="connect" className="bg-[#0b1623] pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-6">
                <a href="#" className="block mb-4">
                  <img 
                    src="https://www.convergensee.ai/assets/img/cs-logo-light.svg" 
                    alt="ConvergenSEE" 
                    className="h-8 w-auto" 
                  />
                </a>
                <p className="text-gray-500 text-sm">
                    We help ambitious brands scale through data-driven creativity and performance marketing.
                </p>
            </div>

            <div className="space-y-4">
                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white">Home</a></li>
                    <li><a href="#audit-form" className="hover:text-white">Get Audit</a></li>
                    <li><a href="#testimonials" className="hover:text-white">Success Stories</a></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                    <li><a href="#" className="hover:text-white">Terms of Use</a></li>
                    <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="text-accent text-sm font-bold uppercase tracking-widest mb-4">Connect With Us</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                     <div className="flex gap-2">
                        <span className="text-accent">◎</span>
                        <p>A 303, Supreme Business Park, Hirandani Gardens, Powai, Mumbai, 400076</p>
                     </div>
                     <div className="flex gap-2">
                        <span className="text-accent">◎</span>
                        <p>+91 9091399139</p>
                     </div>
                </div>
                <div className="flex gap-4 mt-4">
                    <Instagram className="text-accent w-5 h-5 cursor-pointer hover:text-white" />
                    <Linkedin className="text-accent w-5 h-5 cursor-pointer hover:text-white" />
                </div>
                
                 <div className="flex gap-4 mt-8">
                     <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                         <span className="text-blue-500 font-bold text-xs">G</span>
                     </div>
                     <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
                         <span className="text-blue-500 font-bold text-xs">★</span>
                     </div>
                 </div>
            </div>
        </div>
        
        <div className="text-center text-gray-600 text-xs mt-16">
            © {new Date().getFullYear()} ConvergenSEE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;