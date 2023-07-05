import './Contacto.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    };



  return (

    <section className="contacto" id="contacto">
      <div className="title-contacto">
        <h2>CONTACTO</h2>
      </div>

      <div id='formulario'>
      <Form className='formulario' ref={form} onSubmit={sendEmail}>
        <Form.Group className="mb-3" >
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" name="user_email" required />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Texto</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" required />
        </Form.Group>

        <Button id="button" variant="primary" type="submit" value="Send" >
          Enviar
        </Button>
      </Form>
      </div>

      <div className='redes'>
        <a href='https://github.com/feruzu'><img src="img\github.png"></img></a>
        <a href='https://www.linkedin.com/in/fernanda-d%C3%ADaz/'><img src="img\linkedin.png"></img></a>
      </div>
    </section>

  );
};