import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.svg";
import { useCartContext } from "./CartContext";

const Header = () => {
  const { cart } = useCartContext();

  return (
    <section className="header">
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <p>Product Catalog</p>
      </Link>

      <Link
        to="/cart"
        style={{ marginLeft: "20px", textDecoration: "none", color: "white" }}
      >
        <div className="cart-icon">
          <img src={CartIcon} style={{ width: 36, height: 36 }} />
          <p id="cart-count">{cart.length}</p>
        </div>
      </Link>
    </section>
  );
};

export default Header;
