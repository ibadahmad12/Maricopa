import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import "./home.scss";

const Home = () => {
   const navigate = useNavigate();
   return (
      <div className="home-wrapper">
         <img src="/pexels-home-bg.jpg" alt="home-img" />
         <div className="overlay">
            <img src="/home_bg.png" alt="logo" />
            <span onClick={() => navigate("/")}>
               <i>
                  <BiLogOut size={28} />
               </i>
               Sign Out
            </span>

            <h3>Phi Theta Kappa AR App Survey Creation Tool</h3>
            <div className="button-wrapper">
               <button onClick={() => navigate("/create")}>Create Survey</button>
               <button onClick={() => navigate("/campaigns")}>See Analytics</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
