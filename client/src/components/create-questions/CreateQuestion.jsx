import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create-question.scss";

const CreateQuestion = ({ newCampaign }) => {
   const navigate = useNavigate();
   const [formValues, setFormValues] = useState({
      questionStatement: "",
      optionAStatement: "",
      optionBStatement: "",
      optionCStatement: "",
      optionDStatement: ""
   });
   const [questions, setQuestions] = useState([]);

   const submitForm = (e) => {
      e.preventDefault();
      setQuestions((prevQuestions) => [...prevQuestions, formValues]);
      setFormValues({ questionStatement: "", optionAStatement: "", optionBStatement: "", optionCStatement: "", optionDStatement: "" });
      window.scrollTo(0, 0);
   };

   const arrangeToApiFormat = () => {
      let arrangedQs = [];
      questions.map((prop) => {
         arrangedQs.push({
            statement: prop.questionStatement,
            answers: [
               { statement: prop.optionAStatement, optionName: "a" },
               { statement: prop.optionBStatement, optionName: "b" },
               { statement: prop.optionCStatement, optionName: "c" },
               { statement: prop.optionDStatement, optionName: "d" }
            ]
         });
      });
      return arrangedQs;
   };

   if (newCampaign?.questionCount === questions.length) {
      navigate("/preview", {
         state: {
            data: { ...newCampaign, questions: arrangeToApiFormat() }
         }
      });
   }

   return (
      <div className="create-question-wrapper">
         <div className="create-question-inner">
            <form onSubmit={submitForm}>
               <h3>Question No # {questions.length + 1}</h3>

               <div className="form-group">
                  <label className="bolder">Question Description</label>
                  <textarea
                     required
                     rows={5}
                     type="text"
                     className="form-control"
                     placeholder="Enter description"
                     value={formValues.questionStatement}
                     onChange={(e) => setFormValues({ ...formValues, questionStatement: e.target.value })}
                  />
               </div>

               <div className="nested-form-group">
                  <div className="form-group">
                     <label>Option A Description</label>
                     <textarea
                        required
                        rows={5}
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={formValues.optionAStatement}
                        onChange={(e) => setFormValues({ ...formValues, optionAStatement: e.target.value })}
                     />
                  </div>
                  <div className="form-group">
                     <label>Option B Description</label>
                     <textarea
                        required
                        rows={5}
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={formValues.optionBStatement}
                        onChange={(e) => setFormValues({ ...formValues, optionBStatement: e.target.value })}
                     />
                  </div>
               </div>

               <div className="nested-form-group">
                  <div className="form-group">
                     <label>Option C Description</label>
                     <textarea
                        required
                        rows={5}
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={formValues.optionCStatement}
                        onChange={(e) => setFormValues({ ...formValues, optionCStatement: e.target.value })}
                     />
                  </div>

                  <div className="form-group">
                     <label>Option D Description</label>
                     <textarea
                        required
                        rows={5}
                        type="text"
                        className="form-control"
                        placeholder="Enter description"
                        value={formValues.optionDStatement}
                        onChange={(e) => setFormValues({ ...formValues, optionDStatement: e.target.value })}
                     />
                  </div>
               </div>

               <button type="submit">{newCampaign?.questionCount - 1 === questions.length ? "Finish" : "Next"}</button>
            </form>
         </div>
      </div>
   );
};

export default CreateQuestion;
