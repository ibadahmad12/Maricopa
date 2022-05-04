import React, { useState } from "react";
import RootLayout from "../../Layout/RootLayout";
import CreateCampaign from "../../components/CreateCampaign/CreateCampaign";
import CreateQuestion from "../../components/CreateQuestions/CreateQuestion";

const Campaign = () => {
   const [showQuestionForm, isShowQuestionForm] = useState(false);
   const [newCampaign, setNewCampaign] = useState(null);

   return (
      <>
         <RootLayout>
            {!showQuestionForm ? (
               <CreateCampaign
                  isShowQuestionForm={isShowQuestionForm}
                  newCampaign={newCampaign}
                  setNewCampaign={setNewCampaign}
               />
            ) : (
               <CreateQuestion isShowQuestionForm={isShowQuestionForm} newCampaign={newCampaign} />
            )}
         </RootLayout>
      </>
   );
};

export default Campaign;
