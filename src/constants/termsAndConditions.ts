export interface TermsSection {
  id: string;
  number: string;
  title: string;
  iconName: string;
}

export const TERMS_METADATA = {
  appName: "Xpense",
  lastUpdated: "October 2026",
  effectiveDate: "October 2026",
  contactEmail: "xpensecloud@gmail.com",
  websiteUrl: "https://xpense-cloud.in",
  privacyUrl: "https://xpense-cloud.in/privacy",
  termsUrl: "https://xpense-cloud.in/terms",
  architecture: "On-Device AES-256 Hive + Cloud Sync",
  complianceNotice: "Official Terms & Conditions • Applicable to all users",
};

export const TERMS_SECTIONS: TermsSection[] = [
  { id: "about-xpense", number: "1", title: "About Xpense", iconName: "Smartphone" },
  { id: "eligibility", number: "2", title: "Eligibility", iconName: "UserCheck" },
  { id: "user-accounts", number: "3", title: "User Accounts & Registration", iconName: "Lock" },
  { id: "your-data", number: "4", title: "Your Data & Ownership", iconName: "Database" },
  { id: "storage-sync", number: "5", title: "Local Storage & Cloud Sync", iconName: "Cloud" },
  { id: "financial-disclaimer", number: "6", title: "Financial Disclaimer (No Advice)", iconName: "AlertTriangle" },
  { id: "accuracy-info", number: "7", title: "Accuracy of Information", iconName: "CheckCircle2" },
  { id: "premium-subscriptions", number: "8", title: "Premium Features & Subscriptions", iconName: "CreditCard" },
  { id: "free-ads", number: "9", title: "Free Tier & Advertisements", iconName: "Megaphone" },
  { id: "third-party-services", number: "10", title: "Third-Party Services", iconName: "Share2" },
  { id: "acceptable-use", number: "11", title: "Acceptable Use & Prohibited Conduct", iconName: "ShieldAlert" },
  { id: "trip-rules", number: "12", title: "Group Trips & Member Transaction Rules", iconName: "Users2" },
  { id: "subscriptions-reminders", number: "13", title: "Repeat Subscriptions & Scheduled Reminders", iconName: "Bell" },
  { id: "intellectual-property", number: "14", title: "Intellectual Property", iconName: "Award" },
  { id: "user-content", number: "15", title: "User-Provided Content", iconName: "FileText" },
  { id: "service-availability", number: "16", title: "Service Availability", iconName: "Activity" },
  { id: "updates", number: "17", title: "Application Updates", iconName: "RefreshCw" },
  { id: "suspension-termination", number: "18", title: "Account Suspension & Termination", iconName: "UserX" },
  { id: "account-deletion-effect", number: "19", title: "Account Deletion & Data Removal", iconName: "Trash2" },
  { id: "privacy", number: "20", title: "Privacy Policy Incorporation", iconName: "ShieldCheck" },
  { id: "warranty-disclaimer", number: "21", title: "Disclaimer of Warranties", iconName: "AlertOctagon" },
  { id: "limitation-liability", number: "22", title: "Limitation of Liability", iconName: "Scale" },
  { id: "indemnification", number: "23", title: "Indemnification", iconName: "FileCheck" },
  { id: "terms-changes", number: "24", title: "Changes to These Terms", iconName: "Clock" },
  { id: "governing-law", number: "25", title: "Governing Law & Jurisdiction", iconName: "Landmark" },
  { id: "severability", number: "26", title: "Severability", iconName: "Scissors" },
  { id: "entire-agreement", number: "27", title: "Entire Agreement", iconName: "BookOpen" },
  { id: "contact-us", number: "28", title: "Contact Information", iconName: "Mail" },
];
