import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Inicio } from "./components/Inicio/Inicio";
import { SobreMi } from "./components/SobreMi/SobreMi";
import { Skills } from "./components/Skills/Skills";
import { Proyectos } from "./components/Proyectos/Proyectos";
import { Contacto } from "./components/Contacto/Contacto";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Inicio />
      <SobreMi />
      <Skills />
      <Proyectos />
      <Contacto />
    </>
  );
}

export default App;
