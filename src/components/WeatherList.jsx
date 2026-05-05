import WeatherCard from "./WeatherCard";
import { v4 as uuidv4 } from "uuid";

function WeatherList({ weather }) {
  return (
    <section>
      {weather.map((item) => (
        <WeatherCard key={uuidv4()} item={item} />
      ))}
    </section>
  );
}

export default WeatherList;