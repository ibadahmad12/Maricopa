import React, { useEffect } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
   const navigate = useNavigate();

   const toggleNavbar = () => {
      const burger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar-flex");

      burger.classList.toggle("toggle");
      navbar.classList.toggle("navbar-mobile-flex");
   };

   const closeMobileNav = () => {
      const burger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar-flex");
      burger.classList.remove("toggle");
      navbar.classList.remove("navbar-mobile-flex");
   };

   return (
      <nav className="navbar-flex">
         <div className="logo-container">
            <img src="/logo.png" className="logo" alt="logo" />
         </div>
         <ul onClick={closeMobileNav}>
            <li className="active" onClick={() => navigate("/home")}>
               Home
            </li>
            <li onClick={() => navigate("/campaigns")}>View Surveys</li>
            <li onClick={() => navigate("/create")}>Create Survey</li>

            <li onClick={() => navigate("/")}>Sign Out</li>
         </ul>

         <div className="social-nav-icons"></div>

         <div className="hamburger" onClick={toggleNavbar}>
            <div className="stroke-1" />
            <div className="stroke-2" />
            <div className="stroke-3" />
         </div>
      </nav>
   );
};

export default Navbar;
