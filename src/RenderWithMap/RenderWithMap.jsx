import React, { Component } from 'react'

const data = [
    { id: 1, name: 'Black car', price: 1000, img: './img/products/black-car.jpg'},
    { id: 2, name: 'Red car', price: 1000, img: './img/products/red-car.jpg'},
    { id: 3, name: 'Silver car', price: 1000, img: './img/products/silver-car.jpg'},
    { id: 4, name: 'Steel car', price: 1000, img: './img/products/steel-car.jpg'}
]

export default class RenderWithMap extends Component {

  renderProduct = () =>{
    // const arrTrJSX = [];
    // for (let i = 0; i < data.length; i++){
    //   //Mỗi lần duyệt lấy ra 1 object
    //   let prod = data[i];
    //   let tr = <tr>
    //       <th>{prod.id}</th>
    //       <th>{prod.name}</th>
    //       <th>{prod.price}</th>
    //       <th><img src={prod.img} width={50} alt="..."/></th>
    //   </tr>;
    //   // Đưa vào mảng arrTrJSX
    //   arrTrJSX.push(tr);
    // };
    // return arrTrJSX;
    //Cách 2: Dùng Map
    return data.map((prod, index) =>{
      return <tr>
          <th>{prod.id}</th>
          <th>{prod.name}</th>
          <th>{prod.price}</th>
          <th><img src={prod.img} width={50} alt="..."/></th>
      </tr>;
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Render table product</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>price</th>
                    <th>img</th>
                </tr>
            </thead>
            <tbody >
              {this.renderProduct()}
            </tbody>
        </table>
      </div>
    )
  }
}
