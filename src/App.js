import "./App.css";
import React from "react";
import { useEffect } from "react";

const REST_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

function App() {
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(REST_COUNTRIES_URL);
      const data = await response.json();
      console.log(data);
    };

    fetchCountries();
  }, []);

  return <div className="App"></div>;
}

export default App;
