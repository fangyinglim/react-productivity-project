import React, { useState } from "react";
import useFetch from "./useFetch";
import "./Weather.css";

function Weather() {
  const [todayDate, setTodayDate] = useState(new Date());
  const [timeDiff, setTimeDiff] = useState(
    new Date().getTimezoneOffset() * 60000
  );
  const [weatherRefreshEffect, setWeatherRefreshEffect] = useState(false);
  let adjustedDate = new Date(todayDate - timeDiff)
    .toISOString()
    .slice(0, 19)
    .replace(/:/g, "%3A");

  let tempUrl = `https://api.data.gov.sg/v1/environment/air-temperature?date_time=${adjustedDate}`;
  let humidityUrl = `https://api.data.gov.sg/v1/environment/relative-humidity?date_time=${adjustedDate}`;

  let weatherTemp = useFetch(tempUrl);
  let weatherHumidity = useFetch(humidityUrl);

  const weatherRefreshHandle = () => {
    setTodayDate(new Date());
    setTimeDiff(new Date().getTimezoneOffset() * 60000);
    setWeatherRefreshEffect(true);
    setTimeout(() => {
      setWeatherRefreshEffect(false);
    }, 750);
  };

  return (
    <div className="weather-container">
      <header>
        <h4 className="weather-header">Weather</h4>
        <button className="weather-btn" onClick={weatherRefreshHandle}>
          🔄
        </button>
      </header>
      <div
        className={
          weatherRefreshEffect ? "weather-info-refreshed" : "weather-info"
        }
      >
        <div>
          <p>Avg Temp in SG:</p>
          {parseInt(weatherTemp).toFixed(1)}°C
        </div>

        <div>
          <p>Avg Humidity in SG:</p>
          {parseInt(weatherHumidity).toFixed(0)}%
        </div>
      </div>
    </div>
  );
}

export default Weather;
