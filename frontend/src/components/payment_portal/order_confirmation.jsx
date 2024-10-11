import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../home-page/navbar';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderId } = location.state;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Order Confirmation</h2>
        <p className="text-lg">Thank you for your order!</p>
        <p className="text-lg">Your order ID is: <span className="font-semibold">{orderId}</span></p>
        <p className="mt-4">We will process your order and deliver it to the provided address.</p>
      </div>
    </>
  );
};

export default OrderConfirmation;