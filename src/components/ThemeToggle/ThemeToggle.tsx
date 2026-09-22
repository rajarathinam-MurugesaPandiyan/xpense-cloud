import React from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { Sun, Moon, Laptop } from 'lucide-react';
import styles from './ThemeToggle.module.scss';

export interface ThemeToggleProps {
  variant?: 'segmented' | 'compact';
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  variant = 'segmented',
  className = '',
}) => {
  const { theme, resolvedTheme, setTheme, toggleTheme, isDark } = useTheme();

  if (variant === 'compact') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        title={`Currently ${theme} mode (${resolvedTheme}). Click to toggle.`}
        className={`${styles.compactButton} ${className}`}
      >
        {isDark ? (
          <Sun size={18} style={{ color: '#F59E0B', transition: 'transform 0.3s ease' }} />
        ) : (
          <Moon size={18} style={{ color: '#10B981', transition: 'transform 0.3s ease' }} />
        )}
      </button>
    );
  }

  // Premium Segmented Control (Light / System / Dark)
  return (
    <div
      role="radiogroup"
      aria-label="Theme selector"
      className={`${styles.segmentedWrapper} ${className}`}
    >
      {/* Light Option */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'light'}
        onClick={() => setTheme('light')}
        title="Light Mode"
        className={`${styles.segmentItem} ${theme === 'light' ? styles.activeLight : ''}`}
      >
        <Sun size={14} style={{ color: theme === 'light' ? '#F59E0B' : 'currentColor' }} />
        <span className={styles.themeLabel}>Light</span>
      </button>

      {/* System Option */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'system'}
        onClick={() => setTheme('system')}
        title="Auto match OS system preference"
        className={`${styles.segmentItem} ${theme === 'system' ? styles.activeSystem : ''}`}
      >
        <Laptop size={14} style={{ color: theme === 'system' ? 'var(--accent)' : 'currentColor' }} />
        <span className={styles.themeLabel}>Auto</span>
      </button>

      {/* Dark Option */}
      <button
        type="button"
        role="radio"
        aria-checked={theme === 'dark'}
        onClick={() => setTheme('dark')}
        title="Dark Mode (Obsidian OLED)"
        className={`${styles.segmentItem} ${theme === 'dark' ? styles.activeDark : ''}`}
      >
        <Moon size={14} style={{ color: theme === 'dark' ? 'var(--accent)' : 'currentColor' }} />
        <span className={styles.themeLabel}>Dark</span>
      </button>
    </div>
  );
};

export default ThemeToggle;
