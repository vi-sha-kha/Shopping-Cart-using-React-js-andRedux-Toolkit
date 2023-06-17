import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div>NAVBAR</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-lg-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Products
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item ">
                <Link className="nav-link" to="/cart">
                  My Cart {cartProducts.length}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h1>Happy Shopping!</h1>
    </>
  );
};

export default Dashboard;
