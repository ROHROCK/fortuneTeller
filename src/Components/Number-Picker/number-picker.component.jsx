import React, { Component } from "react";
import "./number-picker.css";
import fortuneJSON from "../../Assets/Icons/data/fortunes.json";
import { Link } from "react-router-dom";

class NumberPicker extends Component {
  constructor() {
    super();
    this.state = {
      prevColorSelected: "",
      selected: 0,
      fortuneSelected: [],
      fortune: ''
    }
    // eslint-disable-next-line
    let pickRandomFortune = this.pickRandomFortune.bind(this);
    // eslint-disable-next-line
    let selectedNumber = this.selectedNumber.bind(this);
  }
  // Logic to pick parse random fortune when color is picked
  pickRandomFortune = () => {
    let oddIndex = [7, 2, 3, 6];
    let evenIndex = [0, 1, 4, 5];
    let fortuneSelected = [];
    // console.log("This selected color is: ",this.props.location.state);
    let parseIndex = (this.props.location.state.colorSelected.length % 2 !== 0) ? oddIndex : evenIndex;
    parseIndex.forEach((index) => {
      this.state.fortuneSelected.push(fortuneJSON.fortunes[index]);
      this.setState({ fortune: fortuneSelected, numberIndex: parseIndex, prevColorSelected: this.props.location.state.colorSelected });
    });

    // console.log("The fortunes are: ",fortuneSelected);
  }
  async selectedNumber(number) {
    await this.setState({ selected: number });
  }
  render() {
    if (this.props.location.state.colorSelected !== this.state.prevColorSelected) {
      this.pickRandomFortune();
    }

    return (
      <div
        id="numberpickerdiv"
        style={{
          display: "flex",
          height: "87vh",
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
            fontSize: "4vw",
          }}
        >
          <div
            id="col1"
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Link to={{
              pathname: "/fortuneteller",
              state: { selected: (this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[0], fortune: this.state.fortune },
            }}>
              <div
                className="number1"
                style={{
                  border: "0.3vw solid #7400B8",
                  margin: "2vw",
                }}
                onClick={() => this.selectedNumber(this.state.numberIndex[0])}>
                <p>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[0]}</p>
              </div>
            </Link>
            <Link to={{
              pathname: "/fortuneteller",
              state: { selected: (this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[1], fortune: this.state.fortune },
            }}>
              <div
                className="number2"
                style={{
                  border: "0.3vw solid #7400B8",
                  margin: "2vw",
                }}
                onClick={() => this.selectedNumber(this.state.numberIndex[1])}>
                <p>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[1]}</p>
              </div>

            </Link>
          </div>
          <div
            id="col2"
            style={{
              display: "flex",
              alignSelf: "center",
            }}
          >
            <Link to={{
              pathname: "/fortuneteller",
              state: { selected: (this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[2], fortune: this.state.fortune },
            }}>

              <div
                className="number3"
                style={{
                  border: "0.3vw solid #7400B8",
                  margin: "2vw",
                }}
                onClick={() => this.selectedNumber(this.state.numberIndex[2])}
              >
                <p>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[2]}</p>
              </div>

            </Link>
            <Link to={{
              pathname: "/fortuneteller",
              state: { selected: (this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[2], fortune: this.state.fortune },
            }}>

              <div
                className="number4"
                style={{
                  border: "0.3vw solid #7400B8",
                  margin: "2vw",
                }}
                onClick={() => this.selectedNumber(this.state.numberIndex[3])}>

                <p>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[3]}</p>
              </div>

            </Link>
          </div>
        </div>
        <div
          style={{ color: "white", alignSelf: "center", fontSize: "5vw" }}
        >
          <p>Choose A Number</p>
        </div>
      </div>
    );
  }
}
export default NumberPicker;
