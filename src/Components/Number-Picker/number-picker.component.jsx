import React, { Component } from "react";
import "./number-picker.css";
import { Container } from "react-bootstrap";

class NumberPicker extends Component {
  render() {
    return (
      <div
        id="numberpickerdiv"
        className="flex"
        style={{
          display:"flex",
          height: "100vh",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
        }}
      >
          <div
            id="number-div"
            style={{
              alignSelf: "center",
              color: "green",
              fontFamily: "Bungee Shade, cursive",
              fontSize: "40px",
            }}
          >
            <div
              id="col1"
              style={{
                display: "flex",
                alignSelf: "center",
              }}
            >
              <div
                id="number1"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
              >
                <h1>1</h1>
              </div>
              <div
                id="number2"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
              >
                <h1>2</h1>
              </div>
            </div>
            <div
              id="col2"
              style={{
                display: "flex",
                alignSelf: "center",
              }}
            >
              <div
                id="number3"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
              >
                <h1>3</h1>
              </div>
              <div
                id="number4"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
              >
                <h1>4</h1>
              </div>
            </div>
          </div>
          <div
            style={{ color: "white", alignSelf: "center", fontSize: "40px" }}
          >
            <h1>Choose A Number</h1>
          </div>
      </div>
    );
  }
}
export default NumberPicker;
