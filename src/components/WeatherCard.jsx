/* eslint-disable no-unused-vars */
import React from 'react'

const WeatherCard = ({ city, temperature, condition, humidity, windSpeed }) => {
  console.log('WeatherCard props:', { city, temperature, condition, humidity, windSpeed });
  return (
    <div>
      <h2>📍 {city}</h2>
      <p>🌡️ {temperature}°C</p>
      <p>☁️ {condition || 'N/A'}</p>
      <p>💧 Humidity: {humidity}%</p>
      <p>🌬️ Wind: {windSpeed} km/h</p>
    </div>
  )
}

export default WeatherCard
