import React from "react";
import "./Weather.css";

function Weather() {
  let todayDate = new Date().toISOString().slice(0, 19).replace(/-/g, "/");
  console.log(todayDate);

  return (
    <div className="weather-container">
      <header>Weather</header>
    </div>
  );
}

export default Weather;
