import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import axios from "axios";
import RootLayout from "../../RootLayout";
import cogoToast from "cogo-toast";
import "./preview.scss";

const Preview = () => {
   const location = useLocation();
   const navigate = useNavigate();

   const saveCampaign = () => {
      axios
         .post("/api/campaigns", location?.state?.data)
         .then(({ data }) => cogoToast.success("Campaign created successfully"))
         .catch(({ response: { data } }) => cogoToast.error(data.message));
   };

   return (
      <RootLayout>
         <div className="preview-wrapper">
            <div className="preview-inner-wrapper">
               {location?.state.data?.questions.map((singleQuestion, index) => (
                  <SingleQuestionPreview singleQuestion={singleQuestion} key={index} index={index} />
               ))}
            </div>
            <div className="button-wrapper">
               <button onClick={saveCampaign}>Confirm</button>
               <button onClick={() => navigate("/create-campaign")}>Discard All</button>
            </div>
         </div>
      </RootLayout>
   );
};

export default Preview;

const SingleQuestionPreview = ({ singleQuestion, index }) => {
   return (
      <div className="single-question-preview">
         <h2>Question No. {index + 1}</h2>
         <h4>
            {/* {singleQuestion.statement} */}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </h4>
         {singleQuestion.answers.map((option) => {
            return (
               <div className="preview-answers">
                  <i>
                     <FaRegCheckCircle size={20} />
                  </i>
                  <p>{option.statement}</p>
               </div>
            );
         })}
      </div>
   );
};
