import { NavBar } from './components/NavBar/NavBar';
import { Inicio } from './components/Inicio/Inicio';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SobreMi } from './components/SobreMi/SobreMi';

function App() {

  return (
    <>
        <NavBar/>
        <Inicio/>
        <SobreMi/>
    </>
  )
}

export default App
