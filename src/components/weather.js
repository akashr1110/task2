import React, { useState } from "react";
import "./weather.css";
import search from "../assets/images/search.png";
import rain from "../assets/images/rain.png";
import wind from "../assets/images/wind.png";
import humidityImg from "../assets/images/humidity.png";

const WeatherCard = () => {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("22°C");
  const [humidity, setHumidity] = useState("50%");
  const [windSpeed, setWindSpeed] = useState("15 km/h");

  const handleSearch = () => {
    setTemperature("25°C");
    setHumidity("60%");
    setWindSpeed("20 km/h");
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          id="cityInput"
          placeholder="Enter City Name"
          spellCheck="false"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button id="searchButton" onClick={handleSearch}>
          <img src={search} alt="Search" />
        </button>
      </div>
      <div className="weather">
        <img src={rain} className="weather-icon" alt="Weather Icon" />
        <h1 className="temp">{temperature}</h1>
        <h2 className="city">{city}</h2>
        <div className="details">
          <div className="col">
            <img src={humidityImg} alt="Humidity Icon" />
            <div>
              <p className="humidity">{humidity}</p>
              <p>Humidity</p>
            </div>
          </div>
          <div className="col">
            <img src={wind} alt="Wind Icon" />
            <div>
              <p className="wind">{windSpeed}</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
