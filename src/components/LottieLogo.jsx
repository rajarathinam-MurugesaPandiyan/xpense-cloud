import React, { useState } from 'react';
import { useLottie } from 'lottie-react';
import logoAnimationData from '../assets/logo-lottie.json';

const AnimatedLottie = ({ size }) => {
  const options = {
    animationData: logoAnimationData,
    loop: true,
    autoplay: true,
  };

  const style = {
    width: size * 1.3,
    height: size * 1.3,
  };

  const { View } = useLottie(options, style);
  return View;
};

export const LottieLogo = ({ size = 42, className = '', showText = true, textClass = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`lottie-logo-container ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
    >
      <div 
        style={{
          position: 'relative',
          width: `${size}px`,
          height: `${size}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Subtle backdrop behind logo */}
        <div 
          style={{
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.06)',
            opacity: isHovered ? 0.8 : 0.4,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none'
          }}
        />

        {/* Lottie Animation via Hook */}
        <AnimatedLottie size={size} />
      </div>

      {showText && (
        <div className={`brand-title-group ${textClass}`} style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span 
              style={{ 
                fontFamily: 'var(--font-heading)',
                fontSize: size > 40 ? '1.5rem' : '1.25rem',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff'
              }}
            >
              Xpense
            </span>
            <span 
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                padding: '2px 7px',
                borderRadius: '6px',
                background: '#ffffff',
                color: '#1D1D21',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              Cloud
            </span>
          </div>
          <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 500, letterSpacing: '0.04em' }}>
            SMART EXPENSE TRACKER
          </span>
        </div>
      )}
    </div>
  );
};

export default LottieLogo;
