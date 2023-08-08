import React, {useState} from "react";
import './navbar.css';
import {MdTravelExplore} from 'react-icons/md';
import { AiFillCloseCircle } from "react-icons/ai";
import {TbGridDots} from 'react-icons/tb';
import {Link} from "react-router-dom";


const Navbar = () =>{
  const [active, setActive] = useState("navBar");
  // Function to toggle Navbar
  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  // Function to toggle Navbar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="/" className="logo flex">
            <Link to="/">
              <MdTravelExplore className="icon" />
              <span className="logoText">BlueFire</span>
              <span className="spanLogo">Banyuwangi</span>
            </Link>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>

            <li className="navItem">
              <Link to="/about" className="navLink">
                About
              </Link>
            </li>

            <li className="navItem">
              <Link to="/service" className="navLink">
                Service
              </Link>
            </li>

            {/* <li className="navItem">
              <Link to="/paket" className="navLink">
                Package
              </Link>
            </li> */}

            <li className="navItem">
              <Link to="/contact" className="navLink">
                Contact
              </Link>
            </li>

            <button className="btn">
              <a href="/contact">Book Now</a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
}

export default Navbar;