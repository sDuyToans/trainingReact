import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (event) => {
    alert("hello 123");
  };
  showMess = (name) => {
    alert(`Hello ${name}`);
  };
  render() {
    return (
      <div className="container">
        <button
          id="btnClick"
          onClick={(event) => {
            alert("hello 123");
          }}
        >
          Click me
        </button>

        <button className="btn btn-primary" onClick={this.handleClick}>
          Click
        </button>
        <hr />
        <h3>Handle click params</h3>
        <button
          onClick={(event) => {
            //gọi các hàm khác thực thi khi click
            this.showMess("Duy Toan");
          }}
        >
          Show mess
        </button>
        <button className="btn btn-primary" onClick={this.showMess.bind(this, ['Toan'])}>
          Click
        </button>
      </div>
    );
  }
}
