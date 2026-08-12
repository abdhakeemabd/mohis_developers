import React from 'react';
import Image from 'next/image';
import logoImg from '@/assets/image/logo.png';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}

export const MohisLogo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'dark',
  showTagline = true 
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative flex items-center justify-center h-12 w-auto overflow-hidden">
        <Image 
          src={logoImg} 
          alt="Mohis Developers Logo" 
          height={48} 
          className="h-11 w-auto object-contain transition-transform duration-300 hover:scale-105" 
          priority
        />
      </div>
    </div>
  );
};
