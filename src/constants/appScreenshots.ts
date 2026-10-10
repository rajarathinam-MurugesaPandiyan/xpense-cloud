import img7181 from '../assets/IMG_7181.PNG';
import img7182 from '../assets/IMG_7182.PNG';
import img7183 from '../assets/IMG_7183.PNG';
import img7184 from '../assets/IMG_7184.PNG';
import img7185 from '../assets/IMG_7185.PNG';
import img7186 from '../assets/IMG_7186.PNG';
import img7187 from '../assets/IMG_7187.PNG';
import img7188 from '../assets/IMG_7188.PNG';
import img7189 from '../assets/IMG_7189.PNG';
import img7190 from '../assets/IMG_7190.PNG';
import img7191 from '../assets/IMG_7191.PNG';
import img7192 from '../assets/IMG_7192.PNG';
import img7193 from '../assets/IMG_7193.PNG';
import img7194 from '../assets/IMG_7194.PNG';
import img7195 from '../assets/IMG_7195.PNG';

export type ScreenshotCategory =
  | 'all'
  | 'core'
  | 'trips'
  | 'reminders'
  | 'subscriptions'
  | 'analytics'
  | 'budgets'
  | 'settings';

export interface AppScreenshot {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: ScreenshotCategory;
  categoryLabel: string;
  badge: string;
  tagline: string;
  highlights: string[];
  description: string;
  deviceType?: 'phone';
}

export const APP_SCREENSHOT_CATEGORIES: { id: ScreenshotCategory; label: string; count: number }[] = [
  { id: 'all', label: 'All Screens', count: 15 },
  { id: 'core', label: 'Core & OCR', count: 3 },
  { id: 'trips', label: 'Trip Split', count: 3 },
  { id: 'reminders', label: 'Lend & Borrow', count: 2 },
  { id: 'subscriptions', label: 'Subscriptions', count: 1 },
  { id: 'analytics', label: 'Analytics & Trends', count: 2 },
  { id: 'budgets', label: 'Categories & Budgets', count: 2 },
  { id: 'settings', label: 'Profile & Security', count: 2 },
];

export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    id: 'dashboard',
    image: img7181,
    title: 'Financial Cockpit & Net Balance',
    subtitle: 'Overview & Balance',
    category: 'core',
    categoryLabel: 'Core & OCR',
    badge: 'Live Sync',
    tagline: 'Instant net worth calculation and quick-action finance hub',
    highlights: [
      '₹82.11k Net Balance with Month Selector',
      'Real-Time Income vs Expense Overview',
      'One-Tap Quick Actions: Add, Trip, Lend, Repeat',
      'Recent Transaction Stream with Category Badges',
    ],
    description:
      'The central cockpit of Xpense. Displays your total net balance with sub-second synchronization, dynamic month-by-month filtering, and Google 4-Color quick actions for effortless navigation.',
  },
  {
    id: 'smart-ocr',
    image: img7184,
    title: 'Smart Bill OCR & Instant Capture',
    subtitle: 'AI Receipt Scanner',
    category: 'core',
    categoryLabel: 'Core & OCR',
    badge: 'AI Bill OCR',
    tagline: 'Zero manual typing — snap a physical receipt and auto-fill details',
    highlights: [
      'Scan or Upload Bill with Built-in Vision OCR',
      'Auto-Fills Amount, Merchant, Date & Category',
      'Account & Payment Method Selector',
      'Custom Notes and Visual Category Chips',
    ],
    description:
      'Never type transaction details manually again. Point your camera at any receipt or invoice — our on-device machine learning extracts the total amount, vendor, date, and category in milliseconds.',
  },
  {
    id: 'activity',
    image: img7185,
    title: 'Activity Ledger & Transaction Audit',
    subtitle: 'Chronological Audit',
    category: 'core',
    categoryLabel: 'Core & OCR',
    badge: 'Audit Trail',
    tagline: 'Filterable chronological stream of every rupee earned and spent',
    highlights: [
      'Toggle between Expenses and Income streams',
      'Detailed category tags with custom color accents',
      'Searchable history with instantaneous local lookup',
      'Clean Material 3 typography and visual clarity',
    ],
    description:
      'Every transaction is indexed with precision. Switch between income and expense flows, search past logs, and inspect detailed merchant memos with running account balances.',
  },
  {
    id: 'trips-overview',
    image: img7191,
    title: 'Active Trips & Shared Travel Hub',
    subtitle: 'Group Travel',
    category: 'trips',
    categoryLabel: 'Trip Split',
    badge: 'Multi-Member',
    tagline: 'Track vacations, road trips, and shared group getaways',
    highlights: [
      'Active Trips Spending Tracker (₹800.00)',
      'In-Progress Trip Status & Destination Tagging',
      'Multi-currency support for international travel',
      'Instant New Trip Creation',
    ],
    description:
      'Planning a getaway with friends? The Trips Hub organizes your group travels, tracks ongoing spending totals, and prepares balances for seamless settlement.',
  },
  {
    id: 'trip-details',
    image: img7192,
    title: 'Goa Beach Holiday Trip Ledger',
    subtitle: 'Trip Settlement',
    category: 'trips',
    categoryLabel: 'Trip Split',
    badge: 'Debt Simplification',
    tagline: 'Automated math settles who owes what with minimum transactions',
    highlights: [
      'Dedicated Trip Destination: Goa Beach Holiday',
      'Total Amount Spent with Shared Member Count',
      'Per-person contribution breakdowns',
      'Automated settlement graph minimizes transfers',
    ],
    description:
      'Ditch awkward spreadsheets. Xpense calculates exact per-person shares and computes the minimum number of transactions needed to settle all trip debts fairly.',
  },
  {
    id: 'add-trip-expense',
    image: img7193,
    title: 'Add Trip Expense & Flexible Split',
    subtitle: 'Split Allocation',
    category: 'trips',
    categoryLabel: 'Trip Split',
    badge: 'Fair Share',
    tagline: 'Split equally, by percentage, or custom amounts in seconds',
    highlights: [
      'Expense title & amount input with currency toggle',
      'Select which trip member paid upfront',
      'Customize who participated in the expense',
      'Attach bill receipts to keep group records transparent',
    ],
    description:
      'Log meals, flights, or villa bookings on the go. Choose who paid and whether the expense is split equally or customized among select members.',
  },
  {
    id: 'reminders-dashboard',
    image: img7194,
    title: 'Lend & Borrow Reminders Dashboard',
    subtitle: 'Debt Accountability',
    category: 'reminders',
    categoryLabel: 'Lend & Borrow',
    badge: 'Never Forget Dues',
    tagline: 'Total visibility on who owes you and what you owe others',
    highlights: [
      'Net Balance calculation across all peer debts',
      'Total Lent vs. Total Borrowed counters',
      'Pending vs. Settled status badges',
      'Scheduled push notifications on due dates',
    ],
    description:
      'Never feel awkward asking for your money back. Track peer loans, track borrowed amounts, and receive proactive reminder alerts before deadlines.',
  },
  {
    id: 'add-lend-reminder',
    image: img7195,
    title: 'Create Peer Lend / Borrow Reminder',
    subtitle: 'Due Date Alert',
    category: 'reminders',
    categoryLabel: 'Lend & Borrow',
    badge: 'Push Alerts',
    tagline: 'Set borrower name, custom due date, and reminder schedule',
    highlights: [
      'Switch between "Lent Money" and "Borrowed"',
      'Enter exact amount and contact recipient',
      'Calendar date picker for repayment deadline',
      'Automatic notification reminders sent on schedule',
    ],
    description:
      'Create peer debt reminders with a tap. Specify whether you lent or borrowed, attach notes, set due dates, and schedule push alerts.',
  },
  {
    id: 'subscriptions-vault',
    image: img7190,
    title: 'Subscriptions & Recurring Expense Vault',
    subtitle: 'Auto-Post Engine',
    category: 'subscriptions',
    categoryLabel: 'Subscriptions',
    badge: 'Auto-Posting',
    tagline: 'Control recurring SaaS, gym, media, and cloud commitments',
    highlights: [
      'Monthly Commitment calculation (₹499.00/mo)',
      'Active Subscriptions list with renewal dates',
      'Auto-posts transactions on scheduled billing day',
      'Prevents forgotten subscription charges',
    ],
    description:
      'Recurring subscriptions drain bank accounts silently. Xpense normalizes all weekly, monthly, and yearly subscriptions into a single monthly commitment and posts them automatically.',
  },
  {
    id: 'analytics-trend',
    image: img7187,
    title: 'Cashflow Trends & Predictive Curves',
    subtitle: 'Financial Intelligence',
    category: 'analytics',
    categoryLabel: 'Analytics & Trends',
    badge: 'Trend Intelligence',
    tagline: 'High-resolution cashflow curves illustrating spending velocity',
    highlights: [
      'Dual Income vs. Expense Trend Trajectory',
      'Peak Spending & Savings Margin Indicators',
      'Category Distribution breakdown',
      'Month-over-month burn rate comparisons',
    ],
    description:
      'Understand where your money flows with high-fidelity cashflow curves. Visualizes income versus expenditure trajectories across customizable time windows.',
  },
  {
    id: 'monthly-overview',
    image: img7186,
    title: 'Monthly Expense Breakdown & Net Savings',
    subtitle: 'Monthly Analytics',
    category: 'analytics',
    categoryLabel: 'Analytics & Trends',
    badge: 'Deep Analytics',
    tagline: 'Comprehensive month-at-a-glance financial summary',
    highlights: [
      'Net Savings and Surplus calculations',
      'Category-by-category expense distribution',
      'Monthly timeline comparisons',
      'Actionable financial health metrics',
    ],
    description:
      'Inspect your monthly savings rate at a glance. Visualizes total monthly expenditures, net surplus, and category distribution to optimize personal savings.',
  },
  {
    id: 'categories-explorer',
    image: img7182,
    title: 'Category Budgets & Search',
    subtitle: 'Preset & Custom',
    category: 'budgets',
    categoryLabel: 'Categories & Budgets',
    badge: 'Budget Limits',
    tagline: 'Find, create, and organize custom spending categories',
    highlights: [
      'Real-time search across all spending categories',
      'Suggested category chips for instant addition',
      'Color-coded icons for visual distinction',
      'Set spending caps per category',
    ],
    description:
      'Structure your budget your way. Search existing categories or add suggested presets like Food & Dining, Shopping, Fuel, and Entertainment with a tap.',
  },
  {
    id: 'add-category',
    image: img7183,
    title: 'Custom Category Creator & Swatches',
    subtitle: 'Tailored Budgets',
    category: 'budgets',
    categoryLabel: 'Categories & Budgets',
    badge: 'Custom Icons',
    tagline: 'Personalize with custom icons, color swatches, and thresholds',
    highlights: [
      'Category title & description input',
      'Rich emoji and icon picker',
      'Vibrant Material 3 color palette swatches',
      'Suggested category templates',
    ],
    description:
      'Build categories that match your lifestyle. Pick custom colors, select intuitive icons, and set alert thresholds when nearing budget caps.',
  },
  {
    id: 'profile-insights',
    image: img7188,
    title: 'Profile & Monthly Budget Insights',
    subtitle: 'User Control',
    category: 'settings',
    categoryLabel: 'Profile & Security',
    badge: 'Cloud Sync',
    tagline: 'Cloud synchronization, security settings, and financial summary',
    highlights: [
      'User profile info (xpensecloud@gmail.com)',
      'Monthly Budget Insights analysis',
      'Currency & localization configuration',
      'One-tap cloud backup and biometric lock',
    ],
    description:
      'Your personal financial command center. Manage your cloud account, inspect high-level budget metrics, adjust currency settings, and enable biometric FaceID/TouchID security.',
  },
  {
    id: 'support-legal',
    image: img7189,
    title: 'Support, Privacy & Legal Center',
    subtitle: 'Trust & Privacy',
    category: 'settings',
    categoryLabel: 'Profile & Security',
    badge: 'GDPR / Privacy',
    tagline: 'Transparent data policies and instant account deletion',
    highlights: [
      'Direct customer support channel',
      'Accessible Terms and Conditions & Privacy Policy',
      'Instant Self-Serve Account Deletion',
      'Strict zero third-party data selling policy',
    ],
    description:
      'Complete transparency. Access privacy policy documentation, contact human support, and manage your rights including immediate and permanent account deletion.',
  },
];
