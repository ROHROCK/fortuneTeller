import React, { Component } from "react";
import RohitImage from "../../Assets/Icons/Team/Rohit.jpeg";
// import KausarImage from "";
// import VikrantImage form "";
// import RiteshImage from "";

var info = [
  {
    name: "Rohit",
    desc: "I am a full stack engineer and a SQA Engineer by Profession",
    profilePath: RohitImage,
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
    name: "Rohit",
    desc: "I am a full stack engineer and a SQA Engineer by Profession",
    profilePath: RohitImage,
  },
  {
    name: "Rohit",
    desc: "I am a full stack engineer and a SQA Engineer by Profession",
    profilePath: RohitImage,
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