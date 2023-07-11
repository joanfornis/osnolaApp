import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


/*Pages*/
import HomePage from "./../pages/HomePage"
import ContactPage from "./../pages/ContactPage"
import WhitePage from "./../pages/WhitePage"


export default function Router({Fancybox}) {
    return (
        <>

          <BrowserRouter>
            {
            <nav className="py-2"> 
              <Link to="/" name="text-primary underline font-bold px-2">HOME</Link>
              <Link to="/contact" className="text-primary underline font-bold px-2">CONTACT</Link>
            </nav>
            }
            <Routes> {}
              <Route index element={<HomePage Fancybox={Fancybox}/>} />
              <Route path="contact" element={<ContactPage Fancybox={Fancybox}/>} />
              <Route path="whitepage" element={<WhitePage/>} />
            </Routes>
          </BrowserRouter>

        </>
  
    );
  }
  