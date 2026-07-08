/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  return (
    <>
      <SearchBar />
      <WeatherCard />
    </>
  )
}

export default App
