import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <FormattedDate date={props.data.date} />
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
        <div className="col-6 mt-4">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
      </div>
      <br />
      <div className="weather-description mt-3 mb-5 text-center">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)} km/h</li>
        </ul>
      </div>
      <hr />
      <div className="mt-3 mb-4">
        <p>Today and upcoming days Forecast:</p>
        <WeatherForecast data={props.data} />
      </div>
    </div>
  );
}
