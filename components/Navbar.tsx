import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToForm = () => {
    setIsMobileMenuOpen(false);
    const formSection = document.getElementById('audit-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-dark/95 backdrop-blur-md py-3 md:py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="block relative z-50">
            <img 
              src="https://www.convergensee.ai/assets/img/cs-logo-light.svg" 
              alt="ConvergenSEE" 
              className="h-6 md:h-8 w-auto" 
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                  <a 
                      key={link.label} 
                      href={link.href}
                      className="text-sm font-medium text-gray-300 hover:text-accent uppercase tracking-widest transition-colors"
                  >
                      {link.label}
                  </a>
              ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToForm}
              className="hidden md:block bg-accent text-dark px-6 py-2 uppercase text-sm font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)]"
            >
              Get Free Audit
            </button>

            <button 
              className="lg:hidden text-white relative z-50 p-2 -mr-2 hover:text-accent transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to prevent clipping by backdrop-filter */}
      <div 
        className={`fixed inset-0 bg-dark z-40 transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) lg:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
          {/* Decorative background elements */}
          <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[80vw] h-[80vw] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Scrollable Container */}
          <div className="w-full h-full overflow-y-auto relative z-10">
              <div className="min-h-full flex flex-col items-center justify-center gap-8 py-24 px-6">
                {NAV_LINKS.map((link) => (
                    <a 
                        key={link.label} 
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-3xl md:text-4xl font-black uppercase text-white hover:text-accent tracking-tighter transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
                <button 
                    onClick={scrollToForm}
                    className="mt-8 bg-accent text-dark px-10 py-4 uppercase text-lg font-bold tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(57,255,20,0.3)] rounded-sm"
                >
                    Get Free Audit
                </button>
              </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;