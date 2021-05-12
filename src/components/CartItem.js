import React from "react";

export default function CartItem({ item, value }) {
  const { id, designer, image, amount, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <React.Fragment>
      <div className="row my-3 text-capitalize text-center">
        <div className="col-10 col-lg-2 mx-auto">
          <img
            src={image}
            className="image-fluid"
            alt="product"
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <span className="d-lg-none">product:</span>
          {designer}
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <span className="d-lg-none">price:</span>
          {amount}
        </div>
        <div className="col-10 mx-auto my-2 col-lg-2 my-lg-0">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => decrement(id)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>
              <span
                className="btn btn-black mx-1"
                onClick={() => increment(id)}
              >
                +
              </span>
            </div>
          </div>
        </div>
        <div className="col-10 col-lg-2 mx-auto">
          <div className="cart-icon" onClick={() => removeItem(id)}>
            <i class="fas fa-trash"></i>
          </div>
        </div>
        {/* <div className="col-10 col-lg-2 mx-auto">
          <span> item total: $ {total} </span>
        </div> */}
      </div>
    </React.Fragment>
  );
}
