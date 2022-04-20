import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../create-questions/create-question.scss";
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
                        <label className="bolder">Question Description</label>
                        <textarea placeholder="Enter description" value={formValues.questionStatement} onChange={(e) => setFormValues({ ...formValues, questionStatement: e.target.value })} />
                     </div>

                     <div className="nested-form-group">
                        <div className="form-group">
                           <label>Option A Description</label>
                           <textarea placeholder="Enter description" value={formValues.optionAStatement} onChange={(e) => setFormValues({ ...formValues, optionAStatement: e.target.value })} />
                        </div>
                        <div className="form-group">
                           <label>Option B Description</label>
                           <textarea placeholder="Enter description" value={formValues.optionBStatement} onChange={(e) => setFormValues({ ...formValues, optionBStatement: e.target.value })} />
                        </div>
                     </div>

                     <div className="nested-form-group">
                        <div className="form-group">
                           <label>Option C Description</label>
                           <textarea placeholder="Enter description" value={formValues.optionCStatement} onChange={(e) => setFormValues({ ...formValues, optionCStatement: e.target.value })} />
                        </div>

                        <div className="form-group">
                           <label>Option D Description</label>
                           <textarea placeholder="Enter description" value={formValues.optionDStatement} onChange={(e) => setFormValues({ ...formValues, optionDStatement: e.target.value })} />
                        </div>
                     </div>

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
