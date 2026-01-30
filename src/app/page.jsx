
'use client'; // For Next.js App Router

import { useState, useCallback, use } from 'react';
import SearchBar from '../components/SearchBar';
import CurrentWeather from '../components/CurrentWeather';
import ForecastCard from '@/components/ForecastCard';
import TemperatureToggle from '../components/TemperatureToggle';
import LoadingSpinner from '../components/LoadingSpinner';
import { useWeather } from '../hooks/useWeather';

export default function App() {
  const [unit, setUnit] = useState(true);
  const { weather, location, loading, error, fetchWeather } = useWeather();

  const handleSearch = (zipCode) => {
    fetchWeather(zipCode);
  };

  const temperatureUnit = useCallback(() => {
    setUnit((prev) => !prev)
  }, [unit])

  return (
    <div className="app flex justify-center items-center min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-200 rounded-2xl shadow-2xl p-8">
        <header>
          <SearchBar onSearch={handleSearch} />
        </header>

        <main>
          {loading && <LoadingSpinner />}
          
          {error && <div className="error-message flex justify-center text-gray-500 font-bold">{error}</div>}
          
          {weather && location && (
            <div>
              <div className="rounded-2xl bg-white m-5 p-4">
                <CurrentWeather
                  data={{
                    temperature: weather.current.temperature,
                    city: location.city,
                    state: location.state,
                    weatherCode: weather.current.weatherCode
                  }}
                  unit={unit}
                />
                
                <ForecastCard forecast={weather.daily} unit={unit} />
  
              </div>
  
              <TemperatureToggle onToggle={temperatureUnit} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}