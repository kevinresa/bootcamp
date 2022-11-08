
const Course  = ({ courses }) => {
  
  //Recuperamos todos exercises del array de cursos que esta dentro de parts 
  const partTotalExercises = courses.parts.map((part) => part.exercises)

  //Con el anterior array de exercises calculamos el total de exercises por curso
  const total = partTotalExercises.reduce((previusValue, totalValue) =>{
    return previusValue + totalValue
  })

  return ( 
    <div>
      <h1>{courses.name}</h1>
      <div>
        {courses.parts.map((part) => 
          <p key={part.name}>{part.name} {part.exercises}</p>
        )}
        <p><strong>total of {total} exercises</strong></p>
      </div>
    </div>
  )
}

export default Course;
