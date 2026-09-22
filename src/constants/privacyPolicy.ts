export interface PrivacySection {
  id: string;
  number: string;
  title: string;
  iconName: string;
}

export const PRIVACY_POLICY_METADATA = {
  appName: "Xpense",
  lastUpdated: "September 22, 2026",
  effectiveDate: "September 22, 2026",
  version: "2.4",
  supportEmail: "xpensecloud@gmail.com",
  websiteUrl: "https://xpense-cloud.in",
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: "info-collect",
    number: "1",
    title: "Information We Collect",
    iconName: "Database",
  },
  {
    id: "expense-info",
    number: "2",
    title: "Expense & Financial Information",
    iconName: "Wallet",
  },
  {
    id: "device-storage",
    number: "3",
    title: "Information Stored on Your Device",
    iconName: "HardDrive",
  },
  {
    id: "cloud-sync",
    number: "4",
    title: "Cloud Storage & Synchronization",
    iconName: "Cloud",
  },
  {
    id: "use-info",
    number: "5",
    title: "How We Use Your Information",
    iconName: "FileText",
  },
  {
    id: "google-firebase",
    number: "6",
    title: "Google Sign-In & Firebase",
    iconName: "Key",
  },
  {
    id: "advertising",
    number: "7",
    title: "Advertising",
    iconName: "Megaphone",
  },
  {
    id: "subscriptions",
    number: "8",
    title: "Subscriptions & Payments",
    iconName: "CreditCard",
  },
  {
    id: "third-party",
    number: "9",
    title: "Third-Party Services",
    iconName: "Share2",
  },
  {
    id: "ml-features",
    number: "10",
    title: "Text Recognition & ML Features",
    iconName: "Cpu",
  },
  {
    id: "data-sharing",
    number: "11",
    title: "Data Sharing",
    iconName: "Users",
  },
  {
    id: "data-security",
    number: "12",
    title: "Data Security",
    iconName: "ShieldCheck",
  },
  {
    id: "data-retention",
    number: "13",
    title: "Data Retention",
    iconName: "Clock",
  },
  {
    id: "account-deletion",
    number: "14",
    title: "Account & Data Deletion",
    iconName: "Trash2",
  },
  {
    id: "user-rights",
    number: "15",
    title: "Your Choices and Rights",
    iconName: "UserCheck",
  },
  {
    id: "children-privacy",
    number: "16",
    title: "Children's Privacy",
    iconName: "Baby",
  },
  {
    id: "international-transfers",
    number: "17",
    title: "International Data Processing",
    iconName: "Globe",
  },
  {
    id: "cookies",
    number: "18",
    title: "Cookies & Similar Technologies",
    iconName: "Cookie",
  },
  {
    id: "policy-changes",
    number: "19",
    title: "Changes to This Privacy Policy",
    iconName: "RefreshCw",
  },
  { id: "contact-us", number: "20", title: "Contact Us", iconName: "Mail" },
  {
    id: "important-notice",
    number: "21",
    title: "Important Notice",
    iconName: "AlertCircle",
  },
];
