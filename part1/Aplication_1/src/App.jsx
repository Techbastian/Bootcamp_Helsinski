const Header = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

function Part({content}){
  return(
    <>
      <p>{content.part} {content.nexercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part content={props.miarreglo[0]}/>
      <Part content={props.miarreglo[1]}/>
      <Part content={props.miarreglo[2]}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <h3>Number of exercises {props.miarreglo[0].nexercises +props.miarreglo[1].nexercises +props.miarreglo[2].nexercises}</h3>
  )
}

function App() {
  
  const course = 'Half Stack application development'
  const miarreglo = [
    {
      part:'Fundamentals of React',
      nexercises:10
    },
    {
      part:'Using props to pass data',
      nexercises:7
    },
    {
      part:'State of a component',
      nexercises:14
    }
  ]
  /*
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  */
  return (
    <div>
      <Header content={course}/>
      <Content miarreglo={miarreglo}/>
      <Total miarreglo={miarreglo}/>
    </div>
  )
}

export default App
