import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="search"
              placeholder="Type a city name..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Blumenau</h1>
      <ul>
        <li>Monday 15:51</li>
        <li>Sunny</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Sunny"
          />
          <span className="temperature">32</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 weather-description">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 52%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
