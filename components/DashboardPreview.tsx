import React from 'react';

// -- LAYOUT CONFIGURATION --
const LAPTOP_START_Y_PCT = 45; 
const CARD_HEIGHT_PCT = 6; 

// Node Layout
const NODES = [
    // ROW 1
    { id: 'n1', label: ['INFLUENCER', 'MARKETING'], x: 15, y: 5, targetX: 30 },
    { id: 'n2', label: ['SEO &', 'SEARCH'], x: 38, y: 5, targetX: 40 },
    { id: 'n3', label: ['CONTENT', 'PRODUCTION'], x: 62, y: 5, targetX: 60 },
    { id: 'n4', label: ['SOCIAL', 'MEDIA'], x: 85, y: 5, targetX: 70 },
    // ROW 2
    { id: 'n5', label: ['PERFORMANCE', 'MEDIA'], x: 25, y: 22, targetX: 35 },
    { id: 'n6', label: ['LOCAL', 'PRESENCE'], x: 50, y: 22, targetX: 50 },
    { id: 'n7', label: ['REPUTATION', 'MGMT'], x: 75, y: 22, targetX: 65 },
];

const DashboardPreview: React.FC = () => {

    const getPath = (node: typeof NODES[0]) => {
        const startX = node.x;
        const startY = node.y + CARD_HEIGHT_PCT; 
        const endY = LAPTOP_START_Y_PCT;
        let endX = node.targetX;
        
        // Fix for vertical lines
        if (Math.abs(startX - endX) < 0.1) {
            endX = startX + 0.05; 
            return `M ${startX} ${startY} L ${endX} ${endY}`;
        }

        const midY = startY + (endY - startY) * 0.5;
        return `M ${startX} ${startY} 
                L ${startX} ${midY} 
                L ${endX} ${midY} 
                L ${endX} ${endY}`;
    };

  return (
    <section className="relative w-full bg-[#000718] pt-12 md:pt-24 pb-12 md:pb-0 overflow-hidden">
      
      {/* Background Title */}
      <div className="absolute top-10 left-0 w-full text-center pointer-events-none z-0 opacity-10">
        <h2 className="text-[12vw] font-bold text-white leading-none tracking-tighter select-none">
            INTEGRATION
        </h2>
      </div>

      <div className="container mx-auto px-6 text-center mb-8 md:mb-12 relative z-10">
         <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight mb-4">
            Unified <span className="text-accent">Intelligence</span>
         </h2>
         <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            All your marketing channels converging into one powerful source of truth.
         </p>
      </div>

      {/* -- VISUALIZATION AREA -- */}
      <div className="w-full">
        <div className="relative w-full max-w-[1600px] mx-auto h-[500px] md:h-[1400px]">
            
            {/* 1. SVG CONNECTIONS LAYER */}
            <svg 
                className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="glow-pulse" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <filter id="trail-blur" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="1.5" />
                    </filter>
                </defs>
                
                {NODES.map((node, index) => {
                    const pathData = getPath(node);
                    const baseDelay = (index * 1.3) % 4; 
                    
                    return (
                        <g key={node.id}>
                            {/* Static Track */}
                            <path 
                                d={pathData} 
                                fill="none" 
                                stroke="#34CC32" 
                                strokeWidth="1" 
                                strokeOpacity="0.1"
                                vectorEffect="non-scaling-stroke"
                            />
                            {/* Trail Tail */}
                            <path 
                                d={pathData} 
                                fill="none" 
                                stroke="#34CC32" 
                                strokeWidth="3" 
                                className="animate-pulse-flow"
                                strokeOpacity="0.4"
                                filter="url(#trail-blur)"
                                vectorEffect="non-scaling-stroke"
                                style={{ animationDelay: `${baseDelay + 0.12}s`, animationDuration: '3s' }}
                            />
                            {/* Trail Body */}
                            <path 
                                d={pathData} 
                                fill="none" 
                                stroke="#34CC32" 
                                strokeWidth="3" 
                                className="animate-pulse-flow"
                                strokeOpacity="0.7"
                                filter="url(#trail-blur)"
                                vectorEffect="non-scaling-stroke"
                                style={{ animationDelay: `${baseDelay + 0.06}s`, animationDuration: '3s' }}
                            />
                            {/* Trail Head */}
                            <path 
                                d={pathData} 
                                fill="none" 
                                stroke="#34CC32" 
                                strokeWidth="3" 
                                className="animate-pulse-flow"
                                strokeOpacity="1"
                                filter="url(#glow-pulse)"
                                vectorEffect="non-scaling-stroke"
                                style={{ animationDelay: `${baseDelay}s`, animationDuration: '3s' }}
                            />
                        </g>
                    );
                })}
            </svg>

            {/* 2. CONNECTION DOTS */}
            <div className="absolute inset-0 z-15 pointer-events-none">
                {NODES.map((node, index) => {
                    const pulseDelay = (index * 1.3) % 4; 
                    return (
                        <React.Fragment key={`dots-${node.id}`}>
                            <div 
                                className="absolute w-2 h-2 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#34CC32]"
                                style={{ 
                                    left: `${node.x}%`, 
                                    top: `${node.y + CARD_HEIGHT_PCT}%`,
                                    animation: `pulse 3s infinite ${pulseDelay}s`
                                }}
                            />
                            <div 
                                className="absolute w-1.5 h-1.5 bg-accent rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
                                style={{ left: `${node.targetX}%`, top: `${LAPTOP_START_Y_PCT}%` }}
                            />
                        </React.Fragment>
                    );
                })}
            </div>

            {/* 3. SERVICE CARDS LAYER */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {NODES.map((node) => (
                    <div 
                        key={node.id}
                        className="absolute transform -translate-x-1/2 pointer-events-auto"
                        style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    >
                        <div className="relative group cursor-default">
                            <div className="bg-[#0b1623] border border-white/10 px-1.5 py-1.5 md:px-6 md:py-5 rounded md:rounded-lg shadow-2xl backdrop-blur-md min-w-[68px] md:min-w-[180px] text-center transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(52,204,50,0.4)] group-hover:-translate-y-1">
                                {node.label.map((line, i) => (
                                    <div key={i} className={`text-[7px] md:text-xs font-bold tracking-widest uppercase leading-tight ${i === 0 ? 'text-white' : 'text-accent'}`}>
                                        {line}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 4. PLATFORM IMAGE LAYER */}
            <div 
                className="absolute left-1/2 -translate-x-1/2 w-[85%] md:w-[70%] z-30 top-[40%] md:top-[45%] h-[55%]"
            >
                <div className="relative w-full">
                    {/* The Image Itself - No Border */}
                    <img 
                        src="https://www.convergensee.ai/assets/img/platfrom-mock.png" 
                        alt="ConvergenSEE Platform Dashboard" 
                        className="w-full h-auto object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.8)] rounded-xl"
                    />
                    
                    {/* Subtle Ambient Glow Behind Image */}
                    <div className="absolute inset-0 bg-accent/5 blur-[80px] -z-10 rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;