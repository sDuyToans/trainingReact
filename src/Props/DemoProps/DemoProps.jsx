import React, { Component } from 'react'
import ProductCard from './ProductCard'

const data = [
    { id: 1, name: 'Quan', age: 18 },
    { id: 2, name: 'Hau', age: 19 },
    { id: 3, name: 'Sang', age: 20 },
];

export default class DemoProps extends Component {

    renderPerSon = () =>{
        return data.map((person, index) =>{
            return (
                <div className="col-3" key={index}>
                    <ProductCard item={person}/>
                </div>
            )
        })
    }

  render() {
    let person = {
        id: 1,
        name: 'Quan',
        age : 18
    };
    let person2 = {
        id: 2,
        name: 'Hau',
        age : 19
    }
    return (
      <div>
        <div className="row">
            {this.renderPerSon()}
        </div>
      </div>
    )
  }
}
