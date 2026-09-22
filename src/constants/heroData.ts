export const HERO_METRICS = {
  totalBalance: "₹18,420.50",
  monthlyCashflow: "+₹2,410.10",
  savingsGoalPercent: "82% Reached",
  categorySpent: "₹3,240.00 Spent",
  rating: "4.9★ Google Play & App Store Rating",
  security: "Local Hive & Firestore Encrypted",
};

export const HERO_CATEGORY_SEGMENTS = [
  { label: "Dining", width: "42%", color: "#EA4335" },
  { label: "Tech", width: "28%", color: "#1A73E8" },
  { label: "Shopping", width: "18%", color: "#F9AB00" },
  { label: "Travel", width: "12%", color: "#1E8E3E" },
];

export const HERO_ACTIVITY_STREAM = [
  {
    id: "hero-act-1",
    title: "Google One Cloud 2TB",
    subtitle: "Repeat Subscription • Auto-Post",
    amount: "-₹9.99",
    type: "expense" as const,
    iconType: "repeat" as const,
    iconColor: "#1A73E8",
    iconBg: "rgba(26, 115, 232, 0.12)",
  },
  {
    id: "hero-act-2",
    title: "Sarah Jenkins",
    subtitle: "Lend Reminder • Due Sep 28",
    amount: "+₹120.00",
    type: "income" as const,
    iconType: "bell" as const,
    iconColor: "#1E8E3E",
    iconBg: "rgba(30, 142, 62, 0.12)",
  },
];
