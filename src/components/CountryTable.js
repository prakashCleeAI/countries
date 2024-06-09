import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import CountryDetailsPopup from "./CountryDetailsPopup";

function CountryTable({
  countries,
  loading,
  error,
  favoriteCountries,
  setFavoriteCountries,
}) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const columnDefs = [
    {
      field: "name",
      sortable: true,
      filter: true,
      width: 200,
      valueGetter: (params) => params.data.name.common,
    },
    { field: "flag", width: 100 },
    { field: "population", sortable: true, filter: true, width: 200 },
    {
      field: "languages",
      valueGetter: (params) => {
        if (params.data.languages == null) {
          return "";
        }
        return Object.values(params.data.languages).join(", ");
      },
      width: 300,
    },
    {
      field: "currencies",
      valueGetter: (params) => {
        if (params.data.currencies == null) {
          return "";
        }
        return Object.values(params.data.currencies)
          .map((curr) => curr.name)
          .join(", ");
      },
      width: 300,
    },
    {
      field: "favorite",
      headerName: "Favorite",
      width: 150,
      cellRenderer: (params) => {
        return (
          <input
            type="checkbox"
            checked={favoriteCountries.includes(params.data.cca2)}
            onChange={() => {
              // toggle favorite country.
              if (favoriteCountries.includes(params.data.cca2)) {
                setFavoriteCountries(
                  favoriteCountries.filter((code) => code !== params.data.cca2)
                );
              } else {
                setFavoriteCountries([...favoriteCountries, params.data.cca2]);
              }
            }}
          />
        );
      },
    },
    {
      field: "details",
      headerName: "Details",
      width: 150,
      cellRenderer: (params) => {
        return (
          <button onClick={() => setSelectedCountry(params.data)}>
            Details
          </button>
        );
      },
    },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: { textAlign: "left" },
  };

  return (
    <div className="country-table">
      <div className="ag-theme-alpine">
        <AgGridReact
          rowData={countries}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
      </div>
      {selectedCountry && (
        <CountryDetailsPopup
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
        />
      )}
    </div>
  );
}

export default CountryTable;
