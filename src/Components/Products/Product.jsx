import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelected: false
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  handleAddToCart() {
    const product = {
      name: this.props.product.name,
      picture: this.props.product.picture,
      price: this.props.product.price
    };

    this.props.handleAddToCart(product);
  }

  render() {
    return (
      <div className="ProductWrapper">
        <img src={this.props.product.picture} alt={this.props.product.name} />
        <h2>{this.props.product.name}</h2>
        <p className="Price">${this.props.product.price.toFixed(2)}</p>
        <p className="Description">{this.props.product.description}</p>
        <div className="ControlsWrapper">
          <button onClick={this.handleAddToCart}>Add To Cart</button>
        </div>
      </div>
    );
  }
}

export default Product;
