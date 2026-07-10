const fetchWeather = async (city) => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`
    );

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

export { fetchWeather };
export default { fetchWeather };
