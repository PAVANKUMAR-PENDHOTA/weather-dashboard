/* eslint-disable no-unused-vars */
import React from 'react'

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const city = formData.get('city');
    onSearch(city);
  };

  return (
    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', height: '40px', marginBottom: '16px' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="city"
          placeholder="Search..."
          style={{ width: '50em', height: '40px', padding: '10px' }}
        />
        <button type="submit" style={{ width: '10em', height: '40px', padding: '10px' }}>
          Search
        </button>
      </form>
    </div>
  )
}

export default SearchBar
