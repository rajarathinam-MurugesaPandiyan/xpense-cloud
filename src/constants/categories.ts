import React from 'react';
import { Utensils, Laptop, ShoppingBag, Car, HeartPulse, TrendingUp } from 'lucide-react';

export interface CategoryConfig {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
  color: string;
  bg: string;
  budget: number;
}

export const CATEGORY_MAP: Record<string, CategoryConfig> = {
  Dining: { icon: Utensils, color: '#EA4335', bg: 'rgba(234, 67, 53, 0.12)', budget: 12000 },
  Tech: { icon: Laptop, color: '#1A73E8', bg: 'rgba(26, 115, 232, 0.12)', budget: 8000 },
  Shopping: { icon: ShoppingBag, color: '#F9AB00', bg: 'rgba(249, 171, 0, 0.12)', budget: 10000 },
  Travel: { icon: Car, color: '#1E8E3E', bg: 'rgba(30, 142, 62, 0.12)', budget: 8000 },
  Health: { icon: HeartPulse, color: '#EA4335', bg: 'rgba(234, 67, 53, 0.12)', budget: 5000 },
  Income: { icon: TrendingUp, color: '#1E8E3E', bg: 'rgba(30, 142, 62, 0.12)', budget: 0 },
};
