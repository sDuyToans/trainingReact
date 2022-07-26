import React, { Component } from 'react'

export default class Databinding extends Component {
    product = {
        id: 1,
        nameProduct: 'product1',
        price: 1000,
        img: 'https://picsum.photos/id/2/200/200'
    }
    renderCardProduct = () =>{
        //Nội dung render phải là: string, boolean, number hoặc jsx (Có thẻ bao phủ)
        return(
            <div className="card">
                <img src={this.product.img} alt="..." />
                <div className="card-body bg-dark text-white">
                    <p>{this.product.name}</p>
                    <p>{this.product.price}</p>
                </div>
            </div>
        )
    }
  render() {
    const { id, nameProduct, price, img } = this.product;
    const title  = 'Cybersoft';
    const person = {
        name: 'mr.Đàm',
        age: 25
    };
    const { name, age } = person;
    const renderText = tenLop =>{
        return `hello ${tenLop}`;
    }
    return (
      <div className='container'>
        <p id='pText'>{title}</p>
        <hr />
        <div className="card w-25 mt-2">
            <img src="https://i.pravatar.cc?u=1" alt="..." />
            <div className="card-body">
                <p>{name}</p>
                <p>{age}</p>
            </div>
        </div>
        <h3>Binding gọi hàm: chỗ gọi hàm sẽ hiển thị những gì mà hàm đó return. Cú pháp: {`{goiHam()}`}</h3>
        {renderText('Bootcamp28')}
        <hr />
        <h3>Binding thuộc tính tương tự binding biến và có thêm this.tenThuocTinh</h3>
        <div className="alert alert-primary">
            Product info:
            <p>id: {id}</p>
            <p>name: {nameProduct}</p>
            <img src={img} alt="..." />
            <p>price: {price}</p>
        </div>
        <hr />
        <h3>Card product</h3>
        <div className="w-25">
            {this.renderCardProduct()}
        </div>
    </div>
    )
  }
}
