export const THEME_COLORS = {
  primary: '#0B57D0',
  primaryHover: '#0842A0',
  primaryActive: '#042D6B',
  primaryLight: '#D3E3FD',
  primarySurface: '#ECF2FD',
  
  googleBlue: '#1A73E8',
  googleRed: '#EA4335',
  googleYellow: '#FBBC04',
  googleGreen: '#34A853',
  
  income: '#1E8E3E',
  expense: '#D93025',
  warning: '#F9AB00',
  info: '#1A73E8',
} as const;

export const GOOGLE_FOUR_COLORS = [
  { name: 'Red', hex: '#EA4335', label: 'Dining' },
  { name: 'Blue', hex: '#1A73E8', label: 'Tech & Cloud' },
  { name: 'Yellow', hex: '#FBBC04', label: 'Shopping' },
  { name: 'Green', hex: '#34A853', label: 'Travel' },
] as const;

export interface DesignTokenItem {
  name: string;
  label: string;
  light: string;
  dark: string;
  desc: string;
}

export const DESIGN_TOKENS_LIST: DesignTokenItem[] = [
  { name: '--bg-app', label: 'App Background', light: '#F8FAFC', dark: '#111318', desc: 'Google Clean Neutral / Dark Neutral' },
  { name: '--bg-surface', label: 'Card Surface', light: '#FFFFFF', dark: '#1E2024', desc: 'Pure Crisp White / Dark Surface' },
  { name: '--border-color', label: 'Hairline Border', light: '#E0E2EC', dark: '#333842', desc: 'Subtle Hairline Outline' },
  { name: '--brand-primary', label: 'Brand Primary', light: '#0B57D0', dark: '#A8C7FA', desc: 'Classic Google Blue / Dark Accent' },
  { name: '--accent-light', label: 'Accent Chip Container', light: '#D3E3FD', dark: '#0842A0', desc: 'Soft Google Blue Container' },
  { name: '--google-blue', label: 'Google Blue', light: '#1A73E8', dark: '#8AB4F8', desc: 'Google 4-Color Primary' },
  { name: '--google-red', label: 'Google Red', light: '#EA4335', dark: '#F28B82', desc: 'Google 4-Color Primary' },
  { name: '--google-yellow', label: 'Google Yellow', light: '#F9AB00', dark: '#FDD663', desc: 'Google 4-Color Primary' },
  { name: '--google-green', label: 'Google Green', light: '#1E8E3E', dark: '#81C995', desc: 'Google 4-Color Primary' },
  { name: '--income', label: 'Income / Credit', light: '#059669', dark: '#34D399', desc: 'Emerald Financial Flow' },
  { name: '--expense', label: 'Expense / Debit', light: '#F43F5E', dark: '#FB7185', desc: 'Coral Rose (Anti-Panic)' },
];
