import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../home-page/navbar';
import styles from './payment.module.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, totalPrice } = location.state;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    country: '',
    pincode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:2000/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: token,
          ...formData,
          cartItems,
          totalPrice,
          paymentMethod: 'Cash on Delivery',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Order submitted:', result);
      navigate('/order-confirmation', { state: { orderId: result.orderId } });
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className={styles['payment-container']}>
        <form onSubmit={handleSubmit} className={styles['payment-form']}>
          <h2>Payment Details</h2>
          <div className={styles['form-group']}>
            <label htmlFor="name" className={styles['form-label']}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles['form-input']}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email" className={styles['form-label']}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles['form-input']}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="address" className={styles['form-label']}>Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={styles['form-input']}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="country" className={styles['form-label']}>Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className={styles['form-input']}
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="pincode" className={styles['form-label']}>Pincode</label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
              className={styles['form-input']}
            />
          </div>
          <div className={styles['payment-method']}>
            Payment Method: Cash on Delivery
          </div>
          <button
            type="submit"
            className={styles['submit-button']}
          >
            Submit Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;