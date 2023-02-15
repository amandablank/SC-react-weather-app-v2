import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/amanda-cristina-blankenburg-81b410213/"
            target="_blank"
            rel="noreferrer"
          >
            Amanda Cristina Blankenburg
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/amandablank/weather-app-react-v2"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
