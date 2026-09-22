import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Coffee, 
  Laptop, 
  Server, 
  CreditCard, 
  Briefcase, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { SAMPLE_TRANSACTIONS } from '../../constants';
import styles from './TransactionItem.module.scss';

export const TRANSACTION_ICONS: Record<string, React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>> = {
  software: Laptop,
  salary: Briefcase,
  dining: Coffee,
  groceries: ShoppingBag,
  infrastructure: Server,
  subscription: CreditCard,
};

export interface TransactionItemProps {
  id?: string;
  title: string;
  subtitle?: string;
  category?: string;
  date: string;
  amount: number;
  type?: 'income' | 'expense';
  status?: 'cleared' | 'pending';
  iconType?: string;
  account?: string;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
  title,
  subtitle,
  category,
  date,
  amount,
  type = 'expense',
  status = 'cleared',
  iconType = 'software',
  account = 'Card •••• 4242',
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const IconComponent = TRANSACTION_ICONS[iconType] || CreditCard;
  const isIncome = type === 'income';

  return (
    <div
      className={`${styles.transactionRow} ${isHovered ? styles.isHovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left: Category Icon + Merchant & Category info */}
      <div className={styles.leftContent}>
        <div
          className={`${styles.iconBox} ${isIncome ? styles.income : styles.expense}`}
        >
          <IconComponent size={20} />
        </div>

        {/* Title & Metadata */}
        <div className={styles.metadataCol}>
          <div className={styles.titleRow}>
            <span className={styles.titleText}>{title}</span>
            {category && <span className={styles.categoryBadge}>{category}</span>}
          </div>

          <div className={styles.subRow}>
            <span>{subtitle || account}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
        </div>
      </div>

      {/* Right: Amount & Status Badge */}
      <div className={styles.rightContent}>
        <div
          className={`${styles.amountText} ${isIncome ? styles.income : styles.expense}`}
        >
          <span>{isIncome ? '+' : '-'}</span>
          <span>
            ₹
            {Math.abs(amount).toLocaleString('en-IN', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>

        {/* Status Pill */}
        <div>
          {status === 'cleared' ? (
            <span className={styles.statusCleared}>
              <CheckCircle2 size={11} style={{ color: 'var(--income)' }} />
              <span>Cleared</span>
            </span>
          ) : (
            <span className={styles.statusPending}>
              <Clock size={11} />
              <span>Pending</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export interface TransactionListProps {
  transactions?: TransactionItemProps[];
}

export const TransactionList: React.FC<TransactionListProps> = ({
  transactions = SAMPLE_TRANSACTIONS,
}) => {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');

  const filtered = transactions.filter((item) => {
    if (filter === 'income') return item.type === 'income';
    if (filter === 'expense') return item.type === 'expense';
    return true;
  });

  const getFilterBtnClass = (f: 'all' | 'income' | 'expense') => {
    if (filter !== f) return styles.filterButton;
    if (f === 'income') return `${styles.filterButton} ${styles.filterIncomeActive}`;
    if (f === 'expense') return `${styles.filterButton} ${styles.filterExpenseActive}`;
    return `${styles.filterButton} ${styles.filterActive}`;
  };

  return (
    <div className={styles.listCard}>
      {/* List Header */}
      <div className={styles.listHeader}>
        <div>
          <h3 className={styles.listHeading}>Recent Activity</h3>
          <p className={styles.listSubheading}>Real-time feed across synced accounts</p>
        </div>

        {/* Filter Pills */}
        <div className={styles.filterPills}>
          {(['all', 'income', 'expense'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={getFilterBtnClass(f)}
            >
              {f === 'all' ? 'All' : f === 'income' ? 'Credits' : 'Debits'}
            </button>
          ))}
        </div>
      </div>

      {/* Transaction Rows Container */}
      <div className={styles.rowsContainer}>
        {filtered.map((tx) => (
          <TransactionItem key={tx.id} {...tx} />
        ))}
      </div>
    </div>
  );
};

export default TransactionItem;
