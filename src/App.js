import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import CountryTable from "./components/CountryTable";
import Search from "./components/Search";

const REST_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      const response = await fetch(REST_COUNTRIES_URL).catch((error) => {
        setError(error);
        setLoading(false);
      });

      if (response == null) {
        setError(new Error(`HTTP error! response is undefined`));
        setLoading(false);
        return;
      }

      if (!response.ok) {
        setError(new Error(`HTTP error! status: ${response.status}`));
        setLoading(false);
        return;
      }

      const data = await response.json();
      setCountries(data);
      setLoading(false);
    };

    fetchCountries();
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} />
      <CountryTable countries={countries} loading={loading} error={error} />
    </div>
  );
}

export default App;
