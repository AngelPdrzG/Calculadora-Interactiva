import React from "react";
import freeCodeCampLogo from '../img/freecodecamp-logo.png';
import '../hojas-de-estilo/logo.css';

function LogoFreeCodeCamp(props) {
  return (
    <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
  );
}

export default LogoFreeCodeCamp;