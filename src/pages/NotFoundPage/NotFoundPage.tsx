import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft, ShieldCheck, Compass } from "lucide-react";
import { ROUTES } from "../../routes";

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        background: "var(--bg-app)",
        color: "var(--text-primary)",
        textAlign: "center",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          padding: "40px 32px",
          borderRadius: "24px",
          background: "var(--bg-surface)",
          border: "1px solid var(--border-color)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "20px",
            background: "rgba(11, 87, 208, 0.1)",
            color: "var(--brand-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <Compass size={32} />
        </div>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 12px",
            borderRadius: "9999px",
            background: "var(--bg-surface-elevated)",
            color: "var(--text-muted)",
            fontSize: "0.78rem",
            fontWeight: 700,
            marginBottom: "12px",
            border: "1px solid var(--border-color)",
          }}
        >
          <span>ERROR 404 • ROUTE NOT FOUND</span>
        </div>

        <h1
          style={{
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "var(--text-primary)",
            letterSpacing: "-0.5px",
            marginBottom: "10px",
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "0.94rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "28px",
          }}
        >
          The route you navigated to does not exist or has been relocated.
          Return to the XPense homepage to continue.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to={ROUTES.HOME}
            className="btn-primary"
            style={{
              textDecoration: "none",
              padding: "11px 22px",
              fontSize: "0.9rem",
              borderRadius: "9999px",
            }}
          >
            <Home size={16} />
            <span>Return to Home</span>
          </Link>

          <Link
            to={ROUTES.PRIVACY_POLICY}
            className="btn-secondary"
            style={{
              textDecoration: "none",
              padding: "11px 22px",
              fontSize: "0.9rem",
              borderRadius: "9999px",
            }}
          >
            <ShieldCheck size={16} />
            <span>Privacy Policy</span>
          </Link>

          <Link
            to={ROUTES.TERMS}
            className="btn-secondary"
            style={{
              textDecoration: "none",
              padding: "11px 22px",
              fontSize: "0.9rem",
              borderRadius: "9999px",
            }}
          >
            <span>Terms & Conditions</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
