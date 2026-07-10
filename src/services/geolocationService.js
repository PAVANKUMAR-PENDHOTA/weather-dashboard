/**
 * Geolocation Service
 * Handles geolocation API calls and permissions
 */

/**
 * Get current location coordinates
 * @returns {Promise<{latitude: number, longitude: number} | null>}
 */
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log('Geolocation permission denied or error:', error.message);
        resolve(null); // Return null instead of rejecting to gracefully handle denial
      }
    );
  });
};

/**
 * Get weather for current location
 * @param {Function} fetchWeather - Weather fetch function
 * @returns {Promise<Object | null>} - Weather data or null if location unavailable
 */
export const getWeatherForCurrentLocation = async () => {
  try {
    const location = await getCurrentLocation();
    if (!location) {
      return null;
    }

    const baseUrl = import.meta.env.VITE_BASE_URL;
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    const response = await fetch(
      `${baseUrl}?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting weather for current location:', error);
    return null;
  }
};
