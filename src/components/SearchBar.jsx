/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit} className="search-bar__form">
        <div className="search-bar__input-wrapper">
          <span className="search-bar__icon">🔍</span>
          <input
            type="search"
            className="search-bar__input"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button type="submit" className="search-bar__button">
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
