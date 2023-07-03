import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { Inicio } from './components/Inicio/Inicio';
import { SobreMi } from './components/SobreMi/SobreMi';
import { Skills } from './components/Skills/Skills';
import './App.css'



function App() {

  return (
    <>
        <NavBar/>
        <Inicio/>
        <SobreMi/>
        <Skills/>
    </>
  )
}

export default App
