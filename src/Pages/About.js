import React from "react";
import ReactLogo from "../Assets/Icons/techicons/react.svg";
import FirebaseLogo from "../Assets/Icons/techicons/firebase.svg";
import NpmLogo from "../Assets/Icons/techicons/npm.svg";
import CssLogo from "../Assets/Icons/techicons/css.svg";
import HtmlLogo from "../Assets/Icons/techicons/html.svg";

function About() {
  return (
    <div className="container-fuild">
      <div className="card" style={{padding: "3vh" }} >
        <div className="form-row">
          <div className="col">
            <div style={{ color: "white"}}>
              <div style={{ backgroundColor: "green", textAlign: "center"}}>
                <h1>Welcome to Fortune Teller 🔮!</h1>
                <h2>
                  This is project is inspired by the New year new hack conducted
                  by MLH{" "} You can find your fortune for this year 2021
                </h2>
                {/* eslint-disable-next-line */}
                <a href="https://organize.mlh.io/participants/events/6052-new-year-new-hack">
                  <p>👉 Click Here to learn more 👈</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <div>
              <h1>💻 Tech stack used 💻 </h1>
              <div>
                <img
                    src={ReactLogo}
                    style={{ width: "10vh", height: "10vh" }}
                    alt="reactlogo"
                />
              </div>
              <div>
                <img
                    src={FirebaseLogo}
                    style={{ width: "10vh", height: "10vh" }}
                    alt="firebaselogo"
                />
              </div>
              <div>
                <img
                    src={NpmLogo}
                    style={{ width: "10vh", height: "10vh" }}
                    alt="npmlogo"
                />
              </div>
              <div>
                <img
                    src={CssLogo}
                    style={{ width: "10vh", height: "10vh" }}
                    alt="csslogo"
                />
              </div>
              <div>
                <img
                    src={HtmlLogo}
                    style={{ width: "10vh", height: "10vh" }}
                    alt="htmllogo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <div>
              <h1>Meet the Creators !</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
