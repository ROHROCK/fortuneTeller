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
    name: "Ritesh",
    desc: "I am a full stack engineer and a SQA Engineer by Profession",
    profilePath: RohitImage,
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
            <div class="level center">
              a
              <img src="" alt="" />
            </div>
            <div class="points center">b</div>
          </div>
        </div>
        <div class="general">
          <h1>{person.name}</h1>
          <p>{person.desc}</p>
          <span class="more">website</span>
        </div>
      </div>);
    });

    return(<div>{team}</div>);
  }
}
export default Team;