This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Weather App

A responsive weather application built with [React/Next.js] that displays current weather and a 5-day forecast based on ZIP code input.

## Features
- Search weather by ZIP code
- Display current temperature and conditions
- 5-day weather forecast
- Toggle between Fahrenheit and Celsius
- Responsive design

## Tech Stack
- [React/Next.js]
- [Tailwind CSS/CSS Modules]
- Open-Meteo API
- React Icons

## Installation

\`\`\`bash
npm install
\`\`\`

## Running the App

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Choice
I chose Open-Meteo because:
- No API key required
- Free tier is generous
- Built-in geocoding for ZIP codes
- Well-documented

## Design Decisions
- **Component Structure**: Separated concerns into reusable components
- **State Management**: Custom hook for weather logic keeps components clean
- **Error Handling**: User-friendly error messages with retry options
- **Performance**: Minimal re-renders using proper React patterns

## Assumptions
- ZIP codes are US 5-digit format
- Users have internet connection
- Default unit is Fahrenheit

## Future Enhancements
- Add geolocation support
- Hourly forecast view
- Weather alerts
- Favorites/saved locations
- Dark mode