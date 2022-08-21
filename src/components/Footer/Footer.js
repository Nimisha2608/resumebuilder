import React from "react";
import { Col } from "react-bootstrap";
import "./footer.css";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>Resume Builder</h1>

        <p>Copyrights 2022 &copy; Nimisha Patel</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Me</h4>
        
          <a href="https://www.linkedin.com/in/nimisha-patel-843aa6201">
            <img src={navIcon1} alt="Icon" />
          </a>

          <a href="https://www.instagram.com/l_nimisha_l/">
            <img src={navIcon3} alt="Icon" />
          </a>
       
      </div>
    </footer>
  );
};

export default Footer;
