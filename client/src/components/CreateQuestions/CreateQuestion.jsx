import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../OptionInputs";
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
      setFormValues({
         questionStatement: "",
         optionAStatement: "",
         optionBStatement: "",
         optionCStatement: "",
         optionDStatement: ""
      });
      window.scrollTo(0, 0);
   };

   const arrangeToApiFormat = () => {
      let arrangedQs = [];
      questions.forEach((prop) => {
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

   const handleQuestionStatementChange = (e) => {
      if (e.target.value.length <= 300) setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   if (newCampaign?.noOfQuestions === questions.length) {
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

               <button type="submit">{newCampaign?.noOfQuestions - 1 === questions.length ? "Preview" : "Next"}</button>
            </form>
         </div>
      </div>
   );
};

export default CreateQuestion;
