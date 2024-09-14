import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Component/CartContext";
import ProductList from "./Component/ProductList";
import Cart from "./Component/Cart";
import ProductDetails from "./Component/ProductDetails";
import "./styles/Product.scss";
import Header from "./Component/Header";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Header></Header>
        <div className="app">
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
