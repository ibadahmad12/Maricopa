import React, { useEffect, useState } from "react";
import RootLayout from "../../RootLayout";
import { useLocation } from "react-router-dom";
import "./single-campaign.scss";

const SingleCampaign = () => {
   const location = useLocation();
   const [campaigns, setCampaign] = useState(null);

   useEffect(() => {
      setCampaign(location?.state?.data);
   }, [location.state]);

   const getOptionStats = (option, totalCount) => {
      let totalSelections = 0;
      totalCount.map((option) => (totalSelections = totalSelections + option.optionCount));
      return totalSelections === 0 ? 0 : +((option / totalSelections) * 100).toPrecision(3);
   };

   return (
      <RootLayout>
         <div className="poll-wrapper">
            {campaigns?.questions.map((question) => (
               <div className="poll-area" key={question.questionID}>
                  <h2>{question.statement}</h2>

                  {question.answers.map((answer) => (
                     <label key={answer.answerID}>
                        <div className="row">
                           <div className="column">
                              <span className="text">{answer.statement}</span>
                           </div>
                           <span className="percent">{getOptionStats(answer.optionCount, question.answers)}%</span>
                        </div>
                        <div className="progress-wrapper">
                           <div className="progress" style={{ width: getOptionStats(answer.optionCount, question.answers) + "%" }}></div>
                        </div>
                     </label>
                  ))}
               </div>
            ))}
         </div>
      </RootLayout>
   );
};

export default SingleCampaign;
