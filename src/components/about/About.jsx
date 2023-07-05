import React from "react";
import "./about.css";
import MEabout from "../../assets/MEabout6.jpg";
import { FaAward } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { LuFolderCog } from "react-icons/lu";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEabout} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>9 months of game pevelopment</small>
            </article>

            <article className="about__card">
              <IoIosSchool className="about__icon" />
              <h5>School</h5>
              <small>
                2+ years of computer science at University Of Eastern Finland
              </small>
            </article>

            <article className="about__card">
              <LuFolderCog className="about__icon" />
              <h5>Projects</h5>
              <small>5 projects in github</small>
            </article>
          </div>

          <p>
            lore ipsum wndjdnakjdoaidhoawidoiawjdoiajdoawijdoiawjdoajdwoijdw
            dkwodkowkdowkdoowdkowdokdodkwo wodwodkowkdowkdowowkdowd
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
