import React from 'react';
import Carousel from './../components/Carousel'

export default function Home({Fancybox}) {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => { 
 
    setLoading(false, '')
  }, [])
  


  return (
    <section className={`bg-lime w-full h-screen rounded-2xl p-6 ${loading ? 'opacity-0' : 'opacity-1'}`}>
      <h4>Home Working OK👌</h4>

      <Carousel/>
                
    </section>
  );
}

