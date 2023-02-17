import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <FormattedDate date={props.data.date} />
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <br />
      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.description} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-6 weather-description">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
