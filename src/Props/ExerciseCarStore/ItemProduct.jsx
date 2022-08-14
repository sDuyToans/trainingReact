import React, { Component } from 'react'

export default class ItemProduct extends Component {
  render() {
    const { product, viewDeatail } = this.props;
    const { img, name, price, id } = product;
    return (
               
                    <div className='card'>
                    <img src={img} alt="..." />
                    <div className="card-body">
                        <h3>{name}</h3>
                        <p>{price}</p>
                        <button className="btn btn-success" onClick={() => viewDeatail(product)} data-bs-toggle="modal" data-bs-target="#modelId">Xem Chi Tiết</button>
                    </div>
                </div>
    )
  }
}
