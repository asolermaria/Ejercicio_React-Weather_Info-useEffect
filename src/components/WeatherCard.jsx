function WeatherCard({ item }) {
  const icon = item.weather[0].icon;

  return (
    <article>
      <h3>{item.dt_txt}</h3>

      <p>{item.main.temp} °C</p>

      <p>{item.weather[0].main}</p>

      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="weather"
      />
    </article>
  );
}

export default WeatherCard;