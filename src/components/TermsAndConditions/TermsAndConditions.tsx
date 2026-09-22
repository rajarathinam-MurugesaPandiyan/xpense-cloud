import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Smartphone,
  UserCheck,
  Key,
  Database,
  Cloud,
  AlertTriangle,
  CheckCircle2,
  CreditCard,
  Megaphone,
  Share2,
  ShieldAlert,
  Award,
  FileEdit,
  Activity,
  RefreshCw,
  UserX,
  Trash2,
  ShieldCheck,
  AlertOctagon,
  Scale,
  FileCheck,
  History,
  Landmark,
  Split,
  BookOpen,
  Mail,
  Search,
  Printer,
  ArrowUp,
  Clock,
  Lock,
  Globe,
  FileText,
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
            These Terms & Conditions ("Terms") govern your access to and use of the
            Xpense mobile application and related services ("Xpense", "the App",
            "we", "us", or "our"). By downloading, accessing, or using Xpense,
            you agree to these Terms. If you do not agree with these Terms, please
            do not use the App.
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
                  {TERMS_METADATA.lastUpdated}
                </div>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <Smartphone size={18} />
              </div>
              <div>
                <div className={styles.metaLabel}>Governing Service</div>
                <div className={styles.metaValue}>
                  Mobile App & Cloud Services
                </div>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <Lock size={18} />
              </div>
              <div>
                <div className={styles.metaLabel}>Agreement Type</div>
                <div className={styles.metaValue}>Legally Binding</div>
              </div>
            </div>

            <div className={styles.metaCard}>
              <div className={styles.metaIconBox}>
                <AlertTriangle size={18} />
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

              {/* Security & Legal Guarantee Box */}
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
                  Xpense is a personal expense tracking and money management
                  application designed to help users record, organize, and
                  understand their spending.
                </p>

                <p className={styles.bodyText}>
                  Depending on the features available to you, Xpense may provide:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Expense and income tracking</li>
                  <li className={styles.listItem}>Categories and subcategories</li>
                  <li className={styles.listItem}>Budget management</li>
                  <li className={styles.listItem}>Transaction history</li>
                  <li className={styles.listItem}>Spending insights</li>
                  <li className={styles.listItem}>Lend and reminder features</li>
                  <li className={styles.listItem}>Local data storage</li>
                  <li className={styles.listItem}>Cloud synchronization</li>
                  <li className={styles.listItem}>Premium features</li>
                  <li className={styles.listItem}>Advertising-supported features</li>
                </ul>

                <p className={styles.bodyText}>
                  Features may change, be added, or be removed over time.
                </p>
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
                  You must be legally permitted to use Xpense under the laws
                  applicable to you.
                </p>
                <p className={styles.bodyText}>
                  If you are under the applicable age of consent in your
                  jurisdiction, you should use Xpense only with the involvement
                  and permission of a parent or legal guardian where required by
                  law.
                </p>
              </article>

              {/* Section 3: User Accounts */}
              <article id="user-accounts" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Key size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 3</span>
                    <h2 className={styles.sectionTitle}>3. User Accounts</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Some Xpense features require you to create or access an
                  account. You may authenticate using supported authentication
                  providers, including Google Sign-In.
                </p>
                <p className={styles.bodyText}>
                  You are responsible for:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Providing accurate information when required</li>
                  <li className={styles.listItem}>Maintaining the security of your account</li>
                  <li className={styles.listItem}>Keeping your authentication credentials secure</li>
                  <li className={styles.listItem}>Not sharing access to your account with unauthorized persons</li>
                </ul>
                <p className={styles.bodyText}>
                  You should notify us if you believe your account has been
                  accessed without authorization.
                </p>
              </article>

              {/* Section 4: Your Data */}
              <article id="your-data" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Database size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 4</span>
                    <h2 className={styles.sectionTitle}>4. Your Data</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You retain responsibility for the information and content that
                  you enter into Xpense. This may include:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Transactions</li>
                  <li className={styles.listItem}>Expense amounts</li>
                  <li className={styles.listItem}>Categories</li>
                  <li className={styles.listItem}>Descriptions</li>
                  <li className={styles.listItem}>Budgets</li>
                  <li className={styles.listItem}>Lend information</li>
                  <li className={styles.listItem}>Reminder information</li>
                  <li className={styles.listItem}>Other information you voluntarily provide</li>
                </ul>
                <p className={styles.bodyText}>
                  You grant Xpense the limited rights necessary to store,
                  process, synchronize, and display this information solely for
                  providing the services and features of the App.
                </p>
                <div className={styles.infoCallout}>
                  <strong>Privacy First:</strong> Our collection and processing
                  of personal information is described in detail in our{" "}
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
                </div>
              </article>

              {/* Section 5: Local Storage and Cloud Synchronization */}
              <article id="storage-sync" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Cloud size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 5</span>
                    <h2 className={styles.sectionTitle}>
                      5. Local Storage and Cloud Synchronization
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may support local-first functionality, allowing
                  certain information to be stored on your device.
                </p>
                <p className={styles.bodyText}>
                  Where cloud synchronization is enabled, supported information
                  may also be transmitted to and stored on Xpense's backend
                  infrastructure.
                </p>
                <p className={styles.bodyText}>
                  Synchronization may depend on:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Internet connectivity</li>
                  <li className={styles.listItem}>Authentication status</li>
                  <li className={styles.listItem}>Server availability</li>
                  <li className={styles.listItem}>Account status</li>
                  <li className={styles.listItem}>Application version</li>
                  <li className={styles.listItem}>Other technical conditions</li>
                </ul>
                <p className={styles.bodyText}>
                  While we take reasonable measures to protect stored data, we do
                  not guarantee that data synchronization or storage will always
                  be uninterrupted or completely free from errors.
                </p>
                <p className={styles.bodyText}>
                  You are responsible for maintaining any additional backups that
                  you consider necessary.
                </p>
              </article>

              {/* Section 6: Financial Disclaimer */}
              <article id="financial-disclaimer" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <AlertTriangle size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 6</span>
                    <h2 className={styles.sectionTitle}>
                      6. Financial Disclaimer
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense is a personal expense tracking and organization tool.
                </p>
                <p className={styles.bodyText}>
                  <strong>Xpense does not provide:</strong>
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Financial advice</li>
                  <li className={styles.listItem}>Investment advice</li>
                  <li className={styles.listItem}>Tax advice</li>
                  <li className={styles.listItem}>Accounting advice</li>
                  <li className={styles.listItem}>Legal advice</li>
                  <li className={styles.listItem}>Credit advice</li>
                  <li className={styles.listItem}>Professional financial planning</li>
                </ul>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={20}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    Information, charts, summaries, calculations, or insights
                    displayed by Xpense are provided for informational and
                    organizational purposes only. You are solely responsible for
                    financial decisions you make based on information recorded
                    or displayed in the App.
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
                  Xpense relies on information entered or provided by users. We
                  do not guarantee that:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>User-entered information is accurate</li>
                  <li className={styles.listItem}>Calculations will always be error-free</li>
                  <li className={styles.listItem}>Synchronization will always occur successfully</li>
                  <li className={styles.listItem}>Information will always be available</li>
                  <li className={styles.listItem}>Historical information will always be retained</li>
                </ul>
                <p className={styles.bodyText}>
                  You should review important financial information and
                  maintain appropriate records where necessary.
                </p>
              </article>

              {/* Section 8: Premium Features and Subscriptions */}
              <article id="premium-subscriptions" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <CreditCard size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 8</span>
                    <h2 className={styles.sectionTitle}>
                      8. Premium Features and Subscriptions
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense may offer premium features through paid subscriptions.
                  Premium features, pricing, billing periods, and availability
                  may vary by platform, region, or subscription plan.
                </p>
                <p className={styles.bodyText}>
                  Subscriptions purchased through the Apple App Store or Google
                  Play are subject to the applicable platform's payment and
                  subscription terms. Depending on the platform, subscriptions
                  may automatically renew unless cancelled before the applicable
                  renewal period.
                </p>
                <p className={styles.bodyText}>
                  You can manage or cancel subscriptions through the relevant
                  app-store account and subscription settings. Cancellation
                  generally prevents future renewal but does not necessarily
                  provide a refund for the current subscription period. Refunds
                  are subject to the applicable Apple App Store or Google Play
                  policies and applicable law.
                </p>
                <div className={styles.infoCallout}>
                  <strong>Payment Card Protection:</strong> Xpense does not
                  directly store your complete payment card information when
                  payments are processed through the applicable app store.
                </div>
              </article>

              {/* Section 9: Free Features and Advertisements */}
              <article id="free-ads" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Megaphone size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 9</span>
                    <h2 className={styles.sectionTitle}>
                      9. Free Features and Advertisements
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  The free version of Xpense may display advertisements provided
                  by third-party advertising services. Premium plans may provide
                  an ad-free experience where specified by the applicable
                  subscription plan.
                </p>
                <p className={styles.bodyText}>
                  Advertising availability, format, and providers may change
                  over time. Additional information about advertising and data
                  processing is provided in our{" "}
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
                  Xpense may rely on third-party services to provide certain
                  functionality. These services may include:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Firebase Authentication</li>
                  <li className={styles.listItem}>Google Sign-In</li>
                  <li className={styles.listItem}>Google AdMob</li>
                  <li className={styles.listItem}>Google Play services</li>
                  <li className={styles.listItem}>Apple App Store services</li>
                  <li className={styles.listItem}>Google ML Kit</li>
                  <li className={styles.listItem}>Cloud hosting services</li>
                  <li className={styles.listItem}>Database services</li>
                  <li className={styles.listItem}>Other infrastructure and technical service providers</li>
                </ul>
                <p className={styles.bodyText}>
                  Your use of third-party services may also be subject to the
                  terms and policies of those providers. We are not responsible
                  for the independent practices, availability, or policies of
                  third-party services.
                </p>
              </article>

              {/* Section 11: Acceptable Use */}
              <article id="acceptable-use" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <ShieldAlert size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 11</span>
                    <h2 className={styles.sectionTitle}>11. Acceptable Use</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You agree not to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Use Xpense for unlawful purposes</li>
                  <li className={styles.listItem}>Attempt to gain unauthorized access to Xpense systems</li>
                  <li className={styles.listItem}>Interfere with the operation or security of the App</li>
                  <li className={styles.listItem}>Attempt to bypass authentication or access controls</li>
                  <li className={styles.listItem}>Reverse engineer, decompile, or modify the App except where permitted by applicable law</li>
                  <li className={styles.listItem}>Introduce malicious software or harmful code</li>
                  <li className={styles.listItem}>Abuse APIs or backend services</li>
                  <li className={styles.listItem}>Attempt to access another user's information</li>
                  <li className={styles.listItem}>Use Xpense to violate the rights of another person</li>
                  <li className={styles.listItem}>Circumvent subscription or premium-feature restrictions</li>
                  <li className={styles.listItem}>Use automated methods to abuse or overload Xpense services</li>
                </ul>
                <p className={styles.bodyText}>
                  We may take appropriate action if we reasonably believe these
                  Terms have been violated.
                </p>
              </article>

              {/* Section 12: Intellectual Property */}
              <article id="intellectual-property" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Award size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 12</span>
                    <h2 className={styles.sectionTitle}>
                      12. Intellectual Property
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Xpense and its associated software, design, branding, logos,
                  interfaces, graphics, text, and other content are owned by or
                  licensed to Xpense unless otherwise stated.
                </p>
                <p className={styles.bodyText}>
                  You are granted a limited, non-exclusive, non-transferable,
                  revocable license to use Xpense for personal purposes in
                  accordance with these Terms.
                </p>
                <p className={styles.bodyText}>
                  You may not copy, reproduce, distribute, modify, sell,
                  license, or commercially exploit Xpense or its proprietary
                  content without appropriate authorization. These Terms do not
                  transfer ownership of Xpense or its intellectual property to
                  you.
                </p>
              </article>

              {/* Section 13: User-Provided Content */}
              <article id="user-content" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <FileEdit size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 13</span>
                    <h2 className={styles.sectionTitle}>
                      13. User-Provided Content
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You retain ownership of information and content that you
                  provide to Xpense, subject to the rights necessary for us to
                  operate the service.
                </p>
                <p className={styles.bodyText}>
                  You represent that you have the right to provide the
                  information you enter into Xpense.
                </p>
                <p className={styles.bodyText}>
                  You are responsible for ensuring that your use of the App does
                  not violate another person's privacy, intellectual property
                  rights, or other legal rights.
                </p>
              </article>

              {/* Section 14: Service Availability */}
              <article id="service-availability" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Activity size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 14</span>
                    <h2 className={styles.sectionTitle}>
                      14. Service Availability
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We aim to keep Xpense available and functioning reliably, but
                  we do not guarantee uninterrupted availability. The App or
                  certain features may become temporarily unavailable due to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Maintenance</li>
                  <li className={styles.listItem}>Updates</li>
                  <li className={styles.listItem}>Server issues</li>
                  <li className={styles.listItem}>Network problems</li>
                  <li className={styles.listItem}>Security incidents</li>
                  <li className={styles.listItem}>Third-party service failures</li>
                  <li className={styles.listItem}>Device or operating-system issues</li>
                  <li className={styles.listItem}>Circumstances outside our reasonable control</li>
                </ul>
                <p className={styles.bodyText}>
                  We may modify, suspend, or discontinue features or services at
                  any time, subject to applicable law.
                </p>
              </article>

              {/* Section 15: Updates */}
              <article id="updates" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <RefreshCw size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 15</span>
                    <h2 className={styles.sectionTitle}>15. Updates</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We may release updates to Xpense from time to time. Updates
                  may:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Add new features</li>
                  <li className={styles.listItem}>Remove features</li>
                  <li className={styles.listItem}>Improve security</li>
                  <li className={styles.listItem}>Fix bugs</li>
                  <li className={styles.listItem}>Change the user interface</li>
                  <li className={styles.listItem}>Modify technical requirements</li>
                  <li className={styles.listItem}>Improve performance</li>
                </ul>
                <p className={styles.bodyText}>
                  You may need to install updates to continue using certain
                  features.
                </p>
              </article>

              {/* Section 16: Account Suspension and Termination */}
              <article id="suspension-termination" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <UserX size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 16</span>
                    <h2 className={styles.sectionTitle}>
                      16. Account Suspension and Termination
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  You may stop using Xpense at any time. You may also request
                  deletion of your account in accordance with our Privacy Policy
                  and account-deletion procedures.
                </p>
                <p className={styles.bodyText}>
                  We may suspend or terminate access to an account where
                  reasonably necessary to:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Protect the security of Xpense</li>
                  <li className={styles.listItem}>Prevent fraud or abuse</li>
                  <li className={styles.listItem}>Investigate violations of these Terms</li>
                  <li className={styles.listItem}>Comply with applicable law</li>
                  <li className={styles.listItem}>Protect users or third parties</li>
                  <li className={styles.listItem}>Protect the integrity of our services</li>
                </ul>
                <p className={styles.bodyText}>
                  Where appropriate and legally permitted, we may provide
                  notice before taking such action.
                </p>
              </article>

              {/* Section 17: Effect of Account Deletion */}
              <article id="account-deletion-effect" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Trash2 size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 17</span>
                    <h2 className={styles.sectionTitle}>
                      17. Effect of Account Deletion
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  When you delete your Xpense account, information associated
                  with your account may be deleted from our active systems in
                  accordance with our Privacy Policy.
                </p>
                <p className={styles.bodyText}>
                  Certain information may need to be retained for legitimate or
                  legally required purposes, including security, fraud prevention,
                  legal compliance, dispute resolution, or backup requirements.
                </p>
                <p className={styles.bodyText}>
                  Deleting your account may not immediately remove locally
                  stored information from every device. You may need to remove
                  the App or clear its local data separately.
                </p>
              </article>

              {/* Section 18: Privacy */}
              <article id="privacy" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <ShieldCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 18</span>
                    <h2 className={styles.sectionTitle}>18. Privacy</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  Your use of Xpense is also governed by our Privacy Policy. Our
                  Privacy Policy explains:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>What information we collect</li>
                  <li className={styles.listItem}>How we use information</li>
                  <li className={styles.listItem}>How information is stored</li>
                  <li className={styles.listItem}>How information is shared</li>
                  <li className={styles.listItem}>Data retention</li>
                  <li className={styles.listItem}>Account deletion</li>
                  <li className={styles.listItem}>Your privacy rights</li>
                  <li className={styles.listItem}>Third-party services</li>
                </ul>

                <div className={styles.infoCallout}>
                  <strong>Privacy Policy Reference:</strong> Read our complete{" "}
                  <Link
                    to={ROUTES.PRIVACY_POLICY}
                    style={{
                      color: "var(--brand-primary)",
                      fontWeight: 600,
                      textDecoration: "underline",
                    }}
                  >
                    Privacy Policy
                  </Link>{" "}
                  or visit{" "}
                  <a
                    href="https://xpense-cloud.in/privacy"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "var(--brand-primary)",
                      textDecoration: "underline",
                    }}
                  >
                    https://xpense-cloud.in/privacy
                  </a>
                  .
                </div>
              </article>

              {/* Section 19: Disclaimer of Warranties */}
              <article id="warranty-disclaimer" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <AlertOctagon size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 19</span>
                    <h2 className={styles.sectionTitle}>
                      19. Disclaimer of Warranties
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  To the maximum extent permitted by applicable law, Xpense is
                  provided on an <strong>"as is"</strong> and{" "}
                  <strong>"as available"</strong> basis.
                </p>
                <p className={styles.bodyText}>
                  We do not guarantee that:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>The App will always be available</li>
                  <li className={styles.listItem}>The App will always be error-free</li>
                  <li className={styles.listItem}>All features will meet your expectations</li>
                  <li className={styles.listItem}>Data will never be lost or corrupted</li>
                  <li className={styles.listItem}>Synchronization will always succeed</li>
                  <li className={styles.listItem}>Third-party services will always be available</li>
                  <li className={styles.listItem}>The App will be compatible with every device or operating-system version</li>
                </ul>
                <p className={styles.bodyText}>
                  Nothing in these Terms excludes warranties or rights that
                  cannot legally be excluded under applicable law.
                </p>
              </article>

              {/* Section 20: Limitation of Liability */}
              <article id="limitation-liability" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Scale size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 20</span>
                    <h2 className={styles.sectionTitle}>
                      20. Limitation of Liability
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  To the maximum extent permitted by applicable law, Xpense and
                  its developers, operators, and service providers will not be
                  responsible for indirect, incidental, special, consequential,
                  or similar losses arising from your use of the App.
                </p>
                <p className={styles.bodyText}>
                  This may include, where legally permitted:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Loss of data</li>
                  <li className={styles.listItem}>Loss of profits</li>
                  <li className={styles.listItem}>Loss of business opportunities</li>
                  <li className={styles.listItem}>Financial losses</li>
                  <li className={styles.listItem}>Service interruptions</li>
                  <li className={styles.listItem}>Reliance on information displayed by the App</li>
                </ul>
                <p className={styles.bodyText}>
                  Nothing in these Terms limits liability where such limitation
                  is prohibited by applicable law.
                </p>
              </article>

              {/* Section 21: Indemnification */}
              <article id="indemnification" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <FileCheck size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 21</span>
                    <h2 className={styles.sectionTitle}>
                      21. Indemnification
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  To the extent permitted by applicable law, you agree to be
                  responsible for claims, losses, liabilities, damages, and
                  reasonable expenses arising from your:
                </p>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Violation of these Terms</li>
                  <li className={styles.listItem}>Misuse of Xpense</li>
                  <li className={styles.listItem}>Violation of applicable law</li>
                  <li className={styles.listItem}>Violation of another person's rights</li>
                </ul>
                <p className={styles.bodyText}>
                  This section applies only to the extent permitted by applicable
                  law.
                </p>
              </article>

              {/* Section 22: Changes to These Terms */}
              <article id="terms-changes" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <History size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 22</span>
                    <h2 className={styles.sectionTitle}>
                      22. Changes to These Terms
                    </h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  We may update these Terms from time to time. When changes are
                  made, we will update the "Last Updated" date at the beginning
                  of these Terms.
                </p>
                <p className={styles.bodyText}>
                  For significant changes, we may provide additional notice
                  where appropriate.
                </p>
                <p className={styles.bodyText}>
                  Your continued use of Xpense after the updated Terms become
                  effective constitutes acceptance of the updated Terms, to the
                  extent permitted by applicable law.
                </p>
              </article>

              {/* Section 23: Governing Law */}
              <article id="governing-law" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Landmark size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 23</span>
                    <h2 className={styles.sectionTitle}>23. Governing Law</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  These Terms shall be governed by the applicable laws of the
                  jurisdiction in which Xpense is legally operated, without regard
                  to conflict-of-law principles, except where applicable law
                  requires otherwise.
                </p>
                <p className={styles.bodyText}>
                  Any disputes shall be handled by the courts or
                  dispute-resolution mechanisms having appropriate jurisdiction,
                  subject to applicable consumer-protection and other mandatory
                  legal rights.
                </p>

                <div className={styles.calloutBox}>
                  <AlertTriangle
                    size={20}
                    style={{ color: "var(--google-yellow)", flexShrink: 0 }}
                  />
                  <div>
                    <strong>[TO CONFIRM:</strong> Insert the final governing
                    jurisdiction after confirming the legal entity/business
                    structure of Xpense.<strong>]</strong>
                  </div>
                </div>
              </article>

              {/* Section 24: Severability */}
              <article id="severability" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Split size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 24</span>
                    <h2 className={styles.sectionTitle}>24. Severability</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions will continue to apply
                  to the extent permitted by applicable law.
                </p>
              </article>

              {/* Section 25: Entire Agreement */}
              <article id="entire-agreement" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <BookOpen size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 25</span>
                    <h2 className={styles.sectionTitle}>25. Entire Agreement</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  These Terms, together with the Privacy Policy and any
                  additional terms applicable to specific Xpense features,
                  constitute the agreement governing your use of Xpense, except
                  where applicable law requires otherwise.
                </p>
              </article>

              {/* Section 26: Contact Us */}
              <article id="contact-us" className={styles.policyCard}>
                <div className={styles.sectionHeader}>
                  <div className={styles.sectionIconBox}>
                    <Mail size={22} />
                  </div>
                  <div className={styles.sectionTitleGroup}>
                    <span className={styles.sectionNumber}>Section 26</span>
                    <h2 className={styles.sectionTitle}>26. Contact Us</h2>
                  </div>
                </div>

                <p className={styles.bodyText}>
                  If you have questions about these Terms or Xpense, you can
                  contact us at:
                </p>

                <div className={styles.contactGrid}>
                  <a
                    href={`mailto:${TERMS_METADATA.contactEmail}`}
                    className={styles.contactItem}
                  >
                    <div className={styles.contactIconBox}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                        Email
                      </div>
                      <div>{TERMS_METADATA.contactEmail}</div>
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
                      <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                        Official Website
                      </div>
                      <div>xpense-cloud.in</div>
                    </div>
                  </a>

                  <Link to={ROUTES.PRIVACY_POLICY} className={styles.contactItem}>
                    <div className={styles.contactIconBox}>
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.76rem", color: "var(--text-muted)" }}>
                        Privacy Policy
                      </div>
                      <div>Read Policy</div>
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
