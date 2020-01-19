import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductsConsumer} from "../context1";
import PropTypes from 'prop-types';
import './Product.css';

class Product1 extends Component {
    render() {
        const{id, title, img, price, inCart} = this.props.product1;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3
            my-3">
                <div className="card">

                    <ProductsConsumer>
                        {(value) => (
                            <div
                                className="img-container p-5"
                                onClick={() => value.handleDetail(id)}
                            >
                                <Link to="/details1">
                                    <img src={img} alt="product"
                                         className="card-img-top" />
                                </Link>
                                <button
                                    className="cart-btn"
                                    disabled={inCart?true:false}
                                    onClick={() => {
                                        value.addToCart(id);
                                        value.openModal(id);
                                    }}
                                >
                                    {inCart ? (<p className="text-capitalize mb-0" disabled>
                                            {" "}
                                            in cart
                                        </p>
                                    ):(<i className="fa fa-cart-plus"></i>)}
                                </button>
                            </div>
                        )}


                    </ProductsConsumer>
                    {/* card footer*/}
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className="text-blue font-italic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>

            </ProductWrapper>
        );
    }
}

Product1.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool
    }).isRequired
}

export default Product1;

const ProductWrapper = styled.div`


`