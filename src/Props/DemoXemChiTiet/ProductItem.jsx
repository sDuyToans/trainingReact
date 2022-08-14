import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const { item, xemChiTiet } = this.props;
    const { hinhAnh, tenSP, giaBan} = item;
    return (
        <div className="card">
        <img src={hinhAnh} alt="..." />
        <div className="card-body">
          <h3>{tenSP}</h3>
          <p>{giaBan}</p>
          <button className="btn btn-success" onClick={() =>{
            xemChiTiet(item);
          }}>Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
