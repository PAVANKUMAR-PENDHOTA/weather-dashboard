/**
 * Theme Service
 * Manages dark/light theme preference with localStorage persistence
 */

const THEME_STORAGE_KEY = 'appTheme';
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

/**
 * Get the current theme from localStorage or system preference
 * @returns {string} - 'light' or 'dark'
 */
export const getTheme = () => {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      return savedTheme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
    }

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return DARK_THEME;
    }

    return LIGHT_THEME;
  } catch (error) {
    console.error('Error getting theme:', error);
    return LIGHT_THEME;
  }
};

/**
 * Save theme preference to localStorage and apply it to DOM
 * @param {string} theme - 'light' or 'dark'
 */
export const setTheme = (theme) => {
  try {
    const validTheme = theme === DARK_THEME ? DARK_THEME : LIGHT_THEME;
    localStorage.setItem(THEME_STORAGE_KEY, validTheme);
    document.documentElement.setAttribute('data-theme', validTheme);
  } catch (error) {
    console.error('Error setting theme:', error);
  }
};

/**
 * Toggle between light and dark themes
 * @returns {string} - The new theme
 */
export const toggleTheme = () => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
  setTheme(newTheme);
  return newTheme;
};

/**
 * Get the theme toggle button icon
 * @param {string} theme - Current theme
 * @returns {string} - Emoji icon
 */
export const getThemeIcon = (theme) => {
  return theme === LIGHT_THEME ? '🌙' : '☀️';
};

/**
 * Initialize theme on app load
 */
export const initializeTheme = () => {
  const theme = getTheme();
  setTheme(theme);
  return theme;
};
