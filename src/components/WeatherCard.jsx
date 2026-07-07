/* eslint-disable no-unused-vars */
import React from 'react'

const WeatherCard = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '9px', width: '300px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <h2>📍 Hyderabad</h2>
      <p>🌡️ 32°C</p>
      <p>☁️ Cloudy</p>
      <p>💧 Humidity: 70%</p>
      <p>🌬️ Wind: 15 km/h</p>
    </div>
  )
}

export default WeatherCard
