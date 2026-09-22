export interface TermsSection {
  id: string;
  number: string;
  title: string;
  iconName: string;
}

export const TERMS_METADATA = {
  appName: "Xpense",
  lastUpdated: "September 22, 2026",
  effectiveDate: "September 22, 2026",
  contactEmail: "privacy@xpense-cloud.in",
  websiteUrl: "https://xpense-cloud.in",
  privacyUrl: "https://xpense-cloud.in/privacy",
  termsUrl: "https://xpense-cloud.in/terms",
};

export const TERMS_SECTIONS: TermsSection[] = [
  { id: "about-xpense", number: "1", title: "About Xpense", iconName: "Smartphone" },
  { id: "eligibility", number: "2", title: "Eligibility", iconName: "UserCheck" },
  { id: "user-accounts", number: "3", title: "User Accounts", iconName: "Key" },
  { id: "your-data", number: "4", title: "Your Data", iconName: "Database" },
  { id: "storage-sync", number: "5", title: "Local Storage & Cloud Sync", iconName: "Cloud" },
  { id: "financial-disclaimer", number: "6", title: "Financial Disclaimer", iconName: "AlertTriangle" },
  { id: "accuracy-info", number: "7", title: "Accuracy of Information", iconName: "CheckCircle2" },
  { id: "premium-subscriptions", number: "8", title: "Premium Features & Subscriptions", iconName: "CreditCard" },
  { id: "free-ads", number: "9", title: "Free Features & Advertisements", iconName: "Megaphone" },
  { id: "third-party-services", number: "10", title: "Third-Party Services", iconName: "Share2" },
  { id: "acceptable-use", number: "11", title: "Acceptable Use", iconName: "ShieldAlert" },
  { id: "intellectual-property", number: "12", title: "Intellectual Property", iconName: "Award" },
  { id: "user-content", number: "13", title: "User-Provided Content", iconName: "FileEdit" },
  { id: "service-availability", number: "14", title: "Service Availability", iconName: "Activity" },
  { id: "updates", number: "15", title: "Updates", iconName: "RefreshCw" },
  { id: "suspension-termination", number: "16", title: "Account Suspension & Termination", iconName: "UserX" },
  { id: "account-deletion-effect", number: "17", title: "Effect of Account Deletion", iconName: "Trash2" },
  { id: "privacy", number: "18", title: "Privacy", iconName: "ShieldCheck" },
  { id: "warranty-disclaimer", number: "19", title: "Disclaimer of Warranties", iconName: "AlertOctagon" },
  { id: "limitation-liability", number: "20", title: "Limitation of Liability", iconName: "Scale" },
  { id: "indemnification", number: "21", title: "Indemnification", iconName: "FileCheck" },
  { id: "terms-changes", number: "22", title: "Changes to These Terms", iconName: "History" },
  { id: "governing-law", number: "23", title: "Governing Law", iconName: "Landmark" },
  { id: "severability", number: "24", title: "Severability", iconName: "Split" },
  { id: "entire-agreement", number: "25", title: "Entire Agreement", iconName: "BookOpen" },
  { id: "contact-us", number: "26", title: "Contact Us", iconName: "Mail" },
];
