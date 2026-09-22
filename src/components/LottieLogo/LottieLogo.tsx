import React, { useState } from 'react';
import xpenseLogo from '../../assets/xpense.png';
import styles from './LottieLogo.module.scss';

export interface LottieLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
  textClass?: string;
}

export const LottieLogo: React.FC<LottieLogoProps> = ({
  size = 38,
  className = '',
  showText = true,
  textClass = '',
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={`${styles.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* App Icon Capsule / Squircle */}
      <div
        className={`${styles.iconWrapper} ${isHovered ? styles.isHovered : ''}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: size > 36 ? '11px' : '9px',
        }}
      >
        <img
          src={xpenseLogo}
          alt="Xpense Cloud"
          className={styles.logoImage}
        />
      </div>

      {showText && (
        <div className={`${styles.brandTitleGroup} ${textClass}`}>
          <div className={styles.brandRow}>
            <span
              className={styles.brandName}
              style={{ fontSize: size > 40 ? '1.45rem' : '1.25rem' }}
            >
              Xpense
            </span>
            <span className={styles.brandPill}>
              Cloud
            </span>
          </div>
          <span className={styles.brandSubtitle}>
            SMART EXPENSE TRACKER
          </span>
        </div>
      )}
    </div>
  );
};

export const Logo = LottieLogo;
export const XpenseLogo = LottieLogo;
export default LottieLogo;
