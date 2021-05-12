import React from "react";
import { Link } from "react-router-dom";

export default function PayNow({ value }) {
  const { clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="text-right col-10 mt-4 ml-sm-5 ml-md-auto col-sm-8">
            <Link to="/product">
              <button
                class="btn btn-outline-danger mb-2"
                type="button"
                onClick={() => clearCart()}
              >
                <h5>Clear Cart</h5>
              </button>
            </Link>
            <div>
              <button class="btn btn-outline-success mb-5" type="button">
                <h6>Pay Now</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
