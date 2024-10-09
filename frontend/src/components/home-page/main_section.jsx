import React , {useState} from 'react';
import {Link} from 'react-router-dom';
import styles from './main_section.module.css';

import bgImg1 from '../../assets/';



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
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                    {/* box 1 */}
                    <div className={`${styles.box1} ${styles["box"]}`}>
                        <div className={styles["box-content"]}>
                            <p className={styles["shop-section-content"]}>Item 1</p>
                            <div className={styles["box-img"]} style={{backgroundImage: `url(${bgImg1})`}}></div>
                            <p><a href="#">see more</a></p>
                        </div>
                    </div>

                </div>
            
            </div>

        </>
    );
}

export default MainSection;