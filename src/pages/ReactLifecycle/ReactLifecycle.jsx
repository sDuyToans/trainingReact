import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objectNumber:{
        number: 1
      },
      like: 1,
      count: 60
    };
  }

  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    // currentState.number = 20;
    //return về state mới, nếu giữ state cũ thì return null
    // return currentState;
    return null;
  }
  shouldComponentUpdate(newProps, newState){
    console.log('shouldComponentUpdate');
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h3>Number: {this.state.objectNumber.number}</h3>
        <button className="btn btn-success" onClick={() =>{
          let objectNumber = {...this.state.objectNumber};
          objectNumber.number += 1;
            this.setState({
                objectNumber: objectNumber
            })
        }}>+</button>
        <h3>Like: {this.state.like}</h3>
        <button className="btn btn-success" onClick={() => {
            this.setState({
                like: this.state.like + 1
            })
        }}>Like</button>
        <Child obNumber={this.state.objectNumber} />
        <br />
        Count: {this.state.count}
      </div>
    );
  }
  timeout = {};
  componentDidMount() {
    console.log("componentDidmount");
    // tương tự window.onload
    // chỉ chạy 1 lần
    this.timeout = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      })
      console.log(this.state.count)
    }, 1000)
  }
  componentDidUpdate(prevProps, prevState){
    //Handle sau khi component gọi render
    // Tuy nhiên hạn chết setState lại đây => setState phải có lệnh if
    console.log(prevProps);
    console.log(prevState);
  }
  componentWillUnmount(){
    //Trước khi component mất khỏi giao diện => clear tất cả script chạy ngầm
    clearInterval(this.timeout)
  }
}
/*
    Lifecyle
        +Mounting: Các hàm sẽ tự kích hoạt khi sử dụng 1 component. Dùng để can thiệp vào quá trình trước khi render hoặc sau khi render nhằmm mục đích xử lí state và props
        + Can thiệp thay đổi state trước render (Sử dụng getDerivedStateFromProps)
        + Can thiệp thay đổi state sau render sử dụng ComponentDidMount()
*/
