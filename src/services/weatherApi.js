
export async function getWeatherData(latitude, longitude) {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto&forecast_days=6`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    const data = await response.json();
    
    return {
      current: {
        temperature: data.current.temperature_2m,
        weatherCode: data.current.weather_code
      },
      daily: data.daily.time.slice(1, 6).map((date, index) => ({
        date,
        highTemp: data.daily.temperature_2m_max[index + 1],
        lowTemp: data.daily.temperature_2m_min[index + 1],
        weatherCode: data.daily.weather_code[index + 1]
      }))
    };
  } catch (error) {
    console.error('Weather API error:', error);
    throw error;
  }
}