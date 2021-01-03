import React from "react";
import "./About.css";
import Team from '../Components/Team/team';

function About() {
  return (
    <div class="center">
      <h1 className="About_header">Tech Stack Used</h1>
      <div className="About_stack">
         <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" alt="Firebase"/>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="Npm"/>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React"/>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/363px-CSS3_logo_and_wordmark.svg.png" alt="Css"/>
         <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="Html5"/>
      </div>
      <h1 className="About_header">Our Team</h1>
      <Team />
  </div>
  );
}

export default About;
