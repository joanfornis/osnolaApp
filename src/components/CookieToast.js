import React from "react";


export default function CookieToast() {


  const [cookie, setCookie] = React.useState(localStorage.getItem("cookie"));
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
      // Update the document title using the browser API
      setTimeout(() => {setLoading(false, '')}, 3000);
  }, [])

  if (cookie !== 'true') {
    function addCookie() {
      setCookie('true')
      localStorage.setItem("cookie",true)
    }
    return (
        <div className={`bg-dark text-white fixed w-full z-10 p-7 rounded-t-xl sm:max-w-[350px] sm:right-6 ${loading ? '-bottom-[400px]' : 'bottom-0'}`}>
            <p class="font-josefin text-xl pb-3">Cookie policy 🍪</p>
            <p class="text-sm border-t-2 border-primary pt-3" >Si continúa navegando en este sitio web está aceptando el uso de cookies explicadas en nuestra <a class="underline" data-fancybox="true" data-src="#dialog-content">política de cookies</a>.</p>
            <button onClick={addCookie} class="w-full border-white border-[3px] rounded-md mt-4 py-2 px-6 text-white font-bold hover:bg-dark-light active:bg-gray active:text-dark">Aceptar</button>
        </div>
    );
  }

  
}
