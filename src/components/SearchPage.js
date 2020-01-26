import React, {Component} from 'react';
import {MDBCol,MDBIcon} from "mdbreact";
import {Route} from "react-router-dom";
import ProductList from "./ProductList";

class SearchPage extends Component {
    render() {
        return (
            <MDBCol md="6">
                <form className="form-inline ml-5">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-sm ml-3 w-75"
                           type="text"
                           placeholder="Search"
                           aria-label="Search"
                           onChange={this.searchHandler}
                    />

                </form>
            </MDBCol>
        );
    }
}

export default SearchPage;