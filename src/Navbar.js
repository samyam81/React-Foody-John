import React from "react";
import { Link } from "react-router-dom";
import "./CSSRepo/navbar.css"; 

function Navbar(){
    return(
        <nav>
              <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About Us</button>
        </Link>
        <Link to="/contactus">
          <button>Contact Us</button>
        </Link>
        <Link to="/coffee">
          <button>Buy a Coffee!</button>
        </Link>
      </nav>
    );
}

export default Navbar;