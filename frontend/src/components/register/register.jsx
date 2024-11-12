import React , {useState} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import styles from './register.module.css'


const Register = () => {

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();

    const handleOnSignUp = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("https://groceryshop24-backend.onrender.com/api/register" , {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

            const data = await response.json();

            if (response.status === 201) {
                alert('User registered successfully');
                navigate("/sign_in");
                // Redirect to the sign-in page or homepage
            } else {
                alert(data.message || 'An error occurred');
            }

        } catch(err) {
            console.error('Error during signup:', err);
            alert('An error occurred. Please try again later.');
        }
    }


    return (
        <>
            <div className={styles['sign-up-container']}>
                <div className={styles.form}>
                        <div className={styles["sign-up-text"]}>
                            <h1>Sign Up</h1>
                            <p>It is a long established fact that a reader will be distracted by
                            the readable content of a page when looking at its layout. The point
                            of using.</p>
                        
                        <div className={styles['social-icons']}>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                <div className={styles["sign-up-form"]}>
                    <h3>Sign Up</h3>
                    <form onSubmit={handleOnSignUp}>
                        <label htmlFor="full-name">Full Name:</label>
                        <input type="text" id="full-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your full name here..." required />
                        
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email here..." required />
                        
                        <label htmlFor="pass">Password:</label>
                        <input type="password" id="pass" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password here..." required />
                    
                        <div className={styles["sign-up-button"]}>
                            <button className={styles["sign-up-btn"]} type='submit'>Sign Up</button>
                        </div>
                    </form>

                    <div className={styles["to-sign-in"]}>
                        <p>If u already have an account? <Link to="/sign_in" className={styles['go-to-sign-in']}>SignIn here</Link></p>
                    </div>

                </div>
                </div>
            </div>
        </>
    );
}


export default Register;
