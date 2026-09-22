export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  type: 'expense' | 'income';
  date: string;
}

export interface Reminder {
  id: string;
  personName: string;
  phone: string;
  amount: number;
  type: 'lent' | 'borrowed';
  date: string;
  notes: string;
  isSettled: boolean;
}

export interface Subscription {
  id: string;
  title: string;
  amount: number;
  frequency: string;
  category: string;
  nextBilling: string;
  autoPost: boolean;
  isActive: boolean;
}

export interface TripMember {
  id: string;
  name: string;
  isCurrentUser: boolean;
}

export interface TripExpense {
  id: string;
  title: string;
  amount: number;
  paidByName: string;
  paidByMemberId: string;
  category: string;
}

export interface TripData {
  name: string;
  destination: string;
  budget: number;
  members: TripMember[];
  expenses: TripExpense[];
}

export const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: '1', title: 'Figma Team Pro Subscription', amount: 1250.00, category: 'Tech', type: 'expense', date: 'Today, 2:15 PM' },
  { id: '2', title: 'Freelance Cloud Dev Payout', amount: 65000.00, category: 'Income', type: 'income', date: 'Today, 10:30 AM' },
  { id: '3', title: 'Whole Foods Market Basket', amount: 2450.00, category: 'Dining', type: 'expense', date: 'Yesterday' },
  { id: '4', title: 'Uber Airport Commute', amount: 850.00, category: 'Travel', type: 'expense', date: 'Aug 18' },
  { id: '5', title: 'Sneakers & Running Gear', amount: 4200.00, category: 'Shopping', type: 'expense', date: 'Aug 16' },
];

export const INITIAL_REMINDERS: Reminder[] = [
  { id: 'r1', personName: 'Sarah Jenkins', phone: '+91 98765 43210', amount: 3500.00, type: 'lent', date: 'Due Sep 28', notes: 'Concert tickets split', isSettled: false },
  { id: 'r2', personName: 'David Miller', phone: '+91 98123 45678', amount: 1200.00, type: 'borrowed', date: 'Due Oct 02', notes: 'Dinner bill advance', isSettled: false },
  { id: 'r3', personName: 'Alex Rivera', phone: '+91 98989 12345', amount: 5000.00, type: 'lent', date: 'Due Oct 15', notes: 'Hotel room booking deposit', isSettled: true },
];

export const INITIAL_SUBSCRIPTIONS: Subscription[] = [
  { id: 's1', title: 'Google One Cloud 2TB', amount: 650.00, frequency: 'monthly', category: 'Tech', nextBilling: 'Oct 01, 2026', autoPost: true, isActive: true },
  { id: 's2', title: 'Netflix Premium 4K', amount: 649.00, frequency: 'monthly', category: 'Dining', nextBilling: 'Oct 05, 2026', autoPost: true, isActive: true },
  { id: 's3', title: 'GitHub Copilot Pro', amount: 7999.00, frequency: 'yearly', category: 'Tech', nextBilling: 'Dec 15, 2026', autoPost: true, isActive: true },
  { id: 's4', title: 'Cult.fit Gym Membership', amount: 2499.00, frequency: 'monthly', category: 'Health', nextBilling: 'Oct 10, 2026', autoPost: false, isActive: true },
];

export const INITIAL_TRIP: TripData = {
  name: '🌴 Goa Road Trip & Coastal Retreat',
  destination: 'Goa, India',
  budget: 35000.00,
  members: [
    { id: 'm1', name: 'You (Organizer)', isCurrentUser: true },
    { id: 'm2', name: 'Alex Rivera', isCurrentUser: false },
    { id: 'm3', name: 'Sarah Jenkins', isCurrentUser: false },
    { id: 'm4', name: 'David Miller', isCurrentUser: false },
  ],
  expenses: [
    { id: 'te1', title: 'Beachfront Villa Booking', amount: 14000.00, paidByName: 'You (Organizer)', paidByMemberId: 'm1', category: 'Stay' },
    { id: 'te2', title: 'Seafood Shack Dinner & Drinks', amount: 4800.00, paidByName: 'Alex Rivera', paidByMemberId: 'm2', category: 'Dining' },
    { id: 'te3', title: 'Scooter Rentals & Fuel', amount: 2700.00, paidByName: 'Sarah Jenkins', paidByMemberId: 'm3', category: 'Transport' },
    { id: 'te4', title: 'Scuba Diving & Watersports', amount: 6500.00, paidByName: 'David Miller', paidByMemberId: 'm4', category: 'Activities' },
  ]
};
