import React from "react";
import "./About.css"
import {Link} from "react-router-dom"

export default function About() {
  return (
    <section className="jejee">
      <div className="colorr"></div>
      <div className="colorr"></div>
      <div className="colorr"></div>
      <ul className="jojo">
        <li>
          <a href="https://www.facebook.com/luca.frisoni.984" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/lodum2509" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/luccafrisoni____/" target="_blank">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/luca-frisoni-58ba67238/" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=1176048078" target="_blank">
            <i className="fa fa-whatsapp" aria-hidden="true"></i>
          </a>
        </li>
        <Link to="/home" className="homeLink">
        <li>
          <a href="" >
            <i className="fa fa-home" aria-hidden="true"></i>
          </a>
        </li>
        </Link>
      </ul>
    </section>
  );
}
