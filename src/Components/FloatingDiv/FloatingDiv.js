import React from "react";
import "./Floating.css";
const FloatingDiv = ({ img, txt, txt1 }) => {
  return (
    <div className="floatingdiv">
      <img src={img} alt="" />
      <span>
        {txt}
        <br />
        {txt1}
      </span>
    </div>
  );
};

export default FloatingDiv;
