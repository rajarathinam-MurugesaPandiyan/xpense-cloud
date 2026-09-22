import React from "react";
import { Link } from "react-router-dom";
import { LottieLogo } from "../LottieLogo";
import { ThemeToggle } from "../ThemeToggle";
import { Globe, MessageCircle, Mail } from "lucide-react";
import { APP_INFO } from "../../constants";
import { ROUTES } from "../../routes";
import styles from "./Footer.module.scss";

export interface FooterProps {
  onOpenLogin?: () => void;
  onOpenDownload?: () => void;
  onOpenDemo?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenLogin,
  onOpenDownload,
  onOpenDemo,
}) => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <LottieLogo size={36} />
            </div>
            <p className={styles.brandDesc}>
              Smart financial management engine synced across Android, iOS, and
              Web with cloud analytics and bank-grade security.
            </p>

            {/* Operational Status Pill */}
            <div className={styles.statusPill}>
              <div className={styles.statusDot} />
              <span>Firebase Cloud: All Systems Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className={styles.columnHeading}>Product</h4>
            <div className={styles.linkList}>
              <a href="#features" className={styles.footerLink}>
                Features
              </a>
              <a href="#interactive-demo" className={styles.footerLink}>
                Live Interactive Demo
              </a>
              {onOpenDemo && (
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className={styles.footerButtonLink}
                >
                  Request Live Demo
                </button>
              )}
              <a href="#mobile-showcase" className={styles.footerLink}>
                Mobile App (Flutter)
              </a>
              <a href="#download" className={styles.footerLink}>
                Android & iOS Downloads
              </a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 className={styles.columnHeading}>Platforms</h4>
            <div className={styles.linkList}>
              <a
                href="#download"
                onClick={onOpenDownload}
                className={styles.footerLink}
              >
                Google Play Store (Android)
              </a>
              <a
                href="#download"
                onClick={onOpenDownload}
                className={styles.footerLink}
              >
                Apple App Store (iOS)
              </a>
              {onOpenLogin && (
                <button
                  type="button"
                  onClick={onOpenLogin}
                  className={styles.footerButtonLink}
                >
                  Web Dashboard Portal
                </button>
              )}
              <a href="#features" className={styles.footerLink}>
                Firebase Cloud Auth
              </a>
            </div>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 className={styles.columnHeading}>Security & Legal</h4>
            <div className={styles.linkList}>
              <Link to={ROUTES.PRIVACY_POLICY} className={styles.footerLink}>
                Privacy Policy
              </Link>
              <Link to={ROUTES.TERMS} className={styles.footerLink}>
                Terms & Conditions
              </Link>
              <a href="#" className={styles.footerLink}>
                AES-256 Encryption Spec
              </a>

              <a href="#" className={styles.footerLink}>
                Security Whitepaper
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Appearance Switcher & Socials */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} XPense Cloud. All rights reserved.
            Package ID:{" "}
            <code className={styles.packageCode}>{APP_INFO.packageId}</code>
          </div>

          {/* Appearance / Theme Switcher in Footer */}
          <div className={styles.appearanceGroup}>
            <span className={styles.appearanceLabel}>Appearance:</span>
            <ThemeToggle showLabel={true} />
          </div>

          {/* Social Links */}
          <div className={styles.socialsGroup}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <Globe size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="mailto:support@xpensecloud.app"
              className={styles.socialLink}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
