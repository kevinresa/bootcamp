
import './App.css';

function Mensaje(props){
  return <h1 style={{color: props.color}}>
    {props.msg}
  </h1>
}

function Description(){
  return <p>Esto es la descripcion del curso de fullstack</p>
}



function App() {

  return (
    <div className="App">
      <Mensaje color='red' msg='Estmos trabajando' />
      <Mensaje color='blue' msg='en un curso' />
      <Mensaje color='green' msg='de React' />
      <Description />
    </div>
  );
}

export default App;
