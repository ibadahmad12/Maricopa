import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";

const Home = () => {
   const navigate = useNavigate();
   return (
      <div className="home-wrapper">
         <img src="/pexels-home-bg.jpg" alt="home-img" />
         <div className="overlay">
            <h3>Welcome to Maricopa</h3>
            <div className="button-wrapper">
               <button onClick={() => navigate("/create-campaign")}>Create Campaign</button>
               <button onClick={() => navigate("/show-campaigns")}>See Analytics</button>
            </div>
         </div>
      </div>
   );
};

export default Home;
