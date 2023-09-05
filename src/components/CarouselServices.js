import React from "react";
import TinySlider from "tiny-slider-react";
import CarouselStyle from './Carousel.module.scss'
import PropertyDetailPage from "../pages/PropertyDetailPage";


const settings = {
  lazyload: true,
  nav: false,
  controls:true,
  controlsContainer: '#carouselControls',
  mouseDrag: true,
  loop: false,
  fixedWidth: 250,
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

const slides = [1,2,3,4,5,6,7,8]

export default function CarouselServices() {
    return (
      <section className={`${CarouselStyle.carousel} pt-[150px]`}>

        <h4 className="relative text-3xl titleribbon text-black pl-[25px] !pb-0">SERVICIOS</h4>
        <div className='relative max-w-[1390px] pr-6'>
          <TinySlider settings={settings} className="cursor-grab m-auto py-6">
            {
              slides.map((number) =>
                <SliderItem key={number}/>
              )
            }
          </TinySlider>

          <nav id='carouselControls' className="flex justify-between items-center absolute top-0 left-0 w-full h-full pointer-events-none px-6 [@media(min-width:1410px)]:pr-0">
            <span className='scale-[2.5] block w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-primary pointer-events-auto cursor-pointer relative -left-2'></span>
            <span className='scale-[2.5] block w-0 h-0 border-t-8 border-b-8 border-l-8 border-transparent border-l-primary pointer-events-auto cursor-pointer relative -right-2 [@media(min-width:1410px)]:-right-4'></span>
          </nav>
          
        </div>
      </section>
         
    )
}




function SliderItem() {


  return (
    <div>
      <article className={`shadow-lg rounded-md b-4 bg-white overflow-hidden hover:scale-105`}>
        <div className="relative !mt-3 p-6 py-1 cursor-auto text-dark">
          <img src="/assets/icons/services/assist.svg" alt="" className={`w-[150px] animate-pulse pt-4 pb-6 pr-12 opacity-50`}/>
          <h3 className="text-2xl mb-2 text-primary hover:text-secondary">ServiceTitle</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
          <a className="block font-josefin text-secondary text-xl py-5">Ver más +</a>
        </div>
      </article>
    </div>
  )
}