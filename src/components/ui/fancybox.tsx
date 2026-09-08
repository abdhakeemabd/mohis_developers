'use client';

import React, { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

interface Props {
  delegate?: string;
  options?: Record<string, any>;
  children: React.ReactNode;
}

export default function Fancybox({
  delegate = '[data-fancybox]',
  options = {},
  children,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      NativeFancybox.bind(container, delegate, options);
    }

    return () => {
      if (container) {
        NativeFancybox.unbind(container);
        NativeFancybox.close();
      }
    };
  }, [delegate, options]);

  return <div ref={containerRef}>{children}</div>;
}
