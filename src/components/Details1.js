import React, {Component} from 'react';
import {ProductsConsumer} from "../context1";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

class Details1 extends Component {
    render() {
        return (
            <ProductsConsumer>
                {value => {
                    const {id, company, img, info, price, title, inCart} =
                        value.detailaccesories;
                    return (
                        <div className="container py-5">
                            {/*title*/}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*product info*/}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/*product text*/}
                                <div className="col-10 mx-auto col-md-6 my-3
                                 text-capitalize">
                                    <h2>model : {title}</h2>
                                    <h4 className="text-uppercase
                                    mt-3 mb-2">
                                        made by : <span className="text-uppercase">
                                        {company}</span>

                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price : <span>${price}</span>
                                        </strong>

                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/*button*/}
                                    <div>
                                        <Link to="/accesories">
                                            <ButtonContainer>back to accessories</ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                                         disabled={inCart ? true : false}
                                                         onClick={()=>{
                                                             value.addToCart(id);
                                                         }}
                                        >
                                            {inCart? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>


                        </div>


                    )

                }
                }
            </ProductsConsumer>
        );
    }
}

export default Details1;