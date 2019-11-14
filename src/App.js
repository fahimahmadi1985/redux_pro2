import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="container m-5 p-5 bg-secondary border border-1 rounded border-info text-white d-flex justify-content-center flex-wrap">
        <h4 className="col-4">
          Number of Cooked Cake:{" "}
          <span className="text-warning">
            {this.props.data.cookCake.numberOfCookedCake}
          </span>
        </h4>
        <h4 className="col-4">
          Number of Sold Cake:{" "}
          <span className="text-warning">
            {this.props.data.buyCake.numberOfSoldCake}
          </span>
        </h4>
        <h4 className="col-4">
          Number of Cake:{" "}
          <span className="text-warning">
            {" "}
            {this.props.data.cookCake.numberOfCookedCake -
              this.props.data.buyCake.numberOfSoldCake}
          </span>
        </h4>

        <button
          onClick={
            this.props.data.cookCake.numberOfCookedCake -
              this.props.data.buyCake.numberOfSoldCake && this.props.dispBuyCake
          }
          className="btn btn-dark text-white col-4 mr-5 mt-5"
        >
          Sell Cake
        </button>
        <button
          onClick={this.props.dispCookCake}
          className="btn btn-dark text-white col-4 mt-5"
        >
          Cook Cake
        </button>
      </div>
    );
  }
}

export default App;
