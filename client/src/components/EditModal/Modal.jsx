import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../CreateQuestions/create-question.scss";
import Inputs from "../OptionInputs";
import "./modal.scss";

const Modal = ({ closeModal, showModal, editQuestion, saveUpdatedValues }) => {
   const [formValues, setFormValues] = useState({
      questionStatement: "",
      optionAStatement: "",
      optionBStatement: "",
      optionCStatement: "",
      optionDStatement: ""
   });

   const [domReady, setDomReady] = useState(false);

   useEffect(() => {
      setDomReady(true);
   }, []);

   useEffect(() => {
      setFormValues({
         questionStatement: editQuestion?.statement ?? "",
         optionAStatement: editQuestion?.answers[0]?.statement ?? "",
         optionBStatement: editQuestion?.answers[1]?.statement ?? "",
         optionCStatement: editQuestion?.answers[2]?.statement ?? "",
         optionDStatement: editQuestion?.answers[3]?.statement ?? ""
      });
   }, [editQuestion]);

   const handleQuestionStatementChange = (e) => {
      if (e.target.value.length <= 300) setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   if (!showModal) return;

   return domReady ? (
      ReactDOM.createPortal(
         <>
            <div className="overlay" />
            <div className="modal create-question-wrapper">
               <div className="create-question-inner">
                  <span onClick={closeModal}>x</span>

                  <form onSubmit={(e) => saveUpdatedValues(e, formValues)}>
                     <div className="form-group">
                        <label className="bolder">Survey Description</label>
                        <textarea
                           required
                           placeholder="Enter description (< 300 characters)"
                           value={formValues.questionStatement}
                           name="questionStatement"
                           onChange={(e) => handleQuestionStatementChange(e)}
                        />
                     </div>

                     <Inputs formValues={formValues} setFormValues={setFormValues} />

                     <button>Save </button>
                  </form>
               </div>
            </div>
         </>,
         document.getElementById("modal")
      )
   ) : (
      <></>
   );
};

export default Modal;
