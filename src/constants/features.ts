export interface FeatureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  color: string;
  bgLight: string;
  borderLight: string;
  iconType: 'plane' | 'bell' | 'repeat' | 'pieChart' | 'refresh' | 'shield';
  widgetType: 'trip' | 'reminder' | 'subscription' | 'category' | 'sync' | 'biometric';
}

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    id: 'feature-trip',
    badge: '✈️ Group Travel Split',
    title: 'Trip Expense & Group Splitter',
    description: "Organize group getaways, assign who paid for hotels or dining, and automatically calculate each person's exact fair share and debt simplification.",
    color: '#F9AB00',
    bgLight: 'rgba(249, 171, 0, 0.12)',
    borderLight: 'rgba(249, 171, 0, 0.25)',
    iconType: 'plane',
    widgetType: 'trip',
  },
  {
    id: 'feature-reminders',
    badge: '🤝 Debt Accountability',
    title: 'Lend & Borrow Reminders',
    description: 'Keep exact tabs on money you lent to friends or borrowed for shared bills. Set due dates, track contact info, and settle debts with one tap.',
    color: '#1E8E3E',
    bgLight: 'rgba(30, 142, 62, 0.12)',
    borderLight: 'rgba(30, 142, 62, 0.25)',
    iconType: 'bell',
    widgetType: 'reminder',
  },
  {
    id: 'feature-subscriptions',
    badge: '🔄 Auto-Posting',
    title: 'Subscriptions & Repeat Logs',
    description: 'Log monthly, quarterly, or yearly recurring software, gym, and media services. Automatically calculate normalized monthly commitment and auto-post on billing dates.',
    color: '#1A73E8',
    bgLight: 'rgba(26, 115, 232, 0.12)',
    borderLight: 'rgba(26, 115, 232, 0.25)',
    iconType: 'repeat',
    widgetType: 'subscription',
  },
  {
    id: 'feature-categories',
    badge: '📊 Real-Time Limits',
    title: 'Category Expense Tracking',
    description: 'Assign spending limits across Dining, Tech, Shopping, Travel, and Health. Visual progress meters warn you before budget thresholds are exceeded.',
    color: '#EA4335',
    bgLight: 'rgba(234, 67, 53, 0.12)',
    borderLight: 'rgba(234, 67, 53, 0.25)',
    iconType: 'pieChart',
    widgetType: 'category',
  },
  {
    id: 'feature-sync',
    badge: '⚡ Sub-Second Sync',
    title: 'Real-Time Cloud Synchronization',
    description: 'Log transactions on Android or iOS via Flutter, and see them appear instantly on your web dashboard with zero conflict.',
    color: '#1A73E8',
    bgLight: 'rgba(26, 115, 232, 0.12)',
    borderLight: 'rgba(26, 115, 232, 0.25)',
    iconType: 'refresh',
    widgetType: 'sync',
  },
  {
    id: 'feature-security',
    badge: '🔒 Offline-First Hive',
    title: 'Biometrics & Offline Encryption',
    description: 'Your financial logs are encrypted locally using Hive DB storage. FaceID, Fingerprint, and passcode locks safeguard your balance anywhere.',
    color: '#1E8E3E',
    bgLight: 'rgba(30, 142, 62, 0.12)',
    borderLight: 'rgba(30, 142, 62, 0.25)',
    iconType: 'shield',
    widgetType: 'biometric',
  },
];
