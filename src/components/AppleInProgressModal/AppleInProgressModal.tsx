import React, { useEffect } from 'react';
import {
  X,
  CheckCircle2,
  Clock,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  Zap,
} from 'lucide-react';
import { APP_INFO } from '../../constants';
import styles from './AppleInProgressModal.module.scss';

export interface AppleInProgressModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppleInProgressModal: React.FC<AppleInProgressModalProps> = ({
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apple-modal-title"
    >
      <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close dialog"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className={styles.header}>
          <div className={styles.iconContainer}>
            {/* Apple Logo SVG */}
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={styles.appleIcon}
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3.01 1.09.08 2.21-.55 2.88-1.37z" />
            </svg>
          </div>

          <div className={styles.statusPill}>
            <span className={styles.pulsingDot} />
            <span>Apple ID & iOS • Build In Progress</span>
          </div>

          <h2 id="apple-modal-title" className={styles.title}>
            iOS App Coming Soon to App Store
          </h2>
          <p className={styles.subtitle}>
            We are actively preparing the native Apple iOS build of{' '}
            <strong>Xpense Cloud</strong> with Apple ID Sign-In, iCloud backup sync, and Google Pay ergonomics.
          </p>
        </div>

        {/* Development & Release Timeline */}
        <div className={styles.progressCard}>
          <div className={styles.progressCardHeader}>
            <Sparkles size={14} className={styles.progressCardIcon} />
            <span>App Store Readiness Status</span>
          </div>

          <div className={styles.timeline}>
            {/* Step 1 */}
            <div className={`${styles.timelineStep} ${styles.completedStep}`}>
              <div className={styles.stepDot}>
                <CheckCircle2 size={14} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Core Flutter Architecture & Hive DB</div>
                <div className={styles.stepDesc}>Offline storage & 15 native screens ready</div>
              </div>
              <span className={styles.stepTagReady}>Done</span>
            </div>

            {/* Step 2 */}
            <div className={`${styles.timelineStep} ${styles.completedStep}`}>
              <div className={styles.stepDot}>
                <CheckCircle2 size={14} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Firebase Firestore Realtime Sync</div>
                <div className={styles.stepDesc}>Multi-device reconciliation validated</div>
              </div>
              <span className={styles.stepTagReady}>Done</span>
            </div>

            {/* Step 3: Active */}
            <div className={`${styles.timelineStep} ${styles.activeStep}`}>
              <div className={styles.stepDotActive}>
                <Clock size={14} />
              </div>
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Apple ID Sign-In & TestFlight Build</div>
                <div className={styles.stepDesc}>iOS provisioning profile & Apple Developer compliance</div>
              </div>
              <span className={styles.stepTagActive}>In Progress</span>
            </div>

            {/* Step 4 */}
            <div className={`${styles.timelineStep} ${styles.pendingStep}`}>
              <div className={styles.stepDotPending} />
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>Public Apple App Store Listing</div>
                <div className={styles.stepDesc}>Official global rollout on iOS & iPadOS</div>
              </div>
              <span className={styles.stepTagPending}>Scheduled</span>
            </div>
          </div>
        </div>

        {/* Google Play Alternative Card */}
        <div className={styles.androidLiveBox}>
          <div className={styles.androidLiveIcon}>
            <Zap size={18} style={{ color: '#00E676' }} />
          </div>
          <div className={styles.androidLiveContent}>
            <div className={styles.androidLiveTitle}>
              Android Version is 100% Live Right Now!
            </div>
            <div className={styles.androidLiveText}>
              You don’t have to wait to start tracking your finances. The full production app is available for immediate download on Google Play Store.
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionsRow}>
          <a
            href={APP_INFO.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googlePlayBtn}
          >
            {/* Google Play colored icon */}
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="#410593" d="M3.6 2.4c-.2.2-.3.5-.3.9v17.4c0 .4.1.7.3.9l.1.1 9.7-9.7v-.2L3.7 2.3l-.1.1z"/>
              <path fill="#F44336" d="M16.7 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-4 2.3z"/>
              <path fill="#FFC107" d="M16.8 15.2L13.4 11.8 3.6 21.6c.4.4 1 .4 1.7 0l11.5-6.4z"/>
              <path fill="#00E676" d="M16.8 8.8L5.3 2.4c-.7-.4-1.3-.4-1.7 0l9.8 9.8 3.4-3.4z"/>
            </svg>
            <span>Get on Google Play</span>
            <ExternalLink size={15} />
          </a>

          <button
            type="button"
            onClick={onClose}
            className={styles.closeBtnSecondary}
          >
            <span>Got it, Thanks</span>
          </button>
        </div>

        {/* Security badge footer */}
        <div className={styles.modalFooter}>
          <ShieldCheck size={13} style={{ color: 'var(--brand-primary)' }} />
          <span>Package ID: {APP_INFO.packageId} • Verified Developer: {APP_INFO.developer}</span>
        </div>
      </div>
    </div>
  );
};

export default AppleInProgressModal;
