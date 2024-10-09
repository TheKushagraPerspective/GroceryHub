import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './main_section.module.css';

import bgImg1 from '../../assets/surf.webp';
import bgImg2 from '../../assets/oil-refined.webp';
import bgImg3 from '../../assets/garam-masale.webp';
import bgImg4 from '../../assets/bakery3.webp';
import bgImg5 from '../../assets/floor.webp';
import bgImg6 from '../../assets/pulse.webp';
import bgImg7 from '../../assets/refined.webp';
import bgImg8 from '../../assets/soap.webp';



const MainSection = () => {




    return(
        <>

            <div className={styles["container"]}>
                
                <div className={styles["main-header-section"]}>
                </div>

                <div className={styles["shop-section"]}>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Refined Oil</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 2 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Cooking Oil</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg2})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 3 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Garam Masala</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg3})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 4 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Bakery Items</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg4})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Flour (Atta) </p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg5})`}}></div>
                            <p><a href="#">see more</a></p>

                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Pulses </p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg6})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Laundry Detergent (Surf)</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg7})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Soap</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg8})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                </div>
            
            </div>

        </>
    );
}

export default MainSection;