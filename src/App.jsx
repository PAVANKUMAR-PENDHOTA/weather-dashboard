/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }


  return (
    // <>
    //   <SearchBar />
    //   <WeatherCard />
    // </>
    <div className="app-container">
      <h1>🌦 Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <ErrorMessage error={error} />
      {loading && <Loader />}

      {!loading && weather && (
        <WeatherCard
          city={weather.name}
          temperature={weather.main.temp}
          description={weather.weather[0].description}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
        />
      )}
    </div>
  )
}

export default App
