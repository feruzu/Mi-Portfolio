import './Skills.css';
import Card from 'react-bootstrap/Card';

export const Skills = () => {
    return (
      <section className='skills' id='skills'>
        <div className="titulo-skills">
          <h2>SKILLS</h2>
        </div>
    
        <div className='cards'>
        <Card style={{ width: '19rem', height: '19rem', border: 'none'  }}>
        <Card.Body>
        <img src="\img\html5.png" className="card-img-top" alt="html5"></img>
        <Card.Title className='card-titulo'>HTML5</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\css.png" className="card-img-top" alt="css"></img>
        <Card.Title className='card-titulo'>CSS</Card.Title>
        </Card.Body>
        </Card>

        
        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\javascript.png" className="card-img-top" alt="javascript"></img>
        <Card.Title className='card-titulo'>JAVASCRIPT</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\sass.png" className="card-img-top" alt="sass"></img>
        <Card.Title className='card-titulo'>SASS</Card.Title>
        </Card.Body>
        </Card>
        </div>

        <div className='cards'>
        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\git.png" className="card-img-top" alt="git"></img>
        <Card.Title className='card-titulo'>GIT</Card.Title>
        </Card.Body>
        </Card>

        
        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\github.png" className="card-img-top" alt="github"></img>
        <Card.Title className='card-titulo'>GITHUB</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\bootstrap.png" className="card-img-top" alt="bootstrap"></img>
        <Card.Title className='card-titulo'>BOOTSTRAP</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '19rem', height: '19rem', border: 'none' }}>
        <Card.Body>
        <img src="\img\react.png" className="card-img-top" alt="react"></img>
        <Card.Title className='card-titulo'>REACT</Card.Title>
        </Card.Body>
        </Card>
        </div>

      </section>
    );
}