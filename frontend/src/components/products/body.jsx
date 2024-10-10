// import React, { useState } from 'react';
// import {Link} from 'react-router-dom';
// import Navbar from '../home-page/navbar';
// import Footer from '../home-page/footer';

// const Body = () => {
//     let [datas,setdata]=useState({});
//     const handleProduct = async (e) => {
//         e.preventDefault();

//         try{
//             const response = await fetch("http://localhost:2000/api/product");
//             const data = await response.json();
//             if (response.status === 201) {
//                 alert('Product fetch successfully');
//                 setdata(data);
//                 // navigate("/sign_in");
//                 // Redirect to the sign-in page or homepage
//             } else {
//                 alert(data.message || 'An error occurred');
//             }

//         } catch(err) {
//             console.error('Error during signup:', err);
//             alert('An error occurred. Please try again later.');
//         }
//     }


//     return(
//         <>
//         {handleProduct}
//         {datas.map(data=>{
//             return(<img>data.product_image</img>)
//         })}

//         </>
//     );
// }


// export default Body;

import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
const Body = () => {
     // Empty dependency array ensures it runs once when the component mounts

    return (
        <></>
    );
}

export default Body;
