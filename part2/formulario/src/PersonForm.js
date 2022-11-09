

const PersonForm = (props) => {
    return (
        <form onSubmit={props.onSubmitHandle}>
        <div>
          Name: <input onChange={props.onChangeNameHandle} value={props.newName} />
        </div>
        <div>Number: <input onChange={props.onChangeNumberHandle} value={props.newNumber} /></div>
        <div>
          <button>Add</button>
        </div>
      </form>
    )
  }
  
  export default PersonForm