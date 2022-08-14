import React, { Component } from "react";

export default class TableProduct extends Component {
  render() {
    const { arrProduct, delProduct, editProduct } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>price</th>
            <th>img</th>
            <th>type</th>
            <th>description</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((p, index) => {
            const { id, img, name, price, description, productType } = p;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td><img src={img} alt="..." /></td>
                <td>{productType}</td>
                <td>{description}</td>
                <td>
                  <button className="btn btn-danger mx-2" onClick={() => delProduct(id)}>Del</button>
                  <button className="btn btn-danger mx-2" onClick={() => editProduct(p)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
