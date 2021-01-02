import React, { Component } from "react";
import "./box.css";
 
class Color_Box extends Component {
  render() {
    return (
     <div style={{
         display:"flex", 
         justifyContent:"center",
         alignItems:"center",
         margin: "20px",
         padding: "10px",
         height: "100vh"
         }}> 
        <div className="flex-container1">
         <div className="box1">
        </div>

        <div className="box2">
        </div>
        </div>
        <div className="flex-container1">
        <div className="box3">
        </div>

        <div className="box4">
        </div>
        </div>
</div>
    );
  }
}



export default Color_Box;
