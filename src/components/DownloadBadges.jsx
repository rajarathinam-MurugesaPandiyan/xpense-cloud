import React, { useState } from 'react';
import { Smartphone, Download, Star, QrCode, CheckCircle2, ShieldCheck, ArrowRight, Copy, Check } from 'lucide-react';

export const DownloadBadges = () => {
  const [copied, setCopied] = useState(false);
  const appPackageId = 'com.ragogaxpense_tracker';
  const playStoreUrl = `https://play.google.com/store/apps/details?id=${appPackageId}`;
  const appStoreUrl = `https://apps.apple.com/app/xpense-cloud/id1649201923`;

  const copyAppId = () => {
    navigator.clipboard.writeText(appPackageId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" style={{ padding: '90px 0', position: 'relative' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          className="glass-card"
          style={{
            padding: '48px 40px',
            borderRadius: '28px',
            background: '#1D1D21',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            boxShadow: '0 30px 70px -20px rgba(0, 0, 0, 0.8)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'center' }} className="download-grid">
            
            {/* Left Content */}
            <div>
              <div className="badge-pill" style={{ marginBottom: '16px', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(255, 255, 255, 0.15)', color: '#ffffff' }}>
                <Smartphone size={14} />
                <span>Available on Android & iOS</span>
              </div>

              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.2 }}>
                Get Xpense Cloud on Your Mobile Device
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '32px' }}>
                Download the mobile application to capture expenses on the go with receipt scanning, offline mode, and instant cloud sync to your web dashboard.
              </p>

              {/* Download Badges Row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '28px' }}>
                
                {/* Google Play Store Badge */}
                <a
                  href={playStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 22px',
                    borderRadius: '16px',
                    background: '#282C33',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24">
                    <path fill="#410593" d="M3.6 2.4c-.2.2-.3.5-.3.9v17.4c0 .4.1.7.3.9l.1.1 9.7-9.7v-.2L3.7 2.3l-.1.1z"/>
                    <path fill="#F44336" d="M16.7 15.3l-3.3-3.3v-.2l3.3-3.3.1.1 3.9 2.2c1.1.6 1.1 1.6 0 2.2l-4 2.3z"/>
                    <path fill="#FFC107" d="M16.8 15.2L13.4 11.8 3.6 21.6c.4.4 1 .4 1.7 0l11.5-6.4z"/>
                    <path fill="#00E676" d="M16.8 8.8L5.3 2.4c-.7-.4-1.3-.4-1.7 0l9.8 9.8 3.4-3.4z"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                      GET IT ON
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                      Google Play
                    </div>
                  </div>
                </a>

                {/* Apple App Store Badge */}
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '12px 22px',
                    borderRadius: '16px',
                    background: '#282C33',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.34c.67-.82 1.13-1.96.99-3.1-.97.04-2.17.65-2.86 1.46-.62.72-1.16 1.88-1.01 3.01 1.09.08 2.21-.55 2.88-1.37z"/>
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                      Download on the
                    </div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                      App Store
                    </div>
                  </div>
                </a>

              </div>

              {/* Package ID Copy helper */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.82rem', color: 'var(--text-subtle)' }}>
                <span>Package ID: <code style={{ color: '#ffffff', background: 'rgba(255,255,255,0.06)', padding: '2px 8px', borderRadius: '4px' }}>{appPackageId}</code></span>
                <button 
                  onClick={copyAppId}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: copied ? '#ffffff' : 'var(--text-muted)' }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy ID'}</span>
                </button>
              </div>
            </div>

            {/* Right Column: Scan QR Code Box */}
            <div 
              style={{
                padding: '28px',
                borderRadius: '20px',
                background: '#282C33',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{ marginBottom: '14px', padding: '6px 14px', borderRadius: '99px', background: 'rgba(255,255,255,0.08)', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700 }}>
                Instant QR Mobile Download
              </div>

              {/* Simulated QR Code Box */}
              <div 
                style={{
                  width: '160px',
                  height: '160px',
                  borderRadius: '16px',
                  background: '#ffffff',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                  marginBottom: '16px'
                }}
              >
                {/* SVG QR Code Pattern */}
                <svg width="136" height="136" viewBox="0 0 100 100" fill="#1D1D21">
                  <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#1D1D21" strokeWidth="6"/>
                  <rect x="12" y="12" width="14" height="14" fill="#1D1D21"/>
                  
                  <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#1D1D21" strokeWidth="6"/>
                  <rect x="74" y="12" width="14" height="14" fill="#1D1D21"/>
                  
                  <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#1D1D21" strokeWidth="6"/>
                  <rect x="12" y="74" width="14" height="14" fill="#1D1D21"/>

                  {/* QR Data Dots */}
                  <rect x="40" y="10" width="8" height="8" fill="#1D1D21"/>
                  <rect x="52" y="20" width="8" height="8" fill="#1D1D21"/>
                  <rect x="40" y="32" width="12" height="8" fill="#1D1D21"/>
                  
                  <rect x="10" y="42" width="8" height="12" fill="#1D1D21"/>
                  <rect x="25" y="50" width="12" height="8" fill="#1D1D21"/>
                  
                  <rect x="42" y="42" width="16" height="16" rx="3" fill="#1D1D21"/>

                  <rect x="65" y="42" width="10" height="10" fill="#1D1D21"/>
                  <rect x="80" y="50" width="12" height="10" fill="#1D1D21"/>

                  <rect x="40" y="68" width="10" height="12" fill="#1D1D21"/>
                  <rect x="55" y="75" width="14" height="14" fill="#1D1D21"/>
                  <rect x="75" y="72" width="15" height="18" fill="#1D1D21"/>
                </svg>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', maxWidth: '240px' }}>
                Scan with your iOS or Android camera to immediately download Xpense Cloud.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadBadges;
