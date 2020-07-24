import React, { Component } from "react";
import "./style.css";
import TopHeader from "./TopHeader/TopHeader";
import MainHeader from "./MainHeader/MainHeader";
import BottomHeader from "./BottomHeader/BottomHeader";
//import * as authActions from '../../store/actions/authActions';
//import * as cartActions from '../../store/actions/cartActions';
//import { connect } from 'react-redux';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }
  componentDidMount() {
    this.getCartItem()
  } 

  getCartItem() {
    fetch("http://localhost:4000/api/tienda/carditem")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cartItems: data });

        console.log(this.state.cartItems.length);
        // console.log(product['cart'][0].producto.nombre)
      });
  }

  logout = () => {
    this.props.logout();
  };

  render() {
    // const {isAuthenticated} = this.props.auth;
    //const { cart } = this.props;
    const cartCount = this.state.cartItems.length;
    //   const cartCount = isAuthenticated ? cart.cartCount : '';

    return (
      <div className="Header">
        <TopHeader />
        {/* logout={this.logout} */}
        <MainHeader cartCount={cartCount} />
        <BottomHeader />
      </div>
    );
  }
}

export default Header;
