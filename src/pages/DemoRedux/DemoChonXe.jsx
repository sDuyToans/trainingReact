//rcredux
/*
    Xóa export trên component
    Xóa mapDispatchProps
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

class DemoChonXe extends Component {
  render() {
    console.log(this.props)
    const ChangeColor = (imgColor) => {
            const action = {
                type: 'CHANGE_COLOR',
                payload: `./img/products/${imgColor}-car.jpg`
            };
            this.props.dispatch(action);
    }
    return (
      <div className="container">
        <h3>Demo Chọn Xe</h3>
        <div className="row">
            <div className="col-6">
                <img src={this.props.imgCar} alt="car"  className='w-100'/>
            </div>
            <div className="col-6 d-flex">
                <div className="mx-2">
                    <button className="btn btn-secondary" onClick={() => {
                        ChangeColor('silver')
                    }}>Silver</button>
                </div>
                <div className="mx-2">
                    <button className="btn btn-danger" onClick={() => {
                        ChangeColor('red')
                    }}>Red</button>
                </div>
                <div className="mx-2">
                    <button className="btn btn-dark" onClick={() => {
                        ChangeColor('black')
                    }}>Black</button>
                </div>
                <div className="mx-2">
                    <button className="btn btn-warning" onClick={() => {
                        ChangeColor('steel')
                    }}>Steel</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    imgCar: state.imgCar
})


export default connect(mapStateToProps)(DemoChonXe)