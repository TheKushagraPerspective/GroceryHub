import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from "./sign_in.module.css"; // Use CSS Module

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleOnSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://groceryshop24-backend.onrender.com/api/sign_in', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.status === 200) {
                // Save the token in localStorage or state management
                localStorage.setItem('token', data.token);
                
                alert("Sign-in successful");
                navigate("/home");
            } else if (response.status === 401) {
                alert('Incorrect password');
            } else if (response.status === 400) {
                alert('User not found. Please register.');
            }
        } catch (error) {
            console.error('Error during sign in:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={styles['sign-in-container']}>
            <div className={styles.form}>
                <div className={styles['sign-in-text']}>
                    <h1>Welcome<br /> Back</h1>
                    <p>
                        It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The point
                        of using.
                    </p>
                    <div className={styles['social-icons']}>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                    </div>
                </div>
                <div className={styles['sign-in-form']}>
                    <h3>Sign in</h3>
                    <form onSubmit={handleOnSignIn}>
                        <label htmlFor="email">Email Address:</label>
                        <input type="email" id="email" value={email} placeholder="Enter your email here..." onChange={(e) => setEmail(e.target.value)} required />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} placeholder="Enter your password here..." onChange={(e) => setPassword(e.target.value)} required />
                        <div className={styles['form-row']}>
                            <div className={styles['remember-me']}>
                                <input type="checkbox" id="remember" required />
                                <label htmlFor="remember"> I Agree with Terms and Conditions</label>
                            </div>
                        </div>
                        <button className={styles['sign-in-btn']} type="submit">Sign in now</button>
                    </form>
                    <a href="#" className={styles['lost-password']}>Lost your password?</a>
                    <div>
                        <p>New user? <Link to="/register" className={styles['registeration-form']}>Register here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
