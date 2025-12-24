import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <Sun className="theme-icon" />
            ) : (
                <Moon className="theme-icon" />
            )}
        </button>
    );
};

export default ThemeToggle;
