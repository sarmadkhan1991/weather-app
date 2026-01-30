import { useState } from 'react';
import { getCoordinatesFromZip } from '../services/geoCoding';
import { getWeatherData } from '../services/weatherApi';

export function useWeather() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (zipCode) => {
    setLoading(true);
    setError(null);
    
    try {
      // Step 1: Get coordinates from ZIP
      const coords = await getCoordinatesFromZip(zipCode);
      setLocation({ city: coords.city, state: coords.state });
      
      // Step 2: Get weather data
      const weatherData = await getWeatherData(coords.latitude, coords.longitude);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data');
      setWeather(null);
      setLocation(null);
    } finally {
      setLoading(false);
    }
  };

  return { weather, location, loading, error, fetchWeather };
}