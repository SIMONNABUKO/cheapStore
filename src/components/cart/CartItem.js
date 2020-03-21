import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { value, item } = this.props;
    const { id, title, img, price, count, total } = item;
    const { increment, decrement, removeItem } = value;

    return (
      <div className='row my-1 text-capitalize text-center'>
        <div className='col-10 mx-auto col-lg-2'>
          <img
            src={img}
            alt={title}
            style={{ width: '5rem', height: '5rem' }}
            className='img-fluid'
          />
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <span className='d-lg-none'>product:</span>
          {title}
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <span className='d-lg-none'>price:</span>
          {price}
        </div>
        <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
          <div className='d-flex justify-content-center'>
            <div>
              <span
                className='btn btn-black mx-1'
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className='btn btn-black mx-2'>{count}</span>
              <span className='btn btn-black ' onClick={() => increment(id)}>
                +
              </span>
            </div>
          </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <div
            className='cart-icon'
            onClick={() => {
              removeItem(id);
            }}
          >
            <i className='fa fa-trash'></i>
          </div>
        </div>
        <div className='col-10 mx-auto col-lg-2'>
          <strong>item total: Kshs {total}</strong>
        </div>
        {/*  */}
      </div>
    );
  }
}

export default CartItem;