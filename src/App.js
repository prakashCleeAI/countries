import "./App.css";
import React from "react";
import { useEffect, useState } from "react";
import CountryTable from "./components/CountryTable";
import CountryFilters from "./components/CountryFilters";

const REST_COUNTRIES_URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [showFavorites, setShowFavorites] = useState(false); // show only favorite countries
  const storedFavorites = localStorage.getItem("favoriteCountries");

  // store favorite countries' cca2 codes
  const [favoriteCountries, setFavoriteCountries] = useState(
    storedFavorites ? JSON.parse(storedFavorites) : []
  );

  useEffect(() => {
    localStorage.setItem(
      "favoriteCountries",
      JSON.stringify(favoriteCountries)
    );

    console.log("favorites: ", localStorage.getItem("favoriteCountries"));
  }, [favoriteCountries]);

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
      console.log(data);
      setCountries(data);
      setLoading(false);
    };

    fetchCountries();
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const toggleFavoriteFilter = () => {
    setShowFavorites(!showFavorites);
  };

  const countriesToShow = showFavorites
    ? countries.filter((country) => favoriteCountries.includes(country.cca2))
    : countries;

  return (
    <div className="App">
      <h1>Welcome to the Countries App!</h1>
      <CountryFilters
        onSearch={handleSearch}
        toggleFavoriteFilter={toggleFavoriteFilter}
        showingFavorites={showFavorites}
      />
      <CountryTable
        countries={countriesToShow.filter((country) => {
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
                  lang && lang.toLowerCase().includes(search.toLowerCase())
              )) ||
            (country.currencies &&
              Object.values(country.currencies).some(
                (curr) =>
                  curr &&
                  curr.name &&
                  curr.name.toLowerCase().includes(search.toLowerCase())
              ))
          );
        })}
        loading={loading}
        error={error}
        favoriteCountries={favoriteCountries}
        setFavoriteCountries={setFavoriteCountries}
      />
    </div>
  );
}

export default App;
