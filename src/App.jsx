import { useState, useEffect } from "react"; // Importamos hooks de React

import Form from "./components/Form";
import WeatherList from "./components/WeatherList";

function App() {
  const [city, setCity] = useState("Madrid"); // Madrid será el valor por defecto
  const [weather, setWeather] = useState([]);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => { // Se ejecuta cada vez que cambia el valor de city (submit del Form)
    fetchWeather(city);
  }, [city]);

  const fetchWeather = async (cityName) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric&lang=es`,
      );

      const data = await res.json();

      if (data.cod === "404") {
        setError("Ciudad no encontrada");
        setWeather([]);
        return;
      }

      setError("");
      setWeather(data.list);
      console.log(weather);
      
    } catch (error) {
      setError("Error de conexión");
    }
  };

  return (
    <main>
      <h1>Weather App</h1>
      <Form setCity={setCity} /> 
      {error && <p>{error}</p>}
      <WeatherList weather={weather} />
    </main>
  );
}

export default App;
