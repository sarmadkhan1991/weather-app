import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

// WMO Weather interpretation codes
// Reference: https://open-meteo.com/en/docs
export function getWeatherIcon(code) {
  const iconMap = {
    0: <WiDaySunny />, // Clear sky
    1: <WiDaySunny />, // Mainly clear
    2: <WiCloudy />,   // Partly cloudy
    3: <WiCloudy />,   // Overcast
    45: <WiCloudy />,  // Fog
    48: <WiCloudy />,  // Depositing rime fog
    51: <WiRain />,    // Drizzle light
    53: <WiRain />,    // Drizzle moderate
    55: <WiRain />,    // Drizzle dense
    61: <WiRain />,    // Rain slight
    63: <WiRain />,    // Rain moderate
    65: <WiRain />,    // Rain heavy
    71: <WiSnow />,    // Snow fall slight
    73: <WiSnow />,    // Snow fall moderate
    75: <WiSnow />,    // Snow fall heavy
    95: <WiThunderstorm />, // Thunderstorm
    96: <WiThunderstorm />, // Thunderstorm with hail
    99: <WiThunderstorm />, // Thunderstorm with heavy hail
  };

  return iconMap[code] || <WiDaySunny />;
}