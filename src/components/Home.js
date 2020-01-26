import React, {Component} from 'react';
import wallpaper from '../wallpaper2.png'
import logo from "../home.svg";
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <Link to='/products'>
            <div className='row'>
                <img src={wallpaper} className="img-fluid img-container"/>

            </div>
            </Link>
        );
    }
}

export default Home;