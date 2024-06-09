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
      <CountryTable
        countries={countries.filter((country) => {
          // Filter countries based on search query
          if (!search) return true;
          return (
            (country &&
              country.name &&
              country.name.common
                .toLowerCase()
                .includes(search.toLowerCase())) ||
            (country.languages &&
              Object.values(country.languages).some(
                (lang) =>
                  lang &&
                  lang.name &&
                  lang.name.common &&
                  lang.name.common.toLowerCase().includes(search.toLowerCase())
              )) ||
            (country.currencies &&
              Object.values(country.currencies).some(
                (curr) =>
                  curr &&
                  curr.name &&
                  curr.name.common &&
                  curr.name.common.toLowerCase().includes(search.toLowerCase())
              ))
          );
        })}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
