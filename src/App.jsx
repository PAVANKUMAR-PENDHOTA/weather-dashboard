/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import SearchHistory from './components/SearchHistory';
import { loadSearchHistory, addToSearchHistory } from './utils/helpers';
import { getTheme, setTheme, toggleTheme as toggleThemeService, getThemeIcon } from './services/themeService';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState(() => loadSearchHistory());
  const [locationLoaded, setLocationLoaded] = useState(false);
  const [theme, setThemeState] = useState(() => getTheme());

  // Toggle theme function
  const handleToggleTheme = () => {
    const newTheme = toggleThemeService();
    setThemeState(newTheme);
  };

  // Apply theme on mount
  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  // Load weather for current location on first render
  useEffect(() => {
    const loadCurrentLocationWeather = async () => {
      if (navigator.geolocation) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            try {
              const response = await fetch(
                `${import.meta.env.VITE_BASE_URL}?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
              );

              if (response.ok) {
                const data = await response.json();
                setWeather(data);
                setLocationLoaded(true);
              }
            } catch (err) {
              console.error("Failed to fetch weather for current location:", err);
              setLocationLoaded(true);
            } finally {
              setLoading(false);
            }
          },
          (error) => {
            // Geolocation denied or unavailable, just skip and let user search
            console.log("Geolocation permission denied or unavailable");
            setLocationLoaded(true);
            setLoading(false);
          }
        );
      } else {
        // Geolocation not supported
        setLocationLoaded(true);
      }
    };

    loadCurrentLocationWeather();
  }, []);
  const handleSearch = async (city) => {
    setLoading(true);
    setError(null);
    setWeather(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found. Please check the spelling!");
        } else if (response.status === 401) {
          throw new Error("Invalid API key. Please check your .env file configuration.");
        }
        throw new Error("Failed to fetch weather data.");
      }

      const data = await response.json();
      setWeather(data);
      
      // Add to search history
      const updatedHistory = addToSearchHistory(city);
      setSearchHistory(updatedHistory);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    <div className="app-container" data-theme={theme}>
      <button className="theme-toggle-btn" onClick={handleToggleTheme} title="Toggle dark/light mode">
        {getThemeIcon(theme)}
      </button>

      <h1 className="app-title">🌦️ Weather Dashboard</h1>
      
      <div className="search-bar-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      <div className="loader-container">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
      </div>
      
      {!loading && weather && (
        <div className="app-content-wrapper">
          <div className="weather-card-container">
            <WeatherCard
              city={weather.name}
              temperature={weather.main.temp}
              description={weather.weather[0].description}
              humidity={weather.main.humidity}
              windSpeed={weather.wind.speed}
              weatherMain={weather.weather[0].main}
            />
          </div>
        </div>
      )}

      {searchHistory.length > 0 && (
        <div className="search-history-section">
          <SearchHistory history={searchHistory} onCityClick={handleSearch} />
        </div>
      )}
    </div>
  )
}

export default App
