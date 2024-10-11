import React , {useState} from 'react';
import './cart.module.css';



const Cart = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);



    const handleCart = async (e) => {
        // e.preventDefault();
        try {
            const response = await fetch(`http://localhost:2000/api/cart`);
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
        handleCart();  // Call the function inside useEffect
    },[]);   // Re-fetch data when the category in the URL changes




    return(
        <>
        
            
        
        </>
    );
}



export default Cart;