import HeaderStyle from './Header.module.scss'
import { Link } from "react-router-dom";


export default function Header() {
  

  function uncheckMenu () {
    let checkMenu = document.getElementById('menu')
    checkMenu.checked = false;
  }


  return (
    <>
      <header className="text-primary fixed w-full z-10 px-2 flex items-center justify-between bg-white h-[75px] md:bg-transparent md:absolute shadow-sm md:shadow-none">
        <img src="/assets/logos/osnola-logo-primary.svg" alt="logo" className="relative self-start top-0 left-4 w-[120px] h-[120px] p-4 bg-white shadow-lg md:opacity-0"/>
        <div className="w-full text-right md:mr-2">
          <a href="tel:611 509 403" className="bg-slate rounded-full py-[10px] px-5 hover:bg-gray"><img src='/assets/icons/phone-secondary.svg' className="h-[18px] w-[18px] inline md:mr-2"/><span className="font-bold text-dark-light hidden md:inline">611 509 403</span></a>
        </div>
        <input type="checkbox" id="menu" className="hidden"></input>
        <label id="hamburguer" for="menu" className="relative z-20 p-4 py-6 cursor-pointer">
          <span className="opacitylines block w-10 h-[3px] bg-black mb-[10px] md:bg-white"></span>
          <span className="rotatedlines my-[10px]">
            <span className="absolute w-10 h-[3px] bg-black md:bg-white"></span>
            <span className="absolute w-10 h-[3px] bg-black md:bg-white"></span>
          </span>
          <span className="opacitylines block w-10 h-[3px] bg-black mt-[22px] md:bg-white"></span>
        </label>

        <nav className={`${HeaderStyle.menu} menu py-20 px-6 bg-dark text-white fixed w-full max-w-[410px] h-full z-10 top-0 -right-[410px] text-2xl`}>
          <ul className="border-y-4 border-primary py-4">
            <li><Link to="/" name="" className="block py-3 px-4 rounded-md hover:bg-dark-light" onClick={uncheckMenu}>Home</Link></li>
            <li><Link to="/servicios"  className="block py-3 px-4 rounded-md hover:bg-dark-light" onClick={uncheckMenu}>Servicios</Link></li>
            <li><Link to="/contacto"  className="block py-3 px-4 rounded-md hover:bg-dark-light" onClick={uncheckMenu}>Contacto</Link></li>
          </ul>
        </nav>
        
      </header>
    </>
  );
}
