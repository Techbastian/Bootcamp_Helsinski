import Country from "./Country.jsx"
import ListCountries from "./ListCountries.jsx"

const ShowData = ({ countries, searchTerm }) => {

    const searching = searchTerm.toLowerCase().replace(/\s/g,'')

    const filteredData = countries.filter(country =>{

        const comparison = country.name.common.replace(/\s/g,'').toLowerCase()

        return searching[0] === comparison[0] && comparison.includes(searchTerm)  
    }        
    )

  return (
    <div>
        {filteredData.length > 10 && <p>There are to many info, be more especific...</p>}
        {filteredData.length > 1 && filteredData.length <= 10 && <ListCountries filteredData={filteredData}/> }
        {filteredData.length == 1 && <Country country={filteredData[0]}/>}
        {filteredData.length == 0 && <h3>There are not data to show</h3>}
    </div>
  )
}

export default ShowData