import React, { Component } from 'react'
import FormProduct from './FormProduct'
import TableProduct from './TableProduct'
import axios from 'axios'

export default class ReactForm extends Component {
  state = {
    arrProduct: [
      {
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://picsum.photos/50/50',
        description: 'description 1',
        productType: 'mobile'
      },
      {
        id: 2,
        name: 'product 2',
        price: 2000,
        img: 'https://picsum.photos/50/50',
        description: 'description 2',
        productType: 'tablet'
      }
    ],
    productEdit: {
      id: "",
      name: "",
      price: 0,
      img: "",
      description: "",
      productType: ""
    }
  }

  luuStore(){
    const value = JSON.stringify(this.state.arrProduct);
    localStorage.setItem('arrProduct', value);
  }
  
  layStore(){
    if(localStorage.getItem('arrProduct')) {
      let arrProduct = JSON.parse(localStorage.getItem('arrProduct'));
      return arrProduct;
    }
    return [];
  }

  addProduct = (newProduct) =>  {
    let arrProductUpdate = [...this.state.arrProduct, {...newProduct}];
     this.setState({arrProduct: arrProductUpdate});
    this.luuStore();
  }

  editProduct = (productClick) => {
    this.setState({
      productEdit: productClick
    })
  }

  updateProduct = (productUpdate) => {
    let prod = this.state.arrProduct.find(p => p.id === productUpdate.id);
    if(prod) {
      prod.name = productUpdate.name;
      prod.price = productUpdate.price;
      prod.img = productUpdate.img;
      prod.description = productUpdate.description;
      prod.productType = productUpdate.productType;
    }
    // set lại State
    this.setState({
      arrProduct: this.state.arrProduct
    })
    this.luuStore();
  }

  delProduct = (idDel) => {
    const newArr = this.state.arrProduct.filter(p => p.id !== idDel);
    this.setState({arrProduct: newArr});
    this.luuStore();
  }
  render() {
    return (
      <div className="container">
        <h3>Product management</h3>
        <FormProduct addProduct={this.addProduct} productEdit={this.state.productEdit} updateProduct={this.updateProduct}/>
        <TableProduct arrProduct={this.state.arrProduct} delProduct={this.delProduct}  editProduct={this.editProduct}/>
      </div>
    )
  }
  componentDidMount() {
    // Hàm này sẽ thực thi sau khi nội dung được render
    // this.setState({
    //   arrProduct: this.layStore()
    // })
    let promise = axios({
      url: 'https://svcy.myclass.vn/api/Product/GetAll',
      method: 'GET'
    })
    .then(result => {
      this.setState({
        arrProduct: result.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
   
}
