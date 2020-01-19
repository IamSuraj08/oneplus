import React, {Component} from 'react';
import Title from "./Title";
import {ProductsConsumer} from "../context1";
import Product1 from "./Product1";

class Accesories extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="accesories"/>
                        <div className="row">
                            <ProductsConsumer>
                                {value=>{
                                    return value.products1.map( product1 =>{
                                        return <Product1 key={product1.id} product1={product1}/>;
                                    })
                                }
                                }
                            </ProductsConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Accesories;