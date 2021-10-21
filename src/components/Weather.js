import React, { useEffect } from "react";
import useFetch from "./useFetch";
import "./Weather.css";

function Weather() {
  let todayDate = new Date().toISOString().slice(0, 19).replace(/:/g, "%3A");
  console.log(todayDate);

  let url = `https://api.data.gov.sg/v1/environment/air-temperature?date_time=${todayDate}`;
  console.log(url);

  let weather = useFetch(url);
  console.log(weather);

  const weatherRefreshHandle = () => {
    // console.log(weather);
    // return weather;
  };

  return (
    <div className="weather-container">
      <header>Weather</header>
      <button onClick={weatherRefreshHandle}>🔄</button>
      <div>{parseInt(weather).toFixed(1)}</div>
    </div>
  );
}

export default Weather;
