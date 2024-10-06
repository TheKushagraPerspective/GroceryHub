import React , {useState} from 'react';
import './splashScreen.css';


const SplashScreen = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    

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
                                    <a href="sign_in">Get Started</a>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SplashScreen;