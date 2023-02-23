import React from "react";
import "./index.css";

const PageContainer = ({ title, children }) => {
  return (
    <div className="page-container">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default PageContainer;
