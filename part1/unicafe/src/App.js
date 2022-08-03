
import './App.css';
import { useState } from 'react'


const Statistics  = (props) =>{
  let sumaToatal = props.good + props.neutral + props.bad
  let average = (props.good - props.bad) / sumaToatal
  let positive = props.good * 100 / sumaToatal

  if(sumaToatal === 0){
    return <div> 
    <h3>Statistics </h3>
    <p>No Feedback given</p>
  </div>
  }
  return <div> 
    <h3>Statistics </h3>
    <table>
      <tbody>
        <Statistic text="good" value={props.good}/>
        <Statistic text="neutral" value={props.neutral}/>
        <Statistic text="bad" value={props.bad}/>
        <Statistic text="all" value={sumaToatal}/>
        <Statistic text="average" value={average}/>
        <Statistic text="positive" value={positive}/>
      </tbody>
    </table>
  </div>
}

const Statistic = ({text, value}) =>{ 
  let textoFinal =  text === 'positive' ? '%' : ''
  
  return <tr>
    <td>{text}</td>
    <td>{value}{textoFinal}</td>
  </tr>
}

const Buttons = (props) =>{
  return <button onClick={props.onClick}>{props.text}</button>
}




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodHandler = () =>{
    setGood(good +1)
  }
  const neutralHandler = () =>{
    setNeutral(neutral +1)
  }
  const badHandler = () =>{
    setBad(bad +1)
  }

  return (
    <div>
      <h3>give feedback</h3>
      <Buttons onClick={goodHandler} text = 'good' />
      <Buttons onClick={neutralHandler} text = 'neutral' />
      <Buttons onClick={badHandler} text = 'bad' />
      <Statistics  good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App;
