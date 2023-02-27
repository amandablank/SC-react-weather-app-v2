import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Blumenau" />
        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/amanda-cristina-blankenburg-81b410213/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amanda Cristina Blankenburg
          </a>
          , is open-sourced on{" "}
          <a
            href="https://github.com/amandablank/weather-app-react-v2"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub{" "}
          </a>
          and hosted on <a href="https://www.netlify.com/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}
