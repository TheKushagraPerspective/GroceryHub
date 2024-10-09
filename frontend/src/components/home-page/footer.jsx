import React , {useState } from 'react';
import {Link} from 'react-router-dom';
import styles from './footer.module.css';




const Footer = ({ scrollToTop }) => {


    return(
        <>
        
        
        {/* <!-- footer --> */}
      <footer>
            <div className={`${styles.border} ${styles["foot-panel1"]}`}>
                <Link to='#' onClick={(e) => { e.preventDefault(); scrollToTop(); }} className={styles["back-to-top"]}>Back to top</Link>
            </div>

            <div className={styles["foot-panel2"]}>
                <ul>
                    <h3>Get to Know Us</h3>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About GroceryHub</a></li>
                </ul>

                <ul>
                    <h3>Make Money with Us</h3>
                    <li><a href="#">Sell products on GroceryHub</a></li>
                    <li><a href="#">Sell on GroceryHub business</a></li>
                    <li><a href="#">Sell apps on GroceryHub</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Host an Grocery Hub</a></li>
                </ul>

                <ul>
                    <h3>GroceryHub Payment Products</h3>
                    <li><a href="#">GroceryHub Business Card</a></li>
                    <li><a href="#">Shop with Points</a></li>
                    <li><a href="#">Reload Your Balance</a></li>
                    <li><a href="#">GroceryHub Currency Converter</a></li>
                </ul>

                <ul>
                    <h3>Let Us Help You</h3>
                    <li><a href="#">GroceryHub and COVID-19</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Shipping Rates & Policies</a></li>
                    <li><a href="#">Returns & Replacements</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>

            <div className={styles["foot-panel3"]}>
                    <div className={styles["logo"]}>
                        <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    </div>
            </div>

            <div className={styles["foot-panel4"]}>
                    <div className={styles["pages"]}>
                        <a href="#">Conditions of Use</a>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Consumer Health Data Privacy Disclosure</a>
                        <a href="#">Your Ads Privacy Choices</a>
                    </div>

                    <div className={styles["copyright"]}>
                        © 1996-2024, GroceryHub.com, Inc. or its affiliates
                    </div>
            </div>
      </footer>

        </>
    );
}


export default Footer;