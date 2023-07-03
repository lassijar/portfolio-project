import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME2 from "../../assets/ME2.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1>Lassi Järvelä</h1>
        <h5 className="text-light"> Computer science student</h5>
        <CTA />
        <HeaderSocials />

        <div className="ME2">
          <img src={ME2} alt="ME2" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
