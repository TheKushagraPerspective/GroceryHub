import React , {useState} from 'react';
import {Link , useNavigate} from 'react-router-dom';
import styles from './navbar.module.css';


const Navbar = () => {

    const navigate = useNavigate();

    const handleOnSignOut = () => {
        localStorage.removeItem('token'); // Remove the token
        navigate('/sign_in');
    }



    const handleOnHomeClick = () => {
        navigate('/home');
    }
    
    
    return(
        <>
            <div className={styles["header"]}>
                <div className={styles["navbar"]}>

                        {/* app logo */}
                        <div className={styles["app-logo"]}>
                            <div className={styles["logo"]}>
                                <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                            </div>
                        </div>

                        {/* <!-- box 2 --> */}
                    <div className={`${styles.border} ${styles["nav-address"]}`}>
                        <p className={styles["add-first"]}>Deliver To</p>
                        <div className={styles["add-icon"]}>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <p className={styles["add-second"]}>India</p>
                        </div>
                    </div>

                    {/* <!-- box 3 --> */}
                    <div className={styles["nav-search"]}>
                        <select className={styles["search-select"]}>
                            <option value="All">All</option>
                        </select>
                        <input type="text" placeholder="Search GroceryHub" className={styles["search-input"]}/>
                        <div className={styles["search-icon"]}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>

                {/* <!-- box 4 --> */}
                    <div className={`${styles.border} ${styles["nav-signout"]}`}>
                        <p><span className="sign-out">Hello,<button onClick={handleOnSignOut}>sign out</button></span></p>
                        <p className={styles["nav-list"]}>Accounts & Lists</p>
                    </div>


                    {/* <!-- box 5 --> */}
                    <div className={`${styles.border} ${styles["nav-contact"]}`}>
                        <Link to="/contact" className={styles["contact-details"]}>Contact Us</Link>
                    </div>

                    {/* <!-- box 7 -->  */}
                   <div className={`${styles.border} ${styles["nav-mode"]}`} >
                        <p><span className={styles['mode-text']}>Cart</span></p>
                        <div className={styles["nav-mode-icon"]}>
                            <Link to="/cart" className='shopping-cart'><i className="fa fa-cart-plus" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>

                {/* <!-- panel part --> */}
                <div className={styles["panel"]}>
                        <div className={`${styles.border} ${styles["panel-all"]}`}>
                            <i className="fas fa-bars"></i> {/* Updated for Font Awesome 5+ */}
                            <span className={styles["panel-text-1"]}>All</span>
                        </div>

                        <div className={styles["panel-options"]}>
                            <p className={styles["border"]} onClick={handleOnHomeClick}>Home</p>
                            <p className={styles["border"]}>Today's Deals</p>
                        </div>

                        <div className={`${styles.border} ${styles['panel-deal']}`}>
                            <p>Shop the offers</p>
                        </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;