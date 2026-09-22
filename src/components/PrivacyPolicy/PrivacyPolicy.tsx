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
} from "lucide-react";
import { useNavigate } from "react-router-dom";
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
                  <span>Request Demo</span>
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
              <div>
                <div className={styles.metaLabel}>Last Updated</div>
                <div className={styles.metaValue}>
                  {PRIVACY_POLICY_METADATA.lastUpdated}
                </div>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <Lock size={18} />
              </div>
              <div>
                <div className={styles.metaLabel}>Data Architecture</div>
                <div className={styles.metaValue}>
                  On-Device Hive + Cloud Sync
                </div>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <Smartphone size={18} />
              </div>
              <div>
                <div className={styles.metaLabel}>Applicable Platforms</div>
                <div className={styles.metaValue}>Android, iOS & Web App</div>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className={styles.metaLabel}>Financial Advice</div>
                <div className={styles.metaValue}>
                  Not Provided (Tracking Only)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Two-Column Content Layout */}
      <div className={styles.contentLayout}>
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
                    className={`${styles.tocItem} ${activeSection === sec.id ? styles.tocActive : ""}`}
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
                  expense records.
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
                  necessary to provide and improve the Xpense service.
                </p>

                <h3 className={styles.subsectionTitle}>
                  1.1 Account Information
                </h3>
                <p className={styles.bodyText}>
                  When you create or access an Xpense account, we may collect:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Firebase user ID</li>
                  <li className={styles.listItem}>Email address</li>
                  <li className={styles.listItem}>Name or display name</li>
                  <li className={styles.listItem}>
                    Profile information provided through your authentication
                    provider
                  </li>
                  <li className={styles.listItem}>
                    Authentication-related information necessary to maintain
                    your account
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  If you sign in using Google, authentication is handled through
                  Google and Firebase Authentication.
                </p>

                <div className={styles.infoCallout}>
                  <strong>Password Security:</strong> We do not receive or store
                  your Google account password.
                </div>
              </article>

              {/* Section 2: Expense and Financial Information */}
              <article id="expense-info" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Wallet size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 2</span>
                    <h2 className={styles.sectionTitle}>
                      2. Expense and Financial Information
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense is designed to help you manage your personal expenses.
                  Depending on the features you use, information may include:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Transaction amounts</li>
                  <li className={styles.listItem}>Transaction descriptions</li>
                  <li className={styles.listItem}>
                    Categories and subcategories
                  </li>
                  <li className={styles.listItem}>
                    Transaction dates and times
                  </li>
                  <li className={styles.listItem}>Payment types</li>
                  <li className={styles.listItem}>Expense types</li>
                  <li className={styles.listItem}>Budgets</li>
                  <li className={styles.listItem}>
                    Lend and reminder information
                  </li>
                  <li className={styles.listItem}>
                    Other information that you voluntarily enter into the
                    application
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  This information is used to provide expense tracking,
                  organization, synchronization, and related features.
                </p>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>Important Financial Disclaimer:</strong> Xpense does
                    not provide financial, investment, tax, or professional
                    financial advice.
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
                  Xpense may store certain information locally on your device to
                  support offline functionality and improve application
                  performance. Local data may include:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Expense records</li>
                  <li className={styles.listItem}>Categories</li>
                  <li className={styles.listItem}>User preferences</li>
                  <li className={styles.listItem}>Application settings</li>
                  <li className={styles.listItem}>Synchronization status</li>
                  <li className={styles.listItem}>
                    Other application data required for offline functionality
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  Xpense may use local storage technologies such as Hive or
                  platform-provided storage.
                </p>

                <p className={styles.bodyText}>
                  Deleting the application from your device may remove locally
                  stored information, depending on your device and
                  operating-system behavior. Local deletion does not necessarily
                  delete information already synchronized with our servers.
                </p>
              </article>

              {/* Section 4: Cloud Storage and Synchronization */}
              <article id="cloud-sync" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cloud size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 4</span>
                    <h2 className={styles.sectionTitle}>
                      4. Cloud Storage and Synchronization
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Where cloud synchronization is enabled, selected Xpense data
                  may be transmitted to our backend services and stored on cloud
                  infrastructure. Cloud synchronization may allow you to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Back up supported Xpense data
                  </li>
                  <li className={styles.listItem}>
                    Restore data when using another supported device
                  </li>
                  <li className={styles.listItem}>
                    Keep supported data synchronized between your device and
                    Xpense services
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  The information synchronized to our servers may include
                  account information, categories, transactions, and other data
                  necessary to provide synchronization.
                </p>

                <p className={styles.bodyText}>
                  If you use Xpense while offline, data may remain on your
                  device until synchronization becomes available.
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
                  We may use collected information to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Create and manage your Xpense account
                  </li>
                  <li className={styles.listItem}>Authenticate you</li>
                  <li className={styles.listItem}>
                    Provide expense tracking functionality
                  </li>
                  <li className={styles.listItem}>
                    Store and synchronize your data
                  </li>
                  <li className={styles.listItem}>
                    Provide offline functionality
                  </li>
                  <li className={styles.listItem}>Provide premium features</li>
                  <li className={styles.listItem}>
                    Process and maintain subscription status
                  </li>
                  <li className={styles.listItem}>
                    Display advertisements to eligible users
                  </li>
                  <li className={styles.listItem}>
                    Maintain and improve the application
                  </li>
                  <li className={styles.listItem}>
                    Diagnose technical problems and errors
                  </li>
                  <li className={styles.listItem}>
                    Protect the security and integrity of our services
                  </li>
                  <li className={styles.listItem}>
                    Respond to support requests
                  </li>
                  <li className={styles.listItem}>
                    Comply with applicable legal obligations
                  </li>
                </ul>

                <div className={styles.infoCallout}>
                  <strong>Zero Advisory Use:</strong> We do not use your expense
                  information to provide personalized financial advice.
                </div>
              </article>

              {/* Section 6: Google Sign-In and Firebase */}
              <article id="google-firebase" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Key size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 6</span>
                    <h2 className={styles.sectionTitle}>
                      6. Google Sign-In and Firebase
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may use Google Sign-In and Firebase Authentication to
                  authenticate users.
                </p>
                <p className={styles.bodyText}>
                  When you use Google Sign-In, Google may provide Xpense with
                  information necessary to authenticate your account, such as
                  your email address, name, profile information, and a unique
                  account identifier, depending on the permissions and
                  configuration of the authentication service.
                </p>
                <p className={styles.bodyText}>
                  Firebase Authentication may process authentication information
                  on our behalf.
                </p>
                <p className={styles.bodyText}>
                  For more information about Google's privacy practices, please
                  refer to Google's privacy documentation.
                </p>
              </article>

              {/* Section 7: Advertising */}
              <article id="advertising" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Megaphone size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 7</span>
                    <h2 className={styles.sectionTitle}>7. Advertising</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may display advertisements through third-party
                  advertising services such as Google AdMob. Advertising
                  providers may process information such as:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Advertising identifiers</li>
                  <li className={styles.listItem}>Device information</li>
                  <li className={styles.listItem}>
                    Approximate location where permitted
                  </li>
                  <li className={styles.listItem}>
                    Application and advertising interaction information
                  </li>
                  <li className={styles.listItem}>Diagnostic information</li>
                </ul>

                <p className={styles.bodyText}>
                  The exact information processed may depend on your device,
                  operating system, advertising settings, consent choices, and
                  the configuration of the advertising SDK.
                </p>
                <p className={styles.bodyText}>
                  Premium users may receive an ad-free experience where such
                  functionality is included in their subscription.
                </p>

                <div className={styles.infoCallout}>
                  <strong>Guaranteed Privacy Protection:</strong> Xpense does
                  not sell users' personal expense records to advertisers.
                </div>
              </article>

              {/* Section 8: Subscriptions and Payments */}
              <article id="subscriptions" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <CreditCard size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 8</span>
                    <h2 className={styles.sectionTitle}>
                      8. Subscriptions and Payments
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may offer paid subscriptions or premium features.
                  Payments for subscriptions are processed through the
                  applicable platform, such as:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Google Play</li>
                  <li className={styles.listItem}>Apple App Store</li>
                </ul>

                <p className={styles.bodyText}>
                  Xpense does not directly store your complete credit card or
                  debit card number when payments are processed by the
                  applicable app store.
                </p>
                <p className={styles.bodyText}>
                  We may receive information necessary to determine subscription
                  status, such as whether a subscription is active, expired,
                  cancelled, or otherwise available to the user. This
                  information may be associated with your Xpense account to
                  provide premium functionality.
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
                  Xpense may use third-party services to provide specific
                  functionality. These services may include:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Firebase Authentication</li>
                  <li className={styles.listItem}>Google Sign-In</li>
                  <li className={styles.listItem}>Google AdMob</li>
                  <li className={styles.listItem}>Google Play services</li>
                  <li className={styles.listItem}>Apple App Store services</li>
                  <li className={styles.listItem}>Google ML Kit</li>
                  <li className={styles.listItem}>
                    Cloud hosting and database infrastructure
                  </li>
                  <li className={styles.listItem}>
                    Other technical service providers required to operate Xpense
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  Third-party providers may process information according to
                  their own privacy policies and contractual obligations. We aim
                  to use third-party services in a manner consistent with this
                  Privacy Policy and applicable requirements.
                </p>
              </article>

              {/* Section 10: Text Recognition and ML Features */}
              <article id="ml-features" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cpu size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 10</span>
                    <h2 className={styles.sectionTitle}>
                      10. Text Recognition and ML Features
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may use Google ML Kit or similar technologies to
                  provide text-recognition functionality, such as recognizing
                  information from images or receipts.
                </p>
                <p className={styles.bodyText}>
                  Where a feature processes an image or document, the
                  information required for that feature may be processed
                  according to the implementation of the relevant ML technology.
                </p>
                <p className={styles.bodyText}>
                  We do not use text-recognition functionality to intentionally
                  collect information unrelated to the feature being used.
                </p>

                <div className={styles.calloutBox}>
                  <AlertCircle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>[TO CONFIRM BEFORE PUBLICATION:</strong> Confirm
                    whether all ML Kit processing currently used by Xpense
                    occurs entirely on-device and whether any recognized text or
                    images are transmitted to Xpense servers.<strong>]</strong>
                  </div>
                </div>
              </article>

              {/* Section 11: Data Sharing */}
              <article id="data-sharing" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Users size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 11</span>
                    <h2 className={styles.sectionTitle}>11. Data Sharing</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We may share information with service providers that help us
                  operate Xpense. Examples include providers responsible for:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Authentication</li>
                  <li className={styles.listItem}>Cloud infrastructure</li>
                  <li className={styles.listItem}>Database hosting</li>
                  <li className={styles.listItem}>Advertising</li>
                  <li className={styles.listItem}>Subscription processing</li>
                  <li className={styles.listItem}>Application diagnostics</li>
                  <li className={styles.listItem}>Security</li>
                  <li className={styles.listItem}>Technical support</li>
                </ul>

                <p className={styles.bodyText}>
                  <strong>We do not sell your personal expense records.</strong>
                </p>

                <p className={styles.bodyText}>
                  We may also disclose information where reasonably necessary
                  to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Comply with applicable law
                  </li>
                  <li className={styles.listItem}>
                    Respond to lawful requests
                  </li>
                  <li className={styles.listItem}>
                    Protect the rights, safety, and security of users or Xpense
                  </li>
                  <li className={styles.listItem}>
                    Detect or prevent fraud, abuse, or security incidents
                  </li>
                  <li className={styles.listItem}>
                    Enforce our terms and policies
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  We do not share your personal information with third parties
                  for their own unrelated purposes unless permitted or required
                  by applicable law or with your consent where required.
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
                  We use reasonable technical and organizational measures
                  designed to protect information from unauthorized access,
                  alteration, disclosure, or destruction. Depending on the
                  service and data involved, these measures may include:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Encrypted network communication such as HTTPS/TLS
                  </li>
                  <li className={styles.listItem}>
                    Authentication and authorization controls
                  </li>
                  <li className={styles.listItem}>Firebase authentication</li>
                  <li className={styles.listItem}>
                    Server-side access controls
                  </li>
                  <li className={styles.listItem}>
                    Database access restrictions
                  </li>
                  <li className={styles.listItem}>
                    Secure handling of authentication credentials and service
                    credentials
                  </li>
                  <li className={styles.listItem}>
                    Application-level authorization checks
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  However, no method of electronic storage or transmission can
                  be guaranteed to be completely secure.
                </p>
                <p className={styles.bodyText}>
                  You are responsible for maintaining the security of your
                  device and account credentials.
                </p>
              </article>

              {/* Section 13: Data Retention */}
              <article id="data-retention" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Clock size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 13</span>
                    <h2 className={styles.sectionTitle}>13. Data Retention</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We retain information for as long as reasonably necessary to
                  provide the Xpense service and for legitimate business,
                  security, legal, and operational purposes. The retention
                  period may vary depending on:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>The type of information</li>
                  <li className={styles.listItem}>
                    Whether your account remains active
                  </li>
                  <li className={styles.listItem}>Your use of Xpense</li>
                  <li className={styles.listItem}>
                    Legal or regulatory requirements
                  </li>
                  <li className={styles.listItem}>
                    Security and fraud-prevention requirements
                  </li>
                  <li className={styles.listItem}>
                    Backup and disaster-recovery requirements
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  When information is no longer required, we will take
                  reasonable steps to delete or anonymize it, subject to
                  applicable legal and operational requirements.
                </p>

                <div className={styles.calloutBox}>
                  <AlertCircle
                    size={18}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>[TO CONFIRM BEFORE PUBLICATION:</strong> Define the
                    actual retention period for deleted-account data and
                    backups.<strong>]</strong>
                  </div>
                </div>
              </article>

              {/* Section 14: Account and Data Deletion */}
              <article id="account-deletion" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Trash2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 14</span>
                    <h2 className={styles.sectionTitle}>
                      14. Account and Data Deletion
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You may request deletion of your Xpense account and associated
                  personal data. Account deletion may be available through the
                  Xpense application and through our designated account-deletion
                  web resource.
                </p>
                <p className={styles.bodyText}>
                  When an account deletion request is completed, we will delete
                  or anonymize information associated with the account, subject
                  to information that we are legally required or legitimately
                  permitted to retain.
                </p>
                <p className={styles.bodyText}>
                  Information that may need to be retained may include limited
                  records required for:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Legal compliance</li>
                  <li className={styles.listItem}>Fraud prevention</li>
                  <li className={styles.listItem}>Security</li>
                  <li className={styles.listItem}>Dispute resolution</li>
                  <li className={styles.listItem}>
                    Accounting or transaction requirements
                  </li>
                  <li className={styles.listItem}>
                    Backup and disaster recovery
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  Such retained information will not be used for unrelated
                  purposes.
                </p>

                <div className={styles.infoCallout}>
                  <strong>Account deletion URL:</strong> [TO ADD]
                </div>
              </article>

              {/* Section 15: Your Choices and Rights */}
              <article id="user-rights" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <UserCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 15</span>
                    <h2 className={styles.sectionTitle}>
                      15. Your Choices and Rights
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Depending on your location and applicable law, you may have
                  rights regarding your personal information, including rights
                  to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Request access to your personal information
                  </li>
                  <li className={styles.listItem}>
                    Request correction of inaccurate information
                  </li>
                  <li className={styles.listItem}>
                    Request deletion of your information
                  </li>
                  <li className={styles.listItem}>
                    Request information about how your data is processed
                  </li>
                  <li className={styles.listItem}>
                    Withdraw consent where processing is based on consent
                  </li>
                  <li className={styles.listItem}>
                    Object to or restrict certain processing where applicable
                  </li>
                  <li className={styles.listItem}>
                    Request portability of certain information where applicable
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  You may contact us using the information provided in the
                  "Contact Us" section to exercise applicable rights. We may
                  need to verify your identity before processing certain
                  requests.
                </p>
              </article>

              {/* Section 16: Children's Privacy */}
              <article id="children-privacy" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Baby size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 16</span>
                    <h2 className={styles.sectionTitle}>
                      16. Children's Privacy
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense is not intended for children where applicable law
                  prohibits us from collecting their personal information
                  without appropriate consent.
                </p>
                <p className={styles.bodyText}>
                  We do not knowingly collect personal information from children
                  in violation of applicable law.
                </p>
                <p className={styles.bodyText}>
                  If you believe that a child has provided personal information
                  to Xpense inappropriately, please contact us so that we can
                  investigate and take appropriate action.
                </p>
              </article>

              {/* Section 17: International Data Processing */}
              <article
                id="international-transfers"
                className={styles.policyCard}
              >
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Globe size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 17</span>
                    <h2 className={styles.sectionTitle}>
                      17. International Data Processing
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may use service providers and cloud infrastructure
                  located in countries other than your country of residence. As
                  a result, your information may be processed or stored outside
                  your country.
                </p>
                <p className={styles.bodyText}>
                  Where required by applicable law, we will implement
                  appropriate safeguards for international transfers of personal
                  information.
                </p>
              </article>

              {/* Section 18: Cookies and Similar Technologies */}
              <article id="cookies" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cookie size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 18</span>
                    <h2 className={styles.sectionTitle}>
                      18. Cookies and Similar Technologies
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The Xpense mobile application may use technologies provided by
                  third-party services that perform functions similar to
                  cookies, including identifiers used for authentication,
                  advertising, security, analytics, or application
                  functionality.
                </p>
                <p className={styles.bodyText}>
                  The use of these technologies depends on the services and SDKs
                  integrated into the application.
                </p>
              </article>

              {/* Section 19: Changes to This Privacy Policy */}
              <article id="policy-changes" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <RefreshCw size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 19</span>
                    <h2 className={styles.sectionTitle}>
                      19. Changes to This Privacy Policy
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We may update this Privacy Policy from time to time to reflect
                  changes to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Xpense functionality</li>
                  <li className={styles.listItem}>Data processing practices</li>
                  <li className={styles.listItem}>Third-party services</li>
                  <li className={styles.listItem}>
                    Legal or regulatory requirements
                  </li>
                </ul>

                <p className={styles.bodyText}>
                  When we make changes, we will update the "Last Updated" date
                  at the top of this Privacy Policy. Where required, we may
                  provide additional notice or request consent for material
                  changes.
                </p>
              </article>

              {/* Section 20: Contact Us */}
              <article id="contact-us" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Mail size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 20</span>
                    <h2 className={styles.sectionTitle}>20. Contact Us</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  If you have questions, concerns, or requests regarding this
                  Privacy Policy or your personal information, please contact
                  us:
                </p>

                <div className={styles.contactGrid}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Application</span>
                    <span className={styles.contactValue}>Xpense</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Privacy Email</span>
                    <span className={styles.contactValue}>[TO ADD]</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>Website</span>
                    <span className={styles.contactValue}>[TO ADD]</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactLabel}>
                      Privacy Policy URL
                    </span>
                    <span className={styles.contactValue}>[TO ADD]</span>
                  </div>
                </div>
              </article>

              {/* Section 21: Important Notice */}
              <article id="important-notice" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <AlertCircle size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 21</span>
                    <h2 className={styles.sectionTitle}>
                      21. Important Notice
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  This Privacy Policy describes Xpense's intended data practices
                  and should be kept consistent with the application's actual
                  implementation.
                </p>
                <p className={styles.bodyText}>
                  The information provided in this policy should also be kept
                  consistent with the privacy and data-disclosure information
                  submitted to Google Play and Apple App Store.
                </p>
                <p className={styles.bodyText}>
                  If Xpense's data collection, third-party SDKs, advertising
                  configuration, authentication methods, storage architecture,
                  or subscription system changes, this Privacy Policy should be
                  reviewed and updated accordingly.
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
                  <strong>Last Updated:</strong> September 22, 2026
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
