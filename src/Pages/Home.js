import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import { ReactComponent as Table } from "../Assets/Icons/table.svg";
import { ReactComponent as Hand } from "../Assets/Icons/hand.svg";
import { ReactComponent as Flower } from "../Assets/Icons/flower.svg";
import { ReactComponent as ChevronRight } from "../Assets/Icons/chevron-right.svg";
import { bounce } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "x 2s",
    animationName: Radium.keyframes(bounce, "fadeIn"),
  },
};

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
            flex: "1 1 0px",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <Flower height="35vh" width="20vh" />
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
            flex: "1 1 0px",
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
            <Link to="/box">
            <StyleRoot>
              <button className="Fortune_button" style={styles.bounce}>
                Check My fortune
                <ChevronRight className="Hello" />
              </button>
              </StyleRoot>
            </Link>
            
          </div>
          

          <div
            id="table-div"
            style={{
              alignSelf: "center",
              justifySelf: "flex-end",
            }}
          >
            <Table width="40vh" height="40vh" />
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
            flex: "1 1 0px",
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
            <Hand width="15vh" height="30vh" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
