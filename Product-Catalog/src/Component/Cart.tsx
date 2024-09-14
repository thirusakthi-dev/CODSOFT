import React, { useContext, useEffect, useState } from "react";
import { useCartContext } from "./CartContext";
import StartIcon from "../assets/star.svg";
import CloseIcon from "../assets/close.svg";
import { Navigate, useNavigate } from "react-router-dom";
import BackIcon from "../assets/back.svg";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  uniqueId: string;
  rating: number;
  warrantyInformation: string;
}

const Cart: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { cart, removeFromCart } = useCartContext();

  const navigate = useNavigate();

  const handleRemoveFromCart = (uniqueId: string) => {
    removeFromCart(uniqueId);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const starGenerate = (count: number) => {
    return Array.from({ length: count }, (_, index) => (
      <img
        key={index}
        src={StartIcon}
        style={{ width: 21, height: 21 }}
        alt="star"
      />
    ));
  };

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="cart">
        <img
          src={BackIcon}
          onClick={handleBack}
          style={{
            width: 30,
            height: 30,
            objectFit: "contain",
            marginTop: "24px",
          }}
        />
        <div className="cart-head">
          <h2>Shopping Cart</h2>
        </div>
        <div className="cart-container">
          {cart.length === 0 ? (
            <p className="cart-empty">Your cart is empty</p>
          ) : (
            <>
              <ul className="cart-list">
                {cart.map((item) => (
                  <li key={item.id} className="cart-item">
                    <figure
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.images[1]}
                        alt="Loading"
                        style={{
                          width: 100,
                          height: 100,
                          objectFit: "contain",
                        }}
                      />
                      <figcaption>
                        <p>{item.brand}</p>
                        <p>{item.title}</p>
                      </figcaption>
                    </figure>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div>{starGenerate(item.rating)}</div>
                      <p>{item.warrantyInformation}</p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <p> ${item.price.toFixed(0)}</p>
                      <p>{Math.floor(item.discountPercentage)}% Discount</p>
                    </div>
                    <img
                      src={CloseIcon}
                      style={{ width: 30, height: 30 }}
                      onClick={() => handleRemoveFromCart(item.uniqueId)}
                    ></img>
                  </li>
                ))}
              </ul>
              <hr></hr>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingRight: 30,
                }}
              >
                <h3>Total: ${Math.floor(total)}</h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
