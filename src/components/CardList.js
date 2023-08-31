import React from "react";
import TinySlider from "tiny-slider-react";
import CardListStyle from './CardList.module.scss'
import PropertyDetailPage from './../pages/PropertyDetailPage'


const cards = ['Primera propiedad','Segunda Propiedad','Tercera Propiedad','Cuarta Propiedad']


export default function Carousel() {
    return (
        <section className="flex flex-wrap justify-center container">
          {
            cards.map((title, index) =>
              <CardItem index={index} title={title}/>
            )
          }
        </section>
    )
}




function CardItem({title, index}) {

  const [active, setActive] = React.useState(false);

  const closeDetailPageFromChild = () => {
    setActive(false);
  }

  return (
    <>
      {active ? ( //abrir ficha detalle
        <PropertyDetailPage title={title} closeDetailPageFromChild={closeDetailPageFromChild}/>
      ) : (
        ""
      )}

      <div className="p-2 flex-[1_0_100%] sm:flex-[1_0_50%] md:flex-[1_0_25%]">
        <article className={`shadow-lg rounded-md p-5 mb-4 bg-white ${active === true ? CardListStyle.active : ''}`}>
          <img src={`https://picsum.photos/seed/${index+1}/200/300`} alt="" className={`w-full h-[300px] bg-slate`}/>
          <div className="!mt-6">
            <h3 className="text-2xl text-primary-light">{title}</h3>
            <p>{title}</p>
            <button className={`!mt-6 text-primary text-lg ${active === true ? 'hidden' : ''}`} onClick={(e) => {setActive(true);}} >See more +</button>
          </div>
        </article>
      </div>
    </>
    
  )
}