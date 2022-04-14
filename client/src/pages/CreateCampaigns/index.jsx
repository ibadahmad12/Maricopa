import React, { useState } from "react";
import RootLayout from "../../RootLayout";
import CreateCampaign from "../../components/create-campaign/CreateCampaign";
import CreateQuestion from "../../components/create-questions/CreateQuestion";

const Campaign = () => {
   const [showQuestionForm, isShowQuestionForm] = useState(false);

   return (
      <>
         <RootLayout>{showQuestionForm ? <CreateCampaign isShowQuestionForm={isShowQuestionForm} /> : <CreateQuestion />}</RootLayout>
      </>
   );
};

export default Campaign;
