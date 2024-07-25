import React from "react";
import "./about.css";
import myImage from "../../assets/my-image2.jpg";
import { GiGraduateCap } from "react-icons/gi";
import { BsPcDisplay } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myImage} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiGraduateCap className="about__icon" />
              <h5>Degree</h5>
              <small>
                Bachelor of Computer Engineering <br />
                Khwopa Engineering College <br />
                <i>Purbanchal University</i>
              </small>
            </article>

            <article className="about__card">
              <BsPcDisplay className="about__icon" />
              <h5>Working At</h5>
              <small>Infinite Computer Solutions Nepal</small>
            </article>

            <article className="about__card">
              <TfiWorld className="about__icon" />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>US Healthcare Data Analytics</li>
                  <li>PL/SQL</li>
                  <li>Frontend Development</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            I'm a <b>Computer Engineer</b> graduated from Khwopa Engineering
            College. As a software engineer with 2 years of experience, I
            specialize in US Healthcare data and in transforming complex data
            sets into actionable insights that drive strategic decision-making.
            Proficient in tools such as SQL, Python and Excel, I excel in data
            visualization, statistical analysis, and predictive modeling. My
            background includes working on cross-functional teams to develop
            data-driven solutions, streamline processes, and improve business
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
