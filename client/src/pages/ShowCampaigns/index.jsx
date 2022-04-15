import React, { useEffect, useState } from "react";
import axios from "axios";
import "./show-campaign.scss";
import RootLayout from "../../RootLayout";

const ShowCampaign = () => {
   const [campaigns, setCampaigns] = useState(null);

   useEffect(() => {
      axios.get("/api/campaigns").then(({ data }) => setCampaigns(data));
   }, []);

   if (!campaigns)
      return (
         <RootLayout>
            <h6 className="loading-text">Loading ...</h6>
         </RootLayout>
      );

   return (
      <>
         <RootLayout>
            <div className="campaigns-wrapper">
               {campaigns.map((campaign) => (
                  <SingleCampaign campaign={campaign} key={campaign.id} />
               ))}
            </div>
         </RootLayout>
      </>
   );
};

export default ShowCampaign;

const SingleCampaign = ({ campaign }) => {
   return (
      <div className="single-compaign-card">
         <h2>{campaign.title}</h2>
         <h6>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
            was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
         </h6>
         <p>
            Scheduled on <strong>{campaign.scheduleDate.slice(0, 10)}</strong>
         </p>
      </div>
   );
};
