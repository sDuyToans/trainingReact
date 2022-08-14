import React, { Component } from 'react'
import ItemProduct from './ItemProduct';

export default class ProductList extends Component {
   
    renderProductItem = () =>{
        const  { products,  viewDeatail } = this.props;
        return products.map((p, index) => {
            return (
                <div className="col-3" key={index}>
                    <ItemProduct product={p} viewDeatail={viewDeatail}/>
                </div>
            )
    })
}
  render() {
    return (
      <div>
        <div className="row">
            {this.renderProductItem()}
        </div>
      </div>
    )
  }
}
