import { useState } from "react";

type Props = {
  data: any;
};

const WeatherHeader = ({ data }: Props) => {
  const [changeUnit, setChangeUnit] = useState(false);

  const handleClick = () => {
    setChangeUnit(!changeUnit);
  };

  return (
    <div className="w-full mt-4 ml-auto">
      <div>
        <p className="text-2xl text-white mb-2 ">{data?.name}</p>
      </div>
      <div>
        <h1 className="text-8xl font-bold text-white">
          {data?.main ? Math.round(data.main.temp - 273.15) : ""}°C
        </h1>
      </div>
      <div>
        <p className="text-2xl text-white relative right-[-90%] origin-top-left rotate-270 max-sm:rotate-0 max-sm:right-0 max-sm:mt-5">
          Clouds
        </p>
      </div>
    </div>
  );
};

export default WeatherHeader;
