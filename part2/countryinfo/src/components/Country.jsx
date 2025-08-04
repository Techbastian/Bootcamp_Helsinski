import React from "react";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <ul>
        <img
          src={country.flags.png}
          alt={country.name.common}
          style={{
            borderRadius: "20px",
            width: "100px",
            height: "100px",
            objectFit: "cover",
          }}
        />
        <li>
          <strong>Capital: </strong>
          {country.capital[0]}
        </li>
        <li>
          <strong>Área: </strong>
          {country.area}
        </li>
      </ul>
      <h2>Lenguages</h2>
      <ul>
        {Object.keys(country.languages).map((language,index) => (
          <li key={index}>{country.languages[language]}</li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
