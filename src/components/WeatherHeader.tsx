import { ArrowLeftRight } from "lucide-react";
import { useState } from "react";

type Props = {
  data: any;
};

const WeatherHeader = ({ data }: Props) => {
  const [changeUnit, setChangeUnit] = useState(false);

  const handleClick = () => {
    setChangeUnit(!changeUnit);
  };

  const icon = data?.weather?.[0]?.icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="w-full mt-4 ml-auto flex flex-col items-center justify-center text-center">
      <div>
        <p className="text-2xl text-white mb-2 capitalize ">{data?.name}</p>
      </div>
      <div className="flex items-center gap-4 mb-2">
        <h1 className="text-8xl font-bold text-white">
          {changeUnit
            ? `${Math.round(data?.main?.temp)}°F`
            : `${Math.round(data?.main?.temp - 273.15)}°C`}
        </h1>
        <button className="text-white" onClick={handleClick}>
          <ArrowLeftRight />
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white mt-5 mb-2 capitalize">
          {data?.weather?.[0]?.description}
        </p>
        <div className="rounded-xl bg-[#ffffff34]">
          <img src={iconUrl} alt="weather icon" />
        </div>
      </div>
    </div>
  );
};

export default WeatherHeader;
