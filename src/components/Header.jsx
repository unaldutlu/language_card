import React from "react";
import react from "../assets/react.png";

function Header() {
  return (
    <div className="header text-center">
      <img src={react} alt='react_logo' className='img-fluid p-1' />
      <h3 className='text-uppercase text-white'>languages</h3>
    </div>
  );
}

export default Header;
