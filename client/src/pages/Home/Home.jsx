import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import "./home.scss";

const Home = () => {
   const navigate = useNavigate();
   return (
      <div className="home-wrapper">
         <img src="/pexels-home-bg.jpg" alt="home-img" />
         <div className="overlay">
            <span onClick={() => navigate("/")}>
               <i>
                  <MdOutlineKeyboardBackspace size={25} />
               </i>
               Back
            </span>
            <h3>Welcome to Maricopa</h3>
            <div className="button-wrapper">
               <button onClick={() => navigate("/create")}>Create Campaign</button>
               <button onClick={() => navigate("/campaigns")}>See Analytics</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
