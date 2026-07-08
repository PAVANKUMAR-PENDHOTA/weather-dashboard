/* eslint-disable no-unused-vars */
import React from 'react'

const weatherApi = () => {

    const fetchWeather = async (city) => {
  try {
    // 1. Added &units=metric to the query string
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    );

    // 2. Catch API errors (like 404 City Not Found or 401 Invalid Key)
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error("City not found. Please check the spelling!");
      } else if (response.status === 401) {
        throw new Error("Invalid API key. Please check your .env file configuration.");
      }
      throw new Error("Failed to fetch weather data.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

  return (
    <div>
      
    </div>
  )
}

export default weatherApi
