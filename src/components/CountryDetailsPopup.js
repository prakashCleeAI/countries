import React from "react";

function CountryDetailsPopup({ country, onClose }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{country.name.common}</h2>
        <img src={country.flags.png} alt="Flag" />
        <p>Population: {country.population}</p>
        <p>Area: {country.area} km²</p>
        <p>Region: {country.region}</p>
        <p>Sub Region: {country.subregion}</p>
        <p>Latitude: {country.latlng[0]}</p>
        <p>Longitude: {country.latlng[1]}</p>
        {country.capital && <p>Capitals: {country.capital.join(", ")}</p>}
        {country.languages && (
          <p>Languages: {Object.values(country.languages).join(", ")}</p>
        )}
        {country.currencies && (
          <p>Currencies: {Object.values(country.currencies).join(", ")}</p>
        )}
        {country.timezones && <p>Timezones: {country.timezones.join(", ")}</p>}
        {country.tld && <p>Top Level Domain: {country.tld.join(", ")}</p>}
        {country.borders && (
          <p>Border Countries: {country.borders.join(", ")}</p>
        )}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CountryDetailsPopup;
