const WeatherCard = (props) => {
  const { name, main, weather: details } = props.weather;

  const icon = details[0]?.icon;

  return (
    <div className="bg-white-200 bg-opacity-20 backdrop-blur-md-44  mt-8 rounded-xl text-center shadow-lg w-full max-w-sm">
      <h2 className="text-5xl text-green-200 font-bold mb-5">{name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather-icon"
        className="mx-auto"
      />
      <h2 className="text-green-50">{details[0].description}</h2>
      <p className="text-3xl font-semibold mt-2">{main.temp}°C</p>
      <p className="text-sm mt-1">Humidity: {main.humidity}%</p>
    </div>
  );
};

export default WeatherCard;