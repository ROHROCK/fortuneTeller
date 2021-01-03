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
    await this.setState({ fortune: fortuneJSON.fortunes[number] })
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
<<<<<<< HEAD
          <h1 style={{color:'white'}}>{this.state.fortuneText}</h1>
=======
        <div
          id="number-div"
          style={{
            alignSelf: "center",
            color: "green",
            fontFamily: "Bungee Shade, cursive",
            fontSize: "40px",
          }}
        >
>>>>>>> e7f696ccec483e88def2aaa95a31ae8f6e8dfe40
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
<<<<<<< HEAD
            >
              <div
                id="number1"
                style={{
                  border: "2px solid #7400B8",
                  height: "30vh",
                  width: "30vh",
                  margin: "5px",
                }}
                onSubmit={this.setFortune(0)}>
                <h1>{(this.state.numberIndex === undefined)?"Wait":this.state.numberIndex[0]}</h1>
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
                <h1>{(this.state.numberIndex === undefined)?"Wait":this.state.numberIndex[1]}</h1>
              </div>
=======
              onClick={() => this.selectedNumber(this.state.numberIndex[0])}>
              <Link to={{
                pathname: "/fortuneteller",
                state: { selected: this.state.selected, fortune: this.state.fortune },
              }}> <h1>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[0]}</h1>
              </Link>
>>>>>>> e7f696ccec483e88def2aaa95a31ae8f6e8dfe40
            </div>
            <div
              id="number2"
              style={{
                border: "2px solid #7400B8",
                height: "30vh",
                width: "30vh",
                margin: "5px",
              }}
              onClick={() => this.selectedNumber(this.state.numberIndex[1])}>
              <Link to={{
                pathname: "/fortuneteller",
                state: { selected: this.state.selected, fortune: this.state.fortune },
              }}>
                <h1>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[1]}</h1>
              </Link>
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
              onClick={() => this.selectedNumber(this.state.numberIndex[2])}
            >
              <Link to={{
                pathname: "/fortuneteller",
                state: { selected: this.state.selected, fortune: this.state.fortune },
              }}>
                <h1>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[2]}</h1>
              </Link>
            </div>
            <div
              id="number4"
              style={{
                border: "2px solid #7400B8",
                height: "30vh",
                width: "30vh",
                margin: "5px",
              }}
              onClick={() => this.selectedNumber(this.state.numberIndex[3])}>
              <Link to={{
                pathname: "/fortuneteller",
                state: { selected: this.state.selected, fortune: this.state.fortune },
              }}>
                <h1>{(this.state.numberIndex === undefined) ? "Wait" : this.state.numberIndex[3]}</h1>
              </Link>
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
