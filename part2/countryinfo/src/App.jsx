import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import getAllInfo from "./Solicitudes/Solicitudes";
import ShowData from "./components/ShowData";

function App() {

  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    setLoading(true);
    getAllInfo()
      .then(data => {
        setCountries(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>¿Wich country do you want to know about?</h1>
      <Formulario handleChange={handleChange} />
      <h2>Info section</h2>
      {loading ? <h2>Loading info ... </h2> : <ShowData countries={countries} searchTerm={searchTerm} />}
    </>
  );
}

export default App;
