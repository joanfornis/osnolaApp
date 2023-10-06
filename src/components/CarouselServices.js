import React from "react";
import TinySlider from "tiny-slider-react";
import CarouselStyle from './Carousel.module.scss'


const settings = {
  lazyload: true,
  nav: false,
  controls:false,
  mouseDrag: true,
  loop: false,
  fixedWidth: 300,
  edgePadding:25,
  gutter: 25,
  /* 
  items: 1,
  responsive: {
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
  */
};

const slides = [
  {title:'Asesoramiento inmobiliario.', description:'Realizamos un reportaje profesional de fotos y colocamos el anuncio en los principales pórtales de internet y en nuestras agencias colaboradoras.'},
  {title:'Gestión de Alquileres', description:'Gestionamos y hacemos de mediadores en comunidades de vecinos.'},
  {title:'Venta de Pisos', description:' Si tienes dudas sobre el precio de tu propiedad, realizamos un estudio totalmente gratuito para ayudarte a orientarte teniendo en cuenta todos los factores.'},
  {title:'Comunidades', description:'Contamos con varias agencias oficiales para realizar una tasación oficial.'},
  {title:'Valoración Gratuita', description:'Gracias a los acuerdos de colaboración con varias compañías importantes de seguros podemos ofrecer precios muy competitivos.'},
  {title:'Tasaciones', description:'Si es necesario algún tipo de certificado de eficiencia energética o algún informe especial, os ponemos en contacto con varias empresas y arquitectos para poderlos tramitar lo más rápido posible.'},
]

export default function CarouselServices() {
    return (
      <section className={`${CarouselStyle.carousel} relative bg-dark pt-[1rem]`}>
        <figure>
          <img src='/assets/images/services-background.jpg' alt="image" className="absolute w-full h-full top-0 left-0 object-cover object-left"/>
        </figure>
        <div className="container !pb-0 relative" data-aos="fade-up">
          <h4 className="relative text-3xl titleribbon text-black mb-6">SERVICIOS</h4>
          <p className="text-dark pb-6 max-w-[600px]">Ofrecemos <b>asesoramiento gratuito</b> y nuestras tarifas se ajustan a las características del cliente, siendo siempre muy competitivas y ofreciendo un servicio integral en las operaciones. Contamos con un <b>amplio equipo de comerciales y profesionales</b> tales como Fotógrafos profesionales, Decoradores especializados en Home Staging o incluso Oficiales de Albañilería para pequeñas reformas.</p>
          <p className="text-dark pb-6 max-w-[500px]">También realizamos gestión de comunidades de vecinos y somos mediadores con varias compañías de seguros para poder ofrecer el mejor producto a nuestros clientes.</p>
          <p className="text-dark pb-6 max-w-[300px]">Para más información acerca de nuestros servicios no dudes en ponerte en <a href="#contact" class="text-primary font-bold">contacto con nosotros</a></p>
        </div>
        <div className='pr-6 relative' data-aos="fade-up">
          <TinySlider settings={settings} className="flex py-6 pb-10">
            {
              slides.map((item) =>
                <SliderItem item={item}/>
              )
            }
          </TinySlider>
          
        </div>
      </section>
         
    )
}




function SliderItem({item}) {

  return (
    <div className="inline-flex">
      <article className={`h-full shadow-lg rounded-md b-4 bg-white overflow-hidden !cursor-grab hover:scale-105`}>
        <div className="relative !mt-3 p-8 pt-6 pb-12 text-dark !cursor-grab">
          {/*<img src="/assets/icons/services/assist.svg" alt="" className={`w-[175px] animate-pulse pt-6 pb-10 pr-12 opacity-50`}/>*/}
          <h3 className="text-2xl mb-2 text-primary hover:text-secondary">{item.title}</h3>
          <p>{item.description}</p>
          {/*<p className="font-josefin text-secondary text-xl py-5">Ver más +</p>*/}
        </div>
      </article>
    </div>
  )
}