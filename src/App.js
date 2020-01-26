import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './components/Navbar';
import Accesories from './components/Accesories';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import ProductList from "./components/ProductList";
import Details1 from "./components/Details1";
import Modal from "./components/Modal";
import Home from "./components/Home";
class App extends Component {
    render(){
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
          <Route exact path="/products" component={ProductList}/>
          <Route path="/details" component={Details}/>
          <Route path="/details1" component={Details1}/>
          <Route path="/accesories" component={Accesories}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/" component={Home}/>
          <Route component={Default}/>
      </Switch>
        <Modal/>
    </React.Fragment>

  );
 }
}

export default App;
