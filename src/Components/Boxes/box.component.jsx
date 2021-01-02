import React, { Component } from "react";
import "./box.css";
import { Link } from "react-router-dom";

class Color_Box extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px",
            padding: "10px",
            height: "100vh",
          }}
        >
          <div className="flex-container1">
            <Link to="/numberPicker">
              <div className="box1"></div>
            </Link>

            <div className="box2"></div>
          </div>
          <div className="flex-container1">
            <div className="box3"></div>

            <div className="box4"></div>
          </div>
          
        </div>
        <div id="question-id" style={{ paddingTop: "10vh" ,color:'white'}}>
          <h1>Select the color you want</h1>
        </div>
      </div>
    );
  }
}

export default Color_Box;
