import React from 'react';
import { Smartphone, LogIn, TrendingUp, DollarSign, CheckCircle2, Zap, ShieldCheck } from 'lucide-react';

export const Hero = ({ onOpenLogin, onOpenDownload }) => {
  return (
    <section 
      style={{ 
        position: 'relative', 
        paddingTop: '60px', 
        paddingBottom: '90px', 
        background: '#282C33'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="hero-grid">
          
          {/* Left Hero Text Column */}
          <div>
            {/* Pill Badge */}
            <div className="badge-pill" style={{ marginBottom: '24px' }}>
              <Zap size={15} style={{ color: '#FFFFFF' }} />
              <span>Real-Time Sync: Android • iOS • Web</span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.4rem, 4.5vw, 3.6rem)', 
                fontWeight: 800, 
                lineHeight: 1.15, 
                marginBottom: '20px',
                color: '#ffffff'
              }}
            >
              Master Your Expenses with Xpense Engine
            </h1>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: '1.1rem', 
                color: 'var(--text-muted)', 
                lineHeight: 1.6, 
                marginBottom: '36px',
                maxWidth: '540px'
              }}
            >
              Track daily expenses, manage multi-currency budgets, and get instant financial insights. Synced instantly across your Android device, iPhone, and Web browser.
            </p>

            {/* App Store & Play Store Download Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '32px' }}>
              {/* Google Play Store Badge */}
              <button
                onClick={onOpenDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: '#1D1D21',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                {/* Play Store Multicolor Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path fill="#410593" d="M3.6 2.4c-.2.2-.3.5-.3.9v17.4c0 .4.1.7.3.9l.1.1 9.7-9.7v-.2L3.7 2.3l-.1.1z"/>
                  <path fill="#F44336" d="M16.7 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-4 2.3z"/>
                  <path fill="#FFC107" d="M16.8 15.2L13.4 11.8 3.6 21.6c.4.4 1 .4 1.7 0l11.5-6.4z"/>
                  <path fill="#00E676" d="M16.8 8.8L5.3 2.4c-.7-.4-1.3-.4-1.7 0l9.8 9.8 3.4-3.4z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    GET IT ON
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
                    Google Play
                  </div>
                </div>
              </button>

              {/* Apple App Store Badge */}
              <button
                onClick={onOpenDownload}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  background: '#1D1D21',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                {/* Apple Logo Icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3.01 1.09.08 2.21-.55 2.88-1.37z"/>
                </svg>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    Download on the
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#ffffff', lineHeight: 1.1 }}>
                    App Store
                  </div>
                </div>
              </button>

              {/* Login / Web App Button (White FAB ThemeData) */}
              <button
                onClick={onOpenLogin}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px 22px',
                  borderRadius: '12px',
                  background: '#ffffff',
                  color: '#1D1D21',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f0f0f0';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#ffffff';
                }}
              >
                <LogIn size={18} />
                <span>Web Dashboard Login</span>
              </button>
            </div>

            {/* Social Trust Metrics */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)', fontSize: '0.86rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} style={{ color: '#ffffff' }} />
                <span>4.9★ Play Store & App Store Rating</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} style={{ color: '#ffffff' }} />
                <span>Firebase Encrypted</span>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Flat Financial Surface Card */}
          <div style={{ position: 'relative' }}>
            
            {/* Main Financial Surface Board */}
            <div 
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: '#1D1D21',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Header Status */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
                  <span style={{ fontSize: '0.8rem', color: '#ffffff', fontWeight: 600 }}>Firebase Cloud Synced</span>
                </div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-subtle)' }}>USD ($)</span>
              </div>

              {/* Total Balance Card */}
              <div style={{ background: '#282C33', borderRadius: '14px', padding: '20px', border: '1px solid rgba(255, 255, 255, 0.08)', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Total Monthly Wealth</div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#ffffff' }}>$14,890.40</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#ffffff', marginTop: '6px' }}>
                  <TrendingUp size={16} />
                  <span>+18.4% savings goal reached</span>
                </div>
              </div>

              {/* Expense Category Breakdown */}
              <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '10px' }}>
                  <span>Monthly Expenses</span>
                  <span>$3,240.00 / $4,500 Cap</span>
                </div>
                
                {/* Multi-segment Progress Bar */}
                <div style={{ height: '10px', borderRadius: '6px', background: '#282C33', overflow: 'hidden', display: 'flex', gap: '2px' }}>
                  <div style={{ width: '45%', background: '#ffffff', height: '100%', borderRadius: '4px' }} title="Food & Dining 45%" />
                  <div style={{ width: '30%', background: '#A0A5B1', height: '100%', borderRadius: '4px' }} title="Investments 30%" />
                  <div style={{ width: '15%', background: '#6C727F', height: '100%', borderRadius: '4px' }} title="Tech & Subscriptions 15%" />
                </div>
              </div>

              {/* Category Legend */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                <div style={{ padding: '10px', borderRadius: '10px', background: '#282C33', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Food & Dining</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>$1,458</div>
                </div>
                <div style={{ padding: '10px', borderRadius: '10px', background: '#282C33', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Savings</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>$972</div>
                </div>
                <div style={{ padding: '10px', borderRadius: '10px', background: '#282C33', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Subscriptions</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#A0A5B1' }}>$486</div>
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
