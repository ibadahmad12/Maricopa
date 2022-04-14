import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./create-question.scss";

const CreateQuestion = () => {
   const navigate = useNavigate();
   const [formValues, setFormValues] = useState({
      questionStatement: "",
      optionAStatement: "",
      optionBStatement: "",
      optionCStatement: "",
      optionDStatement: ""
   });
   const [question, setQuestions] = useState([]);

   const submitForm = (e) => {
      e.preventDefault();
      setQuestions((prevQuestions) => [...prevQuestions, formValues]);
      navigate("/home");
   };

   return (
      <div className="create-question-wrapper">
         <div className="create-question-inner">
            <form onSubmit={submitForm}>
               <h3>Question No # {question.length + 1}</h3>

               <div className="form-group">
                  <label>Question Description</label>
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

               <button type="submit">Next</button>
            </form>
         </div>
      </div>
   );
};

export default CreateQuestion;
