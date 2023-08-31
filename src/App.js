import { Fancybox } from '@fancyapps/ui'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'tiny-slider/dist/tiny-slider.css';


import Router from './services/RouterLayout'
import Footer from './components/Footer'

/*Services*/
import FirebaseFetch from './services/FirebaseFetch'

/*Components*/
import CookieToast from './components/CookieToast';


function App() {

  console.log(FirebaseFetch('propertiesList'))

  return (
    <>

      <Router Fancybox={Fancybox}/>

      <CookieToast/>

      <Footer/>

    </>

  );
}

export default App;
