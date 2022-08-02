import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header'
import Part from './part'
import Total from './total'
import { useState } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Counter = ({ number }) => {
  return <h3>{number}</h3>
}
 

const App = (props) => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  
  const [contadorValue, updateContador] = useState(0)

  const handleClick = () => {
    updateContador(contadorValue + 1)
  }

  const handleClickReset = () => {
    updateContador(0)
  }

  const isEven = contadorValue % 2 === 0
  const mensajePar = isEven ? 'Es par' : 'Es impar'
    

  return (
    <div>
      <Header course={course}/>
      <Part part= {part1} exercises = {exercises1} />
      <Part part= {part2} exercises = {exercises2} />
      <Part part= {part3} exercises = {exercises3} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      <Counter number={contadorValue} />

      <p>{mensajePar}</p>

      <button onClick={handleClick}>
        Incrementar
      </button>

      <button onClick={handleClickReset}>
        Reset
      </button>


    </div>
  );
};


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
