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

const slides = [1,2,3,4,5]

export default function Carousel() {
    return (
      <section className={`${CarouselStyle.carousel} bg-slate`}>

        <h4 className=" text-3xl titleribbon container !pb-0">Properties</h4>
        <div className='relative pb-12 pr-6'>
          <TinySlider settings={settings} className="cursor-grab m-auto py-6">
            {
              slides.map((number) =>
                <SliderItem key={number}/>
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




function SliderItem() {


  return (
    <div>
      <article className={`shadow-lg rounded-md b-4 bg-white overflow-hidden hover:scale-105`}>
        <img src="" alt="" className={`w-full h-[200px] bg-dark-light animate-pulse`}/>
        <div className="!mt-3 p-5 py-1 cursor-auto">
          <div className="flex justify-between py-2 pb-4">
            <span className="font-josefin text-dark-light text-md flex"><img src='/assets/icons/location-gray.svg' className="h-[20px] w-[20px] inline mr-1"/>Urb. Roñosa</span>
            <span className="font-josefin text-dark-light text-md flex"><img src='/assets/icons/surface-gray.svg' className="h-[20px] w-[20px] inline mr-1"/>75m²</span>
          </div>
          <h3 className="text-2xl my-1 text-primary hover:text-secondary">PropertyTitle</h3>
          <p>Description</p>
          <p className="font-josefin text-secondary text-xl py-5">200.000€</p>
        </div>
      </article>
    </div>
  )
}