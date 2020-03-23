import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PayPalButton from './PayPalButton';

class CartTotals extends Component {
  render() {
    const { value } = this.props;
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-10 ml-sm-5 mt-2 ml-md-auto col-sm-8 text-right text-capitalize'>
            <Link to='/'>
              <button
                className='btn btn-outline-danger text-capitalize mb-3 px-5'
                type='button'
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className='text-title'>subtotal:</span>
              <strong>Kshs {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className='text-title'>tax:</span>
              <strong>Kshs {cartTax}</strong>
            </h5>
            <h5>
              <span className='text-title'>Total:</span>
              <strong>Kshs {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={this.props.history}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartTotals;
