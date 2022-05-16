import './App.css';
import Logo from './imagenes/FreeCodeCamp_logo.svg.png'
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='anotador-tareas'>
     <div className='freecodecamp-logo-contenedor'>
      <img 
          src={Logo}
          className='freecodecamp-logo'
          alt='Logo de FreeCodeCamp' 
      />      
     </div>
    <div className='tareas-lista-principal'>
    <h1> Mis Tareas </h1>  
    <ListaDeTareas />
    </div>

    </div>
  );
}

export default App;
