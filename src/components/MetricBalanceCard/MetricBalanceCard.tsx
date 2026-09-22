import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Wallet, 
  ShieldCheck, 
  Eye, 
  EyeOff 
} from 'lucide-react';
import styles from './MetricBalanceCard.module.scss';

export interface MetricBalanceCardProps {
  balance?: number;
  monthlyIncome?: number;
  monthlyExpense?: number;
  trendPercentage?: number;
}

export const MetricBalanceCard: React.FC<MetricBalanceCardProps> = ({
  balance = 128450.75,
  monthlyIncome = 84500.0,
  monthlyExpense = 31200.5,
  trendPercentage = 14.2,
}) => {
  const [hideAmounts, setHideAmounts] = useState<boolean>(false);

  const formatAmount = (val: number, prefix = ''): string => {
    if (hideAmounts) return '••••••';
    return `${prefix}₹${val.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <div className={styles.container}>
      {/* 1. Master Balance Hero Card */}
      <div className={styles.heroCard}>
        {/* Ambient Blur */}
        <div className={styles.ambientBlur} />

        {/* Card Header */}
        <div className={styles.cardHeader}>
          <div className={styles.treasuryGroup}>
            <div className={styles.walletIconBox}>
              <Wallet size={20} />
            </div>
            <div>
              <span className={styles.treasurySub}>Total Net Liquidity</span>
              <div className={styles.treasuryTitleRow}>
                <span className={styles.treasuryTitle}>Master Treasury</span>
                <ShieldCheck size={14} style={{ color: '#81C995' }} />
              </div>
            </div>
          </div>

          {/* Right Controls: Hide Balance */}
          <div className={styles.controlsRow}>
            <button
              onClick={() => setHideAmounts(!hideAmounts)}
              title={hideAmounts ? 'Reveal amounts' : 'Hide amounts'}
              className={styles.eyeBtn}
            >
              {hideAmounts ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        {/* Master Balance Numerical Display */}
        <div className={styles.balanceDisplayGroup}>
          <div className={styles.balanceAmount}>{formatAmount(balance)}</div>

          <div className={styles.trendRow}>
            <span className={styles.trendBadge}>
              <TrendingUp size={13} />
              <span>+{trendPercentage}%</span>
            </span>
            <span className={styles.trendSubtitle}>
              vs last month (+₹24,500.00 net gains)
            </span>
          </div>
        </div>

        {/* Bottom Income & Expense Indicator Bar */}
        <div className={styles.bottomMetricsGrid}>
          {/* Income Summary Indicator */}
          <div className={styles.summaryIndicator}>
            <div className={`${styles.indicatorIcon} ${styles.incomeIcon}`}>
              <ArrowDownLeft size={18} />
            </div>
            <div>
              <div className={styles.indicatorLabel}>Monthly Income</div>
              <div className={`${styles.indicatorValue} ${styles.incomeValue}`}>
                {formatAmount(monthlyIncome, '+')}
              </div>
            </div>
          </div>

          {/* Expense Summary Indicator */}
          <div className={styles.summaryIndicator}>
            <div className={`${styles.indicatorIcon} ${styles.expenseIcon}`}>
              <ArrowUpRight size={18} />
            </div>
            <div>
              <div className={styles.indicatorLabel}>Monthly Expenses</div>
              <div className={`${styles.indicatorValue} ${styles.expenseValue}`}>
                {formatAmount(monthlyExpense, '-')}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Secondary FinTech Metric Cards */}
      <div className={styles.secondaryMetricsGrid}>
        {/* Income Metric Card */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <div className={styles.metricTitleGroup}>
              <div className={`${styles.metricIcon} ${styles.income}`}>
                <ArrowDownLeft size={20} />
              </div>
              <div>
                <span className={styles.metricSublabel}>Inflow Earnings</span>
                <h4 className={styles.metricHeading}>Total Credited</h4>
              </div>
            </div>

            <span className="financial-chip financial-chip-income">
              <TrendingUp size={12} />
              +24.5%
            </span>
          </div>

          <div className={`${styles.metricValueText} ${styles.income}`}>
            {formatAmount(monthlyIncome, '+')}
          </div>

          <div className={styles.metricFooter}>
            <span>Projected next: ₹92,000.00</span>
            <span style={{ color: 'var(--income)', fontWeight: 600 }}>Healthy Rate</span>
          </div>
        </div>

        {/* Expense Metric Card */}
        <div className={styles.metricCard}>
          <div className={styles.metricHeader}>
            <div className={styles.metricTitleGroup}>
              <div className={`${styles.metricIcon} ${styles.expense}`}>
                <ArrowUpRight size={20} />
              </div>
              <div>
                <span className={styles.metricSublabel}>Debit Outflow</span>
                <h4 className={styles.metricHeading}>Total Spent</h4>
              </div>
            </div>

            <span className="financial-chip financial-chip-expense">
              <TrendingDown size={12} />
              -8.2% vs budget
            </span>
          </div>

          <div className={`${styles.metricValueText} ${styles.expense}`}>
            {formatAmount(monthlyExpense, '-')}
          </div>

          {/* Spend Meter */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                marginBottom: '6px',
              }}
            >
              <span>Limit Usage (₹40,000 max)</span>
              <span className="font-numeric" style={{ fontWeight: 600 }}>
                78%
              </span>
            </div>
            <div className={styles.spendMeterTrack}>
              <div className={styles.spendMeterBar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricBalanceCard;
