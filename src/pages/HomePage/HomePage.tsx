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
  onOpenFeedback?: () => void;
  onOpenAppleInProgress?: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenDownload,
  onOpenDemo,
  onOpenFeedback,
  onOpenAppleInProgress,
}) => {
  const triggerFeedback = onOpenFeedback || onOpenDemo;

  return (
    <>
      {/* Hero Section */}
      <Hero
        onOpenDownload={onOpenDownload}
        onOpenDemo={triggerFeedback}
        onOpenFeedback={triggerFeedback}
      />

      {/* Features & Architectural Factors */}
      <Features />

      {/* Live Interactive Expense Demo */}
      <InteractiveDemo
        onOpenDemo={triggerFeedback}
        onOpenFeedback={triggerFeedback}
      />

      {/* Mobile App Showcase */}
      <MobileShowcase />

      {/* App Store & Play Store Download Showcase with QR Code */}
      <DownloadBadges onOpenAppleInProgress={onOpenAppleInProgress} />

      {/* Testimonials & FAQ Accordion */}
      <TestimonialsFAQ />
    </>
  );
};

export default HomePage;
