import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: "./img/products/black-car.jpg", // Xác định default state
    }
    changeCarColor = (color) =>{
        this.setState({srcImg: `./img/products/${color}-car.jpg`})
    }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-6">
                <img src={this.state.srcImg} className='w-100' alt="" />
            </div>
            <div className="col-6">
                <button className="btn text-white mx-2" style={{background: 'red'}} onClick={() =>{
                    this.changeCarColor('red')
                }}>Red</button>
                <button className="btn text-white mx-2" style={{background: 'black'}}  onClick={() =>{
                    this.changeCarColor('black')
                }}>Black</button>
                <button className="btn text-white mx-2" style={{background: 'silver'}}  onClick={() =>{
                    this.changeCarColor('silver')
                }}>Silver</button>
                <button className="btn text-white mx-2" style={{background: '#EEE'}}  onClick={() =>{
                    this.changeCarColor('steel')
                }}>Steel</button>
            </div>
        </div>
      </div>
    )
  }
}
