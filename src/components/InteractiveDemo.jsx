import React, { useState } from 'react';
import { Plus, Trash2, DollarSign, Wallet, ArrowUpCircle, ArrowDownCircle, Sparkles, RefreshCw } from 'lucide-react';

const INITIAL_TRANSACTIONS = [
  { id: '1', title: 'Figma Pro Subscription', amount: 15.00, category: 'Tech', type: 'expense', date: 'Today, 2:15 PM' },
  { id: '2', title: 'Freelance Client Payout', amount: 1200.00, category: 'Income', type: 'income', date: 'Today, 10:30 AM' },
  { id: '3', title: 'Organic Grocery Market', amount: 84.50, category: 'Food', type: 'expense', date: 'Yesterday' },
  { id: '4', title: 'Apple Store Accessories', amount: 49.00, category: 'Shopping', type: 'expense', date: 'Aug 14' }
];

const CURRENCIES = [
  { code: 'USD', symbol: '$', rate: 1 },
  { code: 'EUR', symbol: '€', rate: 0.92 },
  { code: 'GBP', symbol: '£', rate: 0.79 },
  { code: 'INR', symbol: '₹', rate: 83.5 }
];

export const InteractiveDemo = () => {
  const [transactions, setTransactions] = useState(INITIAL_TRANSACTIONS);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [type, setType] = useState('expense');
  const [currency, setCurrency] = useState(CURRENCIES[0]);
  const [budgetLimit, setBudgetLimit] = useState(2500);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount || isNaN(amount)) return;

    const newTx = {
      id: Date.now().toString(),
      title: title.trim(),
      amount: parseFloat(amount),
      category: type === 'income' ? 'Income' : category,
      type,
      date: 'Just now'
    };

    setTransactions([newTx, ...transactions]);
    setTitle('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const resetDemo = () => {
    setTransactions(INITIAL_TRANSACTIONS);
  };

  // Financial metrics
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  const netBalance = 3450.00 + totalIncome - totalExpense;
  const budgetSpentPct = Math.min(Math.round((totalExpense / budgetLimit) * 100), 100);

  const formatMoney = (val) => {
    const converted = val * currency.rate;
    return `${currency.symbol}${converted.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  return (
    <section id="interactive-demo" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
          <div className="badge-pill" style={{ marginBottom: '14px' }}>
            <Sparkles size={14} style={{ color: '#ffffff' }} />
            <span>Try Xpense Cloud Live Demo</span>
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#fff', marginBottom: '12px' }}>
            Experience the Web & Mobile Interface Right Now
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
            Add test expenses, switch currencies, and watch instant cloud calculations in real-time.
          </p>
        </div>

        {/* Demo Board Wrapper */}
        <div 
          className="glass-card"
          style={{
            padding: '32px',
            borderRadius: '24px',
            background: '#1D1D21',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7)'
          }}
        >
          {/* Top Bar Controls */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '28px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ padding: '8px 14px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px', color: '#ffffff', fontWeight: 700, fontSize: '0.85rem' }}>
                Xpense Engine v2.4
              </div>
              <button 
                onClick={resetDemo}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--text-muted)', background: '#282C33', padding: '6px 12px', borderRadius: '8px' }}
              >
                <RefreshCw size={14} />
                Reset Demo Data
              </button>
            </div>

            {/* Currency Selector */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Currency:</span>
              <div style={{ display: 'flex', background: '#282C33', padding: '4px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
                {CURRENCIES.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => setCurrency(curr)}
                    style={{
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: currency.code === curr.code ? '#1D1D21' : 'var(--text-muted)',
                      background: currency.code === curr.code ? '#ffffff' : 'transparent',
                      transition: 'all 0.2s'
                    }}
                  >
                    {curr.code} ({curr.symbol})
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginBottom: '32px' }}>
            {/* Total Balance */}
            <div style={{ padding: '20px', borderRadius: '16px', background: '#282C33', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '8px' }}>
                <span>Net Cloud Balance</span>
                <Wallet size={18} style={{ color: '#ffffff' }} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                {formatMoney(netBalance)}
              </div>
            </div>

            {/* Total Income */}
            <div style={{ padding: '20px', borderRadius: '16px', background: '#282C33', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '8px' }}>
                <span>Total Monthly Income</span>
                <ArrowUpCircle size={18} style={{ color: '#ffffff' }} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>
                +{formatMoney(totalIncome)}
              </div>
            </div>

            {/* Total Expenses */}
            <div style={{ padding: '20px', borderRadius: '16px', background: '#282C33', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '8px' }}>
                <span>Total Expenses</span>
                <ArrowDownCircle size={18} style={{ color: '#f87171' }} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f87171' }}>
                -{formatMoney(totalExpense)}
              </div>
            </div>
          </div>

          {/* Budget Limit Progress Bar */}
          <div style={{ marginBottom: '32px', padding: '16px 20px', borderRadius: '14px', background: '#282C33', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px' }}>
              <span>Monthly Expense Cap: {formatMoney(totalExpense)} / {formatMoney(budgetLimit)}</span>
              <span style={{ color: budgetSpentPct > 85 ? '#f87171' : '#ffffff' }}>{budgetSpentPct}% Used</span>
            </div>
            <div style={{ height: '8px', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.08)', overflow: 'hidden' }}>
              <div 
                style={{ 
                  height: '100%', 
                  width: `${budgetSpentPct}%`, 
                  borderRadius: '4px',
                  background: budgetSpentPct > 85 ? 'linear-gradient(90deg, #f59e0b, #ef4444)' : '#ffffff',
                  transition: 'width 0.5s ease'
                }} 
              />
            </div>
          </div>

          {/* Main Interactive Grid (Form + Feed) */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '32px' }} className="demo-grid">
            
            {/* Left: Add Transaction Form */}
            <div style={{ padding: '24px', borderRadius: '18px', background: '#282C33', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Plus size={18} style={{ color: '#ffffff' }} />
                Add New Transaction
              </h3>

              <form onSubmit={addTransaction} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {/* Type Switcher */}
                <div style={{ display: 'flex', background: '#1D1D21', padding: '4px', borderRadius: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setType('expense')}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: type === 'expense' ? '#ffffff' : 'var(--text-muted)',
                      background: type === 'expense' ? 'rgba(239, 68, 68, 0.8)' : 'transparent'
                    }}
                  >
                    Expense (-)
                  </button>
                  <button
                    type="button"
                    onClick={() => setType('income')}
                    style={{
                      flex: 1,
                      padding: '8px',
                      borderRadius: '8px',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: type === 'income' ? '#1D1D21' : 'var(--text-muted)',
                      background: type === 'income' ? '#ffffff' : 'transparent'
                    }}
                  >
                    Income (+)
                  </button>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Starbucks Coffee, Grocery, Uber"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: '#1D1D21',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Amount ({currency.symbol})</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="0.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '10px',
                      background: '#1D1D21',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#fff',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                {type === 'expense' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '6px', fontWeight: 600 }}>Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: '#1D1D21',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#fff',
                        fontSize: '0.88rem',
                        outline: 'none'
                      }}
                    >
                      <option value="Food">Food & Dining</option>
                      <option value="Tech">Tech & Subscriptions</option>
                      <option value="Shopping">Shopping & Fashion</option>
                      <option value="Travel">Travel & Transport</option>
                      <option value="Health">Health & Fitness</option>
                    </select>
                  </div>
                )}

                <button
                  type="submit"
                  style={{
                    marginTop: '8px',
                    padding: '12px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    color: '#1D1D21',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}
                >
                  Sync Entry to Cloud
                </button>
              </form>
            </div>

            {/* Right: Live Transaction Feed */}
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Real-Time Cloud Feed</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>{transactions.length} Entries</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '350px', overflowY: 'auto', paddingRight: '4px' }}>
                {transactions.map((tx) => (
                  <div
                    key={tx.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 16px',
                      borderRadius: '14px',
                      background: '#282C33',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div 
                        style={{ 
                          width: '38px', 
                          height: '38px', 
                          borderRadius: '10px', 
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 700
                        }}
                      >
                        {tx.title[0]}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{tx.title}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>{tx.category} • {tx.date}</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <div style={{ fontSize: '0.95rem', fontWeight: 800, color: tx.type === 'income' ? '#ffffff' : '#f87171' }}>
                        {tx.type === 'income' ? '+' : '-'}{formatMoney(tx.amount)}
                      </div>
                      <button
                        onClick={() => deleteTransaction(tx.id)}
                        style={{ color: 'var(--text-subtle)', padding: '4px' }}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
