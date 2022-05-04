import React from "react";

const Inputs = ({ formValues, setFormValues }) => {
   const handleValuesChange = (e) => {
      if (e.target.value.length <= 200) setFormValues({ ...formValues, [e.target.name]: e.target.value });
   };

   return (
      <>
         <div className="nested-form-group">
            <div className="form-group">
               <label>Response A </label>
               <textarea
                  required
                  placeholder="Enter description (< 200 characters)"
                  value={formValues.optionAStatement}
                  name="optionAStatement"
                  onChange={(e) => handleValuesChange(e)}
               />
            </div>
            <div className="form-group">
               <label>Response B </label>
               <textarea
                  required
                  placeholder="Enter description (< 200 characters)"
                  value={formValues.optionBStatement}
                  name="optionBStatement"
                  onChange={(e) => handleValuesChange(e)}
               />
            </div>
         </div>

         <div className="nested-form-group">
            <div className="form-group">
               <label>Response C</label>
               <textarea
                  required
                  placeholder="Enter description (< 200 characters)"
                  value={formValues.optionCStatement}
                  name="optionCStatement"
                  onChange={(e) => handleValuesChange(e)}
               />
            </div>

            <div className="form-group">
               <label>Response D</label>
               <textarea
                  required
                  placeholder="Enter description (< 200 characters)"
                  value={formValues.optionDStatement}
                  name="optionDStatement"
                  onChange={(e) => handleValuesChange(e)}
               />
            </div>
         </div>
      </>
   );
};

export default Inputs;
