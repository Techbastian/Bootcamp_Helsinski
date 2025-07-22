const Header = (props) => {
  return (
    <h1>{props.content}</h1>
  )
}

function Part({part}){
  return(
    <>
      <p style={{color:part.color}}>{part.name} {part.exercises}</p>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      <Part part={parts[0]}/>
      <Part part={parts[1]}/>
      <Part part={parts[2]}/>
    </div>
  )
}

const Total = ({parts}) => {
  return (
    <h3>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h3>
  )
}

function App() {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        color:"blue"
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        color:"gray"
      },
      {
        name: 'State of a component',
        exercises: 14,
        color:"Red"
      }
    ]
  }
  
  // const course = 'Half Stack application development'
  
  // const parts = [
  //   {
  //     name: 'Fundamentals of React',
  //     exercises: 10
  //   },
  //   {
  //     name: 'Using props to pass data',
  //     exercises: 7,
  //   },
  //   {
  //     name: 'State of a component',
  //     exercises: 14
  //   }
  // ]
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
      <Header content={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
