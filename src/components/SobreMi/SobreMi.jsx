import './SobreMi.css';
import Card from 'react-bootstrap/Card';

export const SobreMi = () => {
    return (
      <section className="sobre-mi" id="sobre-mi">
        
        <div className="titulo-sobre-mi">
          <h2>SOBRE MI</h2>
        </div>

        <div className='cards'>
        <Card style={{ width: '40rem', height: '40rem', border: 'none'  }}>
        <Card.Body>
        <Card.Title className='card-titulo'>¿QUIÉN SOY?</Card.Title>
        <Card.Text>
        Soy Fernanda, tengo 26 años, estudio programación web de manera autodidacta hace 1 año y medio, mediante cursos de Udemy, Coderhouse y videos de la comunidad IT. Soy una persona perfeccionista, cosa que considero como algo bueno en el ámbito de la programación.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card style={{ width: '40rem', height: '40rem', border: 'none' }}>
        <Card.Body>
        <Card.Title className='card-titulo'>MIS INTERESES</Card.Title>
        <Card.Text>
        Me gustan los videojuegos y me interesa mucho el diseño, que es mi fuerte en la programación. También uno de mis intereses es aprender algo nuevo día a día.
        </Card.Text>
        </Card.Body>
        </Card>
        </div>

      </section>
    );
}