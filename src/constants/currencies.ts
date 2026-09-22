export interface Currency {
  code: string;
  symbol: string;
  rate: number;
}

export const APP_CURRENCY = '₹';

export const DEFAULT_CURRENCY: Currency = {
  code: 'INR',
  symbol: '₹',
  rate: 1,
};

export const CURRENCIES: Currency[] = [
  DEFAULT_CURRENCY,
];
