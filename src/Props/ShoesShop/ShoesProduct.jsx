import React, { Component } from 'react'

export default class ShoesProduct extends Component {
  render() {
    const {image, id, name, price} = this.props.item;
    return (
      <div className="card" key={id}>
        <img src={image} alt="" />
        <div className="card-body">
            <p>{name}</p>
            <p>{price} $</p>
            <button>Add to card</button>
        </div>
      </div>
    )
  }
}
