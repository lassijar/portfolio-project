import React from "react";
import "./header.css";
import CTA from "./CTA";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1>Lassi Järvelä</h1>
        <h5 className="text-light"> Computer science student</h5>
        <CTA />
      </div>
    </header>
  );
};

export default Header;
