import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


/*Pages*/
import HomePage from "../pages/HomePage"
import ServicesPage from "../pages/ServicesPage"
import ContactPage from "../pages/ContactPage"
import PopupPage from "../pages/PopupPage"

/*Components*/
import Header from "../components/Header"


export default function Router({Fancybox}) {
    return (
        <>
          
          <BrowserRouter>
            <Header/> {/*Llamo a componente Header para añadirle el routerMenu dentro (debe estar todo dentro del contexto BrowserRouter)*/}
            <Routes> {}
              <Route index element={<HomePage Fancybox={Fancybox}/>} />
              <Route path="contacto" element={<ContactPage Fancybox={Fancybox}/>} />
              <Route path="servicios" element={<ServicesPage Fancybox={Fancybox}/>} />
              <Route path="popuppage" element={<PopupPage/>} />
            </Routes>
          </BrowserRouter>

        </>
  
    );
  }
  