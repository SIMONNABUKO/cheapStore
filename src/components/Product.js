import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className='col-9 mx-auto col-md-6 my-3 col-lg-3'>
        <div className='card'>
          <div
            className='img-container p-5'
            onClick={() => console.log(`Stop clicking me`)}
          >
            <Link to='/details'>
              <img src={img} alt={title} className='card-img-top' />
            </Link>
            <button
              className='cart-btn'
              disabled={inCart ? true : false}
              onClick={() => console.log(`Added to cart`)}
            >
              {inCart ? (
                <p className='text-capitalize mb-0' disabled>
                  in cart
                </p>
              ) : (
                <i className='fa fa-cart-plus'></i>
              )}
            </button>
          </div>
          {/* Card footer */}
          <div className='card-footer d-flex justify-content-between'>
            <p className='align-self-center mb-0'>{title}</p>
            <h5 className='text-blue mb-0 font-italic'>Ksh {price}</h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
const ProductWrapper = styled.div`
  .card {
    border: transparent;
    transition: all 0.5s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 0.5s linear;
  }
  &:hover {
    .card {
      border: 0.07rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px solid rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.5s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    border-radius: 0.5rem 0 0 0;
    font-size: 1.4rem;
    transform: translate(100%, 100%);
    transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

export default Product;
