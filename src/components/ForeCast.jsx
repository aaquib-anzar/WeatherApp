import React from "react";
import { iconUrlFromCode } from "../services/WeatherService";

function Forecast({ title, items }) {
  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase text-center sm:text-left">
          {title}
        </p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-col sm:flex-row sm:space-x-3 items-center justify-between text-white">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center sm:w-1/4"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Forecast;