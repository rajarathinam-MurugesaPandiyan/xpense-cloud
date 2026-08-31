import React, { useState } from 'react';
import { Smartphone, Shield, Zap, Bell, CheckCircle2, ChevronRight } from 'lucide-react';

export const MobileShowcase = () => {
  const [activeScreen, setActiveScreen] = useState('overview');

  return (
    <section id="mobile-showcase" style={{ padding: '90px 0', background: '#282C33', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 54px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Smartphone size={14} style={{ color: '#ffffff' }} />
            <span>Mobile-First Flutter Engine</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
            Designed for iOS & Android
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Native performance, smooth gesture navigation, and biometrics built directly into your pocket.
          </p>

          {/* Screen Switcher Buttons */}
          <div style={{ display: 'inline-flex', background: '#1D1D21', padding: '4px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', marginTop: '24px' }}>
            <button
              onClick={() => setActiveScreen('overview')}
              style={{
                padding: '8px 18px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: activeScreen === 'overview' ? '#1D1D21' : 'var(--text-muted)',
                background: activeScreen === 'overview' ? '#ffffff' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              Dashboard Screen
            </button>
            <button
              onClick={() => setActiveScreen('analytics')}
              style={{
                padding: '8px 18px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: activeScreen === 'analytics' ? '#1D1D21' : 'var(--text-muted)',
                background: activeScreen === 'analytics' ? '#ffffff' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              Analytics & Insights
            </button>
            <button
              onClick={() => setActiveScreen('security')}
              style={{
                padding: '8px 18px',
                borderRadius: '99px',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: activeScreen === 'security' ? '#1D1D21' : 'var(--text-muted)',
                background: activeScreen === 'security' ? '#ffffff' : 'transparent',
                transition: 'all 0.2s'
              }}
            >
              Security Vault
            </button>
          </div>
        </div>

        {/* Mobile Device Mockup Frame Showcase */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          
          {/* Phone Frame Container matching ThemeData Scaffold #282C33 and Surface #1D1D21 */}
          <div 
            style={{
              position: 'relative',
              width: '320px',
              height: '630px',
              borderRadius: '44px',
              background: '#282C33',
              border: '10px solid #1D1D21',
              boxShadow: '0 25px 70px -15px rgba(0, 0, 0, 0.9)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Phone Top Notch */}
            <div style={{ width: '130px', height: '24px', background: '#1D1D21', borderRadius: '0 0 14px 14px', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#282C33' }} />
            </div>

            {/* Screen Content Area */}
            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', overflow: 'hidden' }}>
              
              {/* App Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Good morning</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Alex Morgan</div>
                </div>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D1D21', fontWeight: 700, fontSize: '0.8rem' }}>
                  AM
                </div>
              </div>

              {activeScreen === 'overview' && (
                <>
                  {/* Card Widget */}
                  <div style={{ background: '#1D1D21', borderRadius: '18px', padding: '16px', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <div style={{ fontSize: '0.7rem', color: '#ffffff', marginBottom: '2px', fontWeight: 600 }}>Xpense Cloud Card</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '14px' }}>$14,890.40</div>
                    <div style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>•••• •••• •••• 9241</div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
                    {['Send', 'Add', 'Budget', 'Sync'].map((act, i) => (
                      <div key={i} style={{ padding: '8px 4px', borderRadius: '10px', background: 'rgba(255,255,255,0.06)', fontSize: '0.7rem', color: '#fff', fontWeight: 600 }}>
                        {act}
                      </div>
                    ))}
                  </div>

                  {/* Transaction Feed */}
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', marginTop: '4px' }}>Recent Activity</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Uber Ride', amt: '-$24.50', cat: 'Travel' },
                      { name: 'Salary Credit', amt: '+$4,250.00', cat: 'Income' },
                      { name: 'Spotify Premium', amt: '-$9.99', cat: 'Tech' }
                    ].map((tx, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 10px', borderRadius: '10px', background: '#1D1D21' }}>
                        <div>
                          <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>{tx.name}</div>
                          <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>{tx.cat}</div>
                        </div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: tx.amt.startsWith('+') ? '#ffffff' : '#f87171' }}>
                          {tx.amt}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeScreen === 'analytics' && (
                <>
                  <div style={{ background: '#1D1D21', borderRadius: '16px', padding: '16px' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Monthly Breakdown</div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px', height: '100px', paddingBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ height: '60%', flex: 1, background: '#ffffff', borderRadius: '4px' }} />
                      <div style={{ height: '85%', flex: 1, background: '#A0A5B1', borderRadius: '4px' }} />
                      <div style={{ height: '40%', flex: 1, background: '#6C727F', borderRadius: '4px' }} />
                      <div style={{ height: '95%', flex: 1, background: '#ffffff', borderRadius: '4px' }} />
                    </div>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    ✨ AI Recommendation: You saved 14% more this month by optimizing subscriptions!
                  </div>
                </>
              )}

              {activeScreen === 'security' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', padding: '20px' }}>
                  <Shield size={42} style={{ color: '#ffffff', marginBottom: '12px' }} />
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '6px' }}>Biometric Vault Active</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>FaceID / Fingerprint encryption enabled for com.ragogaxpense_tracker</div>
                </div>
              )}

            </div>

            {/* Bottom Navigation Indicator Bar */}
            <div style={{ height: '40px', background: '#1D1D21', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffffff' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MobileShowcase;
