function WeatherCard({ item }) {
  const imagen = item.weather[0].icon;

  return (
    <article>
      <h3>{item.dt_txt}</h3> {/*Fecha y hora*/}
      <p>{item.main.temp} °C</p> {/*Temperatura*/}
      <p>{item.weather[0].main}</p> {/*Tiempo*/}
      <img
        src={`https://openweathermap.org/img/wn/${imagen}.png`}
        alt={`${item.weather[0].main}`}
      />
    </article>
  );
}

export default WeatherCard;