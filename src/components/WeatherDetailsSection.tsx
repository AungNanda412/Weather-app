type Props = {
    data: any
};


const WeatherDetailsSection = ({ data }: Props) => {
  return (
    <div className="flex justify-evenly w-full items-center p-4 mt-4 bg-[#ffffff34] rounded-xl text-center flex-wrap">
      <div>
        <p className="text-2xl text-white font-bold max-sm:text-lg ">65°F</p>
        <p className="text-2xl text-white max-sm:text-lg ">Feels Like</p>
      </div>
      <div>
        <p className="text-2xl text-white font-bold max-sm:text-lg ">20%</p>
        <p className="text-2xl text-white max-sm:text-lg ">Humidity</p>
      </div>
      <div>
        <p className="text-2xl text-white font-bold max-sm:text-lg ">12 MPH</p>
        <p className="text-2xl text-white max-sm:text-lg ">Wind Speed</p>
      </div>
    </div>
  );
};

export default WeatherDetailsSection;
