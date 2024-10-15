import React from 'react';
import './splashScreen.css';


const SplashScreen = () => {

    

    return(
        <>
            <div className="splash-screen">
                <div className="overlay">
                    <div className="splash-container">
                            <div className="splash-text">
                                <h1>Welcome to our</h1>
                                <h3 className='slide-in'>grocery Hub</h3>
                            </div>
                            <div className="explore-app">
                                <button className="explore-app">
                                    <a href="home">Get Started</a>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SplashScreen;