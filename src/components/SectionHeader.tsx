// components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  emoji?: string;          
  className?: string;  
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, emoji, className }) => {
  return (
    <div className={`text-center [font-family:Poppins,sans-serif] ${className || ''}`}>
      <h2 className="text-[32px] font-lighr text-gray-900 flex items-center justify-center gap-2">
        {emoji && <span>{emoji}</span>} 
        {title}
      </h2>
      {subtitle && <p className="text-[16px] text-gray-600 mt-2 mb-12">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
