import React, { useState } from 'react';
import styles from './MobileShowcase.module.scss';
import { 
  Smartphone, Shield, Zap, Bell, CheckCircle2, ChevronRight, 
  Home, PieChart, CreditCard, Settings, ArrowUpRight, Plus, 
  RefreshCw, Sparkles, Check, Lock, Fingerprint, TrendingUp,
  Plane, Repeat, Utensils, Laptop, ShoppingBag, Car, Search,
  Wifi, Battery, Signal, Share2, Filter, ArrowLeft
} from 'lucide-react';

export interface TabItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
}

export const MobileShowcase: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<string>('overview');

  const tabs: TabItem[] = [
    { id: 'overview', label: 'Dashboard', icon: Home },
    { id: 'trip', label: 'Trip Expense', icon: Plane },
    { id: 'reminders', label: 'Lend Reminder', icon: Bell },
    { id: 'subscriptions', label: 'Subscriptions', icon: Repeat },
    { id: 'categories', label: 'Categories', icon: PieChart },
  ];

  return (
    <section id="mobile-showcase" className={styles.showcaseSection}>
      <div className="container">
        
        {/* Section Header: Premium FinTech Layout */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 48px' }}>
          <div 
            className="badge-pill badge-pill-accent" 
            style={{ 
              marginBottom: '16px',
              padding: '6px 16px',
              fontSize: '0.82rem',
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(11, 87, 208, 0.12)'
            }}
          >
            <Smartphone size={15} style={{ color: '#0B57D0' }} />
            <span>NATIVE FLUTTER SUITE • MATERIAL 3</span>
          </div>

          <h2 
            style={{ 
              fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', 
              fontWeight: 800, 
              color: 'var(--text-primary)', 
              marginBottom: '16px', 
              letterSpacing: '-0.6px',
              lineHeight: 1.2
            }}
          >
            Experience the{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #1A73E8 0%, #0B57D0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              XPense Mobile App
            </span>
          </h2>

          <p style={{ color: 'var(--text-secondary)', fontSize: '1.08rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto' }}>
            Engineered with Google Pay ergonomics, sub-second latency, and offline-first Hive storage. Click below to inspect each Flutter screen.
          </p>

          {/* Upgraded Modern Segmented Pill Control */}
          <div 
            style={{ 
              display: 'inline-flex', 
              background: 'var(--bg-surface)', 
              padding: '6px', 
              borderRadius: '20px', 
              border: '1px solid var(--border-color)', 
              marginTop: '32px', 
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.06)',
              flexWrap: 'wrap', 
              gap: '6px',
              justifyContent: 'center'
            }}
          >
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeScreen === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveScreen(tab.id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    borderRadius: '14px',
                    fontSize: '0.86rem',
                    fontWeight: 600,
                    border: 'none',
                    cursor: 'pointer',
                    color: isActive ? '#ffffff' : 'var(--text-secondary)',
                    background: isActive 
                      ? 'linear-gradient(135deg, #1A73E8 0%, #0B57D0 100%)' 
                      : 'transparent',
                    boxShadow: isActive 
                      ? '0 4px 14px rgba(11, 87, 208, 0.35)' 
                      : 'none',
                    transition: 'all 0.22s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                      e.currentTarget.style.background = 'var(--bg-surface-elevated)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                      e.currentTarget.style.background = 'transparent';
                    }
                  }}
                >
                  <Icon size={16} style={{ color: isActive ? '#ffffff' : 'var(--brand-primary)' }} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Device Mockup Frame Showcase */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          
          {/* Ambient Glow behind the Phone */}
          <div 
            style={{
              position: 'absolute',
              width: '420px',
              height: '620px',
              background: 'radial-gradient(circle, rgba(11, 87, 208, 0.18) 0%, transparent 70%)',
              filter: 'blur(50px)',
              pointerEvents: 'none'
            }}
          />

          {/* Phone Frame Container */}
          <div 
            style={{
              position: 'relative',
              width: '345px',
              height: '680px',
              borderRadius: '50px',
              background: '#0D0F13',
              border: '11px solid #20242C',
              boxShadow: '0 32px 84px -16px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.08)',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Realistic Status Bar: 9:41 + Dynamic Island + Signal/Wifi/Battery */}
            <div 
              style={{ 
                height: '42px', 
                padding: '0 20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                color: '#E2E2E6',
                fontSize: '0.78rem',
                fontWeight: 700,
                zIndex: 10,
                paddingTop: '6px'
              }}
            >
              {/* Clock */}
              <span>9:41</span>

              {/* Dynamic Island Pill */}
              <div 
                style={{ 
                  width: '96px', 
                  height: '24px', 
                  background: '#000000', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end', 
                  padding: '0 10px',
                  gap: '6px',
                  boxShadow: '0 0 1px rgba(255, 255, 255, 0.15)'
                }}
              >
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#111318', border: '1px solid rgba(255, 255, 255, 0.1)' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#059669' }} />
              </div>

              {/* Status Icons: Cellular, Wifi, Battery */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <Signal size={13} style={{ color: '#E2E2E6' }} />
                <Wifi size={13} style={{ color: '#E2E2E6' }} />
                <div style={{ width: '19px', height: '10px', border: '1.5px solid #E2E2E6', borderRadius: '3px', padding: '1px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: '100%', background: '#E2E2E6', borderRadius: '1px' }} />
                </div>
              </div>
            </div>

            {/* Screen Content Area */}
            <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column', gap: '14px', overflowY: 'auto' }}>
              
              {/* Dynamic Context-Aware Flutter App Bar Header */}
              {activeScreen === 'overview' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div 
                      style={{ 
                        width: '38px', 
                        height: '38px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #1A73E8 0%, #0B57D0 100%)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: '#ffffff', 
                        fontWeight: 800, 
                        fontSize: '0.84rem',
                        border: '2px solid rgba(255, 255, 255, 0.15)'
                      }}
                    >
                      RM
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#8E919A', fontWeight: 500 }}>Good morning</div>
                      <div style={{ fontSize: '1rem', fontWeight: 800, color: '#E2E2E6' }}>Rajarathinam</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4C6D0' }}>
                      <Search size={15} />
                    </div>
                    <div style={{ position: 'relative', width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C4C6D0' }}>
                      <Bell size={15} />
                      <div style={{ position: 'absolute', top: '7px', right: '7px', width: '6px', height: '6px', borderRadius: '50%', background: '#EA4335' }} />
                    </div>
                  </div>
                </div>
              )}

              {activeScreen === 'trip' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E2E2E6' }}>
                      <ArrowLeft size={16} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#E2E2E6' }}>🌴 Goa Road Trip</div>
                      <div style={{ fontSize: '0.7rem', color: '#81C995', fontWeight: 600 }}>Active • 4 Members</div>
                    </div>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8C7FA' }}>
                    <Share2 size={15} />
                  </div>
                </div>
              )}

              {activeScreen === 'reminders' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2px' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#E2E2E6' }}>Lend & Borrow</div>
                    <div style={{ fontSize: '0.72rem', color: '#8E919A' }}>3 Active Reminders</div>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8C7FA' }}>
                    <Filter size={15} />
                  </div>
                </div>
              )}

              {activeScreen === 'subscriptions' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2px' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#E2E2E6' }}>Subscriptions Vault</div>
                    <div style={{ fontSize: '0.72rem', color: '#8E919A' }}>Auto-Posting Active</div>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8C7FA' }}>
                    <Plus size={16} />
                  </div>
                </div>
              )}

              {activeScreen === 'categories' && (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '2px' }}>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 800, color: '#E2E2E6' }}>Category Budgets</div>
                    <div style={{ fontSize: '0.72rem', color: '#8E919A' }}>September 2026 ▾</div>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#A8C7FA' }}>
                    <Plus size={16} />
                  </div>
                </div>
              )}

              {/* 1. SCREEN: DASHBOARD OVERVIEW */}
              {activeScreen === 'overview' && (
                <>
                  {/* Google Blue Hero Balance Card */}
                  <div 
                    style={{
                      background: 'linear-gradient(135deg, #1A73E8 0%, #0B57D0 50%, #0842A0 100%)',
                      borderRadius: '20px',
                      padding: '18px',
                      color: '#ffffff',
                      boxShadow: '0 10px 24px -4px rgba(11, 87, 208, 0.4)'
                    }}
                  >
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255,255,255,0.8)' }}>
                      Total Net Balance
                    </div>
                    <div style={{ fontSize: '1.9rem', fontWeight: 800, margin: '6px 0 14px' }}>
                      ₹18,420.50
                    </div>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '8px 10px' }}>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)' }}>INCOME</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#34D399' }}>+₹42,500</div>
                      </div>
                      <div style={{ flex: 1, background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '8px 10px' }}>
                        <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)' }}>EXPENSE</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FB7185' }}>-₹18,400</div>
                      </div>
                    </div>
                  </div>

                  {/* Google 4-Color Quick Actions */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', textAlign: 'center' }}>
                    {[
                      { label: 'Add', color: '#1A73E8', icon: Plus },
                      { label: 'Trip', color: '#F9AB00', icon: Plane },
                      { label: 'Lend', color: '#1E8E3E', icon: Bell },
                      { label: 'Repeat', color: '#EA4335', icon: Repeat },
                    ].map(item => (
                      <div key={item.label}>
                        <div style={{ width: '44px', height: '44px', margin: '0 auto 4px', borderRadius: '14px', background: '#1E2024', border: '1px solid #333842', display: 'flex', alignItems: 'center', justifyContent: 'center', color: item.color }}>
                          <item.icon size={18} />
                        </div>
                        <div style={{ fontSize: '0.68rem', color: '#C4C6D0', fontWeight: 600 }}>{item.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent Activity List */}
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E2E2E6', marginBottom: '8px' }}>
                      Recent Activity
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {[
                        { title: 'Figma Subscription', cat: 'Tech', amt: '-₹1,250', color: '#1A73E8' },
                        { title: 'Freelance Payout', cat: 'Income', amt: '+₹65,000', color: '#1E8E3E' },
                        { title: 'Whole Foods Market', cat: 'Dining', amt: '-₹2,450', color: '#EA4335' },
                      ].map(tx => (
                        <div key={tx.title} style={{ padding: '10px 12px', borderRadius: '12px', background: '#1E2024', border: '1px solid #333842', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6' }}>{tx.title}</div>
                            <div style={{ fontSize: '0.68rem', color: '#8E919A' }}>{tx.cat}</div>
                          </div>
                          <span style={{ fontSize: '0.82rem', fontWeight: 700, color: tx.amt.startsWith('+') ? '#34D399' : '#FB7185' }}>
                            {tx.amt}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* 2. SCREEN: TRIP EXPENSE MANAGER */}
              {activeScreen === 'trip' && (
                <>
                  <div style={{ padding: '16px', borderRadius: '18px', background: '#1E2024', border: '1px solid #333842' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                      <Plane size={18} style={{ color: '#F9AB00' }} />
                      <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#E2E2E6' }}>Goa Coastal Expedition</span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#8E919A', marginBottom: '12px' }}>
                      4 Travelers • Status: In Progress
                    </div>

                    <div style={{ padding: '12px', borderRadius: '12px', background: '#282A2F', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontSize: '0.66rem', color: '#8E919A', fontWeight: 600 }}>PER PERSON SHARE</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#A8C7FA' }}>₹2,375.00</div>
                      </div>
                      <span style={{ fontSize: '0.7rem', padding: '3px 8px', borderRadius: '6px', background: '#0842A0', color: '#A8C7FA', fontWeight: 700 }}>
                        ÷ 4 Members
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6', margin: '4px 0 2px' }}>
                    Shared Trip Expenses
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { title: 'Beach Villa Stay', payer: 'Paid by You', amt: '₹14,000' },
                      { title: 'Seafood Dinner', payer: 'Paid by Alex', amt: '₹4,800' },
                      { title: 'Scooter Rentals', payer: 'Paid by Sarah', amt: '₹2,700' },
                      { title: 'Scuba Diving', payer: 'Paid by David', amt: '₹6,500' },
                    ].map(item => (
                      <div key={item.title} style={{ padding: '10px 12px', borderRadius: '12px', background: '#1E2024', border: '1px solid #333842', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6' }}>{item.title}</div>
                          <div style={{ fontSize: '0.68rem', color: '#8E919A' }}>{item.payer}</div>
                        </div>
                        <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#E2E2E6' }}>{item.amt}</div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 3. SCREEN: LEND REMINDERS */}
              {activeScreen === 'reminders' && (
                <>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    <div style={{ padding: '12px', borderRadius: '14px', background: 'rgba(30, 142, 62, 0.12)', border: '1px solid rgba(30, 142, 62, 0.25)' }}>
                      <div style={{ fontSize: '0.65rem', color: '#81C995', fontWeight: 700 }}>YOU LENT</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#81C995', marginTop: '2px' }}>₹8,500</div>
                    </div>
                    <div style={{ padding: '12px', borderRadius: '14px', background: 'rgba(234, 67, 53, 0.12)', border: '1px solid rgba(234, 67, 53, 0.25)' }}>
                      <div style={{ fontSize: '0.65rem', color: '#F28B82', fontWeight: 700 }}>YOU BORROWED</div>
                      <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#F28B82', marginTop: '2px' }}>₹1,200</div>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6', margin: '4px 0 2px' }}>
                    Active Due Reminders
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { name: 'Sarah Jenkins', type: 'LENT', due: 'Due Sep 28', amt: '₹3,500', status: 'Pending' },
                      { name: 'David Miller', type: 'BORROWED', due: 'Due Oct 02', amt: '₹1,200', status: 'Pending' },
                      { name: 'Alex Rivera', type: 'LENT', due: 'Due Oct 15', amt: '₹5,000', status: 'Settled' },
                    ].map(rem => (
                      <div key={rem.name} style={{ padding: '10px 12px', borderRadius: '12px', background: '#1E2024', border: '1px solid #333842', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6' }}>{rem.name}</span>
                            <span style={{ fontSize: '0.62rem', padding: '1px 5px', borderRadius: '4px', background: rem.type === 'LENT' ? '#0842A0' : '#4C0519', color: rem.type === 'LENT' ? '#A8C7FA' : '#FB7185', fontWeight: 700 }}>
                              {rem.type}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.68rem', color: '#8E919A' }}>{rem.due}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#E2E2E6' }}>{rem.amt}</div>
                          <span style={{ fontSize: '0.65rem', color: rem.status === 'Settled' ? '#81C995' : '#FDD663' }}>
                            {rem.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 4. SCREEN: SUBSCRIPTIONS LOGGING */}
              {activeScreen === 'subscriptions' && (
                <>
                  <div style={{ padding: '14px', borderRadius: '16px', background: 'linear-gradient(135deg, #1A73E8 0%, #0B57D0 100%)', color: '#fff' }}>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase' }}>
                      Monthly Commitment
                    </div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '4px 0 2px' }}>
                      ₹3,425 <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>/ mo</span>
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.85)' }}>
                      4 Subscriptions Linked • Auto-Posting
                    </div>
                  </div>

                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6', margin: '4px 0 2px' }}>
                    Recurring Subscriptions
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      { title: 'Google One 2TB', renew: 'Oct 01', amt: '₹650/mo', freq: 'Monthly' },
                      { title: 'Netflix 4K', renew: 'Oct 05', amt: '₹649/mo', freq: 'Monthly' },
                      { title: 'GitHub Copilot', renew: 'Dec 15', amt: '₹7,999/yr', freq: 'Yearly' },
                      { title: 'Cult.fit Gym', renew: 'Oct 10', amt: '₹2,499/mo', freq: 'Monthly' },
                    ].map(sub => (
                      <div key={sub.title} style={{ padding: '10px 12px', borderRadius: '12px', background: '#1E2024', border: '1px solid #333842', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#E2E2E6' }}>{sub.title}</div>
                          <div style={{ fontSize: '0.68rem', color: '#8E919A' }}>Renews {sub.renew}</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#A8C7FA' }}>{sub.amt}</div>
                          <span style={{ fontSize: '0.62rem', color: '#81C995', fontWeight: 700 }}>ACTIVE</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* 5. SCREEN: CATEGORIES & BUDGETS */}
              {activeScreen === 'categories' && (
                <>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#E2E2E6', marginBottom: '4px' }}>
                    Monthly Category Limits
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Dining & Food', spent: '₹8,520', max: '₹12,000', pct: '71%', color: '#EA4335' },
                      { name: 'Tech & Gadgets', spent: '₹3,680', max: '₹8,000', pct: '46%', color: '#1A73E8' },
                      { name: 'Shopping & Gear', spent: '₹6,800', max: '₹10,000', pct: '68%', color: '#F9AB00' },
                      { name: 'Travel & Cab', spent: '₹4,200', max: '₹6,000', pct: '70%', color: '#1E8E3E' },
                    ].map(cat => (
                      <div key={cat.name} style={{ padding: '12px', borderRadius: '14px', background: '#1E2024', border: '1px solid #333842' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', marginBottom: '6px' }}>
                          <span style={{ fontWeight: 700, color: '#E2E2E6' }}>{cat.name}</span>
                          <span style={{ color: '#C4C6D0', fontWeight: 600 }}>{cat.spent} / {cat.max}</span>
                        </div>
                        <div style={{ width: '100%', height: '6px', background: '#282A2F', borderRadius: '999px', overflow: 'hidden' }}>
                          <div style={{ width: cat.pct, height: '100%', background: cat.color, borderRadius: '999px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

            </div>

            {/* Bottom App Navigation Bar (Material 3) */}
            <div 
              style={{
                height: '56px',
                background: '#1E2024',
                borderTop: '1px solid #333842',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center'
              }}
            >
              <button onClick={() => setActiveScreen('overview')} style={{ background: 'transparent', border: 'none', color: activeScreen === 'overview' ? '#A8C7FA' : '#8E919A', cursor: 'pointer' }}>
                <Home size={19} />
              </button>
              <button onClick={() => setActiveScreen('trip')} style={{ background: 'transparent', border: 'none', color: activeScreen === 'trip' ? '#A8C7FA' : '#8E919A', cursor: 'pointer' }}>
                <Plane size={19} />
              </button>
              <button onClick={() => setActiveScreen('reminders')} style={{ background: 'transparent', border: 'none', color: activeScreen === 'reminders' ? '#A8C7FA' : '#8E919A', cursor: 'pointer' }}>
                <Bell size={19} />
              </button>
              <button onClick={() => setActiveScreen('subscriptions')} style={{ background: 'transparent', border: 'none', color: activeScreen === 'subscriptions' ? '#A8C7FA' : '#8E919A', cursor: 'pointer' }}>
                <Repeat size={19} />
              </button>
              <button onClick={() => setActiveScreen('categories')} style={{ background: 'transparent', border: 'none', color: activeScreen === 'categories' ? '#A8C7FA' : '#8E919A', cursor: 'pointer' }}>
                <PieChart size={19} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MobileShowcase;
