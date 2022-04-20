import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth.scss";

const Auth = () => {
   const navigate = useNavigate();

   const [formValues, setFormValues] = useState({
      email: "dev@gmail.com",
      password: "cm&d123456"
   });

   const submitForm = (e) => {
      e.preventDefault();
      navigate("/home");
   };

   return (
      <div className="auth-wrapper">
         <div className="auth-inner">
            <form onSubmit={submitForm}>
               <h3>Sign In</h3>

               <div className="form-group">
                  <label>Email address</label>
                  <input required type="email" className="form-control" placeholder="Enter email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
               </div>

               <div className="form-group">
                  <label>Password</label>
                  <input
                     required
                     type="password"
                     className="form-control"
                     placeholder="Enter password"
                     value={formValues.password}
                     onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
                  />
               </div>

               <button type="submit" className="btn btn-primary btn-block mt-4">
                  Submit
               </button>
            </form>
         </div>
      </div>
   );
};

export default Auth;
