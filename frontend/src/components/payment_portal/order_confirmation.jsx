import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../home-page/navbar';
import styles from './order_confirmation.module.css';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId } = location.state;

  return (
    <>
      <Navbar />
      <div className={styles["container"]}>
        <h2 className={styles["text"]}>Order Confirmation</h2>
        <p className={styles["text"]}>Thank you for your order!</p>
        <p className={styles["text"]}>Your order ID is: <span className={styles["font-semibold"]}>{orderId}</span></p>
        <p className={styles["text"]}>We will process your order and deliver it to the provided address.</p>
      </div>
    </>
  );
};

export default OrderConfirmation;