import { CountryToColor, CountryToImageUrl } from "../../utils";
import { Slider } from "./Slider";

export const CountryWithFlag = ({ country, percentage }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-10 h-7 mr-2.5 overflow-hidden rounded">
        <img
          src={CountryToImageUrl[country]}
          alt={country}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <div className="flex-1 text-lg">{country}</div>
          <div className="text-sm font-semibold">{percentage}%</div>
        </div>
        <Slider
          color={CountryToColor[country]}
          fillPercentage={percentage}
          className={`bg-[${CountryToColor[country]}] w-[${percentage}%]`}
        />
      </div>
    </div>
  );
};