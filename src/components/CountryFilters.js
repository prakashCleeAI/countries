import React, { useState } from "react";

function CountryFilters({ onSearch, toggleFavoriteFilter }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="country-filters">
      <input
        type="text"
        placeholder="Search by name, currency or language"
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
      <button onClick={toggleFavoriteFilter} className="favorites-button">
        Show Favorites
      </button>
    </form>
  );
}

export default CountryFilters;
