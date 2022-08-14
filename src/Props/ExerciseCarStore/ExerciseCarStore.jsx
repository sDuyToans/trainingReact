import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";

const data = [
  {
    id: 1,
    name: "black car",
    img: "./img/products/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/products/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/products/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img/products/steel-car.jpg",
    price: 4000,
  },
];

export default class ExerciseCarStore extends Component {

    state = {
        productModal: {
            id: 3,
            name: "silver car",
            img: "./img/products/silver-car.jpg",
            price: 3000,
        }
    }
    viewDeatail = (newProductModal) =>{
        this.setState({productModal: newProductModal})
    }
  render() {
    return (
      <div className="container">
        <h1 className="mt-3">Danh Sách Xe</h1>
        <Modal productModal={this.state.productModal}/>
        <ProductList products={data} productModal={this.state.productModal} viewDeatail={this.viewDeatail}/>
      </div>
    );
  }
}
