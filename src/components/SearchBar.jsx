/* eslint-disable no-unused-vars */
import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-bar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', height: '40px', marginBottom: '16px' }}>
      <input type="search" placeholder="Search..." style={{ width: '50em', height: '40px', padding: '10px' }} />
      <button type="submit" style={{ width: '10em', height: '40px', padding: '10px' }} >Search</button>
    </div>
  )
}

export default SearchBar
