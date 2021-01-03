import React, { Component } from "react";

class Creator extends Component {
  render() {
    return (
      <div>
          <div className="card" style={{width: "18rem;"}} >
            <img src="..." className="card-img-top" alt="profilepicture" />
            <div className="card-body">
                <h5 className="card-title">Rohit</h5>
                <p className="card-text">Hey I am rohit , Nice to meet you !</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </div>
      </div>
    );
  }
}

export default Creator;
