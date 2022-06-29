import React, { useContext } from "react";
import "./Experience.css";
import { themeContext } from "../../Context";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="experience" id="works">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          1+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          20+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          0
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Companies</span>
        <span>Work</span>
      </div>
    </div>
  );
};

export default Experience;
