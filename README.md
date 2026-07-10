# 🌦️ Weather Dashboard

A beautiful, responsive, and feature-rich weather application built with React and Vite. Get real-time weather information for any city with a modern UI, smooth animations, and dark/light mode support.

## ✨ Features

- 📍 **Auto Location Detection** - Automatically shows weather for your current location on first load
- 🔍 **Real-time Weather Search** - Search for weather in any city worldwide
- 🌓 **Dark/Light Mode** - Toggle between beautiful dark and light themes with persistent preference
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Modern UI Design** - Beautiful gradient backgrounds with animated cloud effects
- 💾 **Search History** - Stores your last 5 unique city searches using localStorage
- ⚡ **Smooth Animations** - Bubble loading animation, floating effects, and smooth transitions
- 🌡️ **Detailed Weather Info** - Temperature, humidity, wind speed, and weather conditions
- 😊 **Advanced Weather Emojis** - Dynamic emojis based on weather conditions and temperature
- ✅ **Error Handling** - Comprehensive error messages for better user experience
- 🚀 **Fast Performance** - Built with Vite for quick development and optimized builds
- 📦 **Production Ready** - Modular service architecture for easy scaling

## 🎯 Weather Information Displayed

- **Temperature** - Current temperature with temperature-based emoji indicator
- **City Location** - City name with location emoji
- **Weather Condition** - Description of current weather with dynamic emoji (sunny, cloudy, rainy, etc.)
- **Humidity** - Current humidity percentage
- **Wind Speed** - Wind speed in km/h

## 🛠️ Tech Stack

- **React** - UI library with hooks
- **Vite** - Next generation build tool and development server
- **CSS3** - Advanced styling with animations and responsive design
- **OpenWeatherMap API** - Weather data provider
- **localStorage** - Client-side data persistence
- **Geolocation API** - Browser location detection

## 📦 Installation

1. **Clone the repository**
   \\\ash
   git clone <repository-url>
   cd weather-dashboard
   \\\

2. **Install dependencies**
   \\\ash
   npm install
   \\\

3. **Set up environment variables**
   \\\ash
   # Create .env file
   touch .env
   \\\
   
   Add the following to \.env\:
   \\\env
   VITE_BASE_URL=https://api.openweathermap.org/data/2.5/weather
   VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
   \\\

4. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Navigate to API keys section
   - Generate an API key
   - Copy and paste it to your .env file

## 🚀 Development & Build

### Start Development Server
\\\ash
npm run dev
\\\
The app will be available at \http://localhost:5173\

### Build for Production
\\\ash
npm run build
\\\

### Preview Production Build
\\\ash
npm run preview
\\\

## 📚 Service Architecture

The app uses a modular service-based architecture for clean code organization and easy deployment:

### Core Services

**weatherApi.js** - Weather API service
- \etchWeather(city)\ - Fetch weather by city name
- Centralized API call handling
- Error handling with specific error messages
- Returns JSON data from OpenWeatherMap API

**themeService.js** - Theme management service
- \getTheme()\ - Get current theme with system preference fallback
- \setTheme(theme)\ - Apply theme to DOM and localStorage
- \	oggleTheme()\ - Toggle between light/dark modes
- \getThemeIcon(theme)\ - Get appropriate emoji icon
- \initializeTheme()\ - Initialize theme on app load

**geolocationService.js** - Geolocation service
- \getCurrentLocation()\ - Get user's coordinates via Geolocation API
- \getWeatherForCurrentLocation(fetchWeather)\ - Fetch weather for user's location
- Graceful error handling for permission denial

**helpers.js** - Utility functions
- \loadSearchHistory()\ - Load search history from localStorage
- \saveSearchHistory(history)\ - Save history to localStorage
- \ddToSearchHistory(city)\ - Add city with deduplication
- \clearSearchHistory()\ - Clear all search history

## 🎨 Theme System

The app includes a comprehensive theming system:

### Light Mode (Default)
- Primary Gradient: #667eea (purple) → #764ba2 (deep purple) → #f093fb (pink)
- Text: #1f2937 (dark gray)
- Cards: rgba(255, 255, 255, 0.95) - white with transparency
- Perfect for daytime browsing

### Dark Mode
- Primary Gradient: #1a1a2e → #16213e → #0f3460 (dark blue tones)
- Text: #e0e0e0 (light gray)
- Cards: rgba(30, 30, 50, 0.95) - dark with transparency
- Reduces eye strain for night-time use

### Toggle Feature
- Click the theme icon (🌙/☀️) in the top-right corner to switch
- Preference is saved to localStorage
- Automatically applies on subsequent visits
- Smooth 0.3s transitions between themes

## 📱 Responsive Design

### Breakpoints
- **Desktop** (>768px) - Full grid layout, large components
- **Tablet** (600px-768px) - Optimized 1-2 column layout
- **Mobile** (<600px) - Single column, touch-optimized

### Mobile Optimizations
- Fixed toggle button in top-right corner (won't interfere with layout)
- Touch-friendly button sizes (min 38px on mobile)
- Readable font sizes using CSS clamp()
- Proper spacing and padding for comfortable interaction
- All interactive elements are easily tappable

## 📍 Geolocation Feature

- Automatically detects user's current location on first app load
- Displays weather for the detected location instantly
- Browser prompts user for permission (can be denied)
- Gracefully falls back to manual search if permission denied
- Works on both desktop and mobile browsers supporting Geolocation API
- No tracking or persistent location storage

## 🌓 Dark Mode & Light Mode

The app includes a beautiful dark/light theme toggle:

- **Auto Detection** - Respects system theme preference
- **Manual Toggle** - Click the 🌙/☀️ button to switch anytime
- **Persistent** - Your preference is saved and restored
- **Smooth Transitions** - All colors transition smoothly
- **CSS Variables** - Uses custom properties for easy customization

## ⚠️ Error Handling

The app handles the following error scenarios gracefully:

- **404 City Not Found** - "City not found. Please check the spelling!"
- **401 Invalid API Key** - "Invalid API key. Please check your .env file configuration."
- **Network Errors** - "Failed to fetch weather data."
- **Geolocation Denied** - Falls back to manual search
- **Invalid Input** - Form validation prevents empty searches

## 🚀 Deployment

### Environment Requirements
- Node.js 14+ 
- npm or yarn

### Build & Deploy

1. **Build the project**
   \\\ash
   npm run build
   \\\

2. **Output Location**
   - Production build: \dist/\ folder
   - Optimized and minified for production

3. **Deploy to Static Hosting**
   
   **Vercel (Recommended)**
   \\\ash
   npm i -g vercel
   vercel
   \\\

   **Netlify**
   \\\ash
   npm run build
   # Upload dist/ folder to Netlify
   \\\

   **GitHub Pages**
   \\\ash
   npm run build
   # Deploy dist/ folder
   \\\

4. **Environment Variables**
   - Add \VITE_BASE_URL\ and \VITE_WEATHER_API_KEY\ to your hosting platform's environment settings
   - Never commit .env to version control

### Performance Optimizations
- Vite provides fast builds and optimized bundles
- CSS is scoped and optimized
- Code splitting for better performance
- Service functions are modular and tree-shakeable

## 📁 Project Structure

\\\
src/
├── App.jsx                    # Main app component
├── App.css                    # App styles
├── main.jsx                   # Entry point
├── index.css                  # Global styles & themes
├── components/
│   ├── SearchBar.jsx          # Search input component
│   ├── SearchBar.css          # Search styles
│   ├── WeatherCard.jsx        # Weather display component
│   ├── WeatherCard.css        # Weather card styles
│   ├── SearchHistory.jsx      # Search history component
│   ├── SearchHistory.css      # History styles
│   ├── Loader.jsx             # Loading animation
│   ├── Loader.css             # Loader styles
│   ├── ErrorMessage.jsx       # Error display
│   └── ErrorMessage.css       # Error styles
├── services/
│   ├── weatherApi.js          # Weather API service
│   ├── themeService.js        # Theme management
│   └── geolocationService.js  # Geolocation service
└── utils/
    └── helpers.js             # Storage & utility functions
\\\

## 🔧 Configuration Files

- \ite.config.js\ - Vite build configuration
- \eslint.config.js\ - ESLint rules for code quality
- \package.json\ - Dependencies and scripts
- \.env\ - Environment variables (local development)

## 🎯 Future Enhancements

- [ ] 5-day forecast
- [ ] Multiple temperature units (Fahrenheit, Kelvin)
- [ ] Favorite cities list
- [ ] Weather alerts and notifications
- [ ] Weather maps integration
- [ ] Historical weather data
- [ ] Wind direction indicator
- [ ] Sunrise/sunset times
- [ ] UV index
- [ ] Air quality index

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
- Follow the existing code style
- Keep services modular and reusable
- Test changes on mobile devices
- Update documentation as needed

## 📄 License

This project is open source and available for educational and personal use.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) - Weather data provider
- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool

## 📧 Support

For issues, questions, or suggestions, please open an issue on the repository.

---

**Built with ❤️ using React and Vite**

**Last Updated:** July 10, 2026

**Version:** 2.0.0 - Production Ready

<p align="center">
  <img src="./assets/dashboard-preview-1.PNG" width="45%" />
  <img src="./assets/dashboard-preview-2.png" width="45%" />
</p>

![Weather Dashboard Preview](./assets/dashboard-preview-1.png)
![Weather Dashboard Preview](./assets/dashboard-preview-2.png)
