import React, {useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './NavBar.css'
import logo from '../../assets/logo.svg';



const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="aibase__navbar">
      <div className="aibase__navbar-links">
        <div className="aibase__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="aibase__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#aibase">What is AIBase?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="aibase__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="aibase__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="aibase__navbar-menu_container scale-up-center">
          <div className="aibase__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#aibase">What is AIBase?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="aibase__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
          </div>
        )}  
    </div>
    </div>
  )
}

export default NavBar