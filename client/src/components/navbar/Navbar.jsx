import React, { useEffect } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const navigate = useNavigate();

   useEffect(() => {
      const burger = document.querySelector(".hamburger");
      const navbar = document.querySelector(".navbar-flex");

      burger?.addEventListener("click", () => {
         burger.classList.toggle("toggle");
         navbar.classList.toggle("navbar-mobile-flex");
      });
   }, []);

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
            <li onClick={() => navigate("/campaigns")}>View Campaigns</li>
            <li onClick={() => navigate("/create")}>Create Campaign</li>

            <li onClick={() => navigate("/")}>Sign Out</li>
         </ul>

         <div className="social-nav-icons">
            <i>
               <a href="https://twitter.com/SoulZ_NFT" target="_blank" rel="noreferrer">
                  <FaTwitter size={23} />
               </a>
            </i>
            <i>
               <a href="https://www.instagram.com/accounts/login/?next=/soulz_nft/" target="_blank" rel="noreferrer">
                  <FaInstagram size={23} />
               </a>
            </i>
         </div>

         <div className="hamburger">
            <div className="stroke-1" />
            <div className="stroke-2" />
            <div className="stroke-3" />
         </div>
      </nav>
   );
};

export default Navbar;
