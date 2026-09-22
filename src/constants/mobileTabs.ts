export interface MobileTabConfig {
  id: string;
  label: string;
  badge?: string;
  description: string;
}

export const MOBILE_SHOWCASE_TABS: MobileTabConfig[] = [
  {
    id: 'overview',
    label: 'Dashboard',
    badge: 'Live',
    description: 'Material 3 surface hierarchy, balance card, and recent transaction feed.',
  },
  {
    id: 'trip',
    label: 'Trip Expense',
    badge: 'Split',
    description: 'Multi-member travel expense manager with automatic balance settlements.',
  },
  {
    id: 'reminders',
    label: 'Lend Reminder',
    badge: 'Alerts',
    description: 'Tracks money lent to or borrowed from contacts with scheduled push notifications.',
  },
  {
    id: 'subscriptions',
    label: 'Subscriptions',
    badge: 'Auto-Post',
    description: 'Recurring expense engine with auto-rollover billing cycles and renewal alerts.',
  },
  {
    id: 'categories',
    label: 'Categories',
    badge: 'Budgets',
    description: 'Dynamic budget allocation across 8 preset categories with visual progress meters.',
  },
];
