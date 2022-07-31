import React, { Component } from 'react'

export default class ProductCard extends Component {
  render() {
    //this.props: Thuộc tính có sẵn react class component dùng để nhận giá trì từ component cha truyền vào
    /*
        So sánh: state & props
        giống nhau: Đều là thuộc tính có sẵn của react class component dùng để binding dữ liệu ra giao diện
        khác nhau: State có thể gán lại giá trị thông qua phương thức setState, props không thể gán lại giá
        trị (readonly) dùng để nhận giá trị từ comopent cha truyền vào;
    */
    const { item } = this.props;

    return (
      <div className='card'>
            <img src={`https://i.pravatar.cc?u=${item?.age}`} alt="..." />
            <div className="card-body">
                <p>Name: {item?.name}</p>
                <p>Age: {item?.age}</p>
                <p>id: {item?.id}</p>
            </div>
      </div>
    )
  }
}
