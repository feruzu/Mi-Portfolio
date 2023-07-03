import './Proyectos.css';
import Card from 'react-bootstrap/Card';

export const Proyectos = () => {
    return (
        <section className='proyectos' id='proyectos'>
        <div className="titulo-proyectos">
          <h2>PROYECTOS</h2>
        </div>

        <div className='cards'>
        <Card style={{ width: '35rem', height: '20rem', border: 'none'  }}>
        <Card.Body>
        <div className='enlaces'>
        <a href='https://ve-las.netlify.app/'>Web</a>
        <a href='https://github.com/feruzu/VE-LAS'>GitHub</a>
        </div>
        <img src="\gif\VE-LAS.gif" className="card-img-top" alt="ve-las"></img>
        <Card.Title className='card-titulo'>VE-LAS</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
        <Card.Body>
        <div className='enlaces'>
        <a href='https://serum-s.netlify.app/'>Web</a>
        <a href='https://github.com/feruzu/Serum-s'>GitHub</a>
        </div>
        <img src="\gif\Serums.gif" className="card-img-top" alt="serum´s"></img>
        <Card.Title className='card-titulo'>SERUM´S</Card.Title>
        </Card.Body>
        </Card>
        </div>

        <div className='cards'>
        <Card style={{ width: '35rem', height: '20rem', border: 'none'  }}>
        <Card.Body>
        <div className='enlaces'>
        <a href='https://app-nota-s.netlify.app/'>Web</a>
        <a href='https://github.com/feruzu/App-Notas'>GitHub</a>
        </div>
        <img src="\gif\Notas.gif" className="card-img-top" alt="notas"></img>
        <Card.Title className='card-titulo'>NOTAS</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '35rem', height: '20rem', border: 'none'  }}>
        <Card.Body>
        <div className='enlaces'>
        <a href='https://reproductor-arian-grande.netlify.app'>Web</a>
        <a href='https://github.com/feruzu/Reproductor-de-musica'>GitHub</a>
        </div>
        <img src="\gif\Reproductor.gif" className="card-img-top" alt="reproductor"></img>
        <Card.Title className='card-titulo'>REPRODUCTOR</Card.Title>
        </Card.Body>
        </Card>
        </div>

        <div className='cards'>
        <Card style={{ width: '35rem', height: '20rem', border: 'none'  }}>
        <Card.Body>
        <div className='enlaces'>
        <a href='https://michis.netlify.app/'>Web</a>
        <a href='https://github.com/feruzu/Michis'>GitHub</a>
        </div>
        <img src="\gif\Michiss.gif" className="card-img-top" alt="michis"></img>
        <Card.Title className='card-titulo'>MICHIS</Card.Title>
        </Card.Body>
        </Card>

        <Card style={{ width: '35rem', height: '20rem', border: 'none' }}>
        <Card.Body>
        <div className='enlaces'>
        <a href='https://cargando.netlify.app/'>Web</a>
        <a href='https://github.com/feruzu/Barra-progreso'>GitHub</a>
        </div>
        <img src="\gif\Cargando.gif" className="card-img-top" alt="cargando"></img>
        <Card.Title className='card-titulo'>CARGANDO</Card.Title>
        </Card.Body>
        </Card>
        </div>
            
        </section>
    )

}