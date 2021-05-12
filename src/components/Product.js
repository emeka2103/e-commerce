import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
// import Items from "./ListItems";
import { ButtonHeader } from "../components/Button";

export default class Product extends Component {
  render() {
    const { id, image, designer, name, price, status } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div
            className="text-center product py-4"
            onClick={() => value.handleDetail(id)}
          >
            <Link to="/details" style={{ textDecoration: "none" }}>
              <div>
                <img src={image} /> <br />
                {/* <h5 className="mt-2" style={{ color: " #183153" }}>
                 {designer}
               </h5> */}
                {/* <strong>{name}</strong> */}
              </div>
            </Link>
            <h5 className="mt-2" style={{ color: " #183153" }}>
              {designer}
            </h5>
            <strong>{name}</strong> <br />
            <span>{price}</span> <br />
            <Link to="#">
              <ButtonHeader
                disabled={status ? true : false}
                onClick={() => {
                  value.addToCart(id);
                }}
              >
                <span>Add to cart</span>
              </ButtonHeader>
              {/* <button>Add to Cart</button> */}
            </Link>
          </div>
        )}
      </ProductConsumer>
      // <div className="col-6">
      //   <h1>This is Andrew</h1>
      // </div>
    );
  }
}

// const ProductItems = ({ image, designer, name, price, id, amount }) => {
//   return (
//     <div className="text-center product py-4">
//       <Link to="/details" style={{ textDecoration: "none" }}>
//         <div>
//           <img src={image} /> <br />
//           {/* <h5 className="mt-2" style={{ color: " #183153" }}>
//             {designer}
//           </h5> */}
//           {/* <strong>{name}</strong> */}
//         </div>
//       </Link>
//       <h5 className="mt-2" style={{ color: " #183153" }}>
//         {designer}
//       </h5>{" "}
//       <strong>{name}</strong> <br />
//       <span>{price}</span> <br />
//       <Link to="/cart">
//         <ButtonHeader>
//           <span>Add to cart</span>
//         </ButtonHeader>
//         {/* <button>Add to Cart</button> */}
//       </Link>
//     </div>
//   );
// };

// export const Product = () => {
//   return (
//     <div className="product-container-main">
//       <h1 className="text-center my-3" style={{ color: " #183153" }}>
//         List of Products
//       </h1>
//       <div className="product-container">
//         {Items.map((item) => (
//           <ProductItems
//             key={item.id}
//             image={item.image}
//             designer={item.designer}
//             name={item.name}
//             price={item.price}
//             id={item.id}
//             amount={item.amount}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// console.log(Items);

// export default Product;
