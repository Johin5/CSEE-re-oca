import React from 'react';

interface SectionHeadingProps {
  pre?: string;
  highlight: string;
  post?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  smallTag?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ pre, highlight, post, align = 'center', className = '', smallTag }) => {
  const alignmentClass = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center';

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      {smallTag && (
         <div className="inline-block px-4 py-1 border border-white/20 text-xs tracking-wider uppercase mb-4">
            {smallTag}
         </div>
      )}
      <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight leading-tight">
        {pre} <span className="text-accent">{highlight}</span> {post}
      </h2>
    </div>
  );
};

export default SectionHeading;