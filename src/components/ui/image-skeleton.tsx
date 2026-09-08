'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface ImageWithSkeletonProps extends ImageProps {
  wrapperClassName?: string;
  skeletonClassName?: string;
}

export const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  skeletonClassName = '',
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      {/* Animated Skeleton Shimmer Placeholder */}
      {!isLoaded && (
        <div
          className={`absolute inset-0 z-10 animate-pulse bg-navy-900/90 border border-white/5 ${skeletonClassName}`}
        >
          <div className="w-full h-full bg-gradient-to-r from-navy-900 via-navy-800/80 to-navy-900 animate-pulse" />
        </div>
      )}

      <Image
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
        {...props}
      />
    </div>
  );
};
