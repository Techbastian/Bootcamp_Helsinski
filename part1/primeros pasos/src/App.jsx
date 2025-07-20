const Hello = (props) => {

  console.log(props)

  return (
    <div>
      Hello {props.name}, you are {props.age} years old
    </div>
  )
}

const Footer = (props) => {
  return(
    <>
      <h3>Esta es la parte de abajo de la pagina {props.url}</h3>
    </>
  )
}

function App() {

  const name = 'Peter'
  const age = 10
  const nombres = ['sebastian', 'laura', 'sonia']
  
  return (
    <div>
      <h1>Greetings</h1>
      <h2>Familiares {nombres}</h2>
      <Hello name='sebastian' age={10+19}/>
      <Hello name={name} age={age}/>
      <Footer url='www.W3C.com'/>
    </div>
  )
}

export default App
