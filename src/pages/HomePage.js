import React from 'react';
import Hero from './../components/Hero'
import Carousel from './../components/Carousel'
import FabButton from './../element/FabButton';

export default function Home({Fancybox}) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => { 
 
    setLoading(false, '')
  }, [])
  


  return (
  <>
    <Hero/>
    
    <section className={`bg-lime w-full h-screen p-6 ${loading ? 'opacity-0' : 'opacity-1'}`}>

      <h4>Home Working OK👌</h4>

      <Carousel/>
                
    </section>

    <FabButton/>

  </>
    
  );
}

