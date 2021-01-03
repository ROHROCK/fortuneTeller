import React, { Component } from "react";
import RohitImage from "../../Assets/Icons/Team/Rohit.jpeg";
import KausarImage from "../../Assets/Icons/Team/Kausar.jpeg";
import VikrantImage from "../../Assets/Icons/Team/vikrant.jpeg";

var info = [
  {
    name: "Rohit Agharkar",
    desc: "Love to build things, intrested in Cloud Computing Enthusiast",
    profilePath: RohitImage,
    website: "https://www.linkedin.com/in/rohit-agharkar-15793a127/",
    websitetype: "LinkedIn",
    prof: "Full stack Developer"
  },
  {
    name: "Ritesh Bucha",
    desc: "Inquisitive, energetic computer science specialist skilled in leadership, with a strong foundation in math, logic, and cross-platform coding.",
    profilePath: "https://bucharitesh.in/static/media/profile.feb79d68.webp",
    website: "https://bucharitesh.in",
    websitetype: "bucharitesh.in",
    prof: "Full Stack Developer"
  },
  {
    name: "Kausar Sayeed",
    desc: "I am a full stack engineer and a SQA Engineer by Profession",
    profilePath: KausarImage,
  },
  {
    name: "Vikrant Shitole",
    desc: "I am a full stack engineer and a Software Developer by Profession. I have 1 year of experience in software development in Angular and ionic.",
    profilePath: VikrantImage,
    website: "https://www.linkedin.com/in/vikrant-shitole-081092183",
    websitetype: "LinkedIn",
    prof: "Full stack Developer"
  },
];

class Team extends Component {
  render() {
    let team = info.map(person => {
        return (
        <div class="card">
        <div class="additional">
          <div class="user-card">
            <img src={person.profilePath} alt={person.name} />
          </div>
        </div>
        <div class="general">
          <h1>{person.name}</h1>
          <p>{person.desc}</p>
          <span class="more"><a href={person.website}>{person.websitetype}</a></span>
        </div>
      </div>);
    });

    return(<div>{team}</div>);
  }
}
export default Team;