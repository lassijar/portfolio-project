import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/lassi-j%C3%A4rvel%C3%A4-081a28245"
        target="_blank"
      >
        <FaLinkedin />
      </a>
      <a href="https://github.com/lassijar/lassijar" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocials;
