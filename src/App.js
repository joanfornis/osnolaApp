import { Fancybox } from '@fancyapps/ui'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'tiny-slider/dist/tiny-slider.css';


import Router from './services/Router'
import Header from './components/Header'
import Footer from './components/Footer'


import FirebaseFetch from './services/FirebaseFetch'




function App() {

  console.log(FirebaseFetch('propertiesList'))

  return (
    <>

      <Header/>
      
      <main>
        <Router Fancybox={Fancybox}/>
      </main>

      <Footer/>

    </>

  );
}

export default App;
