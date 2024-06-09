import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function CountryTable({ countries }) {
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
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    cellStyle: { textAlign: "left" },
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 600 }}>
      <AgGridReact
        rowData={countries}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
      />
    </div>
  );
}

export default CountryTable;
