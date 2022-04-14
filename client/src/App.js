import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Campaign from "./pages/CreateCampaigns/index";
import ShowCampaign from "./pages/ShowCampaigns/ShowCampaign";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Auth />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/create-campaign" element={<Campaign />} exact />
            <Route path="/show-campaigns" element={<ShowCampaign />} exact />
         </Routes>
      </Router>
   );
};

export default App;
