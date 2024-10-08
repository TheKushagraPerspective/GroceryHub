import React , {useState , useRef} from 'react';
import styles from './home.module.css';
import PropTypes from 'prop-types';

import Navbar from './navbar';
import MainSection from './main_section';
import Footer from './footer';

const HomePage = () => {


    const topRef = useRef(null);

    const scrollToTop = () => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
        {/* Reference element for scrolling */}
        <div ref={topRef}></div>


            <Navbar />
            <MainSection />
            <Footer scrollToTop={scrollToTop} />
        </>
    );
}


export default HomePage;