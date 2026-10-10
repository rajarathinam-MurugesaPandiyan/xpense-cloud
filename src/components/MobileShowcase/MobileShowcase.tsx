import React, { useState, useMemo } from 'react';
import {
  Smartphone,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Zap,
  ShieldCheck,
  Download,
  Layers,
} from 'lucide-react';
import {
  APP_SCREENSHOTS,
  APP_SCREENSHOT_CATEGORIES,
  ScreenshotCategory,
  AppScreenshot,
} from '../../constants';
import { DeviceMockup } from './DeviceMockup';
import { ScreenshotLightbox } from './ScreenshotLightbox';
import styles from './MobileShowcase.module.scss';

const CATEGORY_GLOW_COLORS: Record<string, string> = {
  core: 'radial-gradient(circle, rgba(26, 115, 232, 0.28) 0%, rgba(11, 87, 208, 0.1) 50%, transparent 75%)',
  trips: 'radial-gradient(circle, rgba(249, 171, 0, 0.28) 0%, rgba(217, 119, 6, 0.1) 50%, transparent 75%)',
  reminders: 'radial-gradient(circle, rgba(30, 142, 62, 0.28) 0%, rgba(5, 150, 105, 0.1) 50%, transparent 75%)',
  subscriptions: 'radial-gradient(circle, rgba(11, 87, 208, 0.28) 0%, rgba(8, 66, 160, 0.1) 50%, transparent 75%)',
  analytics: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, rgba(109, 40, 217, 0.1) 50%, transparent 75%)',
  budgets: 'radial-gradient(circle, rgba(234, 67, 53, 0.28) 0%, rgba(225, 29, 72, 0.1) 50%, transparent 75%)',
  settings: 'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(14, 116, 144, 0.1) 50%, transparent 75%)',
};

export const MobileShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ScreenshotCategory>('all');
  const [activeScreenshotId, setActiveScreenshotId] = useState<string>('dashboard');
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Filtered screens for the category
  const filteredScreenshots = useMemo(() => {
    if (activeCategory === 'all') return APP_SCREENSHOTS;
    return APP_SCREENSHOTS.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  // Active highlighted screenshot
  const activeScreenshot = useMemo(() => {
    return (
      APP_SCREENSHOTS.find((s) => s.id === activeScreenshotId) || APP_SCREENSHOTS[0]
    );
  }, [activeScreenshotId]);

  // Screens belonging to the current active flow (for mini thumbnail preview)
  const currentFlowScreens = useMemo(() => {
    return APP_SCREENSHOTS.filter((s) => s.category === activeScreenshot.category);
  }, [activeScreenshot.category]);

  const activeIndexInAll = useMemo(() => {
    return APP_SCREENSHOTS.findIndex((s) => s.id === activeScreenshot.id);
  }, [activeScreenshot.id]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleSelectCategory = (
    cat: ScreenshotCategory,
    event?: React.MouseEvent<HTMLButtonElement>
  ) => {
    setActiveCategory(cat);
    const inCategory =
      cat === 'all'
        ? APP_SCREENSHOTS[0]
        : APP_SCREENSHOTS.find((s) => s.category === cat);
    if (inCategory) {
      setActiveScreenshotId(inCategory.id);
    }
    if (event?.currentTarget) {
      event.currentTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  const handlePrevScreenshot = () => {
    const list = filteredScreenshots.length > 0 ? filteredScreenshots : APP_SCREENSHOTS;
    const currentIdx = list.findIndex((s) => s.id === activeScreenshot.id);
    const newIdx = (currentIdx - 1 + list.length) % list.length;
    setActiveScreenshotId(list[newIdx].id);
  };

  const handleNextScreenshot = () => {
    const list = filteredScreenshots.length > 0 ? filteredScreenshots : APP_SCREENSHOTS;
    const currentIdx = list.findIndex((s) => s.id === activeScreenshot.id);
    const newIdx = (currentIdx + 1) % list.length;
    setActiveScreenshotId(list[newIdx].id);
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
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      handleNextScreenshot();
    } else if (distance < -minSwipeDistance) {
      handlePrevScreenshot();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handleOpenLightbox = (id?: string) => {
    const targetId = id || activeScreenshot.id;
    const idx = APP_SCREENSHOTS.findIndex((s) => s.id === targetId);
    setLightboxIndex(idx >= 0 ? idx : 0);
    setIsLightboxOpen(true);
  };

  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const glowStyle =
    CATEGORY_GLOW_COLORS[activeScreenshot.category] || CATEGORY_GLOW_COLORS.core;

  return (
    <section id="mobile-showcase" className={styles.showcaseSection}>
      {/* Background Ambient Radial Glow */}
      <div className={styles.sectionAmbientGlow} />

      <div className="container">
        {/* Section Header */}
        <div className={styles.headerContainer}>
          <div className={`badge-pill badge-pill-accent ${styles.badgePill}`}>
            <Smartphone size={15} style={{ color: '#0B57D0' }} />
            <span>NATIVE FLUTTER SUITE • MATERIAL 3 • 15 REAL SCREENS</span>
          </div>

          <h2 className={styles.title}>
            Experience the <span className={styles.titleGradient}>XPense Mobile App</span>
          </h2>

          <p className={styles.subtitle}>
            Engineered with Google Pay ergonomics, sub-second latency, and offline-first Hive storage.
            Inspect all 15 native screens captured directly from real mobile devices below.
          </p>

          {/* Upgraded Category Filter Tabs with Horizontal Mobile Scrolling */}
          <div className={styles.filterTabBar}>
            {APP_SCREENSHOT_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={(e) => handleSelectCategory(cat.id, e)}
                  className={`${styles.filterBtn} ${isActive ? styles.activeFilter : ''}`}
                >
                  <span>{cat.label}</span>
                  <span className={styles.filterCount}>{cat.count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Interactive Spotlight Stage */}
        <div className={styles.spotlightStage}>
          {/* Left Column: Device Mockup Stage */}
          <div className={styles.phoneStageWrapper}>
            {/* Dynamic Ambient Underglow matching screen category */}
            <div
              className={styles.dynamicPhoneGlow}
              style={{ background: glowStyle }}
            />

            <div className={styles.phoneStageControls}>
              {/* Prev Navigation Button */}
              <button
                type="button"
                onClick={handlePrevScreenshot}
                className={`${styles.stageNavBtn} ${styles.stageNavPrev}`}
                aria-label="Previous screen"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Central Realistic iPhone Mockup with Touch Swipe */}
              <DeviceMockup
                src={activeScreenshot.image}
                alt={activeScreenshot.title}
                title={activeScreenshot.title}
                size="large"
                isInteractive={true}
                priority={true}
                onZoom={() => handleOpenLightbox(activeScreenshot.id)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />

              {/* Next Navigation Button */}
              <button
                type="button"
                onClick={handleNextScreenshot}
                className={`${styles.stageNavBtn} ${styles.stageNavNext}`}
                aria-label="Next screen"
              >
                <ChevronRight size={22} />
              </button>
            </div>

            {/* Stage Footer Bar */}
            <div className={styles.phoneStageFooter}>
              <span className={styles.counterText}>
                Screen {activeIndexInAll + 1} of {APP_SCREENSHOTS.length}
              </span>
              <button
                type="button"
                onClick={() => handleOpenLightbox(activeScreenshot.id)}
                className={styles.stageInspectBtn}
              >
                <ZoomIn size={14} />
                <span>Tap to Inspect HD</span>
              </button>
            </div>

            {/* Mobile Touch Swipe Hint */}
            <div className={styles.swipeHint}>
              <Smartphone size={13} />
              <span>Swipe left or right on phone to browse screens</span>
            </div>
          </div>

          {/* Right Column: Deep Feature Spotlight Panel */}
          <div className={styles.spotlightContent}>
            <div className={styles.spotlightHeader}>
              <div className={styles.badgeGroup}>
                <span className={styles.categoryTag}>
                  <Layers size={13} />
                  <span>{activeScreenshot.categoryLabel}</span>
                </span>
                <span className={styles.statusPill}>
                  <Zap size={12} />
                  <span>{activeScreenshot.badge}</span>
                </span>
              </div>

              <h3 className={styles.spotlightTitle}>{activeScreenshot.title}</h3>
              <p className={styles.spotlightTagline}>{activeScreenshot.tagline}</p>
            </div>

            <p className={styles.spotlightDesc}>{activeScreenshot.description}</p>

            {/* Feature Highlights Grid */}
            <div className={styles.highlightsBox}>
              <div className={styles.highlightsBoxTitle}>
                <Sparkles size={14} style={{ color: 'var(--brand-primary)' }} />
                <span>On-Screen Capabilities</span>
              </div>
              <div className={styles.highlightsGrid}>
                {activeScreenshot.highlights.map((highlight, index) => (
                  <div key={index} className={styles.highlightRow}>
                    <div className={styles.highlightIconWrap}>
                      <CheckCircle2 size={13} />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Screens in this flow (Mini Thumbnails) */}
            {currentFlowScreens.length > 1 && (
              <div className={styles.flowThumbnailsSection}>
                <span className={styles.flowThumbnailsLabel}>
                  Related in {activeScreenshot.categoryLabel} Flow ({currentFlowScreens.length})
                </span>
                <div className={styles.flowThumbnailsRow}>
                  {currentFlowScreens.map((flowItem) => {
                    const isSelected = flowItem.id === activeScreenshot.id;
                    return (
                      <button
                        key={flowItem.id}
                        type="button"
                        onClick={() => setActiveScreenshotId(flowItem.id)}
                        className={`${styles.flowThumbBtn} ${isSelected ? styles.flowThumbActive : ''}`}
                      >
                        <img
                          src={flowItem.image}
                          alt={flowItem.title}
                          className={styles.flowThumbImg}
                        />
                        <span className={styles.flowThumbTitle}>{flowItem.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Action Buttons Row */}
            <div className={styles.spotlightCtaRow}>
              <button
                type="button"
                onClick={() => handleOpenLightbox(activeScreenshot.id)}
                className={styles.primaryInspectBtn}
              >
                <ZoomIn size={16} />
                <span>Inspect in Fullscreen HD</span>
              </button>

              <button
                type="button"
                onClick={handleNextScreenshot}
                className={styles.secondaryNextBtn}
              >
                <span>Next Screen</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={scrollToDownload}
                className={styles.secondaryNextBtn}
              >
                <Download size={15} />
                <span>Get App</span>
              </button>
            </div>
          </div>
        </div>

        {/* Complete 15 App Screens Gallery */}
        <div className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <div>
              <div
                className="badge-pill badge-pill-accent"
                style={{ marginBottom: '10px', fontSize: '0.78rem' }}
              >
                <ShieldCheck size={14} style={{ color: '#0B57D0' }} />
                <span>COMPLETE FLUTTER FLOW • 15 NATIVE CAPTURES</span>
              </div>
              <h3 className={styles.galleryTitle}>All 15 Native App Screens</h3>
              <p className={styles.gallerySubtitle}>
                Click any screen below to preview in the spotlight stage or zoom into full HD resolution.
              </p>
            </div>
          </div>

          {/* 15 Screenshots Grid */}
          <div className={styles.galleryGrid}>
            {filteredScreenshots.map((item) => {
              const isSelected = item.id === activeScreenshot.id;

              return (
                <div
                  key={item.id}
                  className={`${styles.galleryCard} ${isSelected ? styles.galleryCardActive : ''}`}
                  onClick={() => {
                    setActiveScreenshotId(item.id);
                    // Also scroll slightly to the spotlight stage if user clicks from below
                    const spotlight = document.getElementById('mobile-showcase');
                    if (spotlight) {
                      spotlight.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  onDoubleClick={() => handleOpenLightbox(item.id)}
                  title={`${item.title} - Click to spotlight, double-click for Full HD`}
                >
                  <div className={styles.galleryCardMockupWrapper}>
                    <div className={styles.galleryCardMockup}>
                      <img src={item.image} alt={item.title} loading="lazy" />
                      <div
                        className={styles.galleryCardInspectOverlay}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenLightbox(item.id);
                        }}
                      >
                        <ZoomIn size={20} />
                      </div>
                    </div>
                  </div>

                  <span className={styles.galleryCardBadge}>{item.badge}</span>
                  <div className={styles.galleryCardTitle}>{item.title}</div>
                  <div className={styles.galleryCardSub}>{item.subtitle}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* High-Resolution Screenshot Lightbox Modal */}
      <ScreenshotLightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        screenshots={APP_SCREENSHOTS}
        currentIndex={lightboxIndex}
        onSelectIndex={(index) => {
          setLightboxIndex(index);
          setActiveScreenshotId(APP_SCREENSHOTS[index].id);
        }}
      />
    </section>
  );
};

export default MobileShowcase;
