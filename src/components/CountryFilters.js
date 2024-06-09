import React, { useState } from "react";

function CountryFilters({ onSearch, toggleFavoriteFilter, showingFavorites }) {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="country-filters">
      <input
        type="text"
        placeholder="Search by name, currency or language"
        value={query}
        onChange={handleChange}
        className="search-input"
      />
      <button onClick={toggleFavoriteFilter} className="favorites-button">
        {showingFavorites ? "Show All" : "Show Only Favorites"}
      </button>
    </div>
  );
}

export default CountryFilters;
