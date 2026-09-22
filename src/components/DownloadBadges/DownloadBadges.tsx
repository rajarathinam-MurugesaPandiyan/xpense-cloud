import React, { useState, useEffect } from 'react';
import { Zap, Copy, Check } from 'lucide-react';
import { APP_INFO } from '../../constants';
import styles from './DownloadBadges.module.scss';

export const DownloadBadges: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [devicePlatform, setDevicePlatform] = useState('Mobile & Web');

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
                {/* Google Play Store Badge */}
                <a
                  href={APP_INFO.playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.storeBadge}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24">
                    <path fill="#410593" d="M3.6 2.4c-.2.2-.3.5-.3.9v17.4c0 .4.1.7.3.9l.1.1 9.7-9.7v-.2L3.7 2.3l-.1.1z"/>
                    <path fill="#F44336" d="M16.7 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-4 2.3z"/>
                    <path fill="#FFC107" d="M16.8 15.2L13.4 11.8 3.6 21.6c.4.4 1 .4 1.7 0l11.5-6.4z"/>
                    <path fill="#00E676" d="M16.8 8.8L5.3 2.4c-.7-.4-1.3-.4-1.7 0l9.8 9.8 3.4-3.4z"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div className={styles.badgeStoreLabel}>GET IT ON</div>
                    <div className={styles.badgeStoreName}>Google Play</div>
                  </div>
                </a>

                {/* Apple App Store Badge */}
                <a
                  href={APP_INFO.appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.storeBadge}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--text-primary)' }}>
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3.01 1.09.08 2.21-.55 2.88-1.37z"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div className={styles.badgeStoreLabel}>Download on the</div>
                    <div className={styles.badgeStoreName}>App Store</div>
                  </div>
                </a>
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
                Instant QR Mobile Download
              </div>

              {/* QR Code Box */}
              <div className={styles.qrCodeBox}>
                <svg width="136" height="136" viewBox="0 0 100 100" fill="#0D0F12">
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#0D0F12" strokeWidth="6"/>
                  <rect x="12" y="12" width="14" height="14" fill="#0D0F12"/>
                  <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#0D0F12" strokeWidth="6"/>
                  <rect x="74" y="12" width="14" height="14" fill="#0D0F12"/>
                  <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#0D0F12" strokeWidth="6"/>
                  <rect x="12" y="74" width="14" height="14" fill="#0D0F12"/>
                  <rect x="40" y="10" width="8" height="8" fill="#0D0F12"/>
                  <rect x="52" y="20" width="8" height="8" fill="#0D0F12"/>
                  <rect x="40" y="32" width="12" height="8" fill="#0D0F12"/>
                  <rect x="10" y="42" width="8" height="12" fill="#0D0F12"/>
                  <rect x="25" y="50" width="12" height="8" fill="#0D0F12"/>
                  <rect x="42" y="42" width="16" height="16" rx="3" fill="#0D0F12"/>
                  <rect x="65" y="42" width="10" height="10" fill="#0D0F12"/>
                  <rect x="80" y="50" width="12" height="10" fill="#0D0F12"/>
                  <rect x="40" y="68" width="10" height="12" fill="#0D0F12"/>
                  <rect x="55" y="75" width="14" height="14" fill="#0D0F12"/>
                  <rect x="75" y="72" width="15" height="18" fill="#0D0F12"/>
                </svg>
              </div>

              <p className={styles.qrText}>
                Scan with your phone camera to jump straight to Google Play & App Store.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBadges;
