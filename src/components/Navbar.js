import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../home.svg'
import {ButtonContainer} from "./Button";
import styled from 'styled-components';
import SearchPage from './SearchPage';


class Navbar extends Component {





    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                {/*https://www.iconfinder.com/icons/1243689/call_phone_icon
                Creative Commons (Attribution 3.0 Unported);
                https://www.iconfinder.com/Makoto_msk */}


                <Link to='/'>
                    <img src={logo} alt="store" className="oneplus-brand"/>

                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to='/products' className="nav-link">
                            products
                        </Link>
                    </li><li className="nav-item ml-5">
                        <Link to='/accesories' className="nav-link">
                            accesories
                        </Link>
                    </li>
                </ul>
                <SearchPage/>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className='mr-2'>
                        <i className="fa fa-cart-plus"></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
                );
    }
}

const NavWrapper = styled.nav`
background:red;
.nav-link{
    color:var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize ;
}
.oneplus-brand 
{
    flex: 0;
    width: null;
    height: null;
    resizeMode: 'contain' ;
}


`


export default Navbar;