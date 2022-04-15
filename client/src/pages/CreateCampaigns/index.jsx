import React, { useState } from "react";
import RootLayout from "../../RootLayout";
import CreateCampaign from "../../components/create-campaign/CreateCampaign";
import CreateQuestion from "../../components/create-questions/CreateQuestion";

const Campaign = () => {
   const [showQuestionForm, isShowQuestionForm] = useState(false);
   const [newCampaign, setNewCampaign] = useState(null);

   return (
      <>
         <RootLayout>
            {!showQuestionForm ? (
               <CreateCampaign isShowQuestionForm={isShowQuestionForm} newCampaign={newCampaign} setNewCampaign={setNewCampaign} />
            ) : (
               <CreateQuestion isShowQuestionForm={isShowQuestionForm} newCampaign={newCampaign} />
            )}
         </RootLayout>
      </>
   );
};

export default Campaign;
