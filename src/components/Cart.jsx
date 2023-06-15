import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
import Dashboard from "./Dashboard";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removefromCart = (id) => {
    console.log("remove", id, products[0]);
    dispatch(remove(id));
  };
  const card = (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={product.image}
              className="card-img-top"
              alt={product.title}
              style={{ height: "300px" }}
            />
            <div className="card-body" style={{ height: "200px" }}>
              <div className="card-content">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs.&nbsp;{product.price}</p>
              </div>
              <div className="card-footer" style={{ height: "90px" }}>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removefromCart(product.id);
                  }}
                >
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <>
      <Dashboard />
      <h1>Cart Items</h1>
      {/* <h1>Cart</h1>
      {JSON.stringify(products)}); */}
      <div className="row">{card}</div>
    </>
  );
};

export default Cart;
