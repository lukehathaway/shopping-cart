import React, { Component } from "react";

class CartWidget extends Component {
  render() {
    return <div>Cart here {this.props.cartCount}</div>;
  }
}

export default CartWidget;
