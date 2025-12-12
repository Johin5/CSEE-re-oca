import React, { useState, useRef, useEffect } from 'react';
import SectionHeading from './ui/SectionHeading';
import { MoveHorizontal } from 'lucide-react';

const TRANSFORMATIONS = [
    {
        id: 'social',
        title: 'Social Media',
        subtitle: 'From Static to Viral',
        stat: '+400% Engagement',
        // Before: Dull, Gray, Text-heavy
        beforeImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop&sat=-100', 
        // After: Vibrant, Colorful, Dynamic
        afterImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=600&auto=format&fit=crop',
        description: "We transform generic posts into community-building experiences."
    },
    {
        id: 'uiux',
        title: 'UI / UX Design',
        subtitle: 'From Clutter to Clarity',
        stat: '3x Conversion Rate',
        // Before: Wireframe/Sketch style
        beforeImage: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop&blur=2',
        // After: Clean Interface
        afterImage: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop',
        description: "Reducing friction in the user journey to maximize retention."
    },
    {
        id: 'ads',
        title: 'Performance Ads',
        subtitle: 'From Ignored to Clicked',
        stat: '-50% CPA',
        // Before: Generic Stock
        beforeImage: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=600&auto=format&fit=crop&sat=-100',
        // After: Product Focus
        afterImage: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop',
        description: "Creative that stops the scroll and drives immediate action."
    },
    {
        id: 'branding',
        title: 'Brand Identity',
        subtitle: 'From Chaos to Cohesion',
        stat: 'Brand Recall',
        // Before: Messy papers
        beforeImage: 'https://images.unsplash.com/photo-1516251193000-18e6586ee186?q=80&w=600&auto=format&fit=crop&blur=4',
        // After: Polished Logo/Sign
        afterImage: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=600&auto=format&fit=crop',
        description: "Building a visual language that speaks louder than words."
    }
];

const BeforeAfterCard: React.FC<{ item: typeof TRANSFORMATIONS[0] }> = ({ item }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        
        const { left, width } = containerRef.current.getBoundingClientRect();
        let clientX;
        
        if ('touches' in event) {
            clientX = event.touches[0].clientX;
        } else {
            clientX = (event as React.MouseEvent).clientX;
        }

        const position = ((clientX - left) / width) * 100;
        setSliderPosition(Math.min(100, Math.max(0, position)));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    // Add global event listeners for drag to prevent getting stuck if mouse leaves div
    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging) {
                // Adapt logic for global coordinate
                if (!containerRef.current) return;
                const { left, width } = containerRef.current.getBoundingClientRect();
                let clientX;
                if ('touches' in e) clientX = e.touches[0].clientX;
                else clientX = (e as MouseEvent).clientX;
                
                const position = ((clientX - left) / width) * 100;
                setSliderPosition(Math.min(100, Math.max(0, position)));
            }
        };
        const handleGlobalUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener('mousemove', handleGlobalMove);
            window.addEventListener('mouseup', handleGlobalUp);
            window.addEventListener('touchmove', handleGlobalMove);
            window.addEventListener('touchend', handleGlobalUp);
        }
        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDragging]);


    return (
        <div className="w-[320px] md:w-[450px] shrink-0 flex flex-col gap-6 select-none">
            {/* Image Container */}
            <div 
                ref={containerRef}
                className="relative h-[400px] w-full rounded-2xl overflow-hidden cursor-ew-resize border border-white/10 shadow-2xl group"
                onMouseDown={handleMouseDown}
                onTouchStart={handleMouseDown}
                onClick={handleMove} // Allow click to jump
            >
                {/* AFTER Image (Background) */}
                <div className="absolute inset-0 w-full h-full">
                    <img 
                        src={item.afterImage} 
                        alt="After" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-dark text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest z-10">
                        After
                    </div>
                </div>

                {/* BEFORE Image (Foreground - Clipped) */}
                <div 
                    className="absolute inset-0 w-full h-full"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src={item.beforeImage} 
                        alt="Before" 
                        className="w-full h-full object-cover grayscale" // Optional grayscale for effect
                    />
                    <div className="absolute top-4 left-4 bg-black/80 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest border border-white/20">
                        Before
                    </div>
                    {/* Dark overlay on 'Before' side to enhance contrast */}
                    <div className="absolute inset-0 bg-black/20 mix-blend-multiply pointer-events-none"></div>
                </div>

                {/* Slider Handle Line */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                    style={{ left: `${sliderPosition}%` }}
                >
                    {/* Handle Button */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-dark">
                        <MoveHorizontal size={16} />
                    </div>
                </div>
            </div>

            {/* Info */}
            <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase leading-none mb-1">{item.title}</h3>
                        <p className="text-accent text-sm font-bold tracking-widest uppercase">{item.subtitle}</p>
                    </div>
                    <div className="text-right">
                         <div className="text-xl font-bold text-white">{item.stat}</div>
                    </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-3 mt-3">
                    {item.description}
                </p>
            </div>
        </div>
    );
};

const CreativeWork: React.FC = () => {
  return (
    <section className="py-24 bg-dark border-t border-white/5 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
            smallTag="Transformations"
            pre="CREATIVE" 
            highlight="SOLUTIONS" 
        />
      </div>
        
      {/* Horizontal Scroll Container */}
      <div className="mt-16 w-full overflow-x-auto pb-12 hide-scrollbar pl-6 md:pl-[calc((100vw-768px)/2+1.5rem)] lg:pl-[calc((100vw-1024px)/2+1.5rem)] xl:pl-[calc((100vw-1280px)/2+1.5rem)] 2xl:pl-[calc((100vw-1536px)/2+1.5rem)]">
          <div className="flex gap-8 w-max pr-6 md:pr-[calc((100vw-768px)/2+1.5rem)] lg:pr-[calc((100vw-1024px)/2+1.5rem)] xl:pr-[calc((100vw-1280px)/2+1.5rem)] 2xl:pr-[calc((100vw-1536px)/2+1.5rem)]">
              {TRANSFORMATIONS.map((item) => (
                  <BeforeAfterCard key={item.id} item={item} />
              ))}
          </div>
      </div>

      {/* Scroll Indicator */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex justify-center gap-2 mt-8 opacity-30">
            <div className="w-12 h-1 rounded-full bg-accent"></div>
            <div className="w-2 h-1 rounded-full bg-white"></div>
            <div className="w-2 h-1 rounded-full bg-white"></div>
        </div>
        <p className="text-center text-xs text-gray-500 uppercase tracking-widest mt-4">
            Drag slider to see the difference
        </p>
      </div>
    </section>
  );
};

export default CreativeWork;