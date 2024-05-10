import React from "react";
import { formatToLocalTime } from "../services/WeatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country } }) {
  
  return (
    <div className="time">
      <div className="flex items-center justify-center my-4 sm:my-6">
        <p className="text-white text-lg sm:text-xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center my-2 sm:my-3">
        <p className="text-white text-2xl sm:text-3xl font-medium">{name}</p>
        <p className="text-white text-lg">{country}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
