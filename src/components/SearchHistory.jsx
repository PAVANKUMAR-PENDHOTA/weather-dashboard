/* eslint-disable no-unused-vars */
import React from 'react'
import { clearSearchHistory } from '../utils/helpers'
import './SearchHistory.css'

const SearchHistory = ({ history, onCityClick }) => {
  const handleClear = () => {
    clearSearchHistory();
    window.location.reload();
  };

  return (
    <div className="search-history">
      <div className="search-history__header">
        <h3 className="search-history__title">📚 Recent Searches</h3>
        <button 
          onClick={handleClear}
          className="search-history__clear-btn"
          title="Clear all search history"
        >
          🗑️ Clear
        </button>
      </div>
      <ul className="search-history__chips">
        {history.map((city, index) => (
          <li 
            key={index}
            className="search-history__chip"
            onClick={() => onCityClick && onCityClick(city)}
            title={`Search for ${city}`}
          >
            {city}
          </li>
        ))}
      </ul> 
    </div>
  )
}

export default SearchHistory
