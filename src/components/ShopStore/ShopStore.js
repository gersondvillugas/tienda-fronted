import React, { Component } from "react";
import "./style.css";
import Products from "./Products/Products";
import { Route, Switch } from "react-router-dom";
import Header from "../Header/Header";

import ProductDetails from "../../containers/Productdetails";
import Cart from "../../containers/Cart/index";
class ShopStore extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:categoria" component={Products} />
          {/* <Route  path="/products/:categoria/:id" component={ProductDetails}/> */}
          <Route path="/products/detail/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default ShopStore;
