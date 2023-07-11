import React from 'react';
import FabButtonStyle from './FabButton.module.scss'
import { useNavigate } from "react-router-dom";

export default function FabButton() {

  const [active, setActive] = React.useState(false);
  //Volver a la raíz para poder inicializar de nuevo Fancybox
  const navigate = useNavigate()
  function fabButtonLink() {
    setTimeout(() => navigate('/whitepage'), 500)
  }

  return (
    <button className={`shadow-xl bg-white color-gray fixed text-xl rounded-2xl ${FabButtonStyle.button} ${active === true ? FabButtonStyle.active : ''}`} onClick={(e) => {setActive(true);fabButtonLink('/')}}>
      <span className="text-3xl">
        +
      </span>
    </button>
  );
}
