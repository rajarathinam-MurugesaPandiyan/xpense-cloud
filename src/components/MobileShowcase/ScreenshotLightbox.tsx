import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Smartphone, Sparkles, Check } from 'lucide-react';
import { AppScreenshot } from '../../constants';
import styles from './MobileShowcase.module.scss';

export interface ScreenshotLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  screenshots: AppScreenshot[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export const ScreenshotLightbox: React.FC<ScreenshotLightboxProps> = ({
  isOpen,
  onClose,
  screenshots,
  currentIndex,
  onSelectIndex,
}) => {
  const current = screenshots[currentIndex];
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onSelectIndex((currentIndex - 1 + screenshots.length) % screenshots.length);
      } else if (e.key === 'ArrowRight') {
        onSelectIndex((currentIndex + 1) % screenshots.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, currentIndex, screenshots.length, onClose, onSelectIndex]);

  if (!isOpen || !current) return null;

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onSelectIndex((currentIndex - 1 + screenshots.length) % screenshots.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    onSelectIndex((currentIndex + 1) % screenshots.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      // Swiped left -> next screen
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev screen
      handlePrev();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.lightboxBackdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Inspect ${current.title}`}
    >
      <div
        className={styles.lightboxContainer}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className={styles.lightboxHeader}>
          <div className={styles.lightboxHeaderLeft}>
            <span className={styles.lightboxBadge}>
              <Smartphone size={13} />
              <span>{current.categoryLabel}</span>
            </span>
            <span className={styles.lightboxCounter}>
              {currentIndex + 1} of {screenshots.length}
            </span>
          </div>

          <div className={styles.lightboxHeaderTitle}>
            <h4>{current.title}</h4>
            <p>{current.subtitle}</p>
          </div>

          <button
            type="button"
            className={styles.lightboxCloseBtn}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Content Stage with Touch Swipe */}
        <div
          className={styles.lightboxBody}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous Arrow */}
          <button
            type="button"
            className={`${styles.lightboxNavBtn} ${styles.lightboxNavPrev}`}
            onClick={handlePrev}
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={24} />
          </button>

          {/* High-Resolution Phone Center Stage */}
          <div className={styles.lightboxPhoneStage}>
            <div className={styles.lightboxPhoneFrame}>
              <div className={styles.lightboxPhoneScreen}>
                <img
                  src={current.image}
                  alt={current.title}
                  className={styles.lightboxImage}
                />
              </div>
            </div>
          </div>

          {/* Next Arrow */}
          <button
            type="button"
            className={`${styles.lightboxNavBtn} ${styles.lightboxNavNext}`}
            onClick={handleNext}
            aria-label="Next screenshot"
          >
            <ChevronRight size={24} />
          </button>

          {/* Details Sidebar / Mobile Drawer */}
          <div className={styles.lightboxSidebar}>
            <div className={styles.lightboxSidebarHeader}>
              <span className={styles.lightboxPill}>{current.badge}</span>
              <h3 className={styles.sidebarTitle}>{current.title}</h3>
              <p className={styles.sidebarTagline}>{current.tagline}</p>
            </div>

            <p className={styles.sidebarDescription}>{current.description}</p>

            <div className={styles.sidebarHighlights}>
              <div className={styles.highlightsHeader}>
                <Sparkles size={14} style={{ color: 'var(--brand-primary)' }} />
                <span>Feature Highlights</span>
              </div>
              <ul className={styles.highlightsList}>
                {current.highlights.map((item, idx) => (
                  <li key={idx} className={styles.highlightItem}>
                    <span className={styles.highlightDot}>
                      <Check size={11} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Thumbnail Strip */}
        <div className={styles.lightboxThumbStrip}>
          {screenshots.map((s, idx) => (
            <button
              key={s.id}
              type="button"
              className={`${styles.lightboxThumbBtn} ${idx === currentIndex ? styles.thumbActive : ''}`}
              onClick={() => onSelectIndex(idx)}
              title={s.title}
            >
              <img src={s.image} alt={s.title} className={styles.thumbImg} />
              <span className={styles.thumbLabel}>{idx + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScreenshotLightbox;
