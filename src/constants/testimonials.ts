export interface TestimonialItem {
  name: string;
  role: string;
  comment: string;
  stars: number;
  source: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Product Manager & Traveler',
    comment: 'The real-time sync between my Android phone and Mac web dashboard is seamless. Managing expenses and group trip splits saved me hours of manually calculating receipts.',
    stars: 5,
    source: 'Google Play Verified'
  },
  {
    name: 'David Chen',
    role: 'Freelance Software Developer',
    comment: 'Finally an expense app that matches my Flutter mobile app dark theme! The Poppins font, Lottie animations, and instant CSV exports for tax season are top notch.',
    stars: 5,
    source: 'App Store Verified'
  },
  {
    name: 'Elena Rostova',
    role: 'Small Business Founder',
    comment: 'Budget cap alerts notify me before I overspend on subscriptions. The Firebase cloud engine ensures zero data loss even when switching smartphones.',
    stars: 5,
    source: 'Beta Tester'
  }
];

export const FAQS: FaqItem[] = [
  {
    q: 'Is Xpense Cloud free to download on Android & iOS?',
    a: 'Yes! Xpense Cloud is free to download from both Google Play Store and Apple App Store. The free tier includes full expense tracking, category budgets, and cloud sync.'
  },
  {
    q: 'How does real-time cloud sync work between mobile and web?',
    a: 'Xpense Cloud leverages Firebase Firestore realtime databases. Whenever you log an expense on your Android or iOS app, it instantly reflects on your web dashboard within seconds.'
  },
  {
    q: 'Is my financial data encrypted and secure?',
    a: 'Absolutely. All data transmission uses TLS 1.3 encryption and AES-256 storage. We support Google OAuth 2.0 authentication and biometric device security (FaceID/Fingerprint).'
  },
  {
    q: 'Can I export my expenses for accounting or taxes?',
    a: 'Yes, you can export your complete transaction history to CSV, Excel, or formatted PDF reports directly from the web portal or mobile app.'
  },
  {
    q: 'Which currency does Xpense Cloud use?',
    a: 'Xpense Cloud uses Indian Rupee (₹) with real-time decimal precision, intuitive category budget limits, and cloud-synced reports.'
  }
];
