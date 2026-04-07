import styles from './ThemeSwitcher.module.css';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? '🌙' : '☀️';
  const themeText = theme === 'light' ? 'Темная тема' : 'Светлая тема';

  return (
    <div className={styles.themeSwitcher}>
      <button className={styles.themeSwitcherButton} onClick={toggleTheme}>
        <span className={styles.themeSwitcherIcon}>{themeIcon}</span>
        <span className={styles.themeSwitcherText}>{themeText}</span>
      </button>
    </div>
  );
};

export default ThemeSwitcher;
