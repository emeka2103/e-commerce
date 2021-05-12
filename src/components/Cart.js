import React, { Component } from "react";
import CartColumns from "./CartColumn";
import { ProductConsumer } from "../Context";
import CartList from "./CartList";
import PayNow from "./PayNow";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            return (
              <React.Fragment>
                <h1 className="text-center font-italic  py-2">Cart Items</h1>
                <CartColumns />
                <CartList value={value} />
                <PayNow value={value} />
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </section>
    );
  }
}
