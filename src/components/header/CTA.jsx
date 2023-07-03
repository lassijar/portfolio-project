import React from "react";
import CV_V2 from "../../assets/CV_V2.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV_V2} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
};

export default CTA;
