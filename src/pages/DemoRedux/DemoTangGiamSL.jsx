import React, { Component } from 'react'
//Kết nối Redux
import { connect } from 'react-redux/es/exports'
class DemoTangGiamSL extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <h3>Demo tăng giảm số lượng</h3>
        <h3>Number: {this.props.number}</h3>
        <button className='btn btn-success' onClick={() => {
            //B1: Tạo ra object action
            const action = {
                type: 'TANG_SL', //thuộc tính bắt buộc
                payload: 1
            }
            //B2: Dùng props.dispatch để đưa dữ liệu lên redux
            this.props.dispatch(action);
        }}>+</button>
      </div>
    )
  }
}

//Lấy state từ redux về và biến thành this.prop của component
const mapStateToProps = (state) => {
    //return về object gì thì object đó sẽ là props của component
    return {
        number: state.number,
        state: state
    }
}

//Tạo ra component chứa logic của redux
export default connect(mapStateToProps)(DemoTangGiamSL);


/*
    Function có 1 lệnh return về object thì viết tắt
    (param) => { return { props1: '...' } }
    (param) => ({})
    {return: sẽ được chuyển thành ()}
*/
