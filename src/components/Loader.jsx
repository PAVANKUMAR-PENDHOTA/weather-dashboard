/* eslint-disable no-unused-vars */
import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className="loader">
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <p className="loader-text">Loading weather data...</p>
    </div>
  )
}

export default Loader
