/* eslint-disable no-unused-vars */
import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ city, temperature, description, humidity, windSpeed }) => {
  return (
    <div className="weather-card">
      <div className="weather-card__header">
        <h2 className="weather-card__city">📍 {city}</h2>
        <p className="weather-card__temp">{temperature}°C</p>
      </div>
      <p className="weather-card__description">☁️ {description || 'N/A'}</p>
      <div className="weather-card__details">
        <p className="weather-card__detail">💧 Humidity: {humidity}%</p>
        <p className="weather-card__detail">🌬️ Wind: {windSpeed} km/h</p>
      </div>
    </div>
  )
}

export default WeatherCard
