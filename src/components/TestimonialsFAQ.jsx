import React, { useState } from 'react';
import { Star, ChevronDown, HelpCircle, MessageSquareQuote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Manager & Traveler',
    comment: 'The real-time sync between my Android phone and Mac web dashboard is seamless. Changing currencies while traveling saved me hours of manually calculating receipts.',
    stars: 5,
    source: 'Google Play Review'
  },
  {
    name: 'David Chen',
    role: 'Freelance Software Developer',
    comment: 'Finally an expense app that matches my Flutter mobile app dark theme! The Poppins font, Lottie animations, and instant CSV exports for tax season are top notch.',
    stars: 5,
    source: 'App Store Review'
  },
  {
    name: 'Elena Rostova',
    role: 'Small Business Founder',
    comment: 'Budget cap alerts notify me before I overspend on subscriptions. The Firebase cloud engine ensures zero data loss even when switching smartphones.',
    stars: 5,
    source: 'Verified User'
  }
];

const FAQS = [
  {
    q: 'Is Xpense Cloud free to download on Android & iOS?',
    a: 'Yes! Xpense Cloud is free to download from both Google Play Store and Apple App Store. The free tier includes full expense tracking, category budgets, and cloud sync.'
  },
  {
    q: 'How does real-time cloud sync work between mobile and web?',
    a: 'Xpense Cloud leverages Firebase Firestore realtime databases. Whenever you log an expense on your Android or iOS app, it instantly reflects on your web dashboard within seconds.'
  },
  {
    q: 'Is my financial data encrypted and secure?',
    a: 'Absolutely. All data transmission uses TLS 1.3 encryption and AES-256 storage. We support Google OAuth 2.0 authentication and biometric device security (FaceID/Fingerprint).'
  },
  {
    q: 'Can I export my expenses for accounting or taxes?',
    a: 'Yes, you can export your complete transaction history to CSV, Excel, or formatted PDF reports directly from the web portal or mobile app.'
  },
  {
    q: 'Which currencies are supported?',
    a: 'Xpense Cloud supports over 30 global currencies (USD, EUR, GBP, INR, JPY, CAD, AUD, etc.) with automatic live FX conversion rates.'
  }
];

export const TestimonialsFAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="faq" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Testimonials Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 48px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <MessageSquareQuote size={14} style={{ color: '#ffffff' }} />
            <span>Community Feedback</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
            Loved by Thousands of Smart Savers
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.02rem' }}>
            Rated 4.9 out of 5 stars across Google Play Store and Apple App Store.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '80px' }}>
          {TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: '#1D1D21',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '4px', color: '#ffffff', marginBottom: '14px' }}>
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="#ffffff" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '20px' }}>
                  "{item.comment}"
                </p>
              </div>
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{item.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.role}</div>
                </div>
                <span style={{ fontSize: '0.72rem', color: '#ffffff', background: 'rgba(255,255,255,0.08)', padding: '4px 8px', borderRadius: '6px' }}>
                  {item.source}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div className="badge-pill" style={{ marginBottom: '14px' }}>
              <HelpCircle size={14} style={{ color: '#ffffff' }} />
              <span>Questions & Answers</span>
            </div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#fff' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    borderRadius: '16px',
                    background: '#1D1D21',
                    border: `1px solid ${isOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.08)'}`,
                    overflow: 'hidden',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      color: '#ffffff',
                      fontSize: '1.02rem',
                      fontWeight: 700
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={20}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: '#ffffff'
                      }}
                    />
                  </button>
                  {isOpen && (
                    <div 
                      style={{ 
                        padding: '0 24px 20px', 
                        color: 'var(--text-muted)', 
                        fontSize: '0.94rem', 
                        lineHeight: 1.65,
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                      }}
                    >
                      <div style={{ paddingTop: '12px' }}>{faq.a}</div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsFAQ;
