import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Navbar from "../home-page/navbar";
import styles from "./cart.module.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    handleCart();
  }, []);


  const handleCart = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/sign_in" />;
    }

    try {
      const response = await fetch("https://groceryshop24-backend.onrender.com/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: token }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const collectedData = await response.json();
      console.log("Collected data:", collectedData);
      setCartItems(collectedData.data);
    } catch (err) {
      console.error("Error during handleCart:", err);
    }
  };

  const removeItem = async (itemId) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("https://groceryshop24-backend.onrender.com/api/cart/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: token, item_id: itemId }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setCartItems(cartItems.filter(item => item._id !== itemId));
    } catch (err) {
      console.error("Error removing item from cart:", err);
    }
  };

 

  const handleProceedToPayment = () => {
    navigate("/payment", { state: { cartItems, totalPrice } });
  };

  return (
    <>
      <Navbar />
      <div className={styles["cart-container"]}>
        <h2>Your Cart</h2>
        <div className={styles["product-list"]}>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem key={item._id} item={item} removeItem={removeItem} />
            ))
          ) : (
            <p>No items in cart available</p>
          )}
        </div>
        <div className={styles["cart-total"]}>
          <button onClick={handleProceedToPayment} className={styles["proceed-button"]}>
            Proceed to Payment
          </button>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ item, removeItem }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [item.product_id]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:2000/products/${item.product_id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data[0]);
    } catch (err) {
      console.error("Error during Products fetch:", err);
    }
  };

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className={styles["product-item"]}>
      <div className={styles["product-image"]}>
        <img src={product.product_image} alt={product.product_name} />
      </div>
      <div className={styles["product-details"]}>
        <p>{product.product_name}</p>
        <p>Price: ₹{product.product_price}</p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <button
        className={styles["remove-button"]}
        onClick={() => removeItem(item._id)}
      >
        <X size={20} />
      </button>
    </div>
  );
};

export default Cart;
