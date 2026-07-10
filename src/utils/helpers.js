const STORAGE_KEY = 'weatherSearchHistory';
const MAX_HISTORY = 5;

export const loadSearchHistory = () => {
  try {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error loading search history:', error);
    return [];
  }
};

export const saveSearchHistory = (history) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  } catch (error) {
    console.error('Error saving search history:', error);
  }
};

export const addToSearchHistory = (city) => {
  if (!city || !city.trim()) return [];

  const history = loadSearchHistory();
  const normalizedCity = city.trim();

  // Remove if already exists to avoid duplicates
  const filtered = history.filter(
    (item) => item.toLowerCase() !== normalizedCity.toLowerCase()
  );

  // Add the new city to the beginning
  const updated = [normalizedCity, ...filtered].slice(0, MAX_HISTORY);

  saveSearchHistory(updated);
  return updated;
};

export const clearSearchHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing search history:', error);
  }
};
