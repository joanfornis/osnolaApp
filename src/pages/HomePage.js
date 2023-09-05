import React from 'react';
import Hero from './../components/Hero'
import Carousel from './../components/Carousel'
import FabButton from './../element/FabButton';
import ContactForm from './../services/ContactForm'
import { useNavigate } from "react-router-dom";
import CardList from "./../components/CardList"

export default function Home({Fancybox}) {

  const [loading, setLoading] = React.useState(true);

  const navigate = useNavigate()

  React.useEffect(() => { 
    setLoading(false, '')
  }, [])
  


  return (
  <>
    
    <a href="/" className="pointer-events-none md:pointer-events-auto">
      <img src="/assets/logos/osnola-logo-primary.svg" alt="logo" className="mainlogo absolute z-10 top-0 w-[170px] h-[170px] p-4 opacity-0 md:opacity-100"/>
    </a>

    <section className={`bg-white w-full ${loading ? 'opacity-0' : 'opacity-1'}`}>

      <Hero background='/assets/images/mainhero-background-nooverlay.jpg' heading='<span className="text-secondary">“</span> Hogar no es un lugar, es un sentimiento <span className="text-secondary">“</span>'/>


        <div className="bg-primary">
          <div className="container">
            <h4 className="text-white text-3xl titleribbon mb-6">NUESTRA FILOSOFÍA</h4>
            <p className="text-gray pb-6">Osnola nace para cubrir las posibles necesidades surgidas en cualquier operación inmobiliaria. La elección de una vivienda o la gestión de la misma, tiene siempre muchos factores de vital importancia que a veces podemos pasar por alto por falta de información o conocimiento.</p>
            <p className="text-gray pb-6">Por eso mismo nosotros nos encargamos de que cualquier operación que se tenga que llevar a cabo, se realice de la forma más eficiente y ventajosa para nuestros clientes, informando en todo momento del proceso con total transparencia.</p>
            <p className="text-gray pb-6">Si desea alquilar su piso, venderlo o realizar cualquier tramite relacionado, póngase en contacto con nosotros y concertaremos una cita para ofrecerle la mejor opción.</p>
          </div>
        </div>

        <div className="container">
          <h4 className="text-3xl titleribbon mb-6">SERVICIOS</h4>
          <p className="text-dark pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
          <div className="w-100 max-w-[800px] mt-10 mx-auto pl-2 sm:pl-20">
            <p className="font-josefin text-2xl mb-4">¿Qué ofrecemos?</p>
            <ul className="flex text-xl flex-wrap list-disc text-secondary pl-4 py-2 pb-4">
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Asesoramiento inmobiliario</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Gestión de Alquileres</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Venta de Pisos</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Comunidades</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Valoración Gratuita</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Tasaciones</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Seguros</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Eficiéncia energética</span></li>
            </ul>
            <a onClick={(e) => navigate('/servicios')} className="btn-secondary inline-block">Ver más +</a>
          </div>
        </div>
        

        <Carousel/>

        <CardList/>

 
      
        <div className=" bg-gray">
          <div class="container">
              <h4 className="text-3xl titleribbon mb-6">CONTACTO</h4>
              <ContactForm Fancybox={Fancybox}/>
          </div>
        </div>

        <div className=" bg-dark-light">
          <div class="container">
            <p className="text-white pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        

                
    </section>

    <FabButton/>

  </>
    
  );
}

