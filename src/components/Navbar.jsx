import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const styled = {

}
const Navbar = () => {
  const [buttonText, setButtonText] = useState("Light");
  const handleButtonClick = () => {
    setButtonText(buttonText === "Light" ? "Dark" : "Light");
  };

  useEffect(() => {


  }, []);

  return (
    <div className="navbar" style={styled}>
      <h1>LOGO</h1>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "20px"
      }}>
        <ul className='menu-items'>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/men">MEN</Link></li>
          <li><Link to="/women">WOMEN</Link></li>
          <li><Link to="/kid">KIDS</Link></li>
          <li><Link to="/about">ABOUT</Link></li>

          <li><Link to="/cart">CART</Link></li>
        </ul>
        <button onClick={handleButtonClick}>{buttonText}</button>
      </div>
    </div>
  )
}

export default Navbar
