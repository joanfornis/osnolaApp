import React from 'react';
import FabButtonStyle from './FabButton.module.scss'
import { useNavigate } from "react-router-dom";

export default function FabButton() {

  const [active, setActive] = React.useState(false);
  const navigate = useNavigate()
  function fabButtonLink() {
    setTimeout(() => navigate('/popuppage'), 500)
  }

  function toggleByScroll() {
    let fabButton = document.getElementById('fabButton');
    if (window.scrollY > 1000) {
      fabButton.classList.add("opacity-75");
      fabButton.classList.remove("pointer-events-none");
    } else {
      fabButton.classList.remove("opacity-75");
      fabButton.classList.add("pointer-events-none");
    }
  }
  document.addEventListener("scroll", toggleByScroll);

  return (
    <button id="fabButton" className={`shadow-xl bg-white color-gray fixed z-10 text-xl rounded-2xl flex justify-center items-center opacity-0 pointer-events-none ${FabButtonStyle.button} ${active === true ? FabButtonStyle.active : ''}`} onClick={() => {/*setActive(true);fabButtonLink('/')*/window.scrollTo({top: 0,behavior: 'smooth'});toggleByScroll()}}>
      <img src="/assets/icons/arrow-primary-up.svg" alt="arrow-up" className=" w-4 h-4"/>
    </button>
  );
}
