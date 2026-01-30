
export async function getCoordinatesFromZip(zipCode) {
  try {
    // Using Open-Meteo Geocoding API
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${zipCode}&count=1&language=en&format=json`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch location data');
    }
    
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
      throw new Error('ZIP code not found');
    }
    
    const location = data.results[0];
    return {
      latitude: location.latitude,
      longitude: location.longitude,
      city: location.name,
      state: location.admin1 || ''
    };
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
}