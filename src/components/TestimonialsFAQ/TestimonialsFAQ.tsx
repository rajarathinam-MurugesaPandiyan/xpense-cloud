import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, FAQS } from '../../constants';
import styles from './TestimonialsFAQ.module.scss';

export const TestimonialsFAQ: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="reviews" className={styles.section}>
      <div className="container">
        {/* Testimonials Header */}
        <div className={styles.headerWrapper}>
          <div className="badge-pill badge-pill-accent" style={{ marginBottom: '14px' }}>
            <MessageSquareQuote size={14} style={{ color: 'var(--brand-primary)' }} />
            <span>Community Feedback</span>
          </div>
          <h2 className={styles.heading}>
            Loved by Thousands of Smart Savers
          </h2>
          <p className={styles.subheading}>
            Rated 4.9 out of 5 stars across Google Play Store and Apple App Store.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div>
                <div className={styles.starsRow}>
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#FBBC04" color="#FBBC04" />
                  ))}
                </div>
                <p className={styles.commentText}>
                  "{item.comment}"
                </p>
              </div>

              <div className={styles.authorRow}>
                <div>
                  <div className={styles.authorName}>{item.name}</div>
                  <div className={styles.authorRole}>{item.role}</div>
                </div>
                <span className={styles.sourceBadge}>
                  <CheckCircle2 size={12} />
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Header */}
        <div id="faq" className={styles.faqHeaderWrapper}>
          <div className="badge-pill badge-pill-accent" style={{ marginBottom: '14px' }}>
            <HelpCircle size={14} style={{ color: 'var(--brand-primary)' }} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className={styles.heading}>
            Got Questions? We Have Answers.
          </h2>
          <p className={styles.subheading}>
            Everything you need to know about the product, sync security, and platforms.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className={styles.faqContainer}>
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div key={idx} className={styles.faqItem}>
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className={styles.faqButton}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      flexShrink: 0,
                      color: isOpen ? 'var(--brand-primary)' : 'var(--text-muted)',
                    }}
                  />
                </button>

                {isOpen && (
                  <div className={styles.faqAnswer}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsFAQ;
