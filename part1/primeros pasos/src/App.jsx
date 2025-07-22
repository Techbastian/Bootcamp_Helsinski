import { useLayoutEffect, useState } from "react"

const Hello = (props) => {

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

const Button = ({name,onClick}) => <button onClick={onClick}>{name}</button>

const ConteoClicks = () => {

  const [left,setLeft] = useState(0)
  const [right,setRight] = useState(0)
  const [total, setTotal] = useState(0)
  const [allClicks,setAllCliks] = useState([])

  const handleLeft = () => {
    let UpdateLeft = left + 1
    setLeft(UpdateLeft)
    setTotal(UpdateLeft + right)
    setAllCliks(allClicks.concat('L'))
  }

  const handleRight = () => {
    let UpdateRight = right + 1
    setRight(UpdateRight)
    setTotal(UpdateRight + right)
    setAllCliks(allClicks.concat('R'))
  }

  const History = (props) => {
    {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
  }

  return(
    <>
    <div style={{background:'yellow',borderRadius:'8px'}}>
      <h1 style={{color:'green'}}>Left: {left}</h1>
      <h1 style={{color:'green'}}>Right: {right}</h1>
      <p style={{color:'gray'}}>allClicks: {allClicks.join(' ')}</p>
      <p style={{color:'gray'}}>Total: {total}</p>
    </div>
      <button style={{color:'white', background:'green'}} onClick={handleLeft}>Left</button>
      <button style={{color:'white', background:'green'}} onClick={handleRight}>Right</button>
    </>
  )

}

function App() {

  const [contador,setContador] = useState(0)
  const [posicion,setPosicion] = useState({
    left:0,
    right:0
  })

  const incrementar = () => setContador(contador + 1)

  const moverDerecha = () => setPosicion(
    {
      ...posicion,
      right: posicion.right + 1
    })

  const moverIzquierda = () => setPosicion(
    {
      ...posicion,
      left: posicion.left + 1
    })
      

  
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='sebastian' age={10+19}/>
      
      <h1 style={{color:"Red"}}>Contador: {contador}</h1>
      <Button name='Incrementar' onClick={incrementar}/>
      <button onClick={() => {setContador(contador - 1)}}>Decrementar</button>
      <button style={{background:"blue",color:"white"}} onClick={() => {setContador(0)}}>Restaurar</button>

      <h1 style={{color:"blue"}}>Derecha: {posicion.right}</h1>
      <h1 style={{color:"blue"}}>Izquierda: {posicion.left}</h1>

      <Button name='Derecha' onClick={moverDerecha}/>
      <Button name='Izquierda' onClick={moverIzquierda}/>

      <ConteoClicks/>
      <Footer url='www.W3C.com'/>
    </div>
  )
}

export default App
