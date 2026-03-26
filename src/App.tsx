import useSWR from "swr";
import WeatherDetailsSection from "./components/WeatherDetailsSection";
import WeatherHeader from "./components/WeatherHeader";
import "./index.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [data, setData] = useState(``);
  const [location, setLocation] = useState(``);

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=51eecac8cdafc754c007cdb06c0be92f`;

  const searchLocation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      axios.get(weatherUrl).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation(``);
    }
  };

  return (
    <div className="w-full h-svh relative bg-[#0b0b0b86] before:content-[''] before:absolute before:w-full before:h-svh before:top-0 before:left-0 before:-z-10 before:bg-[url('./public/sunset.jpg')] before:bg-cover before:bg-center">
      <div className="max-w-175 h-150 m-auto  relative top-10 flex flex-col justify-between pl-4 max-sm:max-w-125">
        <div className="text-center p-4">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            className="px-4 py-2 border rounded-xl text-xl text-white ::placeholder:text-white bg-[#ffffff34]"
          />
        </div>
        <WeatherHeader data={data} />
        <WeatherDetailsSection data={data} />
      </div>
    </div>
  );
}

export default App;
