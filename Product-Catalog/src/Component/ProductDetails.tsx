import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCartContext } from "./CartContext";
import OfferIcon from "../assets/offer.svg";
import StartIcon from "../assets/star.svg";
import BackIcon from "../assets/back.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
  category: string;
  brand: string;
  rating: number;
  returnPolicy: string;
  discountPercentage: number;
  availabilityStatus: string;
  warrantyInformation: string;
  dimensions: { width: number; height: number };
  uniqueId: string;
}

const ProductDetails: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCartContext();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  //   if (loading) {
  //     return <p>Loading product details...</p>;
  //   }

  if (!product) {
    return <h2>Product not found</h2>;
  }
  const notify = () => toast.success("Added to Cart!");

  const handleAddToCart = () => {
    if (product) {
      const uniqueId = `${product.id}-${Date.now()}`;
      addToCart({ ...product, uniqueId });
      notify();
    }
  };
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
    <>
      <div
        style={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={BackIcon}
          onClick={handleBack}
          style={{ width: 30, height: 30, objectFit: "contain" }}
        />
        <div className="product-details">
          <ToastContainer position="top-center" autoClose={1600} />
          <figure style={{ width: 600, height: 400, objectFit: "contain" }}>
            <img
              src={product.images[1]}
              alt={product.title}
              style={{ width: 400, height: 400, objectFit: "contain" }}
            />
          </figure>

          <div className="details-desc">
            <div>
              <p>{product.brand}</p>
              <div>
                <h1>{product.title}</h1>
              </div>

              <p>{product.category}</p>
            </div>
            <div>{starGenerate(product.rating)}</div>

            <p>{product.description}</p>
            <p>{product.warrantyInformation}</p>
            <div style={{ display: "flex" }}>
              <p className="detail-price"> ${Math.floor(product.price)}</p>
              <p>({product.discountPercentage.toFixed(0)}% Discount)</p>
            </div>

            <div>
              <button onClick={handleAddToCart} className="Detail-Add-Btn">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
