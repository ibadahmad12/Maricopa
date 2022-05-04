import React, { useEffect, useState } from "react";
import RootLayout from "../../Layout/RootLayout";
import { useLocation } from "react-router-dom";
import "./single-campaign.scss";

const SingleCampaign = () => {
   const location = useLocation();
   const [campaigns, setCampaign] = useState(null);
   const [surveyParticipants, setSurveyParticipant] = useState(0);

   useEffect(() => {
      setCampaign(location?.state?.data);
      const counts =
         location?.state?.data.questions[0]?.answers[0].optionCount +
         location?.state?.data.questions[0]?.answers[1].optionCount +
         location?.state?.data.questions[0]?.answers[2].optionCount +
         location?.state?.data.questions[0]?.answers[3].optionCount;
      setSurveyParticipant(counts);
   }, [location.state]);

   const getOptionStats = (option, totalCount) => {
      let totalSelections = 0;
      totalCount.map((option) => (totalSelections = totalSelections + option.optionCount));
      return totalSelections === 0 ? 0 : +((option / totalSelections) * 100).toPrecision(3);
   };

   return (
      <RootLayout>
         <div className="campaign-details-wrapper">
            <h2>No of Survey Participants : {surveyParticipants}</h2>

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
                              <div
                                 className="progress"
                                 style={{ width: getOptionStats(answer.optionCount, question.answers) + "%" }}
                              ></div>
                           </div>
                        </label>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </RootLayout>
   );
};

export default SingleCampaign;
