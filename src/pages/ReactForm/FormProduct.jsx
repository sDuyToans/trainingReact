import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfor: {
      id: "",
      name: "",
      price: "",
      productType: "mobile",
      description: "",
      img: "",
    },
    error: {
        id: '',
        name: '',
        price: '',
        description: '',
        img: ''
    }
  };
  changeHandler = (event) => {
    const { value, id } = event.target;
    const dataType = event.target.getAttribute('data-type');
    //Xử lí productInfor
    const newValue = this.state.productInfor;
    newValue[id] = value;

    //Xử lí error
    const newError = this.state.error;
    let messError = '';
    if(value.trim() === ''){
        messError = `${id} không được bỏ trống`
    } else {
        if(dataType === 'number'){
            let regexNumber = /^\d+$/;
            if(!regexNumber.test(value)){
                messError = `${id} phải là số`
            }
        }
    }
    newError[id] = messError;
    //setState
    this.setState({
        productInfor: newValue,
        error: newError
    }, () => {
        console.log(this.state)
    })
  };
  
  submitHandler = (event) => {
    event.preventDefault();
    const { addProduct } = this.props;
    // console.log(this.state);
    addProduct(this.state.productInfor)
  };

  // Can thiệp vào qáu trình render props của updating

  static getDerivedStateFromProps(newProps, currentState) {
    console.log(newProps)
    console.log(currentState)
    currentState.productInfor = newProps.productEdit;
    return {...currentState}
  }

  // componentWillReceiveProps(newProps) {
  //   //Chỉ chạy khi props thay đổi
  //   this.setState({
  //     productInfor: newProps.productEdit
  //   })
  // }
  render() {
    const { id, name, price, img, description, productType} = this.state.productInfor;
    return (
      <form className="card" onSubmit={this.submitHandler}>
        <div className="card-header bg-dark text-warning">Create Product</div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>id</p>
              <input
                value={id}
                type="text"
                className="form-control"
                id="id"
                name="id"
                onChange={(event) => {
                  this.changeHandler(event);
                }}
              />
              <p className="text-danger">{this.state.error.id}</p>
            </div>
            <div className="form-group">
              <p>name</p>
              <input
                value={name}
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(event) => {
                  this.changeHandler(event);
                }}
              />
              <p className="text-danger">{this.state.error.name}</p>
            </div>
            <div className="form-group">
              <p>price</p>
              <input
                value = {price}
                data-type="number"
                type="text"
                className="form-control"
                id="price"
                name="price"
                onChange={(event) => {
                  this.changeHandler(event);
                }}
              />
              <p className="text-danger">{this.state.error.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>img</p>
              <input
                value={img}
                type="text"
                className="form-control"
                id="img"
                name="img"
                onChange={(event) => {
                  this.changeHandler(event);
                }}
              />
              <p className="text-danger">{this.state.error.img}</p>
            </div>
            <div className="form-group">
              <p>product type</p>
              <select
                value={productType}
                name="productType"
                id="productType"
                onChange={(event) => {
                  this.changeHandler(event);
                }}
              >
                <option value="mobile">mobile</option>
                <option value="tablet">tablet</option>
                <option value="laptop">laptop</option>
              </select>
            </div>
            <div className="form-group">
              <p>description</p>
              <input
                value={description}
                type="text"
                className="form-control"
                id="description"
                name="description"
                onChange={(event) => {
                  this.changeHandler(event);
                }}
              />
              <p className="text-danger">{this.state.error.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2" >Create</button>
          <button type="button" className="btn btn-primary" onClick={() => {
            this.props.updateProduct({...this.state.productInfor})
          }}>
            Update
          </button>
        </div>
      </form>
    );
  }
}
