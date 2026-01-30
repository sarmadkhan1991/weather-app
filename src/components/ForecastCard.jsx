// components/ForecastCard.jsx
import { format } from 'date-fns';
import { getWeatherIcon } from '../utils/weatherIcons';

const ForecastCard = ({ forecast, unit }) => {

  const forecasts = forecast.map((forecast) => {
    const { date, highTemp, weatherCode } = forecast;

    const displayHigh = unit ? highTemp : ((highTemp - 32) * 5/9);

    return (
      <div className="forecast-card bg-gray-100 flex flex-col justify-center items-center rounded-2xl box-border size-30 m-1" key={date}>
        <div className="icon text-violet-900 text-5xl">{getWeatherIcon(weatherCode)}</div>
        <div className="temps text-zinc-950 font-bold text-2xl">
          <span className="high">{Math.round(displayHigh)}°{unit ? 'F' : 'C'}</span>
        </div>
        <div className="day text-gray-500 text-2xl">{format(new Date(date), 'EEE')}</div>
      </div>
    )
  });

  return (
    <div className="flex flex-row justify-between">
      {forecasts}
    </div>
  );
}

export default ForecastCard;