const Search = ({ persons, setResultado, setSearchTerm }) => {
  function handleSearch(event) {
    let busqueda = event.target.value.toLocaleLowerCase().replace(/\s/g, "");
    const resultado = persons.filter((person) =>
      person.name.toLocaleLowerCase().replace(/\s/g, "").includes(busqueda)
    );
    console.log(resultado);
    setResultado(resultado);
    setSearchTerm(busqueda);
  }
  return <input type="text" placeholder="Search..." onChange={handleSearch} />;
};

export default Search;
