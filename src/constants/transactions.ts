export interface SampleTransaction {
  id: string;
  title: string;
  subtitle?: string;
  category?: string;
  date: string;
  amount: number;
  type: 'income' | 'expense';
  status: 'cleared' | 'pending';
  iconType: string;
  account?: string;
}

export const SAMPLE_TRANSACTIONS: SampleTransaction[] = [
  {
    id: 'tx-1',
    title: 'Razorpay Payout - SaaS Revenue',
    subtitle: 'HDFC Current A/c •••• 9104',
    category: 'Client Revenue',
    date: 'Today, 2:15 PM',
    amount: 42500.0,
    type: 'income',
    status: 'cleared',
    iconType: 'salary',
  },
  {
    id: 'tx-2',
    title: 'Apple Developer & Cloud Subscriptions',
    subtitle: 'ICICI Credit Card •••• 8812',
    category: 'Software & Tools',
    date: 'Today, 11:30 AM',
    amount: 8900.0,
    type: 'expense',
    status: 'cleared',
    iconType: 'software',
  },
  {
    id: 'tx-3',
    title: 'AWS Cloud & GPU Cluster Infrastructure',
    subtitle: 'Corporate Card •••• 3141',
    category: 'Infrastructure',
    date: 'Yesterday, 8:00 PM',
    amount: 14500.0,
    type: 'expense',
    status: 'cleared',
    iconType: 'infrastructure',
  },
  {
    id: 'tx-4',
    title: 'Client Project Wire Transfer',
    subtitle: 'Direct NEFT Deposit',
    category: 'Consulting',
    date: 'Yesterday, 10:45 AM',
    amount: 35000.0,
    type: 'income',
    status: 'cleared',
    iconType: 'salary',
  },
  {
    id: 'tx-5',
    title: 'Third Wave Coffee Roasters',
    subtitle: 'Personal Card •••• 1024',
    category: 'Food & Dining',
    date: 'Sep 4, 9:20 AM',
    amount: 450.0,
    type: 'expense',
    status: 'cleared',
    iconType: 'dining',
  },
  {
    id: 'tx-6',
    title: 'Nature Basket Organic Market',
    subtitle: 'UPI •••• 8812',
    category: 'Groceries',
    date: 'Sep 3, 6:15 PM',
    amount: 1850.0,
    type: 'expense',
    status: 'cleared',
    iconType: 'groceries',
  },
];
