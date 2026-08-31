import React from 'react';
import LottieLogo from './LottieLogo';
import { ShieldCheck, Heart, Globe, MessageCircle, Mail } from 'lucide-react';

export const Footer = ({ onOpenLogin, onOpenDownload }) => {
  return (
    <footer 
      style={{ 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
        background: '#1D1D21', 
        paddingTop: '60px', 
        paddingBottom: '40px',
        position: 'relative'
      }}
    >
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr repeat(3, 1fr)', gap: '40px', marginBottom: '48px' }} className="footer-grid">
          
          {/* Brand Col */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <LottieLogo size={36} />
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, maxWidth: '300px', marginBottom: '20px' }}>
              Smart financial management engine synced across Android, iOS, and Web with cloud analytics and bank-grade security.
            </p>

            {/* Operational Status Pill */}
            <div 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px', 
                padding: '6px 12px', 
                borderRadius: '8px', 
                background: 'rgba(255, 255, 255, 0.08)', 
                border: '1px solid rgba(255, 255, 255, 0.15)',
                fontSize: '0.78rem',
                color: '#ffffff',
                fontWeight: 600
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }} />
              <span>Firebase Cloud Engine: Operational</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Product</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <a href="#features" style={{ transition: 'color 0.2s' }}>Features</a>
              <a href="#interactive-demo" style={{ transition: 'color 0.2s' }}>Live Interactive Demo</a>
              <a href="#mobile-showcase" style={{ transition: 'color 0.2s' }}>Mobile App (Flutter)</a>
              <a href="#download" style={{ transition: 'color 0.2s' }}>Android & iOS Downloads</a>
            </div>
          </div>

          {/* Platforms */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Platforms</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <a href="#download" onClick={onOpenDownload} style={{ transition: 'color 0.2s' }}>Google Play Store (Android)</a>
              <a href="#download" onClick={onOpenDownload} style={{ transition: 'color 0.2s' }}>Apple App Store (iOS)</a>
              <button onClick={onOpenLogin} style={{ textAlign: 'left', color: 'var(--text-muted)', fontSize: '0.86rem' }}>Web Dashboard Portal</button>
              <a href="#security" style={{ transition: 'color 0.2s' }}>Firebase Cloud Auth</a>
            </div>
          </div>

          {/* Legal & Security */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>Security & Legal</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              <a href="#" style={{ transition: 'color 0.2s' }}>Privacy Policy</a>
              <a href="#" style={{ transition: 'color 0.2s' }}>Terms of Service</a>
              <a href="#" style={{ transition: 'color 0.2s' }}>AES-256 Encryption Spec</a>
              <a href="#" style={{ transition: 'color 0.2s' }}>Security Whitepaper</a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
          <div>
            © {new Date().getFullYear()} Xpense Cloud. All rights reserved. Package ID: <code>com.ragogaxpense_tracker</code>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><Globe size={18} /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }}><MessageCircle size={18} /></a>
            <a href="mailto:support@xpensecloud.app" style={{ color: 'var(--text-muted)' }}><Mail size={18} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
