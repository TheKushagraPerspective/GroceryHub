import React , {useEffect, useState} from 'react';

import styles from  './cart.module.css';

import Navbar from '../home-page/navbar';
import Footer from '../home-page/footer';

const Cart = () => {
    // const [carts, setCart] = useState([]);
    const [datas, setdata] = useState([]);
    
    const [total, setTotal] = useState(0);



    const handleCart = async (e) => {
        // e.preventDefault();
        const token = localStorage.getItem('token'); // Get token from local storage

        if (!token) {
            return <Navigate to="/sign_in" />; // Redirect to sign-in if no token
        }
        let user_id=token
        try{
            const response = await fetch(`http://localhost:2000/api/cart` , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({user_id:token})
        });

            const data = await response.json();
            console.log(data);
            setdata(data);
            // console.log(carts)
            // if (response.status === 201) {
                
            //     // Redirect to the sign-in page or homepage
            // } else {
            //     alert( 'An error occurred');
            // }

        } catch(err) {
            console.error('Error during signup:', err);
            alert('An error occurred. Please try again later.');
        }


    }

    // Fetch data when component mounts
    useEffect(() => {
        handleCart();  // Call the function inside useEffect
    },[]);   // Re-fetch data when the category in the URL changes




    return(
        <>
          <Navbar />
            <div className={styles["product-list"]}>
            {datas.length > 0 ? (
                    datas.map((data) => (
                        <div key={data._id} className={styles["product-item"]}>
                            <Product product_id={data.product_id} />
                            <p>{data.quantity}</p>
                        </div>
                    ))
                ) : (
                    <p>No items in cart available</p>
                )}
            </div>
            <Footer />
        
        </>
    );
}

function  Product ({ product_id }){
    // const {product_id} = params;
    const [product,setproduct]=useState([]);

    const pro=async ()=>{
        try{
        let response=await fetch(`http://localhost:2000/products/${product_id}`)
        const data = await response.json();
            if (response.status === 201) {
               setproduct(data);
                // Redirect to the sign-in page or homepage
            } else {
                alert( 'An error occurred');
            }
        }catch(err) {
            console.error('Error during signup:', err);
            alert('An error occurred. Please try again later.');
        }
    }
    useEffect(()=>{
        pro();
    },[product_id])
    return(
        <div className={styles["product-list"]}>
                {product.length > 0 ? (
                    product.map((data) => (
                        <div key={data._id} className={styles["product-item"]}>
                        <div className={styles["product-image"]}>
                            <img src={data.product_image} alt={data.product_name} />
                        </div>
                        <div className={styles["product-details"]}>
                            <p>{data.product_name}</p>
                            <p>Price: ₹{data.product_price}</p>
                        </div>
                    </div>
                    ))
                ) : (
                    <p>No products available</p>
                )}
            </div>
    )
}



export default Cart;