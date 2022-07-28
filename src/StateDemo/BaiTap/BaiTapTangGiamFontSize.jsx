import React, { Component } from "react";

export default class BaiTapTangGiamFontSize extends Component {
    state = {
        fontSize: 16,
    };
  render() {
    return (
      <div className="containter">
        <h3>Bài tập tăng giảm fontSize</h3>
        <p style={{fontSize: `${this.state.fontSize}px`}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe enim
          error odio pariatur accusamus doloremque illum et explicabo itaque
          inventore maiores nam in accusantium, optio earum ullam omnis! Unde,
          inventore.
        </p>
        <button className="btn btn-primary mx-2" onClick={() =>{
            this.setState({
                fontSize: this.state.fontSize + 5,
            })
        }}>+</button>
        <button className="btn btn-primary mx-2" onClick={() =>{
            this.setState({
                fontSize: this.state.fontSize - 5,
            })
        }}>-</button>
      </div>
    );
  }
}
