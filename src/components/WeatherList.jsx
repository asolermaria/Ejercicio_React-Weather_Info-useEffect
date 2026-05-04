import WeatherCard from "./WeatherCard";
import { v4 as uuidv4 } from "uuid";

function WeatherList({ weather }) {
  return (
    <section>
      {weather.slice(0,5).map((item) => ( /*Recorre los 5 primeros elementos del array*/
        <WeatherCard key={uuidv4()} item={item} />
      ))}
    </section>
  );
}

export default WeatherList;