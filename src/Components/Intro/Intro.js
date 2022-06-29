import React, { useContext } from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Clinton Biswas</span>
          <span>
            A person who develops and designs the front end or user interface of
            a website or application is called a Front End Developer. The front
            end development, also known as client-side development is the
            execution of HTML, CSS, and JavaScript for a website or web
            application to make the data user friendly.
          </span>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>

        <div className="i-icons">
          <a href="https://github.com/ClintonBiswas">
            <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/clinton-biswas-42620422a/">
            <img src={Linkedin} alt="" />
          </a>
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          className="floating-div"
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
          <FloatingDiv img={crown} txt="Web" txt1="Developer" />
        </motion.div>
        <motion.div
          className="floating-div"
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
        >
          <FloatingDiv img={thumbup} txt="Best Design" txt1="Award" />
        </motion.div>
        {/* blur divs for background */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
            background: "#C1F5FF",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
