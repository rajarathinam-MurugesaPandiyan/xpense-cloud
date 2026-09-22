import React, { useState } from 'react';
import { 
  Plus, Trash2, Wallet, ArrowUpCircle, ArrowDownCircle, Sparkles, 
  RefreshCw, Utensils, Laptop, ShoppingBag, Car, HeartPulse, 
  TrendingUp, Sliders, Check, Plane, Users, Calendar, Clock, 
  AlertCircle, CheckCircle2, Bell, Repeat, FileText, ArrowRight
} from 'lucide-react';
import { 
  CategoryConfig, Transaction, Reminder, Subscription, TripMember, TripExpense, TripData,
  CATEGORY_MAP, INITIAL_TRANSACTIONS, INITIAL_REMINDERS, INITIAL_SUBSCRIPTIONS, INITIAL_TRIP 
} from '../../constants';
import styles from './InteractiveDemo.module.scss';

export interface InteractiveDemoProps {
  onOpenDemo?: () => void;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ onOpenDemo }) => {
  // Feature Tab Navigation
  const [activeTab, setActiveTab] = useState<'categories' | 'reminders' | 'subscriptions' | 'trip'>('categories');
  // 1. Categories State
  const [transactions, setTransactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('All');
  const [txTitle, setTxTitle] = useState<string>('');
  const [txAmount, setTxAmount] = useState<string>('');
  const [txCategory, setTxCategory] = useState<string>('Dining');
  const [txType, setTxType] = useState<'expense' | 'income'>('expense');

  // 2. Lend Reminders State
  const [reminders, setReminders] = useState<Reminder[]>(INITIAL_REMINDERS);
  const [remName, setRemName] = useState<string>('');
  const [remAmount, setRemAmount] = useState<string>('');
  const [remType, setRemType] = useState<'lent' | 'borrowed'>('lent');
  const [remDueDate, setRemDueDate] = useState<string>('');

  // 3. Subscriptions State
  const [subscriptions, setSubscriptions] = useState<Subscription[]>(INITIAL_SUBSCRIPTIONS);
  const [subTitle, setSubTitle] = useState<string>('');
  const [subAmount, setSubAmount] = useState<string>('');
  const [subFrequency, setSubFrequency] = useState<string>('monthly');

  // 4. Trip State
  const [trip, setTrip] = useState<TripData>(INITIAL_TRIP);
  const [tripExpenseTitle, setTripExpenseTitle] = useState<string>('');
  const [tripExpenseAmount, setTripExpenseAmount] = useState<string>('');
  const [tripPaidBy, setTripPaidBy] = useState<string>('m1');

  // Helpers
  const formatMoney = (val: number): string => {
    return `₹${val.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // Handlers for Feature 1: Categories
  const handleAddTransaction = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(txAmount);
    if (!txTitle.trim() || isNaN(parsedAmount)) return;
    const newTx: Transaction = {
      id: Date.now().toString(),
      title: txTitle.trim(),
      amount: Math.abs(parsedAmount),
      category: txType === 'income' ? 'Income' : txCategory,
      type: txType,
      date: 'Just now'
    };
    setTransactions([newTx, ...transactions]);
    setTxTitle('');
    setTxAmount('');
  };

  const handleDeleteTx = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Handlers for Feature 2: Reminders
  const handleToggleSettleReminder = (id: string) => {
    setReminders(reminders.map(r => r.id === id ? { ...r, isSettled: !r.isSettled } : r));
  };

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(remAmount);
    if (!remName.trim() || isNaN(parsedAmount)) return;
    const newRem: Reminder = {
      id: 'rem_' + Date.now(),
      personName: remName.trim(),
      phone: '+1 555-0100',
      amount: Math.abs(parsedAmount),
      type: remType,
      date: remDueDate ? `Due ${remDueDate}` : 'Due in 7 days',
      notes: 'Quick manual reminder',
      isSettled: false
    };
    setReminders([newRem, ...reminders]);
    setRemName('');
    setRemAmount('');
    setRemDueDate('');
  };

  // Handlers for Feature 3: Subscriptions
  const handleToggleSubActive = (id: string) => {
    setSubscriptions(subscriptions.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s));
  };

  const handleAddSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(subAmount);
    if (!subTitle.trim() || isNaN(parsedAmount)) return;
    const newSub: Subscription = {
      id: 'sub_' + Date.now(),
      title: subTitle.trim(),
      amount: Math.abs(parsedAmount),
      frequency: subFrequency,
      category: 'Tech',
      nextBilling: 'Next month',
      autoPost: true,
      isActive: true
    };
    setSubscriptions([newSub, ...subscriptions]);
    setSubTitle('');
    setSubAmount('');
  };

  // Monthly commitment calculation
  const totalMonthlyCommitment = subscriptions.reduce((acc, sub) => {
    if (!sub.isActive) return acc;
    const multiplier = sub.frequency === 'yearly' ? 1 / 12 : sub.frequency === 'quarterly' ? 1 / 3 : 1;
    return acc + (sub.amount * multiplier);
  }, 0);

  // Handlers for Feature 4: Trip Expenses
  const handleAddTripExpense = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(tripExpenseAmount);
    if (!tripExpenseTitle.trim() || isNaN(parsedAmount)) return;
    const payer = trip.members.find(m => m.id === tripPaidBy) || trip.members[0];
    const newExpense: TripExpense = {
      id: 'te_' + Date.now(),
      title: tripExpenseTitle.trim(),
      amount: Math.abs(parsedAmount),
      paidByName: payer.name,
      paidByMemberId: payer.id,
      category: 'General'
    };
    setTrip({
      ...trip,
      expenses: [newExpense, ...trip.expenses]
    });
    setTripExpenseTitle('');
    setTripExpenseAmount('');
  };

  const totalTripSpent = trip.expenses.reduce((acc, exp) => acc + exp.amount, 0);
  const perPersonShare = trip.members.length > 0 ? (totalTripSpent / trip.members.length) : 0;

  // Compute spent by each member
  const memberBalances = trip.members.map(member => {
    const paid = trip.expenses
      .filter(exp => exp.paidByMemberId === member.id)
      .reduce((sum, exp) => sum + exp.amount, 0);
    const balance = paid - perPersonShare; // positive = should receive, negative = owes
    return { ...member, paid, balance };
  });

  return (
    <section id="interactive-demo" style={{ padding: '90px 0', position: 'relative', background: 'var(--bg-app)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
          <div className="badge-pill badge-pill-accent" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} style={{ color: '#0B57D0' }} />
            <span>Xpense Demo Section</span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Core XPense Feature Playground
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Explore the exact architecture powering the XPense Flutter mobile app. Switch tabs to test category budgets, lend reminders, subscriptions, and multi-person trip splits.
          </p>
        </div>

        {/* 4-Feature Navigation Pill Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '36px', overflowX: 'auto', padding: '4px' }}>
          <div style={{ 
            display: 'inline-flex', 
            background: 'var(--bg-surface)', 
            padding: '6px', 
            borderRadius: '16px', 
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-card)',
            gap: '6px'
          }}>
            <button
              onClick={() => setActiveTab('categories')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'categories' ? 'var(--brand-primary)' : 'transparent',
                color: activeTab === 'categories' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.2s'
              }}
            >
              <Utensils size={16} />
              <span>Category Tracking</span>
            </button>

            <button
              onClick={() => setActiveTab('reminders')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'reminders' ? 'var(--brand-primary)' : 'transparent',
                color: activeTab === 'reminders' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.2s'
              }}
            >
              <Bell size={16} />
              <span>Lend & Borrow</span>
            </button>

            <button
              onClick={() => setActiveTab('subscriptions')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'subscriptions' ? 'var(--brand-primary)' : 'transparent',
                color: activeTab === 'subscriptions' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.2s'
              }}
            >
              <Repeat size={16} />
              <span>Subscriptions Vault</span>
            </button>

            <button
              onClick={() => setActiveTab('trip')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '12px',
                fontSize: '0.9rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                background: activeTab === 'trip' ? 'var(--brand-primary)' : 'transparent',
                color: activeTab === 'trip' ? '#FFFFFF' : 'var(--text-secondary)',
                transition: 'all 0.2s'
              }}
            >
              <Plane size={16} />
              <span>Trip Expense & Split</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CATEGORY EXPENSE TRACKING */}
        {activeTab === 'categories' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Left: Category Budgets & Add Transaction */}
            <div>
              {/* Category Budgets Overview */}
              <div className="xpense-card" style={{ padding: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Category Budgets
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Auto Monthly Reset</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {Object.entries(CATEGORY_MAP).filter(([cat]) => cat !== 'Income').map(([cat, meta]) => {
                    const spent = transactions
                      .filter(t => t.category === cat && t.type === 'expense')
                      .reduce((acc, t) => acc + t.amount, 0);
                    const pct = Math.min(Math.round((spent / meta.budget) * 100), 100);
                    const isOver = spent > meta.budget;

                    return (
                      <div key={cat}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                          <span style={{ fontWeight: 600, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                            <meta.icon size={14} style={{ color: meta.color }} />
                            {cat}
                          </span>
                          <span style={{ color: isOver ? 'var(--expense)' : 'var(--text-secondary)', fontWeight: 600 }}>
                            {formatMoney(spent)} / {formatMoney(meta.budget)} ({pct}%)
                          </span>
                        </div>
                        <div style={{ width: '100%', height: '8px', background: 'var(--bg-surface-elevated)', borderRadius: '999px', overflow: 'hidden' }}>
                          <div 
                            style={{ 
                              width: `${pct}%`, 
                              height: '100%', 
                              background: isOver ? 'var(--expense)' : meta.color,
                              borderRadius: '999px',
                              transition: 'width 0.4s ease'
                            }} 
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Add Transaction Form */}
              <div className="xpense-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Quick Log Expense
                </h3>
                <form onSubmit={handleAddTransaction} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setTxType('expense')}
                      style={{
                        flex: 1,
                        padding: '9px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: txType === 'expense' ? 'rgba(244, 63, 94, 0.12)' : 'transparent',
                        color: txType === 'expense' ? 'var(--expense)' : 'var(--text-secondary)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      Expense (-)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTxType('income')}
                      style={{
                        flex: 1,
                        padding: '9px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: txType === 'income' ? 'rgba(5, 150, 105, 0.12)' : 'transparent',
                        color: txType === 'income' ? 'var(--income)' : 'var(--text-secondary)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      Income (+)
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Expense title (e.g., Starbucks Coffee)"
                    value={txTitle}
                    onChange={(e) => setTxTitle(e.target.value)}
                    className="xpense-input"
                    required
                  />

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={txAmount}
                      onChange={(e) => setTxAmount(e.target.value)}
                      className="xpense-input"
                      step="any"
                      min="0.01"
                      required
                    />
                    {txType === 'expense' && (
                      <select
                        value={txCategory}
                        onChange={(e) => setTxCategory(e.target.value)}
                        className="xpense-input"
                        style={{ width: '150px' }}
                      >
                        {Object.keys(CATEGORY_MAP).filter(c => c !== 'Income').map(cat => (
                          <option key={cat} value={cat}>{cat}</option>
                        ))}
                      </select>
                    )}
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    <Plus size={16} /> Add Transaction
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Transactions List with Category Filters */}
            <div>
              <div className="xpense-card" style={{ padding: '24px', height: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Transactions History
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{transactions.length} items</span>
                </div>

                {/* Filter Pills */}
                <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '16px' }}>
                  {['All', ...Object.keys(CATEGORY_MAP)].map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategoryFilter(cat)}
                      style={{
                        padding: '5px 12px',
                        borderRadius: '20px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        border: '1px solid var(--border-color)',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        background: selectedCategoryFilter === cat ? 'var(--brand-primary)' : 'var(--bg-surface-elevated)',
                        color: selectedCategoryFilter === cat ? '#FFFFFF' : 'var(--text-secondary)'
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {transactions
                    .filter(t => selectedCategoryFilter === 'All' || t.category === selectedCategoryFilter)
                    .map(tx => {
                      const meta = CATEGORY_MAP[tx.category] || CATEGORY_MAP.Dining;
                      const Icon = meta.icon;

                      return (
                        <div 
                          key={tx.id}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '12px 14px',
                            background: 'var(--bg-surface-elevated)',
                            borderRadius: '14px',
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <div 
                              style={{
                                width: '38px',
                                height: '38px',
                                borderRadius: '10px',
                                background: meta.bg,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: meta.color
                              }}
                            >
                              <Icon size={18} />
                            </div>
                            <div>
                              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                                {tx.title}
                              </div>
                              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                                {tx.date} • {tx.category}
                              </div>
                            </div>
                          </div>

                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span 
                              style={{ 
                                fontWeight: 700, 
                                fontSize: '0.95rem',
                                color: tx.type === 'income' ? 'var(--income)' : 'var(--expense)'
                              }}
                            >
                              {tx.type === 'income' ? '+' : '-'}{formatMoney(tx.amount)}
                            </span>
                            <button
                              onClick={() => handleDeleteTx(tx.id)}
                              style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
                              title="Delete"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: LEND & BORROW REMINDERS */}
        {activeTab === 'reminders' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Left: Summary & Add Reminder */}
            <div>
              {/* Summary Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div className="xpense-card" style={{ padding: '20px', background: 'rgba(5, 150, 105, 0.08)', borderColor: 'rgba(5, 150, 105, 0.25)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--income)', marginBottom: '6px' }}>
                    Total Lent Out (You Are Owed)
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--income)' }}>
                    {formatMoney(reminders.filter(r => r.type === 'lent' && !r.isSettled).reduce((s, r) => s + r.amount, 0))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {reminders.filter(r => r.type === 'lent' && !r.isSettled).length} pending payments
                  </span>
                </div>

                <div className="xpense-card" style={{ padding: '20px', background: 'rgba(244, 63, 94, 0.08)', borderColor: 'rgba(244, 63, 94, 0.25)' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--expense)', marginBottom: '6px' }}>
                    Total Borrowed (You Owe)
                  </div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--expense)' }}>
                    {formatMoney(reminders.filter(r => r.type === 'borrowed' && !r.isSettled).reduce((s, r) => s + r.amount, 0))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {reminders.filter(r => r.type === 'borrowed' && !r.isSettled).length} pending debts
                  </span>
                </div>
              </div>

              {/* Add Lend Reminder */}
              <div className="xpense-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Create Lend / Borrow Reminder
                </h3>
                <form onSubmit={handleAddReminder} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      type="button"
                      onClick={() => setRemType('lent')}
                      style={{
                        flex: 1,
                        padding: '9px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: remType === 'lent' ? 'var(--brand-primary)' : 'transparent',
                        color: remType === 'lent' ? '#FFFFFF' : 'var(--text-secondary)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      I Lent Money
                    </button>
                    <button
                      type="button"
                      onClick={() => setRemType('borrowed')}
                      style={{
                        flex: 1,
                        padding: '9px',
                        borderRadius: '10px',
                        border: '1px solid var(--border-color)',
                        background: remType === 'borrowed' ? 'var(--brand-primary)' : 'transparent',
                        color: remType === 'borrowed' ? '#FFFFFF' : 'var(--text-secondary)',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer'
                      }}
                    >
                      I Borrowed
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Person name (e.g. Sarah Jenkins)"
                    value={remName}
                    onChange={(e) => setRemName(e.target.value)}
                    className="xpense-input"
                    required
                  />

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={remAmount}
                      onChange={(e) => setRemAmount(e.target.value)}
                      className="xpense-input"
                      step="any"
                      min="0.01"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Due (e.g. Oct 15)"
                      value={remDueDate}
                      onChange={(e) => setRemDueDate(e.target.value)}
                      className="xpense-input"
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    <Bell size={16} /> Set Reminder
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Reminders Cards */}
            <div>
              <div className="xpense-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Active Debt & Lend List
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Tap to Settle</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {reminders.map(rem => (
                    <div
                      key={rem.id}
                      style={{
                        padding: '16px',
                        borderRadius: '16px',
                        background: rem.isSettled ? 'var(--bg-surface)' : 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-color)',
                        opacity: rem.isSettled ? 0.6 : 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            background: rem.type === 'lent' ? 'rgba(30, 142, 62, 0.12)' : 'rgba(234, 67, 53, 0.12)',
                            color: rem.type === 'lent' ? '#1E8E3E' : '#EA4335',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 700
                          }}
                        >
                          {rem.personName.charAt(0)}
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                              {rem.personName}
                            </span>
                            <span
                              style={{
                                fontSize: '0.72rem',
                                padding: '2px 8px',
                                borderRadius: '6px',
                                fontWeight: 600,
                                background: rem.type === 'lent' ? 'rgba(30, 142, 62, 0.12)' : 'rgba(234, 67, 53, 0.12)',
                                color: rem.type === 'lent' ? '#1E8E3E' : '#EA4335'
                              }}
                            >
                              {rem.type === 'lent' ? 'LENT' : 'BORROWED'}
                            </span>
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            {rem.date} • {rem.notes}
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '6px' }}>
                          {formatMoney(rem.amount)}
                        </div>
                        <button
                          onClick={() => handleToggleSettleReminder(rem.id)}
                          style={{
                            padding: '4px 12px',
                            borderRadius: '8px',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            border: '1px solid var(--border-color)',
                            cursor: 'pointer',
                            background: rem.isSettled ? 'var(--income-bg)' : 'var(--bg-surface)',
                            color: rem.isSettled ? 'var(--income)' : 'var(--text-secondary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                        >
                          {rem.isSettled ? <CheckCircle2 size={12} /> : null}
                          {rem.isSettled ? 'Settled' : 'Mark Settled'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: SUBSCRIPTIONS LOGGING */}
        {activeTab === 'subscriptions' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Left: Monthly Commitment Banner & Add Subscription */}
            <div>
              {/* Monthly Burn Rate Card */}
              <div className="xpense-hero-card" style={{ padding: '26px', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px' }}>
                  Total Normalized Monthly Commitment
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px' }}>
                  {formatMoney(totalMonthlyCommitment)} <span style={{ fontSize: '1rem', fontWeight: 500 }}>/ month</span>
                </div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  {subscriptions.filter(s => s.isActive).length} active recurring subscriptions linked
                </div>
              </div>

              {/* Add Subscription Form */}
              <div className="xpense-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Log New Subscription
                </h3>
                <form onSubmit={handleAddSubscription} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <input
                    type="text"
                    placeholder="Service Name (e.g. Spotify Family)"
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                    className="xpense-input"
                    required
                  />

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={subAmount}
                      onChange={(e) => setSubAmount(e.target.value)}
                      className="xpense-input"
                      step="any"
                      min="0.01"
                      required
                    />
                    <select
                      value={subFrequency}
                      onChange={(e) => setSubFrequency(e.target.value)}
                      className="xpense-input"
                      style={{ width: '150px' }}
                    >
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="yearly">Yearly</option>
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    <Repeat size={16} /> Track Subscription
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Subscriptions List */}
            <div>
              <div className="xpense-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Recurring Subscriptions Vault
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Auto-Post Enabled</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {subscriptions.map(sub => (
                    <div
                      key={sub.id}
                      style={{
                        padding: '16px',
                        borderRadius: '16px',
                        background: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        opacity: sub.isActive ? 1 : 0.5
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div
                          style={{
                            width: '42px',
                            height: '42px',
                            borderRadius: '12px',
                            background: 'rgba(26, 115, 232, 0.12)',
                            color: '#1A73E8',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <Repeat size={20} />
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--text-primary)' }}>
                            {sub.title}
                          </div>
                          <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                            Next Renewal: {sub.nextBilling} • {sub.frequency}
                          </div>
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                          {formatMoney(sub.amount)}
                        </div>
                        <button
                          onClick={() => handleToggleSubActive(sub.id)}
                          style={{
                            padding: '3px 10px',
                            borderRadius: '6px',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            border: 'none',
                            cursor: 'pointer',
                            background: sub.isActive ? 'rgba(30, 142, 62, 0.12)' : 'var(--border-color)',
                            color: sub.isActive ? '#1E8E3E' : 'var(--text-muted)'
                          }}
                        >
                          {sub.isActive ? 'ACTIVE' : 'PAUSED'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: TRIP EXPENSE FEATURE & GROUP SPLIT */}
        {activeTab === 'trip' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px' }}>
            
            {/* Left: Trip Header, Split Share, and Add Trip Expense */}
            <div>
              {/* Trip Overview Card */}
              <div className="xpense-card" style={{ padding: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(249, 171, 0, 0.15)', color: '#F9AB00', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Plane size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {trip.name}
                    </h3>
                    <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {trip.destination} • {trip.members.length} Members
                    </span>
                  </div>
                </div>

                {/* Spent vs Budget */}
                <div style={{ marginTop: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Total Group Spend</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      {formatMoney(totalTripSpent)} / {formatMoney(trip.budget)}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'var(--bg-surface-elevated)', borderRadius: '999px', overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        width: `${Math.min(Math.round((totalTripSpent / trip.budget) * 100), 100)}%`, 
                        height: '100%', 
                        background: 'var(--brand-primary)',
                        borderRadius: '999px'
                      }} 
                    />
                  </div>
                </div>

                {/* Per-Person Equal Share */}
                <div style={{ marginTop: '20px', padding: '16px', borderRadius: '14px', background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      PER-PERSON FAIR SHARE
                    </div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
                      {formatMoney(perPersonShare)}
                    </div>
                  </div>
                  <div className="badge-pill badge-pill-accent" style={{ fontSize: '0.75rem' }}>
                    Auto-Split (÷ {trip.members.length})
                  </div>
                </div>
              </div>

              {/* Add Trip Expense Form */}
              <div className="xpense-card" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Log Shared Trip Expense
                </h3>
                <form onSubmit={handleAddTripExpense} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <input
                    type="text"
                    placeholder="Expense title (e.g. Scuba Diving)"
                    value={tripExpenseTitle}
                    onChange={(e) => setTripExpenseTitle(e.target.value)}
                    className="xpense-input"
                    required
                  />

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="number"
                      placeholder="Amount"
                      value={tripExpenseAmount}
                      onChange={(e) => setTripExpenseAmount(e.target.value)}
                      className="xpense-input"
                      step="any"
                      min="0.01"
                      required
                    />
                    <select
                      value={tripPaidBy}
                      onChange={(e) => setTripPaidBy(e.target.value)}
                      className="xpense-input"
                      style={{ width: '170px' }}
                    >
                      {trip.members.map(m => (
                        <option key={m.id} value={m.id}>Paid by: {m.name.split(' ')[0]}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '4px' }}>
                    <Plus size={16} /> Add Trip Expense
                  </button>
                </form>
              </div>
            </div>

            {/* Right: Group Member Settlements & Expense Log */}
            <div>
              {/* Member Settlement Cards */}
              <div className="xpense-card" style={{ padding: '24px', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '16px' }}>
                  Member Balances & Settlements
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {memberBalances.map(m => (
                    <div
                      key={m.id}
                      style={{
                        padding: '14px',
                        borderRadius: '14px',
                        background: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary)' }}>
                          {m.name} {m.isCurrentUser && <span style={{ color: 'var(--brand-primary)', fontSize: '0.8rem' }}>(You)</span>}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          Total Paid: {formatMoney(m.paid)}
                        </div>
                      </div>

                      <div style={{ textAlign: 'right' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '4px 10px',
                            borderRadius: '8px',
                            fontSize: '0.8rem',
                            fontWeight: 700,
                            background: m.balance >= 0 ? 'rgba(30, 142, 62, 0.12)' : 'rgba(234, 67, 53, 0.12)',
                            color: m.balance >= 0 ? '#1E8E3E' : '#EA4335'
                          }}
                        >
                          {m.balance >= 0 ? `Gets back ${formatMoney(m.balance)}` : `Owes ${formatMoney(Math.abs(m.balance))}`}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trip Expenses Feed */}
              <div className="xpense-card" style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Trip Expenses Log
                  </h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{trip.expenses.length} entries</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {trip.expenses.map(exp => (
                    <div
                      key={exp.id}
                      style={{
                        padding: '12px 14px',
                        borderRadius: '12px',
                        background: 'var(--bg-surface-elevated)',
                        border: '1px solid var(--border-color)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                          {exp.title}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          Paid by {exp.paidByName}
                        </div>
                      </div>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                        {formatMoney(exp.amount)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Dedicated Demo Request Banner */}
        {onOpenDemo && (
          <div style={{
            marginTop: '44px',
            padding: '24px 28px',
            borderRadius: '20px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-card)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <Sparkles size={16} style={{ color: 'var(--brand-primary)' }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Looking for an interactive walkthrough or custom integration?
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                Our engineering team offers 1-on-1 personalized demo sessions. Secured input protection (no code brackets, 256 char limit).
              </p>
            </div>
            <button
              type="button"
              onClick={onOpenDemo}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.9rem', borderRadius: '12px', flexShrink: 0 }}
            >
              <Sparkles size={15} />
              <span>Schedule Live Demo</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default InteractiveDemo;
