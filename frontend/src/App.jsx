import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import viteLogo from '/vite.svg'
import './App.css'

import SplashScreen from './components/splashScreen';
import SignIn from './components/sign_in';

function App() {
  return(
    <Router>
      <Routes>
        {/* Splash Screen Route */}
        <Route path="/" element={<SplashScreen />} />
        
        {/* Sign In Page Route */}
        <Route path="/sign_in" element={<SignIn />} />

        {/* Registration Page Route */}
        <Route path="/sign_in" element={<Registeration />} />

        {/* Registration Page Route */}
        <Route path='/home' element={<Home />}/>
        
      </Routes>
    </Router>
  );
}

export default App;
