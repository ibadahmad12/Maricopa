import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegCheckCircle } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import axios from "axios";
import RootLayout from "../../Layout/RootLayout";
import cogoToast from "cogo-toast";
import DatePicker from "react-datepicker";
import Modal from "../../components/EditModal/Modal";
import "./preview.scss";

const Preview = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const [showModal, isShowModal] = useState(false);
   const [data, setData] = useState(location?.state.data);
   const [editQuestion, setEditQuestion] = useState({ question: null, index: 0 });
   const [campaignDate, setCampaignDate] = useState(new Date());

   const saveCampaign = () => {
      setData({ ...data, scheduleDate: parseDate(campaignDate) });

      axios
         .get(`https://maricopa-surveys.herokuapp.com/api/campaigns/date/${parseDate(campaignDate)}`)
         .then(() =>
            cogoToast.error("Another Campaign is already scheduled on this date. Please choose some other date")
         )
         .catch(({ response }) => {
            if (response.status === 404) {
               axios
                  .post("https://maricopa-surveys.herokuapp.com/api/campaigns", {
                     ...data,
                     scheduleDate: parseDate(campaignDate)
                  })
                  .then(() => {
                     cogoToast.success("Campaign created successfully");
                     navigate("/campaigns");
                     return;
                  })
                  .catch(({ response: { data } }) => cogoToast.error(data.message));
            } else cogoToast.error(response.data.message);
         });
   };

   const parseDate = (date) => {
      return new Date(date).getFullYear() + "-" + (new Date(date).getMonth() + 1) + "-" + new Date(date).getDate();
   };

   const saveUpdatedValues = (e, updatedQuestion) => {
      e.preventDefault();
      data.questions[editQuestion.index].statement = updatedQuestion.questionStatement;
      data.questions[editQuestion.index].answers[0].statement = updatedQuestion.optionAStatement;
      data.questions[editQuestion.index].answers[1].statement = updatedQuestion.optionBStatement;
      data.questions[editQuestion.index].answers[2].statement = updatedQuestion.optionCStatement;
      data.questions[editQuestion.index].answers[3].statement = updatedQuestion.optionDStatement;
      setData({
         ...data,
         questions: [
            ...data.questions.slice(0, editQuestion.index),
            data.questions[editQuestion.index],
            ...data.questions.slice(editQuestion.index + 1)
         ]
      });
      isShowModal(false);
      cogoToast.success("Campaign updated successfully");
   };

   return (
      <RootLayout>
         <div className="preview-wrapper">
            <div className="preview-inner-wrapper">
               {data?.questions.map((singleQuestion, index) => (
                  <SingleQuestionPreview
                     singleQuestion={singleQuestion}
                     key={index}
                     index={index}
                     isShowModal={isShowModal}
                     setEditQuestion={setEditQuestion}
                  />
               ))}
            </div>
            <div className="campaign-date-scheduler">
               <label>Schedule Date</label>
               <DatePicker selected={campaignDate} onChange={(date) => setCampaignDate(date)} />
            </div>
            <div className="button-wrapper">
               <button onClick={saveCampaign}>Confirm</button>
               <button onClick={() => navigate("/create")}>Discard All</button>
            </div>
         </div>
         <Modal
            showModal={showModal}
            closeModal={() => isShowModal(false)}
            saveUpdatedValues={saveUpdatedValues}
            editQuestion={editQuestion.question}
            setEditQuestion={setEditQuestion}
         />
      </RootLayout>
   );
};

export default Preview;

const SingleQuestionPreview = ({ singleQuestion, index, isShowModal, setEditQuestion }) => {
   return (
      <div className="single-question-preview">
         <div style={{ position: "relative" }}>
            <h2>Question No. {index + 1}</h2>
            <i
               className="edit-icon"
               onClick={() => {
                  setEditQuestion({ question: singleQuestion, index });
                  isShowModal(true);
               }}
            >
               <GrEdit size={25} />
            </i>
         </div>
         <h4>{singleQuestion.statement}</h4>
         {singleQuestion.answers.map((option) => (
            <div className="preview-answers" key={Math.random() * 100}>
               <i>
                  <FaRegCheckCircle size={20} />
               </i>
               <p>{option.statement}</p>
            </div>
         ))}
      </div>
   );
};
