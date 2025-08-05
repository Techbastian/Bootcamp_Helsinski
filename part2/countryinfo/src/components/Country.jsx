import { useEffect, useState } from "react";
import axios from 'axios'

const apiweather = import.meta.env.VITE_WEATHER_API_KEY

const Country = ({ country }) => {

  const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&${apiweather}`

  const [weather, setWeather] = useState({})

  useEffect(() => {
    axios.get(weatherAPI)
    .then(response => response.data)
    .then(data => console.log(data))
    .catch(error =>{
      console.error("No se ha encontrado informacion: ",error)
    })
  }, [])
  

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
      <div>
        <h2>wheather in {country.capital[0]}</h2>
      </div>
    </div>
  );
};

export default Country;
