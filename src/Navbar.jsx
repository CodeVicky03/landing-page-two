import React from 'react'
import mi from "./assets/mi.png";
import { IoMdPerson } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav>
          <div>
            <img src={mi} alt="MI-LOGO" />
            <button className="search" style={{ backgroundColor: "#ff6900" }}>
              SEARCH
            </button>
            <ul>
              <li>HOME</li>
              <li>SMARTPHONES</li>
              <li>MATERIALS</li>
            </ul>
          </div>
          <div className="contact">
            <p>HELP</p>
            <i>
              <IoMdPerson />
            </i>
            <i>
              <FaCartShopping />
            </i>
          </div>
        </nav>
  )
}

export default Navbar