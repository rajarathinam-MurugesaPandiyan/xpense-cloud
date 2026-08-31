import React, { useState, useEffect } from 'react';
import LottieLogo from './LottieLogo';
import { LogIn, Smartphone, Menu, X } from 'lucide-react';

export const Navbar = ({ onOpenLogin, onOpenDownload }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled 
          ? '#282C33' 
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        transition: 'all 0.2s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none' }}>
          <LottieLogo size={38} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <a href="#features" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            Features
          </a>
          <a href="#interactive-demo" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            Live Demo
          </a>
          <a href="#mobile-showcase" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            Mobile App
          </a>
          <a href="#download" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            App Store & Play Store
          </a>
          <a href="#faq" style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = '#fff'} onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}>
            FAQ
          </a>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 18px',
              borderRadius: '10px',
              background: '#1D1D21',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              fontSize: '0.9rem',
              fontWeight: 600,
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            }}
          >
            <LogIn size={16} />
            <span>Login</span>
          </button>

          {/* Get The App Button (Pure White matching FAB ThemeData) */}
          <button
            onClick={onOpenDownload}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 20px',
              borderRadius: '10px',
              background: '#ffffff',
              color: '#1D1D21',
              fontSize: '0.9rem',
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
            <Smartphone size={17} />
            <span>Get the App</span>
          </button>

          {/* Mobile Menu Trigger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '8px',
              color: '#fff',
              background: '#1D1D21',
              borderRadius: '8px'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#1D1D21',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>Features</a>
          <a href="#interactive-demo" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>Live Demo</a>
          <a href="#mobile-showcase" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>Mobile App</a>
          <a href="#download" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>App Store & Play Store</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 600, color: '#fff' }}>FAQ</a>
          <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '8px 0' }} />
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenLogin(); }}
            style={{ padding: '12px', borderRadius: '10px', background: '#282C33', color: '#fff', fontWeight: 600 }}
          >
            Login to Web App
          </button>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenDownload(); }}
            style={{ padding: '12px', borderRadius: '10px', background: '#ffffff', color: '#1D1D21', fontWeight: 700 }}
          >
            Get App on iOS & Android
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
