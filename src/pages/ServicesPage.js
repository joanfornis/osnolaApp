import React from 'react';
import Hero from './../components/Hero'
import CarouselServices from './../components/CarouselServices'


export default function ServicesPage({Fancybox}) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => { 
 
    setLoading(false, '')
  }, [])
  


  return (
  <>
    
    <a href="/" className="pointer-events-none md:pointer-events-auto">
      <img src="/assets/logos/osnola-logo-primary.svg" alt="logo" className="mainlogo absolute z-10 top-0 w-[170px] h-[170px] p-4 opacity-0 md:opacity-100"/>
    </a>

    <section className={`bg-white w-full ${loading ? '-translate-x-full opacity-0' : 'translate-x-0 opacity-1'}`}>

      <Hero background='/assets/images/services-background.jpg'>

        {/*<CarouselServices/>*/}

      </Hero>
                
    </section>


  </>
    
  );
}

