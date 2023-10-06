import React from 'react';
import Hero from './../components/Hero'
import CarouselServices from './../components/CarouselServices'
import Carousel from './../components/Carousel'
import CardList from './../components/CardList'
import FabButton from './../element/FabButton';
import ContactForm from './../services/ContactForm'

import HomePageStyle from './HomePage.module.scss'

export default function Home({Fancybox}) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => { 
 
    setLoading(false, '')
  }, [])
  


  return (
  <>
    
    <a href="/" className="pointer-events-none md:pointer-events-auto">
      <img src="/assets/logos/osnola-logo-primary.svg" alt="logo" className="mainlogo absolute z-10 top-0 w-[170px] h-[170px] p-4 opacity-0 md:opacity-100"/>
    </a>

    <section className={`bg-white w-full ${loading ? 'opacity-0' : 'opacity-1'}`}>

      <Hero background='/assets/images/mainhero-background-nooverlay.jpg' heading='<span className="text-secondary">“</span> Hogar no es un lugar, es un sentimiento <span className="text-secondary">“</span>' link='#filosophy'/>


        <div id="filosophy" className={`${HomePageStyle.filosophy} relative bg-primary pt-4`}>
          <div className="container" data-aos="fade-up">
            <h4 className="text-white text-3xl titleribbon mb-6">NUESTRA FILOSOFÍA</h4>
            <p className="text-slate pb-6">Osnola nace para cubrir las posibles necesidades surgidas en cualquier operación inmobiliaria. <b>Apostamos por un servicio personalizado para nuestros clientes On-line</b>, es por ello que no disponemos oficina física aunque disponemos de colaboradores para los tramites de formalización. Esto nos permite <b>reducir costes y ofrecer mejores tarifas</b> a nuestra cartera de clientes, además podemos <b>gestionar cuidadosamente todas las operaciones</b> al no aceptar más de las que podemos llevar a cabo con nuestro equipo.</p>
            <p className="text-slate pb-6">La elección de una vivienda o la gestión de la misma, tiene siempre muchos factores de vital importancia que a veces podemos pasar por alto por <b>falta de información o conocimiento</b>. Por eso mismo nosotros nos encargamos de que cualquier operación que se tenga que llevar a cabo, se realice de la forma más <b>eficiente y ventajosa</b> para nuestros clientes, informando en todo momento del proceso con <b>total transparencia.</b></p>
            <p className="text-slate pb-6">Si desea <b>alquilar su propiedad, venderla o realizar cualquier tramite relacionado</b>, póngase en <a href="#contact" class="underline font-bold">contacto con nosotros</a> y concertaremos una cita para ofrecerle la mejor opción.</p>
          </div>
        </div>

        <div id="services" className={HomePageStyle.services}>
          <CarouselServices />
        </div>

        {/*<div className="container">
          <h4 className="text-3xl titleribbon mb-6">SERVICIOS</h4>
          <p className="text-dark pb-6">Ofrecemos asesoramiento gratuito y nuestras tarifas se ajustan a las características del cliente, siendo siempre muy competitivas y ofreciendo un servicio integral en las operaciones. Contamos con un amplio equipo de comerciales y profesionales tales como Fotógrafos profesionales, Decoradores especializados en Home Staging o incluso Oficiales de Albañilería para pequeñas reformas.</p>
          <p className="text-dark pb-6">También realizamos gestión de comunidades de vecinos y somos mediadores con varias compañías de seguros para poder ofrecer el mejor producto a nuestros clientes.</p>
          <p className="text-dark pb-6">Para más información acerca de nuestros servicios no dudes en ponerte en contacto con nosotros.</p>
        
          <div className="w-100 max-w-[800px] mt-10 mx-auto pl-2 sm:pl-20">
            <p className="font-josefin text-2xl mb-4">¿Qué ofrecemos?</p>
            <ul className="flex flex-wrap list-disc text-secondary pl-4 py-2">
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Asesoramiento inmobiliario</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Gestión de Alquileres</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Venta de Pisos</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Comunidades</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Valoración Gratuita</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Tasaciones</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Seguros</span></li>
              <li className="w-full sm:w-1/2 font-bold py-1"><span className="text-primary">Eficiéncia energética</span></li>
            </ul>
          </div>
        </div>*/}
        
        <div id="properties" className={`${HomePageStyle.properties}`}>
          <Carousel/>
        </div>

        {/*<CardList/>*/}

 
      
        <div id="contact" className={`${HomePageStyle.contact} bg-gray pt-4`}>
          <div class="container" data-aos="fade-up">
              <h4 className="text-3xl titleribbon mb-6">CONTACTO</h4>
              <p className="pb-10">No dude en ponerse en contacto con nosotros ¡Nuestro equipo estará encantado de ayudarle a resolver cualquier duda!</p>
              <ContactForm Fancybox={Fancybox}/>
          </div>
        </div>

        <div className="bg-dark-light">
          <div class="container text-center">
            <a href="mailto:info@osnolafincas.es" className="block font-josefin text-2xl pb-2 text-white transition-none hover:text-secondary">
              info@osnolafincas.es
            </a>
            <a href="tel:611 509 403" className="block font-josefin text-2xl pb-4 text-white transition-none hover:text-secondary">
              611 509 403
            </a>
            <p className="text-slate text-sm">Horario de atención telefónica</p>
            <p className="text-slate font-bold text-sm">Lunes a Viernes: 10-14h y de 16-20h</p>
          </div>
        </div>

        

                
    </section>

    <FabButton/>

  </>
    
  );
}

