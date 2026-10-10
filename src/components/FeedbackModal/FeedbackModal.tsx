import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  MessageSquare,
  User,
  Mail,
  FileText,
  Send,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Sparkles,
  Bug,
  Lightbulb,
  Heart,
} from 'lucide-react';
import {
  validateName,
  validateEmail,
  validateFeedbackDescription,
  FORBIDDEN_BRACES_REGEX,
} from '../../utils/security';
import { submitFeedback } from '../../services/feedback';
import styles from './FeedbackModal.module.scss';

export interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FeedbackType = 'feature' | 'bug' | 'improvement' | 'general';

const FEEDBACK_TYPES: { id: FeedbackType; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
  { id: 'feature', label: 'Feature Request', icon: Sparkles },
  { id: 'bug', label: 'Bug Report', icon: Bug },
  { id: 'improvement', label: 'Improvement', icon: Lightbulb },
  { id: 'general', label: 'General', icon: Heart },
];

export const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  // Form Field States
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('feature');
  const [description, setDescription] = useState<string>('');

  // Error States
  const [nameError, setNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Submission & Success States
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    description: string;
  } | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset state when closed
      setIsSuccess(false);
      setNameError(null);
      setEmailError(null);
      setDescriptionError(null);
      setServerError(null);
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 100);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (FORBIDDEN_BRACES_REGEX.test(val)) {
      setNameError("Braces '{' and '}' are blocked to prevent code injection.");
      setName(val.replace(/[{}]/g, ''));
      return;
    }
    setName(val);
    if (nameError) setNameError(null);
    if (serverError) setServerError(null);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (FORBIDDEN_BRACES_REGEX.test(val)) {
      setEmailError("Braces '{' and '}' are not permitted in email addresses.");
      setEmail(val.replace(/[{}]/g, ''));
      return;
    }
    setEmail(val);
    if (emailError) setEmailError(null);
    if (serverError) setServerError(null);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let val = e.target.value;

    if (FORBIDDEN_BRACES_REGEX.test(val)) {
      setDescriptionError("Security alert: Code braces '{' and '}' are strictly blocked.");
      val = val.replace(/[{}]/g, '');
    } else if (descriptionError && val.length <= 1000) {
      setDescriptionError(null);
    }

    if (val.length > 1000) {
      val = val.slice(0, 1000);
      setDescriptionError('Maximum length of 1,000 characters reached.');
    }

    setDescription(val);
    if (serverError) setServerError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const nameValidation = validateName(name);
    const emailValidation = validateEmail(email);
    const descValidation = validateFeedbackDescription(description, 1000);

    setNameError(nameValidation.isValid ? null : (nameValidation.error ?? 'Invalid name'));
    setEmailError(emailValidation.isValid ? null : (emailValidation.error ?? 'Invalid email'));
    setDescriptionError(
      descValidation.isValid ? null : (descValidation.error ?? 'Invalid description')
    );

    if (!nameValidation.isValid || !emailValidation.isValid || !descValidation.isValid) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepend feedback type prefix if appropriate
      const typeLabel = FEEDBACK_TYPES.find((t) => t.id === feedbackType)?.label || 'General';
      const formattedDescription = `[${typeLabel}] ${descValidation.sanitizedValue}`;

      await submitFeedback({
        email: emailValidation.sanitizedValue,
        name: nameValidation.sanitizedValue,
        description: formattedDescription,
        author_name: nameValidation.sanitizedValue,
      });

      setSubmittedData({
        name: nameValidation.sanitizedValue,
        email: emailValidation.sanitizedValue,
        description: formattedDescription,
      });
      setIsSuccess(true);
    } catch (err: any) {
      setServerError(
        err.message || 'Unable to submit feedback at this time. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndNew = () => {
    setName('');
    setEmail('');
    setDescription('');
    setNameError(null);
    setEmailError(null);
    setDescriptionError(null);
    setServerError(null);
    setSubmittedData(null);
    setIsSuccess(false);
  };

  const charLength = description.length;
  const isNearLimit = charLength >= 900 && charLength < 1000;
  const isAtLimit = charLength === 1000;

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="feedback-dialog-title"
    >
      <div className={styles.modalCard}>
        {/* Top-Right Circular Close Button */}
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close feedback dialog"
        >
          <X size={18} />
        </button>

        {!isSuccess ? (
          <>
            {/* Header */}
            <div className={styles.header}>
              <div className={styles.feedbackBadge}>
                <MessageSquare size={13} />
                <span>Product Feedback</span>
              </div>
              <h3 id="feedback-dialog-title" className={styles.title}>
                Share Your Feedback
              </h3>
              <p className={styles.subtitle}>
                Help us improve Xpense Cloud. Share your feature requests, bugs, or suggestions
                directly with our engineering team.
              </p>
            </div>

            {/* Quick Type Selection Chips */}
            <div className={styles.typeSelectorRow}>
              {FEEDBACK_TYPES.map((type) => {
                const Icon = type.icon;
                const isActive = feedbackType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setFeedbackType(type.id)}
                    className={`${styles.typeChip} ${isActive ? styles.activeType : ''}`}
                  >
                    <Icon size={12} />
                    <span>{type.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              {/* Server-Side Error Alert */}
              {serverError && (
                <div className={styles.serverAlertError}>
                  <AlertTriangle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Field 1: Full Name */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="feedback-name" className={styles.label}>
                    <User size={14} style={{ color: 'var(--brand-primary)' }} />
                    <span>Your Name</span>
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    id="feedback-name"
                    ref={nameInputRef}
                    type="text"
                    required
                    maxLength={60}
                    value={name}
                    onChange={handleNameChange}
                    placeholder="e.g. Alex Rivera"
                    className={`${styles.input} ${nameError ? styles.inputError : ''}`}
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
                  <label htmlFor="feedback-email" className={styles.label}>
                    <Mail size={14} style={{ color: 'var(--income)' }} />
                    <span>Email Address</span>
                  </label>
                </div>
                <div className={styles.inputWrapper}>
                  <input
                    id="feedback-email"
                    type="email"
                    required
                    maxLength={100}
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="e.g. alex@example.com"
                    className={`${styles.input} ${emailError ? styles.inputError : ''}`}
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

              {/* Field 3: Feedback Description */}
              <div className={styles.formGroup}>
                <div className={styles.labelRow}>
                  <label htmlFor="feedback-description" className={styles.label}>
                    <FileText size={14} style={{ color: 'var(--google-yellow)' }} />
                    <span>Your Feedback / Suggestion</span>
                  </label>
                  <span
                    className={`${styles.charCounter} ${isAtLimit ? styles.limit : isNearLimit ? styles.warning : ''}`}
                    title="1000 characters max"
                  >
                    {charLength} / 1000
                  </span>
                </div>

                <textarea
                  id="feedback-description"
                  rows={4}
                  required
                  maxLength={1000}
                  value={description}
                  onChange={handleDescriptionChange}
                  placeholder="Tell us what you love, what could be improved, or features you'd like to see (e.g. multi-currency Goa trip split, OCR receipts)..."
                  className={`${styles.textarea} ${descriptionError ? styles.inputError : ''}`}
                />

                {/* Micro Progress Bar */}
                <div className={styles.charWarningBar}>
                  <div
                    className={styles.charWarningFill}
                    style={{
                      width: `${(charLength / 1000) * 100}%`,
                      backgroundColor: isAtLimit
                        ? 'var(--google-red, #EA4335)'
                        : isNearLimit
                          ? 'var(--google-yellow, #F9AB00)'
                          : 'var(--brand-primary, #0B57D0)',
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
                    <span>Submitting to Cloud...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Feedback</span>
                  </>
                )}
              </button>

              <div className={styles.footerNote}>
                <Sparkles size={12} style={{ color: 'var(--brand-primary)' }} />
                <span>
                  Posts directly to Xpense Cloud. We review every message carefully.
                </span>
              </div>
            </form>
          </>
        ) : (
          /* Success Screen */
          <div className={styles.successContainer}>
            <div className={styles.successIconWrapper}>
              <CheckCircle2 size={36} />
            </div>

            <h3 className={styles.successTitle}>Thank You for Your Feedback!</h3>

            <p className={styles.successMessage}>
              Thank you, <strong>{submittedData?.name}</strong>. Your feedback has been posted directly
              to our Go cloud service. Your insights help shape the future of Xpense Cloud.
            </p>

            {/* Sanitized Summary Card */}
            <div className={styles.summaryCard}>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Submitted by:</span>
                <span className={styles.summaryValue}>{submittedData?.name}</span>
              </div>
              <div className={styles.summaryRow}>
                <span className={styles.summaryLabel}>Email Address:</span>
                <span className={styles.summaryValue}>{submittedData?.email}</span>
              </div>
              <div
                className={styles.summaryRow}
                style={{
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                }}
              >
                <span className={styles.summaryLabel}>Feedback:</span>
                <span
                  className={styles.summaryValue}
                  style={{ textAlign: 'left', fontStyle: 'italic', maxWidth: '100%' }}
                >
                  "{submittedData?.description}"
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
              <button
                type="button"
                className={styles.doneButton}
                onClick={onClose}
              >
                Close & Return
              </button>

              <button
                type="button"
                onClick={handleResetAndNew}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '6px',
                }}
              >
                Submit Another Feedback
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;
