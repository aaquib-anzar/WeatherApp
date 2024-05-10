import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh, FaWind, FaSun } from "react-icons/fa";
import { FiSunset } from "react-icons/fi";
import { formatToLocalTime, iconUrlFromCode } from "../services/WeatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div className="temperature">
      <div className="flex flex-col items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>

      <div className="flex flex-col items-center text-white py-3 mx-auto ">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl mt-2">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2 mt-2">
          <div className="flex font-light text-sm items-center">
            <FaTemperatureHigh size={18} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-sm items-center">
            <WiHumidity size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-sm items-center">
            <FaWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-white text-sm py-3">
        <div className="flex items-center">
          <FaSun />
          <p className="font-light ml-1">
            Rise:{" "}
            <span className="font-medium">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex items-center mt-1">
          <FiSunset />
          <p className="font-light ml-1">
            Set:{" "}
            <span className="font-medium">
              {formatToLocalTime(sunset, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <div className="flex items-center mt-1">
          <FaSun />
          <p className="font-light ml-1">
            High:{" "}
            <span className="font-medium">{`${temp_max.toFixed()}°`}</span>
          </p>
        </div>
        <div className="flex items-center mt-1">
          <FaSun />
          <p className="font-light ml-1">
            Low:{" "}
            <span className="font-medium">{`${temp_min.toFixed()}°`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TemperatureAndDetails;