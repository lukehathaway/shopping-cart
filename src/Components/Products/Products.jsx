import React, { Component } from "react";

import Product from "./Product";

import { PRODUCTS } from "./data";

class Products extends Component {
  constructor(props) {
    super();

    this.state = {
      products: []
    };

    this.attachBindings();
  }

  attachBindings() {
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.setState({
      products: PRODUCTS
    });
  }

  handleAddToCart(selectedProduct) {
    this.props.addToCart(selectedProduct);
    console.log(selectedProduct, "add to cart");
  }

  render() {
    const products = this.state.products;

    return (
      <div className="ProductsWrapper">
        {products.map(product => {
          return (
            <Product
              handleAddToCart={selectedProduct =>
                this.handleAddToCart(selectedProduct)
              }
              product={product}
            />
          );
        })}
      </div>
    );
  }
}

export default Products;
