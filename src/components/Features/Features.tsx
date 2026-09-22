import React from "react";
import {
  ShieldCheck,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Plane,
  Repeat,
  Bell,
  PieChart,
} from "lucide-react";
import { FEATURE_ITEMS } from "../../constants";
import styles from "./Features.module.scss";

export const Features: React.FC = () => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "plane":
        return <Plane size={24} />;
      case "bell":
        return <Bell size={24} />;
      case "repeat":
        return <Repeat size={24} />;
      case "pieChart":
        return <PieChart size={24} />;
      case "refresh":
        return <RefreshCw size={24} />;
      case "shield":
        return <ShieldCheck size={24} />;
      default:
        return <Sparkles size={24} />;
    }
  };

  const renderMicroWidget = (widgetType: string) => {
    switch (widgetType) {
      case "trip":
        return (
          <div className={styles.microWidget}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.82rem",
                marginBottom: "6px",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                🌴 Goa Coastal Trip
              </span>
              <span style={{ color: "var(--brand-primary)", fontWeight: 800 }}>
                ₹2,375 / person
              </span>
            </div>
            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
              4 Members • Auto-Settlement calculations
            </div>
          </div>
        );
      case "reminder":
        return (
          <div
            className={styles.microWidget}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                Sarah Jenkins
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Due Sep 28 • Concert split
              </div>
            </div>
            <span
              style={{
                fontSize: "0.76rem",
                padding: "3px 8px",
                borderRadius: "6px",
                background: "rgba(30, 142, 62, 0.12)",
                color: "#1E8E3E",
                fontWeight: 700,
              }}
            >
              LENT ₹3,500
            </span>
          </div>
        );
      case "subscription":
        return (
          <div
            className={styles.microWidget}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                Google One Cloud 2TB
              </div>
              <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                Renews Oct 01 • Monthly
              </div>
            </div>
            <span
              style={{
                fontSize: "0.84rem",
                fontWeight: 800,
                color: "var(--brand-primary)",
              }}
            >
              ₹650/mo
            </span>
          </div>
        );
      case "category":
        return (
          <div className={styles.microWidget}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "0.82rem",
                marginBottom: "6px",
              }}
            >
              <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                Dining & Food Limit
              </span>
              <span style={{ color: "#EA4335", fontWeight: 700 }}>
                ₹2,840 / ₹4,000 (71%)
              </span>
            </div>
            <div
              style={{
                width: "100%",
                height: "6px",
                background: "var(--border-color)",
                borderRadius: "999px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "71%",
                  height: "100%",
                  background: "#EA4335",
                  borderRadius: "999px",
                }}
              />
            </div>
          </div>
        );
      case "sync":
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "12px",
              borderRadius: "12px",
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-color)",
              fontSize: "0.8rem",
              fontWeight: 700,
            }}
          >
            <span style={{ color: "var(--text-primary)" }}>
              📱 Flutter Mobile
            </span>
            <span style={{ color: "var(--brand-primary)" }}>⟷ Cloud ⟷</span>
            <span style={{ color: "var(--text-primary)" }}>
              💻 Web Dashboard
            </span>
          </div>
        );
      case "biometric":
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px",
              borderRadius: "12px",
              background: "var(--bg-surface-elevated)",
              border: "1px solid var(--border-color)",
              fontSize: "0.8rem",
              color: "var(--text-secondary)",
            }}
          >
            <CheckCircle2 size={16} style={{ color: "#1E8E3E" }} />
            <span>FaceID & TouchID local auth enabled</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.headerWrapper}>
          <div
            className="badge-pill badge-pill-accent"
            style={{ marginBottom: "14px" }}
          >
            <Sparkles size={14} style={{ color: "#0B57D0" }} />
            <span>Xpense Cloud Features</span>
          </div>
          <h2 className={styles.title}>Complete XPense Feature Ecosystem</h2>
          <p className={styles.description}>
            Engineered with Flutter on mobile and Go. Experience deep category
            budgets, lend reminders, subscriptions logging, and multi-member
            trip splits.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className={styles.bentoGrid}>
          {FEATURE_ITEMS.map((item) => (
            <div key={item.id} className={styles.bentoCard}>
              <div>
                <div className={styles.cardHeaderRow}>
                  <div
                    className={styles.iconContainer}
                    style={{
                      background: item.bgLight,
                      border: `1px solid ${item.borderLight}`,
                      color: item.color,
                    }}
                  >
                    {renderIcon(item.iconType)}
                  </div>
                  <span
                    className="badge-pill badge-pill-accent"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.description}</p>
              </div>

              {renderMicroWidget(item.widgetType)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
