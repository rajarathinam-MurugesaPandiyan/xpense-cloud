import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { Sun, Moon, Laptop } from 'lucide-react';
import styles from './FloatingThemeWidget.module.scss';

export const FloatingThemeWidget: React.FC = () => {
  const { theme, resolvedTheme, setTheme, toggleTheme, isDark } = useTheme();
  const [expanded, setExpanded] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  // Keyboard shortcut listener: Press "T" to toggle theme
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      // Ignore if user is typing in an input, textarea, or contentEditable
      if (
        target &&
        (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) ||
          target.isContentEditable)
      ) {
        return;
      }
      if (e.key === 't' || e.key === 'T') {
        toggleTheme();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [toggleTheme]);

  return (
    <div
      className={styles.floatingContainer}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => {
        setShowTooltip(false);
        setExpanded(false);
      }}
    >
      {/* Keyboard Shortcut Tooltip */}
      {showTooltip && !expanded && (
        <div className={styles.tooltip}>
          <span>Change theme</span>
          <kbd className={styles.kbdKey}>T</kbd>
        </div>
      )}

      {/* Expanded Segmented Control Pill (Light / System / Dark) */}
      {expanded ? (
        <div className={styles.expandedPill}>
          {/* Light Mode Button */}
          <button
            type="button"
            onClick={() => setTheme('light')}
            title="Switch to Light Theme"
            className={`${styles.pillButton} ${theme === 'light' ? styles.active : ''}`}
          >
            <Sun size={14} style={{ color: theme === 'light' ? '#FFFFFF' : '#F9AB00' }} />
            <span>Light</span>
          </button>

          {/* System Mode Button */}
          <button
            type="button"
            onClick={() => setTheme('system')}
            title="Auto-match System Preference"
            className={`${styles.pillButton} ${theme === 'system' ? styles.active : ''}`}
          >
            <Laptop size={14} style={{ color: theme === 'system' ? '#FFFFFF' : 'currentColor' }} />
            <span>Auto</span>
          </button>

          {/* Dark Mode Button */}
          <button
            type="button"
            onClick={() => setTheme('dark')}
            title="Switch to Dark Theme"
            className={`${styles.pillButton} ${theme === 'dark' ? styles.active : ''}`}
          >
            <Moon size={14} style={{ color: theme === 'dark' ? '#FFFFFF' : '#A8C7FA' }} />
            <span>Dark</span>
          </button>
        </div>
      ) : (
        /* Collapsed Floating Island FAB */
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label="Toggle theme settings"
          className={styles.collapsedFab}
        >
          {isDark ? (
            <Moon size={17} style={{ color: '#A8C7FA' }} />
          ) : (
            <Sun size={17} style={{ color: '#F9AB00' }} />
          )}
          <span style={{ fontSize: '0.82rem', fontWeight: 600, textTransform: 'capitalize' }}>
            {resolvedTheme}
          </span>
          <div className={styles.activeIndicator} />
        </button>
      )}
    </div>
  );
};

export default FloatingThemeWidget;
