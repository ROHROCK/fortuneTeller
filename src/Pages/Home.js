import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { ReactComponent as Table } from "../Assets/Icons/table.svg";
import { ReactComponent as Hand } from "../Assets/Icons/hand.svg";
import { ReactComponent as Flower } from "../Assets/Icons/flower.svg";
import { ReactComponent as ChevronRight } from "../Assets/Icons/chevron-right.svg";

import {Animated} from "react-animated-css";

function Home() {
  return (
    <div className="home_Container">
      <div
        style={{
          display: "flex",
          height: "90vh",
          flexGrow: "1",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <Animated animationIn="fadeInLeftBig" isVisible={true}>
              <Flower height="35vh" width="20vw" />
            </Animated> 
          </div>
        </div>
      </div>

      <div
        id="child2"
        style={{
          display: "flex",
          height: "90vh",
          flexGrow: "1",
        }}
      >
        <div
          id="svg-div"
          style={{
            display: "flex",
            height: "90vh",
            flex: "1 1 0",
            flexDirection: "column",
            flexWrap: "wrap",
            justifyContent: "flex-end",
          }}
        >
          
          <div
            id="button-div"
            style={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: "15vh",
            }}
          >
            
            <Animated animationIn="fadeIn" isVisible={true}>
              <Link to="/box">
                <button className="Fortune_button animate__animated animate__bounce animate__delay-2s">
                  Check My fortune
                  <ChevronRight className="Hello" />
                </button>
              </Link>
            </Animated>
          </div>
          

          <div
            id="table-div"
            style={{
              alignSelf: "center",
              justifySelf: "flex-end",
            }}
          >
            <Animated animationIn="slideInUp" isVisible={true}>
             <Table width="40vw" height="40vh" />
            </Animated>  
          </div>
        </div>
      </div>

      <div
        id="child3"
        style={{
          display: "flex",
          height: "90vh",
          flexGrow: "1",
        }}
      >
        <div
          id="box-div"
          style={{
            display: "flex",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              alignSelf: "center",
              paddingBottom: "20vh",
            }}
          >
            <Animated animationIn="fadeInRightBig" isVisible={true}>
              <Hand width="15vw" height="30vh" />
            </Animated>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
