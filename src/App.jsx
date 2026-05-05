import { useState, useEffect } from "react"; // Importamos hooks de React

import Form from "./components/Form";
import WeatherList from "./components/WeatherList";

function App() {
  const [city, setCity] = useState("Madrid"); // Madrid será el valor por defecto
  const [weather, setWeather] = useState([]); // Array donde se guardará el resultado de la llamada a la API
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  // Sólo se ejecuta una vez al cargar la página, intenta buscar prnóstico por la geolocalización del navegador
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        fetchWeatherCoords(lat, lon);
      },
      (error) => {
        console.log(error);
        fetchWeather("Madrid");
      },
    );
  }, []);

  // Se ejecuta cada vez que cambia el valor de city (submit del Form)
  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=es`,
      );

      const data = await res.json();

      if (data.cod !== "200" && data.cod !== 200) {
        // Si la respuesta no es exitosa (distinto de 200)
        setError("Ciudad no encontrada");
        setWeather([]);
        setCity("");
        return;
      }

      // Filtramos los datos para quedarnos con el pronóstico de las 12:00 de cada día, así sólo tendremos un registro por día
      const onePerDay = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00"),
      );

      setError("");
      setWeather(onePerDay);
      // console.log(weather);
    } catch (error) {
      setError("Error de conexión");
    }
  };

  const fetchWeatherCoords = async (lat, lon) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`,
      );

      const data = await res.json();

      if (data.cod !== "200" && data.cod !== 200) {
        // Si la respuesta no es exitosa (distinto de 200)
        setError("No se pudo obtener el clima");
        return;
      }

      // Filtramos los datos para quedarnos con el pronóstico de las 12:00 de cada día, así sólo tendremos un registro por día
      const onePerDay = data.list.filter((item) =>
        item.dt_txt.includes("12:00:00"),
      );

      setCity(data.city.name);
      setWeather(onePerDay);
      setError("");
    } catch (error) {
      setError("Error de conexión");
    }
  };

  return (
    <main>
      <h1>Weather App</h1>
      <Form setCity={setCity} />
      {error && <p>{error}</p>}
      {city !== "" && <h2>Pronóstico de {city}</h2>}
      <WeatherList weather={weather} />
    </main>
  );
}

export default App;
