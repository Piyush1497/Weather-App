import { useState } from 'react';
import WeatherCard from './components/weathercard';

const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    const apiKey = 'bc86cad17e13257d2f37d6a2a6e6554a'; // Replace with your real API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('City not found');
      const data = await response.json();
      console.log(data);
      setWeather(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setWeather(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-sky-400 to-yellow-600 text-white px-4">
      <h1 className="text-5xl font-bold mb-9">Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        className="px-9 py-9 border rounded shadow text-black w-full max-w-md mb-4"
      />
      <button
        onClick={fetchWeather}
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200 font-semibold"
      >
        Get Weather
      </button>

      {error && <p className="text-red-200 mt-4">{error}</p>}

      {weather && <WeatherCard weather={weather} />}
    </div>
  );
};

export default App;