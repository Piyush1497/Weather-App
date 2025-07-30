const WeatherCard = ({ weather }) => {
  const { name, main, weather: details } = weather;
  const icon = details[0]?.icon;

  return (
    <div className="bg-yellow bg-opacity-20 backdrop-blur-md p-6 mt-8 rounded-xl text-center shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
        className="mx-auto"
      />
      <h2 className="text-xl">{details[0].description}</h2>
      <p className="text-3xl font-semibold mt-2">{main.temp}°C</p>
      <p className="text-sm mt-1">Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;