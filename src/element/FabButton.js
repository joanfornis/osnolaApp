import React from 'react';
import FabButtonStyle from './FabButton.module.scss'
import { useNavigate } from "react-router-dom";

export default function FabButton() {

  const [active, setActive] = React.useState(false);
  const navigate = useNavigate()
  function fabButtonLink() {
    setTimeout(() => navigate('/popuppage'), 500)
  }

  return (
    <button className={`shadow-xl bg-white color-gray fixed z-10 text-xl rounded-2xl ${FabButtonStyle.button} ${active === true ? FabButtonStyle.active : ''}`} onClick={() => {setActive(true);fabButtonLink('/')}}>
      <span className="text-3xl">
        +
      </span>
    </button>
  );
}
