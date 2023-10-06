import React from "react";
import TinySlider from "tiny-slider-react";
import CarouselStyle from './Carousel.module.scss'


const settings = {
  lazyload: true,
  nav: false,
  controls:true,
  controlsContainer: '#carouselControls',
  mouseDrag: true,
  loop: false,
  fixedWidth: 350,
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
  {title:'Piso en venta en Sabadell', description:'Magnífico piso en venta con ascensor. Consta de recibidor, salón comedor con salida a un gran balcón, amplia cocina, cuatro habitaciones (dos dobles y una individual), un baño completo con ducha. ',location:'Sabadell',price:'139.500',surface:79,image:'/assets/images/properties/001.jpg'},
  {title:"Obra nueva en Corro d'Avall", description:'Obra nueva ubicada en el casco urbano de Corró d’Avall, en Les Franqueses del Vallés, a un paso del Ayuntamiento y con todos los de servicios a su alrededor.',location:"Corro d'Avall",price:'269.000',surface:96,image:'/assets/images/properties/002.jpg'},
  {title:'Piso en venta en Sant Feliu de Codines', description:'Piso exterior de 104 m2 perfectamente distribuido en salón- comedor, cocina, cuatro habitación y dos  baño. Dispone de jardín y piscina comunitarios.',location:'St. Feliu de C.',price:'182.800',surface:104,image:'/assets/images/properties/003.jpg'},
  {title:'Magnifico piso en Sabadell', description:'Vivienda ubicada en la zona de Espronceda de Sabadell Sud. Amplio Salón-comedor con salida a balcón, Cocina independiente, Cuarto de baño completo con plato de ducha. 3 habitaciones.',location:'Sabadell',price:'142.000',surface:81,image:'/assets/images/properties/004.jpg'},
  {title:'Ático único en la zona', description:'Impresionantes vistas a la Sierra del Montsià y a la playa del Garbí. 2 habitaciones (una doble), 1 baño completo de 4 piezas. salida a la terraza de 35m2 con barbacoa y toldo motorizado.',location:'St. Carles de la R.',price:'149.500',surface:60,image:'/assets/images/properties/005.jpg'},
  {title:'Chalet Independiente en venta', description:'Planta principal con un amplio recibidor, un gran salón-comedor con salida a un porche con fantásticas vistas a la montaña y a la preciosa piscina de la que dispone la casa.',location:'Vallromanes',price:'550.000',surface:420,image:'/assets/images/properties/006.jpg'},
]

export default function Carousel() {
    return (
      <section className={`${CarouselStyle.carousel} bg-slate pt-4`}>

        <div className="container !pb-0 relative" data-aos="fade-up">
          <h4 className="relative text-3xl titleribbon text-black mb-6">DESTACADOS EN VENTA</h4>
        </div>
        <div className='relative pb-12 pr-6' data-aos="fade-up">
          <TinySlider settings={settings} className="cursor-grab m-auto py-2 flex">
            {
              slides.map((item) =>
                <SliderItem item={item}/>
              )
            }
          </TinySlider>

          <nav id='carouselControls' className="flex justify-between items-center absolute top-0 left-0 w-full h-full pointer-events-none px-6">
            <span className='scale-[2.5] block w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary pointer-events-auto cursor-pointer relative -left-2'></span>
            <span className='scale-[2.5] block w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary pointer-events-auto cursor-pointer relative -right-2'></span>
          </nav>
          
        </div>
      </section>
         
    )
}




function SliderItem({item}) {


  function fillFormByProperty(name){
    let formTextarea = document.getElementById('formMessage');
    formTextarea.value = `Solicito información para el inmueble ${name}`;
    window.location.href = "#contact";
  }


  return (
    <div id="properties" className={`!inline-flex`}>
      <article className={`h-full shadow-lg rounded-md b-4 bg-white overflow-hidden`}>
        <figure className={`${CarouselStyle.thumbnail} relative`}>
          <img src={item.image} alt={item.title} className={`w-full h-[250px] bg-dark-light filter object-cover`}/>
        </figure>
        <div className="relative !mt-3 p-5 py-1 pb-10 cursor-auto">
          <div className="absolute z-10 -top-16 flex justify-between py-2 pb-4">
            <span className="font-josefin text-white text-md flex mr-8"><img src='/assets/icons/location-gray.svg' className="h-[20px] w-[20px] inline mr-1"/>{item.location}</span>
            <span className="font-josefin text-white text-md flex mr-8"><img src='/assets/icons/surface-gray.svg' className="h-[20px] w-[20px] inline mr-1"/>{item.surface}m²</span>
          </div>
          <p className="font-josefin text-secondary text-xl pt-2">{item.price}€</p>
          <h3 className="text-2xl my-2 text-primary hover:text-secondary">{item.title}</h3>
          <p className="pb-7">{item.description}</p>
          <a className="btn-primary text-center bg-primary" onClick={(e) => fillFormByProperty(item.title) }>Consultar</a>
        </div>
      </article>
    </div>
  )
}