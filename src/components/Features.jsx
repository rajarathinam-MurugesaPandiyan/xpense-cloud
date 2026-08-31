import React from 'react';
import { ShieldCheck, RefreshCw, Cpu, PieChart, Smartphone, Globe, Lock, BellRing, FileSpreadsheet, Sparkles } from 'lucide-react';

const FEATURES_DATA = [
  {
    icon: RefreshCw,
    title: 'Real-Time Firebase Cloud Sync',
    desc: 'Changes on your Android phone or iPhone reflect instantly on the Web dashboard with zero manual refresh.',
    color: '#ffffff'
  },
  {
    icon: Globe,
    title: 'Multi-Currency & FX Engine',
    desc: 'Travel seamlessly with support for 30+ currencies and automatic live exchange rate conversions.',
    color: '#ffffff'
  },
  {
    icon: Cpu,
    title: 'Smart Subscription Detection',
    desc: 'AI algorithms spot recurring monthly bills, free trial expirations, and unexpected price hikes.',
    color: '#ffffff'
  },
  {
    icon: BellRing,
    title: 'Proactive Budget Cap Alerts',
    desc: 'Receive instant push notifications on Android & iOS before you breach your category budget limits.',
    color: '#ffffff'
  },
  {
    icon: Lock,
    title: 'Bank-Grade AES-256 Encryption',
    desc: 'Protected by Google OAuth 2.0, biometric lock, and end-to-end cloud encryption.',
    color: '#ffffff'
  },
  {
    icon: FileSpreadsheet,
    title: 'One-Click Tax & CSV Exports',
    desc: 'Generate audit-ready PDF summaries and Excel/CSV sheets for accountants and tax season.',
    color: '#ffffff'
  }
];

export const Features = () => {
  return (
    <section id="features" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 60px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} style={{ color: '#ffffff' }} />
            <span>Built for Modern Mobile & Web</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Engineered for Total Financial Control
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every tool you need to manage personal expenses, team budgets, and cloud wealth across Android, iOS, and Web.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '24px' 
          }}
        >
          {FEATURES_DATA.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: '20px',
                  background: '#1D1D21',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px'
                }}
              >
                <div 
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#ffffff' }}>
                  {feat.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;
