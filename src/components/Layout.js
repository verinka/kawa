import React from "react";

import ScrollUp from "../components/ScrollUp";

import "../../static/css/orange.css";
import "../../static/css/main.min.css";

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <div className="overlay-mobile" />
    <div className="shelter-skelter">
    {children}
    </div>
    <ScrollUp />
  </React.Fragment>
);
export default TemplateWrapper;
