import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';
import { ProductConsumer } from '../../context';

class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          const inCart = cart.length;
          return (
            <section>
              {inCart <= 0 ? (
                <EmptyCart />
              ) : (
                <>
                  <Title name='your' title='cart'></Title>
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotals value={value} />
                </>
              )}
            </section>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
