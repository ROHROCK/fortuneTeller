import React, { Component } from "react";

class creator extends Component {
  render() {
    return (
      <div>
          <div class="card" style="width: 18rem;">
            {/* eslint-disable-next-line */}
            <img src="..." class="card-img-top" alt="profilepicture" />
            <div class="card-body">
                <h5 class="card-title">Rohit</h5>
                <p class="card-text">Hey I am rohit , Nice to meet you !</p>
                {/* eslint-disable-next-line */}
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
           </div>
      </div>
    );
  }
}

export default creator;
