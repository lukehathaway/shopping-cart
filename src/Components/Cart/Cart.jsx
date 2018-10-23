import React, { Component } from "react";

import CartWidget from "./CartWidget";
import Products from "../Products/Products";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartCount: 0,
      lastSelectedProduct: {},
      productsInCart: []
    };

    this.attachBindings();
  }

  attachBindings() {
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(selectedProduct) {
    const currentCart = [...this.state.productsInCart];

    this.setState({
      cartCount: this.state.cartCount + 1,
      lastSelectedProduct: selectedProduct,
      productsInCart: [...currentCart, selectedProduct]
    });
  }

  render() {
    return (
      <React.Fragment>
        <CartWidget cartCount={this.state.cartCount} />
        <Products
          addToCart={selectedProduct => this.addToCart(selectedProduct)}
        />
      </React.Fragment>
    );
  }
}

export default Cart;
