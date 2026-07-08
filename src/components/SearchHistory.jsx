/* eslint-disable no-unused-vars */
import React from 'react'

const SearchHistory = ({ history }) => {
  return (
    <div>
      <h2>Search History</h2>
      <ul>
        {history.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul> 
    </div>
  )
}

export default SearchHistory
