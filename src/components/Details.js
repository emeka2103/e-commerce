import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonHeader } from "../components/Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            designer,
            name,
            image,
            info,
            price,
            status,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center my-5">
                  <h1>{name}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto my-3 col-md-6">
                  <img className="img-fluid" src={image} alt="product" />
                </div>
                <div className="col-10 mx-auto my-3 col-md-6">
                  <h2>Model : {name}</h2>
                  <h4 className="mt-3 mb-2">
                    Made By : <span>{designer}</span>
                  </h4>
                  <h4>
                    <strong className="text-uppercase text-bright">
                      price : <span>{price}</span>
                    </strong>
                  </h4>
                  <p className="font-weight-bold mt-3 mb-0">Product Info :</p>
                  <p className="text-muteds">{info}</p>
                  <div>
                    <Link to="/product">
                      <button className="product-button">
                        Back to Product
                      </button>
                    </Link>

                    <button
                      className="product-button"
                      onClick={() => {
                        value.addToCart(id);
                      }}
                      disabled={status ? true : false}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
