import React, { useState } from 'react'
import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFliter ] = useState('')
  


  const onSubmitHandle = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber

    }

    if(!persons.some(person => person.name === newName)){
       setPersons(persons.concat(newPerson))
       
    }
    else{
      alert(`${newName} is already added to phonebook`);
    }
    setNewName('')
    setNewNumber('')

  }

  const onChangeNameHandle = (event) => {
    setNewName(event.target.value)
  }

  const onChangeNumberHandle = (event) => {
    setNewNumber(event.target.value)
  }

  
  const onChangeFilterHandle = (event) => {
    setFliter(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter onChangeFilterHandle={onChangeFilterHandle} value={filter}  />
      <h2>Add a new Contact</h2>

      
      <PersonForm 
        onSubmitHandle={onSubmitHandle} 
        onChangeNameHandle={onChangeNameHandle} 
        newName={newName} 
        onChangeNumberHandle={onChangeNumberHandle}
        newNumber={newNumber}
      />
     
      <h2>Numbers</h2>
      <Persons persons= {persons} filter= {filter} />
      
    </div>
  )
}

export default App