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
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#f2f2f2",
        borderRadius: "5px",
      }}
    >
      <input
        type="text"
        placeholder="Search by name, currency or language"
        value={query}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          marginRight: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          width: "150px",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      <button
        onClick={toggleFavoriteFilter}
        style={{
          width: "150px",
          padding: "10px",
          backgroundColor: "#2196F3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Show Favorites
      </button>
    </form>
  );
}

export default CountryFilters;
