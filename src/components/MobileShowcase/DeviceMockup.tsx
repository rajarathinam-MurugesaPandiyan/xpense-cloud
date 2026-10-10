import React from 'react';
import { ZoomIn } from 'lucide-react';
import styles from './MobileShowcase.module.scss';

export interface DeviceMockupProps {
  src: string;
  alt: string;
  title: string;
  size?: 'large' | 'medium' | 'small';
  isInteractive?: boolean;
  onZoom?: () => void;
  priority?: boolean;
  onTouchStart?: (e: React.TouchEvent) => void;
  onTouchMove?: (e: React.TouchEvent) => void;
  onTouchEnd?: (e: React.TouchEvent) => void;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  src,
  alt,
  title,
  size = 'large',
  isInteractive = true,
  onZoom,
  priority = false,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
}) => {
  return (
    <div
      className={`${styles.deviceFrame} ${styles[size]} ${isInteractive ? styles.interactive : ''}`}
      onClick={isInteractive && onZoom ? onZoom : undefined}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      role={isInteractive && onZoom ? 'button' : undefined}
      tabIndex={isInteractive && onZoom ? 0 : undefined}
      onKeyDown={(e) => {
        if (isInteractive && onZoom && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onZoom();
        }
      }}
      aria-label={`Inspect ${title} screenshot`}
    >
      {/* Side Hardware Buttons */}
      <div className={styles.sideBtnVolumeUp} />
      <div className={styles.sideBtnVolumeDown} />
      <div className={styles.sideBtnPower} />
      <div className={styles.sideBtnAction} />

      {/* Screen Container */}
      <div className={styles.screenInner}>
        {/* Dynamic Island Pill */}
        <div className={styles.notchPill}>
          <div className={styles.cameraLens} />
          <div className={styles.sensorDot} />
        </div>

        {/* Real App Screenshot Image */}
        <img
          src={src}
          alt={alt}
          className={styles.screenImage}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
        />

        {/* Glass Glare Reflection Line */}
        <div className={styles.glassSheen} />

        {/* Hover Zoom Prompt */}
        {isInteractive && (
          <div className={styles.zoomOverlay}>
            <span className={styles.zoomPill}>
              <ZoomIn size={14} />
              <span>Inspect Full HD</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceMockup;
