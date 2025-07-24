import { useState } from "react"

const Statistics = ({ good, neutral, bad }) => {

  let total = good + neutral + bad

  return(
    <>
    <table>
      <tr>
        <th>Name</th>
        <th>Value</th>
      </tr>
      <StatisticLine name="Good" value={good} />
      <StatisticLine name="Neutral" value={neutral} />
      <StatisticLine name="Bad" value={bad} />
      <StatisticLine name="All" value={total ? total : 0} />
      <StatisticLine name="Average" value={(total ? total / 3 : 0).toFixed(2)} />
      <StatisticLine name="Possitive" value={`${total ? (good / total * 100).toFixed(2) : 0}%`} />
    </table>
      
    </>
  )
}

const StatisticLine = ({ name, value }) => {
  return (
    <tr>
      <td><strong>{name}: </strong></td>
      <td>{value}</td>
    </tr>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <>
      <h1>Give Feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="Good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button onClick={() => setBad(bad + 1)} text="Bad" />
      <h2>Statistics</h2>
      { good + neutral + bad === 0 ? <p>No feedback given</p> : <Statistics good={good} neutral={neutral} bad={bad} />}      
    </>
  )
}

export default App
