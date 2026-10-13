import React, { useState, useEffect } from 'react';
import { Zap, Copy, Check, Sparkles, CheckCircle2, Clock, ExternalLink } from 'lucide-react';
import { APP_INFO } from '../../constants';
import { AppleInProgressModal } from '../AppleInProgressModal';
import styles from './DownloadBadges.module.scss';

export interface DownloadBadgesProps {
  onOpenAppleInProgress?: () => void;
}

export const DownloadBadges: React.FC<DownloadBadgesProps> = ({
  onOpenAppleInProgress,
}) => {
  const [copied, setCopied] = useState(false);
  const [devicePlatform, setDevicePlatform] = useState('Mobile & Web');
  const [internalAppleModalOpen, setInternalAppleModalOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const ua = navigator.userAgent || '';
      if (/android/i.test(ua)) setDevicePlatform('Android');
      else if (/iPad|iPhone|iPod/.test(ua)) setDevicePlatform('iOS');
      else if (/Macintosh|Mac OS X/.test(ua)) setDevicePlatform('Mac / iOS Sync');
      else if (/Windows/.test(ua)) setDevicePlatform('Windows / Android Sync');
    }
  }, []);

  const copyAppId = () => {
    navigator.clipboard.writeText(APP_INFO.packageId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAppleClick = () => {
    if (onOpenAppleInProgress) {
      onOpenAppleInProgress();
    } else {
      setInternalAppleModalOpen(true);
    }
  };

  return (
    <section id="download" className={styles.section}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className={styles.cardWrapper}>
          <div className={styles.grid}>
            {/* Left Content */}
            <div>
              <div className={`badge-pill badge-pill-accent ${styles.badgePill}`}>
                <Zap size={14} style={{ color: 'var(--brand-primary)' }} />
                <span>Optimized for {devicePlatform}</span>
              </div>

              <h2 className={styles.heading}>
                Get Xpense Cloud on Your Mobile Device
              </h2>

              <p className={styles.subheading}>
                Download the native mobile application to capture expenses anywhere with instant
                receipt tracking, offline storage, and realtime cloud sync.
              </p>

              {/* Download Badges Row */}
              <div className={styles.badgesRow}>
                {/* Google Play Store Badge - Directly Navigates to Play Store */}
                <a
                  href={APP_INFO.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.storeBadge}
                  aria-label="Download Xpense Cloud on Google Play Store"
                >
                  <div className={styles.badgeIconWrapper}>
                    <svg width="28" height="28" viewBox="0 0 24 24">
                      <path fill="#410593" d="M3.6 2.4c-.2.2-.3.5-.3.9v17.4c0 .4.1.7.3.9l.1.1 9.7-9.7v-.2L3.7 2.3l-.1.1z"/>
                      <path fill="#F44336" d="M16.7 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-4 2.3z"/>
                      <path fill="#FFC107" d="M16.8 15.2L13.4 11.8 3.6 21.6c.4.4 1 .4 1.7 0l11.5-6.4z"/>
                      <path fill="#00E676" d="M16.8 8.8L5.3 2.4c-.7-.4-1.3-.4-1.7 0l9.8 9.8 3.4-3.4z"/>
                    </svg>
                  </div>
                  <div className={styles.badgeTextWrap}>
                    <div className={styles.badgeStoreLabel}>GET IT ON</div>
                    <div className={styles.badgeStoreName}>Google Play</div>
                  </div>
                  <div className={styles.liveChip}>
                    <span className={styles.liveDot} />
                    <span>Live</span>
                  </div>
                </a>

                {/* Apple App Store Badge - Shows In Progress and Opens Informative Modal */}
                <button
                  type="button"
                  onClick={handleAppleClick}
                  className={`${styles.storeBadge} ${styles.appleBadgeInProgress}`}
                  aria-label="Apple ID and iOS App Store version currently in progress"
                >
                  <div className={styles.badgeIconWrapper}>
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3.01 1.09.08 2.21-.55 2.88-1.37z"/>
                    </svg>
                  </div>
                  <div className={styles.badgeTextWrap}>
                    <div className={styles.badgeStoreLabel}>Download on the</div>
                    <div className={styles.badgeStoreName}>App Store</div>
                  </div>
                  <div className={styles.inProgressChip}>
                    <span className={styles.pulsingDot} />
                    <span>In Progress</span>
                  </div>
                </button>
              </div>

              {/* Status Strip: Live vs In Progress Indicator */}
              <div className={styles.platformStatusStrip}>
                <a
                  href={APP_INFO.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.statusPillLive}
                  title="View on Google Play Store"
                >
                  <CheckCircle2 size={13} style={{ color: '#10B981' }} />
                  <span><strong>Google Play:</strong> Live (v{APP_INFO.version})</span>
                  <ExternalLink size={11} style={{ opacity: 0.7 }} />
                </a>

                <div className={styles.statusDivider} />

                <button
                  type="button"
                  onClick={handleAppleClick}
                  className={styles.statusPillProgress}
                  title="Click to view Apple ID / iOS release progress"
                >
                  <Clock size={13} style={{ color: '#F59E0B' }} />
                  <span><strong>Apple ID / iOS:</strong> In Progress (App Store)</span>
                </button>
              </div>

              {/* Package ID Copy helper */}
              <div className={styles.packageRow}>
                <span>Flutter Package: <code className={styles.packageCode}>{APP_INFO.packageId}</code></span>
                <button onClick={copyAppId} className={styles.copyBtn}>
                  {copied ? <Check size={14} style={{ color: 'var(--income)' }} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy ID'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Scan QR Code Box */}
            <div className={styles.qrContainer}>
              <div className={styles.qrBadge}>
                <Sparkles size={13} />
                <span>Instant Mobile Download</span>
              </div>

              {/* Authentic QR Code Linking Directly to Google Play */}
              <a
                href={APP_INFO.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.qrCodeBox}
                title="Scan or click to open Xpense Cloud on Google Play Store"
              >
                <img
                  src="/qr-playstore.svg"
                  alt="Scan QR code to install Xpense Cloud on Google Play"
                  width="136"
                  height="136"
                  className={styles.qrCodeImg}
                />
              </a>

              <p className={styles.qrText}>
                Scan with your phone camera to download directly on <strong>Google Play</strong>.
                <span className={styles.qrSubtext}>Apple ID & iOS App Store release is currently in progress.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Modal Fallback if not controlled by parent App */}
      {!onOpenAppleInProgress && (
        <AppleInProgressModal
          isOpen={internalAppleModalOpen}
          onClose={() => setInternalAppleModalOpen(false)}
        />
      )}
    </section>
  );
};

export default DownloadBadges;
