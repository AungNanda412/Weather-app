type Props = {
    data: any
};


const WeatherDetailsSection = ({ data }: Props) => {
  return (
    <div className="flex justify-evenly w-full items-center p-4 mt-4 bg-[#ffffff34] rounded-xl text-center flex-wrap">
      <div>
        <p className="text-2xl text-white font-bold max-sm:text-lg ">{data?.main?.feels_like ? Math.round(data.main.feels_like - 273.15) : ""}°C</p>
        <p className="text-2xl text-white max-sm:text-lg ">Feels Like</p>
      </div>
      <div>
        <p className="text-2xl text-white font-bold max-sm:text-lg ">{data?.main?.humidity}%</p>
        <p className="text-2xl text-white max-sm:text-lg ">Humidity</p>
      </div>
      <div>
        <p className="text-2xl text-white font-bold max-sm:text-lg ">{data?.wind?.speed} MPH</p>
        <p className="text-2xl text-white max-sm:text-lg ">Wind Speed</p>
      </div>
    </div>
  );
};

export default WeatherDetailsSection;
