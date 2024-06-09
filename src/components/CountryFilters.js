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
    <form
      onSubmit={handleSubmit}
      style={{ width: "100%", display: "flex", justifyContent: "space-around" }}
    >
      <input
        type="text"
        placeholder="Search by name, currency or language"
        value={query}
        onChange={handleChange}
        style={{ width: "100%" }}
      />
      <button type="submit" style={{ width: "150px" }}>
        Search
      </button>
      <button onClick={toggleFavoriteFilter} style={{ width: "150px" }}>
        Show Favorites
      </button>
    </form>
  );
}

export default CountryFilters;
