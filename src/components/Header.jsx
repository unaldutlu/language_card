import React from "react";
import react from "../assets/react.png";

function Header() {
  return (
    <div className="text-center mt-5">
      <img src={react} alt='react_logo' className='img-fluid' />
      <h3 className='text-uppercase'>languages</h3>
    </div>
  );
}

export default Header;
