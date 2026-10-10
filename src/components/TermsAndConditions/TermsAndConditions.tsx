import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Smartphone,
  UserCheck,
  Lock,
  Database,
  Cloud,
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  Megaphone,
  Share2,
  ShieldAlert,
  Users2,
  Bell,
  Award,
  FileText,
  Activity,
  RefreshCw,
  UserX,
  Trash2,
  ShieldCheck,
  AlertOctagon,
  Scale,
  FileCheck,
  Clock,
  Landmark,
  Scissors,
  BookOpen,
  Mail,
  Search,
  ArrowUp,
  Printer,
  Globe,
  Info,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { LottieLogo } from "../LottieLogo";
import { ThemeToggle } from "../ThemeToggle";
import { TERMS_SECTIONS, TERMS_METADATA } from "../../constants";
import { ROUTES } from "../../routes";
import styles from "./TermsAndConditions.module.scss";

export interface TermsAndConditionsProps {
  onBackToHome?: () => void;
  onOpenDemo?: () => void;
}

export const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({
  onBackToHome,
  onOpenDemo,
}) => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<string>("about-xpense");
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
      const sections = TERMS_SECTIONS.map((s) =>
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

  const filteredSections = TERMS_SECTIONS.filter(
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
              Terms & Conditions
            </span>
          </div>

          <div className={styles.badgePill}>
            <ShieldCheck size={14} />
            <span>
              OFFICIAL TERMS & CONDITIONS • APPLICABLE TO ALL USERS
            </span>
          </div>

          <h1 className={styles.pageTitle}>Terms & Conditions</h1>

          <p className={styles.leadText}>
            These Terms & Conditions ("Terms") govern your access to and use of
            the Xpense mobile application, website, and related expense tracking
            services provided by Xpense ("we", "us", or "our"). By creating an
            account, downloading, or using Xpense, you agree to be bound by
            these Terms. If you do not agree to these Terms, please do not use
            the application.
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
                  {TERMS_METADATA.lastUpdated}
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
                  {TERMS_METADATA.architecture}
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
                  href={`mailto:${TERMS_METADATA.contactEmail}`}
                  className={styles.metaLink}
                >
                  {TERMS_METADATA.contactEmail}
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
                  Applicable to All Users
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
                  placeholder="Filter terms..."
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

              {/* User Guarantee Pill */}
              <div className={styles.sidebarSecurityBox}>
                <CheckCircle2
                  size={16}
                  style={{ color: "var(--google-green)" }}
                />
                <div>
                  <strong>User First:</strong> Personal tracking tool with
                  transparent terms and strict privacy compliance.
                </div>
              </div>
            </aside>

            {/* Main Policy Content Stream */}
            <main className={styles.policyStream}>
              {/* Section 1: About Xpense */}
              <article id="about-xpense" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Smartphone size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 1</span>
                    <h2 className={styles.sectionTitle}>1. About Xpense</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense is a personal expense management application designed
                  to help individuals record, categorize, visualize, and track
                  their expenses, incomes, budgets, recurring subscriptions, and
                  group trips.
                </p>

                <p className={styles.bodyText}>
                  The application operates using an offline-first architecture
                  powered by on-device AES-256 encrypted Hive storage, with
                  optional cloud synchronization when connected to a user
                  account.
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Organize personal expenses by custom categories & subcategories
                  </li>
                  <li className={styles.listItem}>
                    Analyze spending trends through monthly breakdowns & charts
                  </li>
                  <li className={styles.listItem}>
                    Set category budget limits and plan recurring subscriptions
                  </li>
                  <li className={styles.listItem}>
                    Sync securely across devices or use 100% offline on your device
                  </li>
                </ul>
              </article>

              {/* Section 2: Eligibility */}
              <article id="eligibility" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <UserCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 2</span>
                    <h2 className={styles.sectionTitle}>2. Eligibility</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  To use Xpense, you must be at least 18 years old or possess the
                  legal capacity to enter into a binding agreement under
                  applicable jurisdiction. If you are under 18, you must have
                  obtained the consent of a parent or legal guardian.
                </p>
              </article>

              {/* Section 3: User Accounts & Registration */}
              <article id="user-accounts" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Lock size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 3</span>
                    <h2 className={styles.sectionTitle}>
                      3. User Accounts & Registration
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You may use local offline features without an account. To
                  enable cloud synchronization and restore functionality across
                  devices, you must authenticate through a supported provider
                  such as Google Sign-In or Firebase Authentication.
                </p>

                <p className={styles.bodyText}>
                  You are responsible for maintaining the confidentiality of
                  your device, biometric passcode, and authentication session.
                </p>

                <div className={styles.infoCallout}>
                  <Info
                    size={18}
                    style={{ color: "var(--brand-primary)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Account Security:</strong> Xpense never stores or
                    asks for your external account password. Authentication
                    tokens are securely verified through OAuth.
                  </div>
                </div>
              </article>

              {/* Section 4: Your Data & Ownership */}
              <article id="your-data" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Database size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 4</span>
                    <h2 className={styles.sectionTitle}>
                      4. Your Data & Ownership
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You retain full ownership of all transaction data, notes,
                  categories, budgets, trips, and personal financial information
                  entered into the application.
                </p>

                <p className={styles.bodyText}>
                  Xpense does not sell, license, or monetize your personal
                  financial records to advertisers or third parties.
                </p>

                <div className={styles.successCallout}>
                  <CheckCircle2
                    size={18}
                    style={{ color: "var(--google-green)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Zero Data Selling:</strong> Your financial records
                    are strictly private. We never monetize, sell, or rent your
                    spending data.
                  </div>
                </div>
              </article>

              {/* Section 5: Local Storage & Cloud Sync */}
              <article id="storage-sync" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cloud size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 5</span>
                    <h2 className={styles.sectionTitle}>
                      5. Local Storage & Cloud Sync
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense stores your data locally on your device using AES-256
                  encrypted Hive storage boxes. Each user account has an
                  isolated and partitioned local database to ensure strict
                  privacy on shared devices.
                </p>

                <p className={styles.bodyText}>
                  When cloud synchronization is active, records are synced over
                  secure TLS 1.3 connections with our cloud backend database.
                </p>

                <p className={styles.bodyText}>
                  If you use Xpense exclusively offline without cloud sync, you
                  are solely responsible for local backups. Uninstalling the
                  app or clearing device data will permanently erase unsynced
                  local data.
                </p>
              </article>

              {/* Section 6: Financial Disclaimer (No Advice) */}
              <article id="financial-disclaimer" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <AlertTriangle size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 6</span>
                    <h2 className={styles.sectionTitle}>
                      6. Financial Disclaimer (No Advice)
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense is strictly an informational personal tracking and
                  budgeting tool. It does not provide financial, legal, tax,
                  accounting, or investment advice.
                </p>

                <p className={styles.bodyText}>
                  Any charts, analytics, category summaries, trip split
                  balances, or spending estimates provided by the application
                  are for general informational purposes only.
                </p>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Not Financial Advice:</strong> Xpense is for
                    personal record-keeping only. Always consult a certified
                    financial advisor for investment or tax guidance.
                  </div>
                </div>
              </article>

              {/* Section 7: Accuracy of Information */}
              <article id="accuracy-info" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <CheckCircle2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 7</span>
                    <h2 className={styles.sectionTitle}>
                      7. Accuracy of Information
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You are responsible for ensuring the accuracy of all numbers,
                  amounts, dates, and descriptions you enter into the
                  application. We are not responsible for discrepancies arising
                  from incorrect manual entries.
                </p>
              </article>

              {/* Section 8: Premium Features & Subscriptions */}
              <article id="premium-subscriptions" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <CreditCard size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 8</span>
                    <h2 className={styles.sectionTitle}>
                      8. Premium Features & Subscriptions
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense offers optional premium features and auto-renewing
                  subscriptions that unlock benefits such as ad-free usage,
                  automated cloud backup, and multi-device data restore.
                </p>

                <p className={styles.bodyText}>
                  Subscriptions are billed and managed securely through Google
                  Play or Apple App Store according to their respective billing
                  policies.
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Payments are processed directly by Google Play Store or Apple App Store
                  </li>
                  <li className={styles.listItem}>
                    Subscriptions auto-renew unless cancelled at least 24 hours before the period ends
                  </li>
                  <li className={styles.listItem}>
                    You can manage or cancel your subscription at any time via your App Store account
                  </li>
                </ul>
              </article>

              {/* Section 9: Free Tier & Advertisements */}
              <article id="free-ads" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Megaphone size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 9</span>
                    <h2 className={styles.sectionTitle}>
                      9. Free Tier & Advertisements
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The free tier of Xpense may display third-party advertisements
                  via Google AdMob to support continuous service development and
                  server infrastructure.
                </p>

                <p className={styles.bodyText}>
                  Advertisements are served by third-party advertising
                  networks. Advertisers do not receive access to your personal
                  financial records or transaction entries.
                </p>
              </article>

              {/* Section 10: Third-Party Services */}
              <article id="third-party-services" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Share2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 10</span>
                    <h2 className={styles.sectionTitle}>
                      10. Third-Party Services
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The application integrates with trusted third-party providers
                  including Google Firebase, Google Sign-In, Google AdMob,
                  Google ML Kit, Apple App Store / Google Play Services, and
                  system local notification handlers.
                </p>

                <p className={styles.bodyText}>
                  Use of these services is subject to their respective terms and
                  privacy policies.
                </p>
              </article>

              {/* Section 11: Acceptable Use & Prohibited Conduct */}
              <article id="acceptable-use" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <ShieldAlert size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 11</span>
                    <h2 className={styles.sectionTitle}>
                      11. Acceptable Use & Prohibited Conduct
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You agree to use Xpense exclusively for lawful personal
                  finance management. You agree not to:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Attempt to reverse-engineer, decompile, or extract the source code of the app
                  </li>
                  <li className={styles.listItem}>
                    Bypass biometric authentication locks, encryption keys, or user partition boundaries
                  </li>
                  <li className={styles.listItem}>
                    Interfere with or disrupt the security or integrity of backend APIs or cloud databases
                  </li>
                  <li className={styles.listItem}>
                    Use automated bots, scrapers, or abuse API rate limits
                  </li>
                  <li className={styles.listItem}>
                    Violate any applicable local, national, or international laws
                  </li>
                </ul>
              </article>

              {/* Section 12: Group Trips & Member Transaction Rules */}
              <article id="trip-rules" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Users2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 12</span>
                    <h2 className={styles.sectionTitle}>
                      12. Group Trips & Member Transaction Rules
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The Trips feature enables group expense tracking, equal split
                  sharing, and payer attribution among travel participants.
                </p>

                <p className={styles.bodyText}>
                  <strong>Transaction Protection Policy:</strong> Once a group
                  member has recorded or paid for any transaction within a trip,
                  that member cannot be removed from the trip. This rule
                  preserves ledger accountability, audit history, and prevents
                  inaccurate settlement disputes.
                </p>

                <p className={styles.bodyText}>
                  Trip organizers and members with zero recorded expenses may be
                  modified or removed at any time.
                </p>

                <div className={styles.infoCallout}>
                  <Info
                    size={18}
                    style={{ color: "var(--brand-primary)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Split Integrity:</strong> Members with recorded
                    expenses remain on the trip roster to protect math accuracy
                    and fair settlements.
                  </div>
                </div>
              </article>

              {/* Section 13: Repeat Subscriptions & Scheduled Reminders */}
              <article
                id="subscriptions-reminders"
                className={styles.policyCard}
              >
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Bell size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 13</span>
                    <h2 className={styles.sectionTitle}>
                      13. Repeat Subscriptions & Scheduled Reminders
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense allows users to configure repeat subscriptions and lend
                  reminders with scheduled notification alerts.
                </p>

                <p className={styles.bodyText}>
                  Reminders and notifications are processed locally on-device.
                  Xpense is not liable for missed reminders due to device
                  battery optimizations, do-not-disturb modes, or disabled
                  notification permissions.
                </p>
              </article>

              {/* Section 14: Intellectual Property */}
              <article id="intellectual-property" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Award size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 14</span>
                    <h2 className={styles.sectionTitle}>
                      14. Intellectual Property
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  All branding, user interface designs, custom icons, graphics,
                  logos, algorithms, and software code related to Xpense are the
                  exclusive intellectual property of Xpense and its creators.
                </p>
              </article>

              {/* Section 15: User-Provided Content */}
              <article id="user-content" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <FileText size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 15</span>
                    <h2 className={styles.sectionTitle}>
                      15. User-Provided Content
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You grant Xpense only the limited technical license necessary
                  to host, synchronize, and display your expense content back to
                  you on your authorized devices.
                </p>
              </article>

              {/* Section 16: Service Availability */}
              <article id="service-availability" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Activity size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 16</span>
                    <h2 className={styles.sectionTitle}>
                      16. Service Availability
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We strive to maintain continuous service uptime; however,
                  backend services may occasionally be subject to scheduled
                  maintenance, software updates, or cloud provider disruptions.
                </p>

                <p className={styles.bodyText}>
                  Because Xpense operates an offline-first architecture, your
                  local tracking continues uninterrupted even during internet or
                  server outages.
                </p>
              </article>

              {/* Section 17: Application Updates */}
              <article id="updates" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <RefreshCw size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 17</span>
                    <h2 className={styles.sectionTitle}>
                      17. Application Updates
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We periodically release application updates through the
                  Google Play Store and Apple App Store to introduce new
                  features, performance optimizations, and security patches.
                </p>
              </article>

              {/* Section 18: Account Suspension & Termination */}
              <article
                id="suspension-termination"
                className={styles.policyCard}
              >
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <UserX size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 18</span>
                    <h2 className={styles.sectionTitle}>
                      18. Account Suspension & Termination
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We reserve the right to suspend or terminate cloud account
                  access if you violate these Terms or engage in abusive,
                  fraudulent, or harmful activities.
                </p>
              </article>

              {/* Section 19: Account Deletion & Data Removal */}
              <article
                id="account-deletion-effect"
                className={styles.policyCard}
              >
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Trash2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 19</span>
                    <h2 className={styles.sectionTitle}>
                      19. Account Deletion & Data Removal
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You have the right to delete your account at any time directly
                  within the Settings page (via "Delete Account") or by
                  requesting cloud deletion through our{" "}
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
                  Executing account deletion permanently purges your user
                  profile, cloud transactions, categories, trips,
                  subscriptions, reminders, and clears all local AES-256
                  encrypted storage boxes.
                </p>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Permanent Deletion:</strong> Account deletion is
                    irreversible. Once completed, all cloud records and local
                    data are permanently wiped.
                  </div>
                </div>
              </article>

              {/* Section 20: Privacy Policy Incorporation */}
              <article id="privacy" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <ShieldCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 20</span>
                    <h2 className={styles.sectionTitle}>
                      20. Privacy Policy Incorporation
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Our Privacy Policy is an integral part of these Terms and
                  describes our data collection, storage, and handling
                  practices in detail. By using Xpense, you consent to our{" "}
                  <Link
                    to={ROUTES.PRIVACY_POLICY}
                    style={{
                      color: "var(--brand-primary)",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </article>

              {/* Section 21: Disclaimer of Warranties */}
              <article id="warranty-disclaimer" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <AlertOctagon size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 21</span>
                    <h2 className={styles.sectionTitle}>
                      21. Disclaimer of Warranties
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The application is provided on an "as is" and "as available"
                  basis without warranties of any kind, whether express or
                  implied, including fitness for a particular purpose or
                  error-free operation.
                </p>
              </article>

              {/* Section 22: Limitation of Liability */}
              <article id="limitation-liability" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Scale size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 22</span>
                    <h2 className={styles.sectionTitle}>
                      22. Limitation of Liability
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  To the fullest extent permitted by law, Xpense, its
                  contributors, and developers shall not be liable for any
                  indirect, incidental, special, consequential, or punitive
                  damages resulting from your use of or inability to use the
                  service.
                </p>
              </article>

              {/* Section 23: Indemnification */}
              <article id="indemnification" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <FileCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 23</span>
                    <h2 className={styles.sectionTitle}>
                      23. Indemnification
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You agree to indemnify and hold harmless Xpense and its
                  operators against any claims, losses, liabilities, or legal
                  expenses resulting from your misuse of the application or
                  violation of these Terms.
                </p>
              </article>

              {/* Section 24: Changes to These Terms */}
              <article id="terms-changes" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Clock size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 24</span>
                    <h2 className={styles.sectionTitle}>
                      24. Changes to These Terms
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We may modify these Terms periodically. When changes are made,
                  we will update the "Last Updated" date at the top of this
                  document. Continued use of the app following updates
                  signifies acceptance of the revised Terms.
                </p>
              </article>

              {/* Section 25: Governing Law & Jurisdiction */}
              <article id="governing-law" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Landmark size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 25</span>
                    <h2 className={styles.sectionTitle}>
                      25. Governing Law & Jurisdiction
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  These Terms are governed by and construed in accordance with
                  the laws of India. Any legal disputes arising out of these
                  Terms shall be subject to the exclusive jurisdiction of the
                  competent courts of India.
                </p>
              </article>

              {/* Section 26: Severability */}
              <article id="severability" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Scissors size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 26</span>
                    <h2 className={styles.sectionTitle}>26. Severability</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  If any provision of these Terms is found to be unlawful,
                  void, or unenforceable, that provision shall be deemed
                  severable and shall not affect the validity and enforceability
                  of any remaining provisions.
                </p>
              </article>

              {/* Section 27: Entire Agreement */}
              <article id="entire-agreement" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <BookOpen size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 27</span>
                    <h2 className={styles.sectionTitle}>
                      27. Entire Agreement
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  These Terms and the incorporated Privacy Policy constitute the
                  entire understanding between you and Xpense regarding the use
                  of the application.
                </p>
              </article>

              {/* Section 28: Contact Information */}
              <article id="contact-us" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Mail size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 28</span>
                    <h2 className={styles.sectionTitle}>
                      28. Contact Information
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  If you have any questions or feedback regarding these Terms &
                  Conditions, please contact us directly:
                </p>

                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    <strong>Application:</strong> Xpense
                  </li>
                  <li className={styles.listItem}>
                    <strong>Official Email:</strong>{" "}
                    <a
                      href={`mailto:${TERMS_METADATA.contactEmail}`}
                      style={{ color: "var(--brand-primary)", fontWeight: 600 }}
                    >
                      {TERMS_METADATA.contactEmail}
                    </a>
                  </li>
                  <li className={styles.listItem}>
                    <strong>Official Website:</strong>{" "}
                    <a
                      href={TERMS_METADATA.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "var(--brand-primary)", fontWeight: 600 }}
                    >
                      {TERMS_METADATA.websiteUrl}
                    </a>
                  </li>
                </ul>

                <div className={styles.contactGrid}>
                  <a
                    href={`mailto:${TERMS_METADATA.contactEmail}`}
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
                        Email Support
                      </div>
                      <div className={styles.contactValue}>
                        {TERMS_METADATA.contactEmail}
                      </div>
                    </div>
                  </a>

                  <a
                    href={TERMS_METADATA.websiteUrl}
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

                  <Link
                    to={ROUTES.PRIVACY_POLICY}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIconBox}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.76rem",
                          color: "var(--text-muted)",
                        }}
                      >
                        Privacy Policy
                      </div>
                      <div className={styles.contactValue}>Read Policy</div>
                    </div>
                  </Link>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={styles.floatingBackToTop}
          title="Back to Top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default TermsAndConditions;
