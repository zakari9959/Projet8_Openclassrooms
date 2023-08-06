import React from 'react';
import Navbar from '../Navbar/Navbar';
//import photoprofil from '%PUBLIC_URL%/docs/assets/photoprofil.webp';
import './Header.css';

const Header = () => (
  <header>
    <h1>Zakari Rafa</h1>
    {/* <img src={photoprofil} alt=""></img> */}
    <Navbar />
  </header>
);

export default Header;
