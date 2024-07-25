import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
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
  );
}
