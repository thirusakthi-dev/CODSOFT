import React from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.images[1]}
          style={{ width: 220, height: 220, objectFit: "contain" }}
          alt={product.title}
        />
      </Link>
      <div className="card-content">
        <p className="card-product-name">{product.title}</p>
        <p className="card-desc">{product.description.slice(0, 70)}...</p>
        <p>${Math.floor(product.price)}</p>
      </div>
      <button className="add-btn">Add to cart</button>
    </div>
  );
};

export default ProductCard;
