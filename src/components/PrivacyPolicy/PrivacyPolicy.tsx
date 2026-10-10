import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Database,
  Wallet,
  HardDrive,
  Cloud,
  FileText,
  Key,
  Megaphone,
  CreditCard,
  Share2,
  Cpu,
  Users,
  Clock,
  Trash2,
  UserCheck,
  Baby,
  Globe,
  Cookie,
  RefreshCw,
  Mail,
  AlertCircle,
  Search,
  ArrowUp,
  Printer,
  CheckCircle2,
  Lock,
  Smartphone,
  AlertTriangle,
  Info,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { LottieLogo } from "../LottieLogo";
import { ThemeToggle } from "../ThemeToggle";
import { PRIVACY_SECTIONS, PRIVACY_POLICY_METADATA } from "../../constants";
import { ROUTES } from "../../routes";
import styles from "./PrivacyPolicy.module.scss";

export interface PrivacyPolicyProps {
  onBackToHome?: () => void;
  onOpenDemo?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  onBackToHome,
  onOpenDemo,
}) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("info-collect");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const handleBackToHome = () => {
    if (onBackToHome) {
      onBackToHome();
    } else {
      navigate(ROUTES.HOME);
    }
  };

  // Scroll listener for back-to-top button & active section highlight
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      // Section spy
      const sections = PRIVACY_SECTIONS.map((s) =>
        document.getElementById(s.id),
      ).filter(Boolean);
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const filteredSections = PRIVACY_SECTIONS.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sec.number.includes(searchQuery),
  );

  return (
    <div className={styles.pageWrapper}>
      {/* Top Sticky Navigation Bar */}
      <header className={styles.navHeader}>
        <div className="container">
          <div className={styles.navContainer}>
            <div className={styles.navLeft}>
              <button
                type="button"
                onClick={handleBackToHome}
                className={styles.backButton}
                title="Return to XPense Homepage"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </button>

              <div style={{ cursor: "pointer" }} onClick={handleBackToHome}>
                <LottieLogo size={34} />
              </div>
            </div>

            <div className={styles.navActions}>
              <button
                type="button"
                onClick={handlePrint}
                className={styles.printButton}
                title="Print or save as PDF"
              >
                <Printer size={15} />
                <span>Print Document</span>
              </button>

              <ThemeToggle />

              {onOpenDemo && (
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="btn-primary"
                  style={{
                    padding: "8px 18px",
                    fontSize: "0.86rem",
                    borderRadius: "9999px",
                  }}
                >
                  <span>Share Feedback</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Header Banner */}
      <section className={styles.heroSection}>
        <div className={styles.ambientGlow} />
        <div className="container">
          {/* Breadcrumb Navigation */}
          <div className={styles.breadcrumbs}>
            <button type="button" onClick={handleBackToHome}>
              Home
            </button>
            <span>/</span>
            <span>Legal & Compliance</span>
            <span>/</span>
            <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>
              Privacy Policy
            </span>
          </div>

          <div className={styles.badgePill}>
            <ShieldCheck size={14} />
            <span>
              OFFICIAL PRIVACY POLICY • GOOGLE PLAY & APP STORE COMPLIANT
            </span>
          </div>

          <h1 className={styles.pageTitle}>Privacy Policy</h1>

          <p className={styles.leadText}>
            Xpense ("Xpense", "we", "us", or "our") is a personal expense
            tracking application designed to help users record, organize, and
            understand their spending. This Privacy Policy explains how Xpense
            collects, uses, stores, shares, and protects information when you
            use the Xpense mobile application and related services. By using
            Xpense, you acknowledge the practices described in this Privacy
            Policy.
          </p>

          {/* Metadata Cards */}
          <div className={styles.metaGrid}>
            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <Clock size={18} />
              </div>
              <div className={styles.metaTextBox}>
                <span className={styles.metaLabel}>Last Updated</span>
                <span className={styles.metaValue}>
                  {PRIVACY_POLICY_METADATA.lastUpdated}
                </span>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <ShieldCheck size={18} />
              </div>
              <div className={styles.metaTextBox}>
                <span className={styles.metaLabel}>Security Architecture</span>
                <span className={styles.metaValue}>
                  {PRIVACY_POLICY_METADATA.architecture}
                </span>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <Mail size={18} />
              </div>
              <div className={styles.metaTextBox}>
                <span className={styles.metaLabel}>Support Contact</span>
                <a
                  href={`mailto:${PRIVACY_POLICY_METADATA.supportEmail}`}
                  className={styles.metaLink}
                >
                  {PRIVACY_POLICY_METADATA.supportEmail}
                </a>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <CheckCircle2 size={18} />
              </div>
              <div className={styles.metaTextBox}>
                <span className={styles.metaLabel}>Store Compliance</span>
                <span className={styles.metaValue}>
                  Google Play &amp; App Store
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className={styles.contentSection}>
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Sticky Table of Contents Sidebar */}
            <aside className={styles.sidebar}>
              <div className={styles.sidebarTitle}>
                <FileText size={18} style={{ color: "var(--brand-primary)" }} />
                <span>Table of Contents</span>
              </div>

              {/* Live Search & Filter */}
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="Filter sections..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                />
                <Search size={14} className={styles.searchIcon} />
              </div>

              {/* Scrollable Section Links */}
              <div className={styles.tocList}>
                {filteredSections.map((sec) => (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => scrollToSection(sec.id)}
                    className={`${styles.tocItem} ${
                      activeSection === sec.id ? styles.tocActive : ""
                    }`}
                  >
                    <span className={styles.tocNumber}>{sec.number}</span>
                    <span
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {sec.title}
                    </span>
                  </button>
                ))}
              </div>

              {/* Privacy Guarantee Pill */}
              <div className={styles.sidebarSecurityBox}>
                <CheckCircle2
                  size={16}
                  style={{ color: "var(--google-green)" }}
                />
                <div>
                  <strong>Zero Data Selling:</strong> We never sell personal
                  expense records or financial data.
                </div>
              </div>
            </aside>

            {/* Main Policy Content Stream */}
            <main className={styles.policyStream}>
              {/* Section 1: Information We Collect */}
              <article id="info-collect" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Database size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 1</span>
                    <h2 className={styles.sectionTitle}>
                      1. Information We Collect
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We collect and process only the information reasonably
                  necessary to provide and improve the Xpense personal expense
                  tracking service.
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Firebase User Identifier (UID)
                  </li>
                  <li className={styles.listItem}>
                    Email address associated with your authentication provider
                  </li>
                  <li className={styles.listItem}>
                    Display name and avatar photo URL (if provided by Google/Apple)
                  </li>
                  <li className={styles.listItem}>
                    Authentication provider metadata necessary to maintain your session
                  </li>
                  <li className={styles.listItem}>
                    Voluntary Trip member names and individual contact numbers selected via system picker
                  </li>
                </ul>

                <div className={styles.infoCallout}>
                  <Info
                    size={18}
                    style={{ color: "var(--brand-primary)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Password Privacy:</strong> Xpense never receives,
                    processes, or stores your external Google or Apple account
                    passwords.
                  </div>
                </div>
              </article>

              {/* Section 2: Expense & Financial Information */}
              <article id="expense-info" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Wallet size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 2</span>
                    <h2 className={styles.sectionTitle}>
                      2. Expense & Financial Information
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense allows you to voluntarily record personal financial
                  records to track spending habits. This data may include:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Transaction amounts, categories, subcategories, and dates
                  </li>
                  <li className={styles.listItem}>
                    Payment sources (Cash, UPI, Card, Bank) and transaction types (Debited / Credited)
                  </li>
                  <li className={styles.listItem}>
                    Descriptions and voluntary transaction notes
                  </li>
                  <li className={styles.listItem}>
                    Category monthly budget thresholds and spending goals
                  </li>
                  <li className={styles.listItem}>
                    Trip management records (group members, trip budgets, payer attribution, and split settlements)
                  </li>
                  <li className={styles.listItem}>
                    Repeat subscriptions (recurring billing intervals, auto-logging settings, and renewal dates)
                  </li>
                  <li className={styles.listItem}>
                    Lend and borrow reminder records (parties, due dates, and settlement status)
                  </li>
                </ul>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Financial Disclaimer:</strong> Xpense does not
                    provide financial, investment, or tax advice. Your data is
                    purely for your personal organization.
                  </div>
                </div>
              </article>

              {/* Section 3: Information Stored on Your Device */}
              <article id="device-storage" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <HardDrive size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 3</span>
                    <h2 className={styles.sectionTitle}>
                      3. Information Stored on Your Device
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense operates on an offline-first architecture using AES-256
                  encrypted Hive local database storage on your device. Local
                  data includes transactions, trips, repeat subscriptions,
                  reminders, categories, and sync queues.
                </p>

                <p className={styles.bodyText}>
                  <strong>Strict User Data Partitioning:</strong> Local database
                  storage is strictly partitioned per authenticated user ID.
                  Data belonging to one user is encrypted and strictly isolated,
                  preventing access by any other user account on the same device.
                </p>
              </article>

              {/* Section 4: Cloud Storage & Synchronization */}
              <article id="cloud-sync" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cloud size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 4</span>
                    <h2 className={styles.sectionTitle}>
                      4. Cloud Storage & Synchronization
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  When cloud synchronization is active (available with an active
                  cloud tier), your transactions, trips, subscriptions,
                  reminders, and categories are transmitted over encrypted TLS
                  1.3 / HTTPS connections to our secure backend cloud database.
                </p>

                <p className={styles.bodyText}>
                  <strong>Offline-First Sync Policy:</strong> Even when
                  cloud-enabled, you maintain full offline capabilities.
                  Unsynced changes are queued in encrypted local storage and
                  synchronized automatically when an active connection is
                  restored.
                </p>
              </article>

              {/* Section 5: How We Use Your Information */}
              <article id="use-info" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <FileText size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 5</span>
                    <h2 className={styles.sectionTitle}>
                      5. How We Use Your Information
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We use collected information strictly to deliver and enhance
                  the core expense tracking service:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Authenticate your account and maintain active session security
                  </li>
                  <li className={styles.listItem}>
                    Calculate spending analytics, trends, charts, and budget thresholds
                  </li>
                  <li className={styles.listItem}>
                    Compute group trip split balances and equal per-person shares
                  </li>
                  <li className={styles.listItem}>
                    Schedule local device notifications for repeat subscriptions and lend due dates
                  </li>
                  <li className={styles.listItem}>
                    Store and synchronize data between your device and secure servers
                  </li>
                  <li className={styles.listItem}>
                    Enable premium features and track subscription entitlements
                  </li>
                  <li className={styles.listItem}>
                    Diagnose technical crashes and improve app reliability
                  </li>
                </ul>
              </article>

              {/* Section 6: Google Sign-In & Firebase */}
              <article id="google-firebase" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Key size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 6</span>
                    <h2 className={styles.sectionTitle}>
                      6. Google Sign-In & Firebase
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense utilizes Google Sign-In and Firebase Authentication to
                  verify user identities. Firebase Authentication securely
                  processes tokens on our behalf following industry security
                  standards.
                </p>
              </article>

              {/* Section 7: Advertising (Google AdMob) */}
              <article id="advertising" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Megaphone size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 7</span>
                    <h2 className={styles.sectionTitle}>
                      7. Advertising (Google AdMob)
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The free tier of Xpense may display third-party advertisements
                  via Google AdMob. AdMob may process advertising identifiers
                  and diagnostic metrics according to Google Ad policies.
                </p>

                <p className={styles.bodyText}>
                  Subscribers to Xpense Premium enjoy an ad-free experience
                  across the application.
                </p>

                <div className={styles.successCallout}>
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--google-green)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Zero Ad Selling:</strong> We strictly never sell or
                    share your expense entries, receipts, or financial records
                    with advertisers.
                  </div>
                </div>
              </article>

              {/* Section 8: Subscriptions & Payments */}
              <article id="subscriptions" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <CreditCard size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 8</span>
                    <h2 className={styles.sectionTitle}>
                      8. Subscriptions & Payments
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  All purchases and subscriptions are handled entirely by Google
                  Play Store or Apple App Store. Xpense does not collect or store
                  full credit card numbers or banking credentials.
                </p>
              </article>

              {/* Section 9: Third-Party Services */}
              <article id="third-party" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Share2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 9</span>
                    <h2 className={styles.sectionTitle}>
                      9. Third-Party Services
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense integrates with trusted services including Google
                  Firebase, Google Sign-In, Google AdMob, Google ML Kit, Google
                  Play / Apple Store services, and system local notification
                  managers.
                </p>
              </article>

              {/* Section 10: Text Recognition & ML Features */}
              <article id="ml-features" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cpu size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 10</span>
                    <h2 className={styles.sectionTitle}>
                      10. Text Recognition & ML Features
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Where optical text recognition is used (such as recognizing
                  transaction details from receipt images), processing occurs
                  locally on-device using Google ML Kit.
                </p>

                <p className={styles.bodyText}>
                  Xpense does not retain or store unnecessary image data beyond
                  feature execution.
                </p>
              </article>

              {/* Section 11: Data Sharing & Disclosure */}
              <article id="data-sharing" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Users size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 11</span>
                    <h2 className={styles.sectionTitle}>
                      11. Data Sharing & Disclosure
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We do not sell, rent, or trade your personal information. We
                  only share information with trusted infrastructure providers
                  (cloud database hosting, authentication) strictly necessary
                  to run the application.
                </p>
              </article>

              {/* Section 12: Data Security */}
              <article id="data-security" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <ShieldCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 12</span>
                    <h2 className={styles.sectionTitle}>12. Data Security</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We implement modern technical and organizational safeguards
                  designed to protect personal data:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    AES-256 on-device database encryption for all local Hive storage boxes
                  </li>
                  <li className={styles.listItem}>
                    Strict per-user data partition isolation preventing cross-account access on shared devices
                  </li>
                  <li className={styles.listItem}>
                    Encrypted network communication via HTTPS and TLS 1.3
                  </li>
                  <li className={styles.listItem}>
                    Secure OAuth 2.0 Bearer token storage in system Keystore / Keychain
                  </li>
                  <li className={styles.listItem}>
                    Device biometric protection (Face ID / Fingerprint / Passcode lock) with auto-lock timers
                  </li>
                  <li className={styles.listItem}>
                    Server-side role-based access controls and database security policies
                  </li>
                </ul>
              </article>

              {/* Section 13: Group Expenses & Trip Member Integrity */}
              <article id="trip-integrity" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Users size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 13</span>
                    <h2 className={styles.sectionTitle}>
                      13. Group Expenses & Trip Member Integrity
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  In shared Trip expense management, accurate financial
                  accounting and dispute prevention are paramount.
                </p>

                <p className={styles.bodyText}>
                  <strong>Transaction Protection Policy:</strong> A group member
                  who has recorded or paid for any transaction within a trip
                  cannot be removed from that trip. This ensures an immutable
                  audit trail and fair settlement calculations for all
                  participants.
                </p>

                <p className={styles.bodyText}>
                  Organizers and members without recorded expenses may be
                  modified or removed at any time.
                </p>

                <div className={styles.infoCallout}>
                  <Info
                    size={18}
                    style={{ color: "var(--brand-primary)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Ledger Integrity:</strong> Members with recorded
                    expenses are retained in the trip history to ensure math and
                    balances remain accurate.
                  </div>
                </div>
              </article>

              {/* Section 14: Device Permissions */}
              <article id="device-permissions" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Smartphone size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 14</span>
                    <h2 className={styles.sectionTitle}>
                      14. Device Permissions
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may request the following device permissions to enable
                  specific user features:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Notifications:</strong> Used to deliver timely reminders for repeat subscriptions and lend due dates.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Biometrics (Face ID / Fingerprint):</strong> Used purely on-device to lock and unlock the app.
                  </li>
                  <li className={styles.listItem}>
                    <strong>Contacts (Optional):</strong> Used only when you tap "Pick from Contacts" to populate a trip member or reminder. No contact lists are uploaded or stored remotely.
                  </li>
                </ul>
              </article>

              {/* Section 15: Data Retention */}
              <article id="data-retention" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Clock size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 15</span>
                    <h2 className={styles.sectionTitle}>15. Data Retention</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We retain your account and financial data for as long as your
                  account remains active. When you delete records or delete your
                  account, data is purged from active databases.
                </p>
              </article>

              {/* Section 16: Account & Data Deletion */}
              <article id="account-deletion" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Trash2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 16</span>
                    <h2 className={styles.sectionTitle}>
                      16. Account & Data Deletion
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You have full control over your data and may permanently
                  delete your account at any time inside the app via Settings &rarr;{" "}
                  Delete Account, or via our online{" "}
                  <Link
                    to={ROUTES.DELETE_ACCOUNT}
                    style={{
                      color: "var(--brand-primary)",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    Account Deletion Portal
                  </Link>
                  .
                </p>

                <p className={styles.bodyText}>
                  <strong>Permanent Cloud & Local Purge:</strong> Calling the
                  account deletion API completely purges your user profile,
                  transactions, trips, repeat subscriptions, and reminders from
                  cloud databases, and instantly empties all local encrypted Hive
                  storage boxes.
                </p>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Permanent Deletion:</strong> Account deletion is
                    irreversible. Your records, categories, and cloud backups
                    cannot be recovered after deletion.
                  </div>
                </div>
              </article>

              {/* Section 17: Your Choices & Privacy Rights */}
              <article id="user-rights" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <UserCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 17</span>
                    <h2 className={styles.sectionTitle}>
                      17. Your Choices & Privacy Rights
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Depending on your jurisdiction, you may have rights to access
                  your personal data, rectify inaccuracies, request full
                  deletion, or export your financial records.
                </p>
              </article>

              {/* Section 18: Children's Privacy */}
              <article id="children-privacy" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Baby size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 18</span>
                    <h2 className={styles.sectionTitle}>
                      18. Children's Privacy
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense is not directed to children under 13 (or under 16 in
                  certain jurisdictions), and we do not knowingly collect
                  personal information from children.
                </p>
              </article>

              {/* Section 19: International Data Processing */}
              <article id="international-transfers" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Globe size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 19</span>
                    <h2 className={styles.sectionTitle}>
                      19. International Data Processing
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Our cloud infrastructure providers may operate data centers in
                  multiple regions. We ensure appropriate technical safeguards
                  protect data during cross-border transit.
                </p>
              </article>

              {/* Section 20: Cookies & Local Identifiers */}
              <article id="cookies" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cookie size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 20</span>
                    <h2 className={styles.sectionTitle}>
                      20. Cookies & Local Identifiers
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The mobile application uses local identifiers and tokens
                  stored on-device to maintain authenticated sessions and app
                  preferences.
                </p>
              </article>

              {/* Section 21: Changes to This Privacy Policy */}
              <article id="policy-changes" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <RefreshCw size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 21</span>
                    <h2 className={styles.sectionTitle}>
                      21. Changes to This Privacy Policy
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We may update this Privacy Policy from time to time. We will
                  notify you by updating the "Last Updated" date and posting the
                  revised policy inside the application.
                </p>
              </article>

              {/* Section 22: Contact Us */}
              <article id="contact-us" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Mail size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 22</span>
                    <h2 className={styles.sectionTitle}>22. Contact Us</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  If you have questions, privacy concerns, or requests regarding
                  this Privacy Policy, please contact our support team:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Application:</strong> Xpense
                  </li>
                  <li className={styles.listItem}>
                    <strong>Official Email:</strong>{" "}
                    <a
                      href={`mailto:${PRIVACY_POLICY_METADATA.supportEmail}`}
                      style={{ color: "var(--brand-primary)", fontWeight: 600 }}
                    >
                      {PRIVACY_POLICY_METADATA.supportEmail}
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <strong>Website:</strong>{" "}
                    <a
                      href={PRIVACY_POLICY_METADATA.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--brand-primary)", fontWeight: 600 }}
                    >
                      {PRIVACY_POLICY_METADATA.websiteUrl}
                    </a>
                  </li>
                </ul>

                <div className={styles.contactGrid}>
                  <a
                    href={`mailto:${PRIVACY_POLICY_METADATA.supportEmail}`}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIconBox}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Direct Support Email
                      </div>
                      <div className={styles.contactValue}>
                        {PRIVACY_POLICY_METADATA.supportEmail}
                      </div>
                    </div>
                  </a>

                  <a
                    href={PRIVACY_POLICY_METADATA.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIconBox}>
                      <Globe size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Official Website
                      </div>
                      <div className={styles.contactValue}>xpense-cloud.in</div>
                    </div>
                  </a>

                  <Link to={ROUTES.TERMS} className={styles.contactItem}>
                    <div className={styles.contactIconBox}>
                      <FileText size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Terms of Service
                      </div>
                      <div className={styles.contactValue}>
                        Terms &amp; Conditions
                      </div>
                    </div>
                  </Link>
                </div>
              </article>

              {/* Section 23: Important Compliance Notice */}
              <article id="important-notice" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <AlertCircle size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 23</span>
                    <h2 className={styles.sectionTitle}>
                      23. Important Compliance Notice
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  This Privacy Policy describes Xpense’s data practices and
                  complies with Google Play and Apple App Store privacy
                  disclosure standards.
                </p>
                <p className={styles.bodyText}>
                  If our data collection practices change, this policy will be
                  promptly reviewed and updated accordingly.
                </p>

                <div
                  style={{
                    marginTop: "20px",
                    paddingTop: "16px",
                    borderTop: "1px solid var(--border-color)",
                    fontSize: "0.85rem",
                    color: "var(--text-muted)",
                  }}
                >
                  <strong>Last Updated:</strong>{" "}
                  {PRIVACY_POLICY_METADATA.lastUpdated}
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.backToTop}
          title="Back to top"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default PrivacyPolicy;
