import React, { useContext } from "react";
import "./Work.css";
import Upwork from "../../img/Upwork.png";
import fiverr from "../../img/fiverr.png";
import Facebook from "../../img/Facebook.png";
import Shopify from "../../img/Shopify.png";
import amazon from "../../img/amazon.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Work = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for All these
        </span>
        <span>Brands & Clients</span>
        <span>
          I'm a web developer. I spend my whole day, practically every day,
          <br />
          experimenting with HTML, CSS, and JavaScript; dabbling with <br />{" "}
          Python and Ruby; and inhaling a wide variety of potentially useless
          <br />
          information through a few hundred RSS feeds. I build websites that
          <br />
          delight and inform. I do it well.
        </span>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button s-button">Hire Me</button>
        </Link>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={amazon} alt="" />
          </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Work;
