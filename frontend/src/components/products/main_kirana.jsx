import React from 'react';
import { useState,useEffect } from 'react';
import {Link , useParams} from 'react-router-dom';

import styles from './main_kirana.module.css';
import Navbar from '../home-page/navbar';
import Footer from '../home-page/footer';
// import Body from './body'



const MainKiranaItems = () => {
    const [datas, setData] = useState([]);
    const {category} = useParams();// Get the category from the URL



    const handleProduct = async (e) => {
        // e.preventDefault();
        try {
            const response = await fetch(`https://groceryshop24-backend.onrender.com/api/product/${category}`);
            const data = await response.json();
            if (response.status === 200) {
                alert('Product fetched successfully');
                setData(data);  // Use setData to update the state
            } else {
                alert(data.message || 'An error occurred');
            }
        } catch (err) {
            console.error('Error during product fetch:', err);
            alert('An error occurred. Please try again later.');
        }
    }

    // Fetch data when component mounts
    useEffect(() => {
        handleProduct();  // Call the function inside useEffect
    },[category]);   // Re-fetch data when the category in the URL changes



    // A function to handle button click
    const send =async (id) => {
        // console.log('Product ID:', id);  // Add logic for handling product addition
        // alert(`Added product with ID: ${id}`);
        // let a=
        // e.preventDefault();
        const token = localStorage.getItem('token'); // Get token from local storage

        if (!token) {
            return <Navigate to="/sign_in" />; // Redirect to sign-in if no token
        }

        try{
            const response = await fetch("https://groceryshop24-backend.onrender.com/api/add/cart" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id:token , product_id:id })
        });

            const data = await response.json();

            if (response.status === 201) {
                alert('Product added to cart  successfully');
                
                // Redirect to the sign-in page or homepage
            } else {
                alert( 'An error occurred');
            }

        } catch(err) {
            console.error('Error during signup:', err);
            alert('An error occurred. Please try again later.');
        }


    };



    return(
        <>
            <Navbar />
            <div className={styles["product-list"]}>
                {datas.length > 0 ? (
                    datas.map((data) => (
                        <div key={data._id} className={styles["product-item"]}>
                            <div className={styles["product-image"]}>
                                <img src={data.product_image} alt={data.product_name} />
                            </div>
                            <div className={styles["product-details"]}>
                                <p>{data.product_name}</p>
                                <p>Description :- {data.product_description}</p>
                                <p>Price: ₹{data.product_price}</p>
                                <button onClick={() => send(data._id)}>Add to Cart</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
            <Footer />
        </>
    );
}


export default MainKiranaItems;
