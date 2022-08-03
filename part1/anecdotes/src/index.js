import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react'


const points = [ 1, 3, 4, 2, 5,3]



const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(points)

 

  const randomHandler =  () => {
    const generateRandomNumber = () => {
      setSelected (Math.floor(Math.random() * anecdotes.length ))
    
    }
    return generateRandomNumber
    
  }

  const voteHandler = () =>{
      const calculateVotes = () =>{
        const copy = { ...votes }
        copy[selected]+=1
        setVotes(copy)
      }
      return calculateVotes

    
  }

  const MaxVoted = () =>{
    let objectValues = Object.values(votes);
    let max = Math.max(...objectValues);
    let index = objectValues.indexOf(max)
    return <p>{anecdotes[index]}</p>
  }

  return (
    <div>
      <p>{props.anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={voteHandler()}>vote</button>
      <button onClick={randomHandler()}>Next Anecdote</button>
      <h3>Anecdote with most votes</h3>
      <MaxVoted/>

    </div>
    
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
