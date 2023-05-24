import React from "react";
import TinySlider from "tiny-slider-react";


const settings = {
  lazyload: true,
  nav: true,
  controls:true,
  mouseDrag: true,
  loop: true,
  items: 1,
  gutter: 20,
  responsive: {
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
};


const slides = [1,2,3,4,5]

export default function Carousel() {
    return (
        <TinySlider settings={settings}>
          {
            slides.map((number) =>
              <SliderItem key={number}/>
            )
          }
        </TinySlider>
    )
}


function SliderItem() {
  return (
    <div>
      <article class="shadow-lg rounded-md p-5 mb-4 bg-white">
        <img src="" class="w-full h-[300px] bg-slate animate-pulse"/>
        <div>
          <h3>title</h3>
          <p>paragraph</p>
        </div>
      </article>
    </div>
  )
}