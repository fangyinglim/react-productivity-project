import React, { useState } from "react";
import useFetch from "./useFetch";
import "./Weather.css";

function Weather() {
  const [todayDate, setTodayDate] = useState(new Date());
  const [timeDiff, setTimeDiff] = useState(
    new Date().getTimezoneOffset() * 60000
  );
  let adjustedDate = new Date(todayDate - timeDiff)
    .toISOString()
    .slice(0, 19)
    .replace(/:/g, "%3A");
  console.log(adjustedDate);

  let url = `https://api.data.gov.sg/v1/environment/air-temperature?date_time=${adjustedDate}`;

  let weather = useFetch(url);

  const weatherRefreshHandle = () => {
    setTodayDate(new Date());
    setTimeDiff(new Date().getTimezoneOffset() * 60000);
  };

  return (
    <div className="weather-container">
      <header>
        <h4 className="weather-header">Weather</h4>
        <button className="weather-btn" onClick={weatherRefreshHandle}>
          🔄
        </button>
      </header>
      <div className="weather-info">
        <p>Avg Temp in SG:</p>
        <div>{parseInt(weather).toFixed(1)}</div>
        <p>Avg Humidity in SG:</p>
      </div>
    </div>
  );
}

export default Weather;
