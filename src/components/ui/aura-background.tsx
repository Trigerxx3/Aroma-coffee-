import React from 'react';
import { cn } from '@/lib/utils';

interface AuraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  isFixed?: boolean;
}

export function AuraBackground({ children, className, isFixed = false }: AuraBackgroundProps) {
  return (
    <div
      className={cn(
        isFixed ? 'fixed inset-0 overflow-hidden pointer-events-none z-0' : 'aura-bg',
        className
      )}
      aria-hidden={isFixed ? 'true' : undefined}
    >
      <div className="aura-layer-1" aria-hidden="true" />
      <div className="aura-layer-2" aria-hidden="true" />
      <div className="aura-layer-3" aria-hidden="true" />
      <div className="aura-layer-4" aria-hidden="true" />
      <div className="aura-layer-5" aria-hidden="true" />
      <div className="aura-layer-6" aria-hidden="true" />
      <div className="aura-grain" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix
              type="matrix"
              values="0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0.181 0.608 0.061 0 0.075
                    0     0     0     1 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>
      {children && <div className="relative z-[1]">{children}</div>}
    </div>
  );
}
