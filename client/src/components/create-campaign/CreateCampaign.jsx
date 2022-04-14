import React, { useState } from "react";
import "./create-campaign.scss";

const CreateCampaign = ({ isShowQuestionForm }) => {
   const [formValues, setFormValues] = useState({
      ttitle: "",
      description: "",
      questionCount: 0
   });

   const submitForm = (e) => {
      e.preventDefault();
      isShowQuestionForm(true);
   };

   return (
      <div className="create-campaign-wrapper">
         <div className="create-campaign-inner">
            <form onSubmit={submitForm}>
               <h3>Create Campaign</h3>

               <div className="form-group">
                  <label>Campaign Title</label>
                  <input required type="text" className="form-control" placeholder="Enter title" value={formValues.title} onChange={(e) => setFormValues({ ...formValues, title: e.target.value })} />
               </div>

               <div className="form-group">
                  <label>Campaign Description</label>
                  <textarea
                     required
                     rows={5}
                     type="text"
                     className="form-control"
                     placeholder="Enter description"
                     value={formValues.description}
                     onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                  />
               </div>

               <div className="form-group">
                  <label>No. of Questions</label>
                  <input required type="number" className="form-control" value={formValues.questionCount} onChange={(e) => setFormValues({ ...formValues, questionCount: e.target.value })} />
               </div>

               <button type="submit" className="btn btn-primary btn-block mt-4">
                  Create
               </button>
            </form>
         </div>
      </div>
   );
};

export default CreateCampaign;
