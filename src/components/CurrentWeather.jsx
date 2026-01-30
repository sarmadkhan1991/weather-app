// components/CurrentWeather.jsx
import { getWeatherIcon } from '../utils/weatherIcons';

const CurrentWeather = ({ data, unit }) => {
  if (!data) return null;

  const { temperature, city, state, weatherCode } = data;
  const displayTemp = unit ? temperature : ((temperature - 32) * 5/9);

  return (
    <div className="current-weather mb-2">
      <div className="location text-zinc-950 text-1xl font-bold">
        <h2>{city}, {state}</h2>
      </div>
      <div className="flex flex-row justify-between">
        <div className="temperature text-violet-900 flex flex-row">
          <span className="temp-value text-8xl">{Math.round(displayTemp)}</span>
          <div className="mt-2">
            <span className="temp-unit text-4xl">°{unit ? 'F' : 'C'}</span>
          </div>
        </div>
        <div className="weather-icon text-violet-900 text-8xl mb-4">
          {getWeatherIcon(weatherCode)}
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;