import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


/*Pages*/
import HomePage from "./../pages/HomePage"
import ContactPage from "./../pages/ContactPage"



export default function Router({Fancybox}) {
    return (
        <>

        <BrowserRouter>
          {
          <nav class="py-2"> 
            <Link to="/" class="text-primary underline font-bold px-2">HOME</Link>
            <Link to="/contact" class="text-primary underline font-bold px-2">CONTACT</Link>
          </nav>
          }
          <Routes> {}
            <Route index element={<HomePage Fancybox={Fancybox}/>} />
            <Route path="contact" element={<ContactPage Fancybox={Fancybox}/>} />
          </Routes>
        </BrowserRouter>

        

        </>
        
  
    );
  }
  