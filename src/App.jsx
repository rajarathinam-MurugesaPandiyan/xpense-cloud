import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InteractiveDemo from './components/InteractiveDemo';
import Features from './components/Features';
import MobileShowcase from './components/MobileShowcase';
import DownloadBadges from './components/DownloadBadges';
import TestimonialsFAQ from './components/TestimonialsFAQ';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const scrollToDownload = () => {
    const el = document.getElementById('download');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="xpense-app-wrapper" style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'var(--text-main)' }}>
      {/* Sticky Navbar */}
      <Navbar 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenDownload={scrollToDownload} 
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with App Store & Play Store CTAs + 3D Card */}
        <Hero 
          onOpenLogin={() => setIsLoginOpen(true)} 
          onOpenDownload={scrollToDownload} 
        />

        {/* Live Interactive Expense Demo */}
        <InteractiveDemo />

        {/* Features & Factors Grid */}
        <Features />

        {/* Mobile App Showcase (Flutter iOS & Android previews) */}
        <MobileShowcase />

        {/* App Store & Play Store Download Showcase with QR code */}
        <DownloadBadges />

        {/* Testimonials & FAQ Accordion */}
        <TestimonialsFAQ />
      </main>

      {/* Footer */}
      <Footer 
        onOpenLogin={() => setIsLoginOpen(true)} 
        onOpenDownload={scrollToDownload} 
      />

      {/* Login & Auth Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
    </div>
  );
}

export default App;
