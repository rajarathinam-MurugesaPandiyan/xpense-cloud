import React, { useState, useEffect } from "react";
import { LottieLogo } from "../LottieLogo";
import { Smartphone, Menu, X, ChevronRight, Sparkles } from "lucide-react";
import { NAV_LINKS, APP_INFO } from "../../constants";
import styles from "./Navbar.module.scss";

export interface NavbarProps {
  onOpenDownload?: () => void;
  onOpenDemo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDownload,
  onOpenDemo,
}) => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      {/* Floating Island Capsule Bar */}
      <div
        className={`${styles.islandBar} ${scrolled ? styles.isScrolled : ""}`}
      >
        {/* Left: Brand Identity + Micro Live Dot */}
        <div className={styles.brandContainer}>
          <a href="#" className={styles.brandLink}>
            <LottieLogo size={38} />
          </a>

          {/* Minimalist Live Status Indicator */}
          <div
            className={styles.liveBadge}
            title="Real-Time Firestore Sync Active"
          >
            <div className={styles.liveDot} />
            <span className={styles.liveText}>REVAMP</span>
          </div>
        </div>

        {/* Center: Desktop Navigation Links with Frosted Hover Pills */}
        <nav className={styles.desktopNav}>
          {NAV_LINKS.map((link, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`${styles.navLinkItem} ${isHovered ? styles.isHovered : ""}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Actions (Request Demo, Get the App, Mobile Menu) */}
        <div className={styles.actionsContainer}>
          {/* Secondary CTA: Request Demo */}
          <button
            type="button"
            className={styles.demoButton}
            onClick={onOpenDemo}
            title="Request a live personalized demo"
          >
            <Sparkles size={14} />
            <span>Request Demo</span>
          </button>

          {/* Primary High-Impact CTA: Get the App (Google Blue Pill - Hidden on Mobile) */}
          <button
            type="button"
            className={styles.ctaButton}
            onClick={onOpenDownload}
          >
            <Smartphone size={15} />
            <span>Get the App</span>
          </button>

          {/* Mobile Menu Hamburger Trigger */}
          <button
            type="button"
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Modern Floating Mobile Menu Drawer Sheet */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          {/* Mobile Drawer Status Bar */}
          <div className={styles.drawerStatusBar}>
            <div className={styles.drawerStatusGroup}>
              <div className={styles.liveDot} />
              <span>Firestore Live Syncing</span>
            </div>
            <span className={styles.drawerVersion}>
              XPense v{APP_INFO.version}
            </span>
          </div>

          {/* Nav Links with Touch Targets */}
          <div className={styles.drawerNavList}>
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={styles.drawerNavLink}
              >
                <span>{link.label}</span>
                <ChevronRight
                  size={16}
                  style={{ color: "var(--text-muted)" }}
                />
              </a>
            ))}
          </div>

          <div className={styles.drawerDivider} />

          {/* Action CTAs inside Drawer */}
          <div className={styles.drawerActions}>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenDemo) onOpenDemo();
              }}
              className={styles.drawerSecondaryCta}
            >
              <Sparkles size={15} />
              <span>Request a Live Demo</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenDownload) onOpenDownload();
              }}
              className={styles.drawerCta}
            >
              <Smartphone size={16} />
              <span>Get App on iOS & Android</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
