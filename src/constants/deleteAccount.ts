export interface DeletionStep {
  step: number;
  title: string;
  description: string;
  detail: string;
  iconName: string;
  highlight?: string;
}

export interface DataInventoryItem {
  title: string;
  category: string;
  description: string;
  storageLocation: 'Cloud & Local' | 'Cloud Only' | 'Local Only';
  status: 'deleted' | 'retained';
  legalBasis?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const DELETION_METADATA = {
  lastUpdated: "September 24, 2026",
  effectiveDate: "September 24, 2026",
  version: "2.4",
  deletionSpeed: "Instant (Real-Time 0 Seconds)",
  locationInApp: "Settings Page > Delete Account Button",
  erasureScope: "100% Cloud (Firebase) & Local (Hive DB) Storage Wiped",
  complianceStandards: [
    "Google Play User Data & Account Deletion Policy",
    "Apple App Store Guideline 5.1.1(v)",
    "GDPR Article 17 (Right to Immediate Erasure)",
    "CCPA / CPRA Consumer Privacy Rights",
  ],
  supportEmail: "xpensecloud@gmail.com",
  supportApiEndpoint: "https://dev.xpense-cloud.in/api/v1/support",
  responseTime: "< 24 hours via Support API",
};

export const XPENSE_APP_STEPS: DeletionStep[] = [
  {
    step: 1,
    title: "Open Xpense & Go to Settings",
    description: "Launch the Xpense app on your smartphone and tap the 'Settings' tab in the bottom navigation bar.",
    detail: "Located directly in the main bottom navigation bar of the application.",
    iconName: "Settings",
    highlight: "Bottom Bar > Settings",
  },
  {
    step: 2,
    title: "Scroll to Account Actions",
    description: "Scroll down past Currencies, Categories, Budgets, and Data Export to reach the Account Actions section.",
    detail: "This section houses your session status, cloud synchronization status, and danger zone actions.",
    iconName: "Sliders",
    highlight: "Settings > Danger Zone",
  },
  {
    step: 3,
    title: "Tap 'Delete Account'",
    description: "Tap the red 'Delete Account' button (SettingsDeleteAccountButton) at the bottom of the Settings view.",
    detail: "Tapping this opens the secure in-app Delete Account confirmation bottom sheet.",
    iconName: "Trash2",
    highlight: "SettingsDeleteAccountButton",
  },
  {
    step: 4,
    title: "Review the 'Delete Account Sheet'",
    description: "A modal bottom sheet slides up detailing that all transactions, trips, trip expenses, categories, reminders, and subscriptions will be permanently erased.",
    detail: "The sheet outlines the immediate, irreversible consequences of permanent account deletion.",
    iconName: "AlertTriangle",
    highlight: "DeleteAccountSheet",
  },
  {
    step: 5,
    title: "Confirm Permanent Deletion",
    description: "Tap the confirmation button in the bottom sheet to initiate immediate deletion.",
    detail: "If prompted, verify your identity with biometric authentication (Face ID / Fingerprint) or Google Sign-In.",
    iconName: "Lock",
    highlight: "Biometric / Google Verification",
  },
  {
    step: 6,
    title: "Instant Dual Wipe & App Reset",
    description: "The non-dismissible DeleteAccountProgressDialog executes: the backend deletes cloud documents, and HiveService clears all local device storage.",
    detail: "In 0 seconds, cloud database records are deleted, local Hive boxes wiped, tokens revoked, and the app resets to the clean welcome screen.",
    iconName: "Zap",
    highlight: "Cloud & Local Purge (0s)",
  },
];

export const PERMANENTLY_DELETED_DATA: DataInventoryItem[] = [
  {
    title: "Financial Transactions & Incomes",
    category: "Transactions",
    description: "All recorded expenses, incomes, transfers, amounts, dates, timestamps, payment methods, and notes are instantly and irreversibly deleted.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Trips & Vacation Ledgers",
    category: "Trips",
    description: "Every trip record, travel itinerary, trip dates, group members, destination tags, and trip budget goals are wiped immediately.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Trip Expenses & Split Costs",
    category: "Trip Expenses",
    description: "All individual expenses filed under any trip, itemized travel receipts, multi-currency conversions, and split expense records are permanently purged.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Custom Categories & Subcategories",
    category: "Categories",
    description: "All customized expense categories, subcategories, custom icons, color palettes, and category spending allocations are removed instantly.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Reminders & Scheduled Alerts",
    category: "Reminders",
    description: "Upcoming bill reminders, lend/borrow repayment due date alerts, notification triggers, and calendar schedules are completely erased.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Subscriptions & Recurring Trackers",
    category: "Subscriptions",
    description: "All in-app subscription logs, recurring billing cycles, payment renewal alerts, and plan cost tracking entries are wiped immediately.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Monthly Budgets & Financial Targets",
    category: "Budgets",
    description: "Monthly budget caps, category limits, savings targets, and warning thresholds configured in the app are permanently cleared.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Lend & Borrow Money Ledgers",
    category: "Debts & Loans",
    description: "Lent and borrowed money records, contact references, borrower names, balances, and partial repayment histories are wiped.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Receipt Attachments & OCR Cache",
    category: "Receipts & Media",
    description: "Receipt photos, ML Kit optical text recognition caches, invoice captures, and temporary image buffers are erased.",
    storageLocation: "Cloud & Local",
    status: "deleted",
  },
  {
    title: "Cloud Database (Firebase Firestore & Auth)",
    category: "Cloud Storage",
    description: "Your entire user document tree in Firebase Firestore, cloud sync nodes, Firebase Authentication UID, and OAuth refresh tokens are purged via DELETE /user/:uid.",
    storageLocation: "Cloud Only",
    status: "deleted",
  },
  {
    title: "Local On-Device Storage (Hive DB & Sandbox)",
    category: "Local Storage",
    description: "All local encrypted Hive database boxes, cached JSON states, app preferences, and device sandbox files on your phone are instantly wiped via HiveService.clearAllStorage().",
    storageLocation: "Local Only",
    status: "deleted",
  },
];

export const LEGALLY_RETAINED_DATA: DataInventoryItem[] = [
  {
    title: "App Store Subscription & Purchase Invoices",
    category: "Statutory Tax & Accounting",
    description: "In-app purchase transaction IDs and invoices processed by Google Play or Apple App Store are retained by Google/Apple pursuant to statutory tax and financial reporting laws.",
    storageLocation: "Cloud Only",
    status: "retained",
    legalBasis: "Statutory tax compliance (Google/Apple store platform requirements)",
  },
  {
    title: "Anonymized Diagnostic Metrics",
    category: "App Quality",
    description: "Fully anonymized, aggregated crash rates and performance metrics stripped of any user ID or personal identifiers, used exclusively for app stability.",
    storageLocation: "Cloud Only",
    status: "retained",
    legalBasis: "Legitimate interest in maintaining software stability",
  },
  {
    title: "Temporary Anti-Fraud & Security Audit Logs",
    category: "Security Defense",
    description: "Connection traces for active dispute investigations or chargeback defense, retained for a strictly limited maximum of 30 days before automated rotation.",
    storageLocation: "Cloud Only",
    status: "retained",
    legalBasis: "Fraud prevention and dispute defense",
  },
];

export const DELETION_FAQS: FAQItem[] = [
  {
    question: "Where is the Delete Account button located in the Xpense app?",
    answer: "Open the Xpense app, tap the 'Settings' tab in the bottom navigation bar, scroll down past the category and budget settings to the bottom of the page, and tap the red 'Delete Account' button.",
    category: "Settings Navigation",
  },
  {
    question: "Does account deletion happen instantly?",
    answer: "Yes, account deletion executes instantly in real-time. Once confirmed in the DeleteAccountSheet bottom sheet, DeleteAccountProgressDialog displays while cloud records are deleted from Firebase Firestore and all local Hive storage boxes are wiped from your phone.",
    category: "Instant Deletion",
  },
  {
    question: "Are both cloud and local storage wiped completely?",
    answer: "Yes, 100% of both storages are wiped simultaneously. Your local on-device Hive database boxes and app cache on your smartphone are deleted on the spot via HiveService.clearAllStorage(). Simultaneously, your entire document tree in Google Firebase Firestore is purged via the backend DELETE /user/:uid endpoint.",
    category: "Dual Storage Wipe",
  },
  {
    question: "What happens to trips and trip expenses?",
    answer: "All trips, travel itineraries, trip member lists, and all individual expenses logged under any trip (including multi-currency calculations and receipts) are permanently destroyed and cannot be restored.",
    category: "Trips",
  },
  {
    question: "What happens to custom categories, reminders, and subscriptions?",
    answer: "All user-defined categories and subcategories, scheduled bill reminders, lent/borrowed debt alerts, and tracked recurring subscription entries are wiped immediately from both cloud and device.",
    category: "Categories & Reminders",
  },
  {
    question: "Can an instant deletion be undone or recovered?",
    answer: "No. Because deletion is instantaneous and irreversible, there is no delayed holding queue or grace window. Once confirmed, all financial records, trips, reminders, and subscriptions are cryptographically destroyed immediately. Please export your data prior to confirming deletion.",
    category: "Irreversibility",
  },
  {
    question: "Does deleting my account cancel my Google Play or Apple App Store subscription?",
    answer: "No. App store subscriptions are governed directly by Google Play or Apple via your store account for security and fraud protection. Deleting your Xpense account does NOT automatically cancel active recurring billing in Google Play or Apple ID. You must cancel recurring subscriptions in Google Play Store (Profile > Payments & subscriptions) or iOS Settings (Apple ID > Subscriptions).",
    category: "Store Subscriptions",
  },
  {
    question: "How do I export my data before deleting?",
    answer: "Open Xpense Cloud > Settings > Data Management > Export Data > Select CSV, Excel (.xlsx), or PDF format. Save the exported spreadsheet to your device or Google Drive before tapping Delete Account in Settings.",
    category: "Data Export",
  },
  {
    question: "How do I contact support if I have questions or need assistance?",
    answer: "Use the interactive Support & Privacy Assistance form on this page to submit a direct POST request to our support system, or email xpensecloud@gmail.com directly.",
    category: "Support",
  },
];
