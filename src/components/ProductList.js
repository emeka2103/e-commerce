import React, { Component } from "react";
import Product from "./Product";
// import { items } from "./ListItems";
import { ProductConsumer } from "../Context";

export default class ProductList extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="product-container-main ">
          <h1
            className="text-center font-italic  py-2"
            style={{
              color: "red",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            Products
          </h1>
          <div className="product-container">
            <ProductConsumer>
              {(value) => {
                return value.products.map((product) => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>

          {/* <div> <Product /></div> */}
        </div>
      </React.Fragment>
    );
  }
}
