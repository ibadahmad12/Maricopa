import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Home from "./Pages/Home/Home";
import Campaign from "./Pages/CreateCampaigns";
import ShowCampaign from "./Pages/Campaigns";
import Preview from "./Pages/Preview";
import SingleCampaign from "./components/SingleCampaign";

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
