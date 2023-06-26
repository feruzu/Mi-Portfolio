import { NavBar } from './components/NavBar';
import { Inicio } from './components/Inicio';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SobreMi } from './components/SobreMi';

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
