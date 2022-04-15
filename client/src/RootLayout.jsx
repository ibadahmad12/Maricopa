import React from "react";
import Navbar from "./components/navbar/navbar";

const RootLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         <div>{children}</div>
      </>
   );
};

export default RootLayout;
