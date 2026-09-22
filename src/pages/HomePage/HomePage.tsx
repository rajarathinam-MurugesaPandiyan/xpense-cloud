import React from 'react';
import {
  Hero,
  Features,
  InteractiveDemo,
  MobileShowcase,
  DownloadBadges,
  TestimonialsFAQ,
} from '../../components';

export interface HomePageProps {
  onOpenDownload?: () => void;
  onOpenDemo?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenDownload, onOpenDemo }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero onOpenDownload={onOpenDownload} onOpenDemo={onOpenDemo} />

      {/* Features & Architectural Factors */}
      <Features />

      {/* Live Interactive Expense Demo */}
      <InteractiveDemo onOpenDemo={onOpenDemo} />

      {/* Mobile App Showcase */}
      <MobileShowcase />

      {/* App Store & Play Store Download Showcase with QR Code */}
      <DownloadBadges />

      {/* Testimonials & FAQ Accordion */}
      <TestimonialsFAQ />
    </>
  );
};

export default HomePage;
