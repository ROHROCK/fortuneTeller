import React, { Component } from "react";
import "./box.css";
import { Link } from "react-router-dom";

class Box extends Component {
  render() {
    return (
      <div
      className="main-container"
        style={{
          display: "flex",
          height: "80vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ display: "flex",justifyContent: "center",
              alignItems: "center" }}>
            <Link
              to={{
                pathname: "/numberPicker",
                state: { colorSelected: "Green" },
              }}
            >
              <div className="box1"></div>
            </Link>
            <Link to={{
              pathname: "/numberPicker",
              state: { colorSelected: "Red" },
            }}>
              <div className="box2"></div>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "center",
              alignItems: "center"}}>
            <Link to={{
              pathname: "/numberPicker",
              state: { colorSelected: "Blue" },
            }}>
              <div className="box3"></div>
            </Link>
            <Link to={{
              pathname: "/numberPicker",
              state: { colorSelected: "Yellow" },
            }}>
              <div className="box4"></div>
            </Link>
          </div>
          <div className="text-color"
            style={{
              display: "flex",
              color: "white",
              paddingTop: "10vh",
              //fontSize:"10vh"
              justifyContent: "center",
              alignItems: "center"

            }}>
            <h1 style={{ fontSize: "30px" }}>Please select any color</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Box;
