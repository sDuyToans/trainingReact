//rcc
import React, { Component } from "react";
import style from './StyleWithJSX.module.scss';

export default class StyleWithJSX extends Component {
  render() {
    return (
      <div className="container">
        <h3>StyleWithJSX</h3>
        <p className="text-red">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          vel ad impedit placeat, itaque veniam dicta minus, eveniet alias,
          ipsam labore laborum nam fuga soluta assumenda. Tempore placeat
          asperiores esse!
        </p>
        <h3 className={`p-2 bg-dark ${style['text-blue']}`}>Hello Duy Toan</h3>
        <hr />
        <p style={{color:'red', background: `url(https://picsum.photos/200/200)`, height: 500, backgroundRepeat: 'no-repeat'}}>Hello cybersoft</p>
      </div>
    );
  }
}
