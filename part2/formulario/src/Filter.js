

const Filter = (props) => {
  return (
    <div>
     Filter shown with: <input onChange={props.onChangeFilterHandle} value={props.value} />
    </div>
  )
}

export default Filter