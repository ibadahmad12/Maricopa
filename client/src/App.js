import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Campaign from "./pages/CreateCampaigns/index";
import ShowCampaign from "./pages/Campaigns/index";
import Preview from "./components/preview/index";
import SingleCampaign from "./components/single-campaign/index";

const App = () => {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<Auth />} exact />
            <Route path="/home" element={<Home />} exact />
            <Route path="/create" element={<Campaign />} exact />
            <Route path="/campaigns" element={<ShowCampaign />} exact />
            <Route path="/campaigns/:id" element={<SingleCampaign />} exact />
            <Route path="/preview" element={<Preview />} exact />
         </Routes>
      </Router>
   );
};

export default App;
