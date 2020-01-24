import React, {Component} from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from "../../context";
import {ProductsConsumer} from "../../context1";
import CartList from './CartList';
import CartTotals from './CartTotals';

class Cart extends Component {
    render() {
        return (
            <section>
                <Title name="your" title="cart" />
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){

                            return(
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history=
                                        {this.props.history}/>
                                </React.Fragment>
                            );
                        }
                    }}
                </ProductConsumer>
                <ProductsConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length>0){

                            return(
                                <React.Fragment>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotals value={value} history=
                                        {this.props.history}/>
                                </React.Fragment>
                            );
                        }
                    }}
                </ProductsConsumer>


            </section>
        );
    }
}

export default Cart;