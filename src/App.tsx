import useSWR from "swr";
import WeatherDetailsSection from "./components/WeatherDetailsSection";
import WeatherHeader from "./components/WeatherHeader";
import "./index.css";
import axios from "axios";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const fetcher = (url: string) => axios.get(url).then(res => res.data);

function App() {
  // const [data, setData] = useState(``);
  const [input, setInput] = useState(``);
  const [location, setLocation] = useState(``);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location || "Yangon"}&appid=${apiKey}`;

  const { data, error, isLoading } = useSWR(weatherUrl, fetcher);

  const searchLocation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setLocation(input);
      console.log(data);
    }
  };

  return (
    <div className="w-full h-svh relative bg-[#0b0b0b86] before:content-[''] before:absolute before:w-full before:h-svh before:top-0 before:left-0 before:-z-10 before:bg-[url('./public/sunset.jpg')] before:bg-cover before:bg-center">
      <div className="max-w-175 h-150 m-auto  relative top-10 flex flex-col justify-between pl-4 max-sm:max-w-125">
        <div className="text-center p-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={searchLocation}
            placeholder="Enter Location"
            className="px-4 py-2 border rounded-xl text-xl text-white ::placeholder:text-white bg-[#ffffff34] w-full"
          />
        </div>
        {!error ? (isLoading ? <Loader2 className=" w-full animate-spin text-white items-center flex justify-center" size={80} /> : <WeatherHeader data={data} />) : <p className="text-center text-white text-2xl">Failed to fetch weather data. Please enter the invalid location.</p> }
        
        <WeatherDetailsSection data={data} />
      </div>
    </div>
  );
}

export default App;
