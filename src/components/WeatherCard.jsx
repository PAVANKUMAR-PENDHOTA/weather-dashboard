/* eslint-disable no-unused-vars */
import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({ city, temperature, description, humidity, windSpeed, weatherMain }) => {
  // Advanced emoji mapping based on weather conditions
  const getWeatherEmoji = (condition) => {
    const mainCondition = condition?.toLowerCase() || '';
    
    const emojiMap = {
      'clear': '☀️',
      'sunny': '☀️',
      'clouds': '☁️',
      'overcast': '🌫️',
      'cloudy': '☁️',
      'rain': '🌧️',
      'drizzle': '🌦️',
      'thunderstorm': '⛈️',
      'snow': '❄️',
      'mist': '🌫️',
      'smoke': '💨',
      'haze': '🌫️',
      'dust': '🌪️',
      'fog': '🌫️',
      'sand': '🌪️',
      'ash': '💨',
      'squall': '🌪️',
      'tornado': '🌪️',
    };

    for (const [key, emoji] of Object.entries(emojiMap)) {
      if (mainCondition.includes(key)) {
        return emoji;
      }
    }
    return '🌈'; // Default
  };

  const getTemperatureEmoji = (temp) => {
    if (temp < 0) return '🥶';
    if (temp < 10) return '❄️';
    if (temp < 20) return '🧥';
    if (temp < 30) return '😊';
    return '🔥';
  };

  const weatherEmoji = getWeatherEmoji(weatherMain);
  const tempEmoji = getTemperatureEmoji(temperature);

  return (
    <div className="weather-card">
      <div className="weather-card__header">
        <div className="weather-card__location">
          <span className="weather-card__location-emoji">📍</span>
          <h2 className="weather-card__city">{city}</h2>
        </div>
        <div className="weather-card__temp-display">
          <span className="weather-card__temp-emoji">{tempEmoji}</span>
          <p className="weather-card__temp">{temperature.toFixed(1)}°C</p>
        </div>
      </div>

      <div className="weather-card__condition">
        <span className="weather-card__condition-emoji">{weatherEmoji}</span>
        <p className="weather-card__description">{description}</p>
      </div>

      <div className="weather-card__details">
        <div className="weather-card__detail">
          <span className="detail-emoji">💧</span>
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="weather-card__detail">
          <span className="detail-emoji">💨</span>
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{windSpeed.toFixed(1)} km/h</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
