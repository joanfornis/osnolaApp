import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm ({Fancybox}) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('osnolaContactFormService', 'osnolaContactTemplate', form.current, 'x8QchEVX9we0L4pCQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  Fancybox.bind("[data-fancybox]", {});

  return (
    <form ref={form} onSubmit={sendEmail}>

      <div className="row">
        <div className="col">
          <label className="block font-josefin py-2 text-primary">Nombre</label>
          <input type="text" name="user_name" className="w-full py-2 px-4 rounded-md mb-2" required/>
        </div>
        <div className="col">
          <label className="block font-josefin py-2 text-primary">Apellidos</label>
          <input type="text" name="user_surname" className="w-full py-2 px-4 rounded-md mb-2" required/>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label className="block font-josefin py-2 text-primary">Email</label>
          <input type="email" name="user_email" className="w-full py-2 px-4 rounded-md mb-2" required/>
        </div>
        <div className="col">
          <label className="block font-josefin py-2 text-primary">Teléfono</label>
          <input type="tel" name="user_phone" className="w-full py-2 px-4 rounded-md mb-2" required/>
        </div>
      </div>

      <label className="block font-josefin py-2 text-primary">Mensaje</label>
      <textarea name="message" placeholder="Escribe tu consulta aquí" rows="8" className="w-full p-4 rounded-md mb-2"/>

      <label className="block my-4 mb-8">

        <dialog id="policy-dialog" style={{display:'none',maxWidth:'1280px',padding:'2rem',margin:'1rem'}}>
          <h2 className="text-primary font-bold">Privacity policy 🔒</h2>
          <p>Privacity policy Working OK 👌</p>
        </dialog>

        <input type="checkbox" id="policy" className="mr-2" required/> 
        He leído y acepto los términos y condiciones de la <a href="javascript:void(0)" data-fancybox data-src="#policy-dialog"><b><u>Política de Privacidad</u></b></a>
      </label>

      

      <input type="submit" className="btn-primary block bg-primary"/>

    </form>
  );
};