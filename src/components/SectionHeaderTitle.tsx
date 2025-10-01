// components/SectionHeader.tsx
import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string; 
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, className }) => {
  return (
    <div className={`text-center font-[Poppins] ${className || ''}`}>
      <h2 className="text-[40px] font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-[16px] text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
