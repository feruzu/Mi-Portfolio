import Container from 'react-bootstrap/Container';
import './Inicio.css';


export const Inicio = () => {
    return (

          <section className='principal'>
          <div>
            <h2 className="hola">Hola<br/>Soy Fernanda,</h2>
            <h1 className="titulo">Jr. Front-End Developer.</h1>
          </div>

          <div>
            <img src="./public/img/avatar.png"/>
          </div>
          </section>

    );
}