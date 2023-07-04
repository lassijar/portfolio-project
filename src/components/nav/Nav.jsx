import React from "react";
import "./nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BiSolidUserBadge } from "react-icons/bi";
import { BsBookHalf } from "react-icons/bs";
import { GiJeweledChalice } from "react-icons/gi";
import { BiMessageAltEdit } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiTwotoneHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BiSolidUserBadge />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BsBookHalf />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <GiJeweledChalice />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageAltEdit />
      </a>
    </nav>
  );
};

export default Nav;
