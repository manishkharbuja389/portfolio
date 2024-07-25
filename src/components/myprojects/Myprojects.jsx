import React from "react";
import "./myprojects.css";
import IMG2 from "../../assets/Logo.jpg";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";

export default function Myprojects() {
  return (
    <section id="myprojects">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>HASHONE</h3>
          <small className="text-light">Owner</small>
          <div className="portfolio__item-cta">
            <a href="https://hashoneadventures.com/" className="btn">
              Visit
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>HASHONE Rentals</h3>
          <small className="text-light">Owner</small>
          <div className="portfolio__item-cta">
            <a
              href="https://www.instagram.com/hashone_rentals/"
              className="btn"
            >
              Instagram
            </a>
            <a
              href="https://maps.app.goo.gl/AM347njcAoNurcBq9"
              className="btn btn-primary"
            >
              Visit Rentals
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>HASHONE Campsite</h3>
          <small className="text-light">ReactJs</small>
          <div className="portfolio__item-cta">
            <a
              href="https://www.instagram.com/hashone.campsite/"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Instagram
            </a>
            <a
              href="https://maps.app.goo.gl/wVXnvB7T3qFxThRF7"
              className="btn btn-primary"
            >
              Visit Campsite
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
