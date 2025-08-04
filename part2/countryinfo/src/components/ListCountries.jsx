import { useState } from "react";
import Country from "./Country.jsx";

const ListCountries = ({ filteredData }) => {

    const [detail, setDetail] = useState(null)

    function showCountry(name){
        const founded = filteredData.find(country => country.name.common === name)
        setDetail(founded)        
    }

  return (
    <>
      <ul>
        {filteredData.map((country) => (
          <li
            key={country.name.common}
            style={{
              listStyle: "none",
              display: "flex",
              gap: "10px",
              margin: "5px",
            }}
          >
            {country.name.common}
            <button onClick={() => showCountry(country.name.common)}>Show Now</button>
          </li>
        ))}
      </ul>
      {
       detail && <Country country={detail}/>
      }
    </>
  );
};

export default ListCountries;
