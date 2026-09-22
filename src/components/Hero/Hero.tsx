import React from "react";
import {
  Smartphone,
  CheckCircle2,
  ShieldCheck,
  ArrowDown,
  ArrowRight,
  Plane,
  Bell,
  Repeat,
} from "lucide-react";
import {
  HERO_METRICS,
  HERO_CATEGORY_SEGMENTS,
  HERO_ACTIVITY_STREAM,
} from "../../constants";
import styles from "./Hero.module.scss";

export interface HeroProps {
  onOpenDownload?: () => void;
  onOpenDemo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onOpenDemo }) => {
  const scrollToDemo = () => {
    const el = document.getElementById("interactive-demo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroSection}>
      {/* Subtle Background Radial Ambient Glow */}
      <div className={styles.ambientGlow} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className={styles.heroGrid}>
          {/* Left Hero Text Column */}
          <div>
            {/* Main Headline */}
            <h1 className={styles.headline}>
              Money Management{" "}
              <span className={styles.headlineGradient}>Made Effortless.</span>
            </h1>

            {/* Sub-headline */}
            <p className={styles.subheadline}>
              Track daily expenses, split shared group trips, automate lend
              reminders, and manage recurring subscriptions — all synced in
              real-time across your devices.
            </p>

            {/* Key Feature Badges */}
            <div className={styles.pillGroup}>
              <span className={styles.pillGreen}>
                <Bell size={13} /> Lend Reminders
              </span>
              <span className={styles.pillBlue}>
                <Repeat size={13} /> Subscriptions
              </span>
              <span className={styles.pillYellow}>
                <Plane size={13} /> Trip Expense Split
              </span>
            </div>

            {/* CTA Hierarchy */}
            <div className={styles.ctaGroup}>
              <button
                type="button"
                onClick={onOpenDownload}
                className={styles.primaryCta}
              >
                <Smartphone size={19} />
                <span>Download Mobile App</span>
              </button>

              <button
                type="button"
                onClick={scrollToDemo}
                className={styles.secondaryCta}
              >
                <span>Try Live Demo</span>
                <ArrowDown size={16} style={{ color: "var(--text-muted)" }} />
              </button>
            </div>

            {onOpenDemo && (
              <div style={{ marginTop: '12px', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span>Need a team or business walkthrough? </span>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--brand-primary)',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    padding: 0,
                    fontSize: 'inherit',
                  }}
                >
                  Request a live demo &rarr;
                </button>
              </div>
            )}

            {/* Social Trust Metrics */}
            <div className={styles.socialTrust}>
              <div className={styles.trustItem}>
                <CheckCircle2 size={16} style={{ color: "var(--income)" }} />
                <span>{HERO_METRICS.rating}</span>
              </div>
              <div className={styles.trustItem}>
                <ShieldCheck
                  size={16}
                  style={{ color: "var(--brand-primary)" }}
                />
                <span>{HERO_METRICS.security}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Elevated Financial Surface Board */}
          <div className={styles.cardContainer}>
            {/* Ambient Card Underglow */}
            <div className={styles.cardUnderglow} />

            {/* Main Financial Surface Board */}
            <div className={styles.surfaceBoard}>
              {/* Total Balance Card */}
              <div className={styles.balanceCard}>
                <div className={styles.balanceTitle}>Total Account Balance</div>
                <div className={styles.balanceAmount}>
                  {HERO_METRICS.totalBalance}
                </div>
                <div className={styles.balanceMetricsRow}>
                  <div className={styles.balanceMetricPill}>
                    <div className={styles.balanceMetricLabel}>
                      MONTHLY CASHFLOW
                    </div>
                    <div className={styles.balanceMetricValueGreen}>
                      {HERO_METRICS.monthlyCashflow}
                    </div>
                  </div>
                  <div className={styles.balanceMetricPill}>
                    <div className={styles.balanceMetricLabel}>
                      SAVINGS GOAL
                    </div>
                    <div className={styles.balanceMetricValueWhite}>
                      {HERO_METRICS.savingsGoalPercent}
                    </div>
                  </div>
                </div>
              </div>

              {/* Expense Category Breakdown with Google 4-Color progress bar */}
              <div className={styles.categorySection}>
                <div className={styles.categoryHeader}>
                  <span>Category Distribution</span>
                  <span className={styles.categorySpentText}>
                    {HERO_METRICS.categorySpent}
                  </span>
                </div>

                {/* Multi-segment Google 4-Color Progress Bar */}
                <div className={styles.progressBar}>
                  {HERO_CATEGORY_SEGMENTS.map((segment) => (
                    <div
                      key={segment.label}
                      style={{
                        width: segment.width,
                        background: segment.color,
                        height: "100%",
                        borderRadius: "4px",
                      }}
                      title={`${segment.label} (${segment.width})`}
                    />
                  ))}
                </div>

                <div className={styles.legendRow}>
                  {HERO_CATEGORY_SEGMENTS.map((segment) => (
                    <span key={segment.label} className={styles.legendItem}>
                      <span
                        className={styles.legendDot}
                        style={{ background: segment.color }}
                      />{" "}
                      {segment.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real-Time Synced Transaction Preview */}
              <div className={styles.streamSection}>
                <div className={styles.streamTitle}>
                  Live Flutter Activity Stream
                </div>
                <div className={styles.streamList}>
                  {HERO_ACTIVITY_STREAM.map((item) => (
                    <div key={item.id} className={styles.streamItem}>
                      <div className={styles.streamLeft}>
                        <div
                          className={styles.streamIconBox}
                          style={{
                            background: item.iconBg,
                            color: item.iconColor,
                          }}
                        >
                          {item.iconType === "repeat" ? (
                            <Repeat size={16} />
                          ) : (
                            <Bell size={16} />
                          )}
                        </div>
                        <div>
                          <div className={styles.streamItemTitle}>
                            {item.title}
                          </div>
                          <div className={styles.streamItemSub}>
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                      <div
                        className={
                          item.type === "expense"
                            ? styles.amountExpense
                            : styles.amountIncome
                        }
                      >
                        {item.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
