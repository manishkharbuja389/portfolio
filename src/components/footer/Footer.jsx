import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Good to see you.
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#myprojects">My Projects</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/manish-kharbuja-0643201b6/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/manishkharbuja389">
          <BsGithub />
        </a>
        <a href="https://medium.com/@manish.kharbuja389">
          <BsMedium />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Manish Kharbuja. All rights reserved.</small>
      </div>
    </footer>
  );
}
