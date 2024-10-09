import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

import SplashScreen from './components/splashScreen';
import SignIn from './components/sign-in/sign_in';
import Register from './components/register/register';
import Home from './components/home-page/home';
import Contact from './components/contact-page/contact';
import ProtectedRoute from './components/protectedRoute';    // Import the ProtectedRoute

function App() {


  


  return (
    <Router>
      <Routes>
        {/* Splash Screen Route */}
        <Route path="/" element={<SplashScreen />} />
        
        <Route path="/sign_in" element={<SignIn />} />

        <Route path="/register" element={<Register />} />

        <Route path='/home' element={ <ProtectedRoute> <Home /> {/* Protected component */} </ProtectedRoute> } />

        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
