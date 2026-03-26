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

  return (
    <div className="w-full mt-4 ml-auto">
      <div>
        <p className="text-2xl text-white mb-2 ">{data?.name}</p>
      </div>
      <div className="flex items-center gap-4">
        <h1 className="text-8xl font-bold text-white">
          {changeUnit
            ? `${Math.round(data?.main?.temp - 273.15)}°C`
            : `${Math.round(data?.main?.temp)}°F`}
        </h1>
        <button className="text-white" onClick={handleClick}>
          <ArrowLeftRight />
        </button>
      </div>
      <div>
        <p className="text-2xl text-white relative right-[-90%] origin-top-left rotate-270 max-sm:rotate-0 max-sm:right-0 max-sm:mt-5">
          {data?.weather?.[0]?.description}
        </p>
      </div>
    </div>
  );
};

export default WeatherHeader;
