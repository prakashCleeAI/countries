import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import CountryTable from "./components/CountryTable";

const REST_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(REST_COUNTRIES_URL);
      const data = await response.json();
      setCountries(data);
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <div className="content">
        <CountryTable countries={countries} />
      </div>
    </div>
  );
}

export default App;
