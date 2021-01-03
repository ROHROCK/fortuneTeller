import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

import {ReactComponent as Table} from "../Assets/Icons/table.svg";
import {ReactComponent as Hand} from "../Assets/Icons/hand.svg";
import {ReactComponent as Flower} from "../Assets/Icons/flower.svg";
import {ReactComponent as ChevronRight} from "../Assets/Icons/chevron-right.svg";


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
            <Flower height="35vh" width= "20vh"/>
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
            justifyContent: "space-evenly",
          }}
        >
          <div
            id="button-div"
            style={{
              alignSelf: "center",
              justifySelf: "center",
              paddingBottom: "10px",
            }}
          >
            <Link to="/box">
              <button className="Fortune_button">
                Check My fortune
                <img alt="see our project" src="https://sebostudio.com/wp-content/themes/sebotheme-3.0.0/assets/img/chevron-right.svg"/>
              </button>
            </Link>
          </div>

          <div
            id="table-div"
            style={{
              alignSelf: "center",
              justifySelf: "flex-end",
            }}
          >
            <Table width= "40vh" height= "40vh"/>
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
            }}
          >
            <Hand  width="15vh" height="30vh"/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
