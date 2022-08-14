import React, { Component } from 'react'

/*
    PureComponent là component không có lifecycle ShouldComponentUpdate tuy nhiên ở pureComponent đã hỗ trợ việc xử lý render khi Props thay đổi và không render khi props không thay đổi.
    Lưu ý:
        so sánh props ở đây chỉ là dạng shallow compare - nhận viết đc (primitive value): number, string, boolean, ... 
        Đối với reference value thì khi cập nhận state ở component cha phải sử dụng {... spread operator}
*/

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps child')
        return null;
    }
    shouldComponentUpdate(newProps, newState){
        //newProps: là props mới trước khi render
        //this.props: là props hiện tại
        if(this.props.obNumber.number !== newProps.obNumber.number){
            console.log('shouldComponentUpdate child');
            return true;
        }
        return false;
      }
    
  render() {
    console.log('render child')
    return (
      <div className="container">
        <div className="p-5 display-4 bg-dark text-white">
            <h2>Child component: {this.props.obNumber.number}</h2>
        </div>
      </div>
    )
  }
  componentDidMount() {
    console.log('componentDidmount child')
  }
  componentDidUpdate(prevProps, prevState){
    //Handle sau khi component gọi render
    // Tuy nhiên hạn chết setState lại đây => setState phải có lệnh if
    console.log(prevProps);
    console.log(prevState);
  }
}
