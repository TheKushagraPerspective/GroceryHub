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
                    <li><a href="#">About Amazon</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Amazon Devices</a></li>
                    <li><a href="#">Amazon Science</a></li>
                </ul>

                <ul>
                    <h3>Make Money with Us</h3>
                    <li><a href="#">Sell products on Amazon</a></li>
                    <li><a href="#">Sell on Amazon business</a></li>
                    <li><a href="#">Sell apps on Amazon</a></li>
                    <li><a href="#">Become an Affiliate</a></li>
                    <li><a href="#">Host an Amazon Hub</a></li>
                    <li><a href="#">Self-Publish with Us</a></li>
                    <li><a href="#"> See More Make Money with Us</a></li>
                </ul>

                <ul>
                    <h3>Amazon Payment Products</h3>
                    <li><a href="#">Amazon Business Card</a></li>
                    <li><a href="#">Shop with Points</a></li>
                    <li><a href="#">Reload Your Balance</a></li>
                    <li><a href="#">Amazon Currency Converter</a></li>
                </ul>

                <ul>
                    <h3>Let Us Help You</h3>
                    <li><a href="#">Amazon and COVID-19</a></li>
                    <li><a href="#">Your Account</a></li>
                    <li><a href="#">Your Orders</a></li>
                    <li><a href="#">Shipping Rates & Policies</a></li>
                    <li><a href="#">Returns & Replacements</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>

            <div className={styles["foot-panel3"]}>
                    <div className={styles["logo"]}></div>
            </div>

            <div className={styles["foot-panel4"]}>
                    <div className={styles["pages"]}>
                        <a href="#">Conditions of Use</a>
                        <a href="#">Privacy Notice</a>
                        <a href="#">Consumer Health Data Privacy Disclosure</a>
                        <a href="#">Your Ads Privacy Choices</a>
                    </div>

                    <div className={styles["copyright"]}>
                        © 1996-2024, Amazon.com, Inc. or its affiliates
                    </div>
            </div>
      </footer>

        </>
    );
}


export default Footer;