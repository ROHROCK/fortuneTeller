import React from "react";
import Table from "../Assets/Icons/table.svg";
import Hand from "../Assets/Icons/hand.svg";
// import Flower from "../Assets/Icons/flower.svg";
import { Link } from "react-router-dom";
import Candle from "../Assets/Icons/candle.svg";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        margin: "20px",
      }}
    >
      <div
        id="child1"
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
            justifyContent: "flex-end",
          }}
        >
          <div
            style={{
              alignSelf: "center",
            }}
          >
            <img
              src={Hand}
              style={{
                width: "10vh",
                align: "flex-end",
                height: "30vh",
              }}
              alt="Flower"
            />
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
              <h1>Click Here to check fortune</h1>
            </Link>
          </div>

          <div
            id="table-div"
            style={{
              alignSelf: "center",
              justifySelf: "flex-end",
            }}
          >
            <img
              src={Table}
              style={{
                width: "40vh",
                height: "40vh",
              }}
              alt="Table"
            />
            <img
              src={Candle}
              style={{
                width: "10vh",
                height: "20vh",
                paddingBottom: "20px",
              }}
              alt="Table"
            />
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
            <img
              src={Hand}
              style={{
                width: "15vh",
                align: "flex-end",
                height: "30vh",
              }}
              alt="Flower"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
