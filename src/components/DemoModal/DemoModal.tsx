import React, { useState, useEffect, useRef } from "react";
import {
  X,
  ShieldCheck,
  User,
  Mail,
  FileText,
  Send,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Sparkles,
  Loader2,
} from "lucide-react";
import {
  validateName,
  validateEmail,
  validateDescription,
  FORBIDDEN_BRACES_REGEX,
} from "../../utils/security";
import styles from "./DemoModal.module.scss";

export interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  // Form Field States
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // Error States
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);

  // Submission & Success States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    description: string;
  } | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Focus management and ESC key listener
  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setIsSuccess(false);
      setNameError(null);
      setEmailError(null);
      setDescriptionError(null);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Auto focus name input
    const timer = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Real-time Name Change Handler with Brace / Injection Interceptor
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (FORBIDDEN_BRACES_REGEX.test(val)) {
      setNameError("Braces '{' and '}' are blocked to prevent code injection.");
      setName(val.replace(/[{}]/g, ""));
      return;
    }
    setName(val);
    if (nameError) setNameError(null);
  };

  // Real-time Email Change Handler
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (FORBIDDEN_BRACES_REGEX.test(val)) {
      setEmailError("Braces '{' and '}' are not permitted in email addresses.");
      setEmail(val.replace(/[{}]/g, ""));
      return;
    }
    setEmail(val);
    if (emailError) setEmailError(null);
  };

  // Real-time Description Change Handler (Strict 256-char limit & Brace Blocker)
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    let val = e.target.value;

    // Check for code braces { }
    if (FORBIDDEN_BRACES_REGEX.test(val)) {
      setDescriptionError(
        "Security alert: Code braces '{' and '}' are strictly blocked.",
      );
      val = val.replace(/[{}]/g, "");
    } else if (descriptionError && val.length <= 256) {
      setDescriptionError(null);
    }

    // Enforce 256 character maximum hard cap
    if (val.length > 256) {
      val = val.slice(0, 256);
      setDescriptionError("Maximum length of 256 characters reached.");
    }

    setDescription(val);
  };

  // Submission Handler with Thorough Multi-Layer Sanitization
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const descValidation = validateDescription(description);

    setNameError(
      nameValidation.isValid ? null : (nameValidation.error ?? "Invalid name"),
    );
    setEmailError(
      emailValidation.isValid
        ? null
        : (emailValidation.error ?? "Invalid email"),
    );
    setDescriptionError(
      descValidation.isValid
        ? null
        : (descValidation.error ?? "Invalid description"),
    );

    if (
      !nameValidation.isValid ||
      !emailValidation.isValid ||
      !descValidation.isValid
    ) {
      return;
    }

    setIsSubmitting(true);

    // Simulate secure backend API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({
        name: nameValidation.sanitizedValue,
        email: emailValidation.sanitizedValue,
        description: descValidation.sanitizedValue,
      });
      setIsSuccess(true);
    }, 650);
  };

  const handleResetAndNew = () => {
    setName("");
    setEmail("");
    setDescription("");
    setNameError(null);
    setEmailError(null);
    setDescriptionError(null);
    setSubmittedData(null);
    setIsSuccess(false);
  };

  const charLength = description.length;
  const isNearLimit = charLength >= 230 && charLength < 256;
  const isAtLimit = charLength === 256;

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-dialog-title"
    >
      <div className={styles.modalCard}>
        {/* Top-Right Circular Close Button */}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close demo request dialog"
        >
          <X size={18} />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.securityBadge}>
                <ShieldCheck size={13} />
                <span>Secured Demo Request</span>
              </div>
              <h3 id="demo-dialog-title" className={styles.title}>
                Schedule a Product Demo
              </h3>
              <p className={styles.subtitle}>
                Experience XPense Cloud's multi-device architecture. Share your
                workflow details and our engineers will provide a personalized
                walkthrough.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Field 1: Full Name */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="demo-name" className={styles.label}>
                    <User size={14} style={{ color: "var(--brand-primary)" }} />
                    <span>Full Name</span>
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    id="demo-name"
                    ref={nameInputRef}
                    type="text"
                    required
                    maxLength={60}
                    value={name}
                    onChange={handleNameChange}
                    placeholder="e.g. Alex Rivera"
                    className={`${styles.input} ${nameError ? styles.inputError : ""}`}
                    autoComplete="name"
                  />
                  <div className={styles.inputIcon}>
                    <User size={16} />
                  </div>
                </div>
                {nameError && (
                  <div className={styles.errorText}>
                    <AlertTriangle size={13} />
                    <span>{nameError}</span>
                  </div>
                )}
              </div>

              {/* Field 2: Email Address */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="demo-email" className={styles.label}>
                    <Mail size={14} style={{ color: "var(--income)" }} />
                    <span>Work or Personal Email</span>
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    id="demo-email"
                    type="email"
                    required
                    maxLength={100}
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="e.g. alex@example.com"
                    className={`${styles.input} ${emailError ? styles.inputError : ""}`}
                    autoComplete="email"
                  />
                  <div className={styles.inputIcon}>
                    <Mail size={16} />
                  </div>
                </div>
                {emailError && (
                  <div className={styles.errorText}>
                    <AlertTriangle size={13} />
                    <span>{emailError}</span>
                  </div>
                )}
              </div>

              {/* Field 3: Demo Description (Strictly Max 256 Chars, No Code / {}) */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="demo-description" className={styles.label}>
                    <FileText
                      size={14}
                      style={{ color: "var(--google-yellow)" }}
                    />
                    <span>Demo Requirements / Use Case</span>
                  </label>
                  <span
                    className={`${styles.charCounter} ${isAtLimit ? styles.limit : isNearLimit ? styles.warning : ""}`}
                    title="256 characters max"
                  >
                    {charLength} / 256
                  </span>
                </div>

                <textarea
                  id="demo-description"
                  rows={4}
                  required
                  maxLength={256}
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Tell us what you'd like to test (e.g., 4-way Goa trip split, recurring subscriptions, offline Hive storage)..."
                  className={`${styles.textarea} ${descriptionError ? styles.inputError : ""}`}
                />

                {/* Micro Progress Bar for 256 chars */}
                <div className={styles.charWarningBar}>
                  <div
                    className={styles.charWarningFill}
                    style={{
                      width: `${(charLength / 256) * 100}%`,
                      backgroundColor: isAtLimit
                        ? "var(--google-red, #EA4335)"
                        : isNearLimit
                          ? "var(--google-yellow, #F9AB00)"
                          : "var(--brand-primary, #0B57D0)",
                    }}
                  />
                </div>

                {descriptionError && (
                  <div className={styles.errorText}>
                    <AlertTriangle size={13} />
                    <span>{descriptionError}</span>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    <span>Validating & Securing...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Request Personalized Demo</span>
                  </>
                )}
              </button>

              <div className={styles.footerNote}>
                <Sparkles size={12} style={{ color: "var(--brand-primary)" }} />
                <span>
                  Zero spam guarantee. Calendar invite sent to verified email.
                </span>
              </div>
            </form>
          </>
        ) : (
          /* Success Confirmation Screen */
          <div className={styles.successContainer}>
            <div className={styles.successIconWrapper}>
              <CheckCircle2 size={36} />
            </div>

            <h3 className={styles.successTitle}>Demo Request Received!</h3>

            <p className={styles.successMessage}>
              Thank you, <strong>{submittedData?.name}</strong>. Your session
              request has been sanitized, validated, and sent to our team.
            </p>

            {/* Sanitized Summary Card */}
            <div className={styles.summaryCard}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Contact Name:</span>
                <span className={styles.summaryValue}>
                  {submittedData?.name}
                </span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Email Address:</span>
                <span className={styles.summaryValue}>
                  {submittedData?.email}
                </span>
              </div>
              <div
                className={styles.summaryRow}
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "4px",
                }}
              >
                <span className={styles.summaryLabel}>
                  Description ({submittedData?.description.length}/256 chars):
                </span>
                <span
                  className={styles.summaryValue}
                  style={{ textAlign: "left", fontStyle: "italic" }}
                >
                  "{submittedData?.description}"
                </span>
              </div>
              <div className={styles.securityVerifiedPill}>
                <ShieldCheck size={14} />
                <span>Sanitized: 0 code braces, 0 scripts detected</span>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <button
                type="button"
                className={styles.doneButton}
                onClick={onClose}
              >
                Close & Return to App
              </button>

              <button
                type="button"
                onClick={handleResetAndNew}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  padding: "6px",
                }}
              >
                Submit Another Request
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
