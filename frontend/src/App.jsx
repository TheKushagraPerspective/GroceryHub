import React , {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

import SplashScreen from './components/splashScreen';
import SignIn from './components/sign-in/sign_in';
import Register from './components/register/register';
import Home from './components/home-page/home';
import Contact from './components/contact-page/contact';
import ProtectedRoute from './components/protectedRoute';    // Import the ProtectedRoute
import MainKirana from './components/products/main_kirana';
import Cart from './components/Cart/cart';
import Payment from './components/payment_portal/payment';
import OrderConfirmation from './components/payment_portal/order_confirmation';

function App() {


  


  return (
    <Router>
      <Routes>
        {/* Splash Screen Route */}
        <Route path="/" element={<SplashScreen />} />
        
        <Route path="/sign_in" element={<SignIn />} />

        <Route path="/register" element={<Register />} />

        <Route path='/home' element={ <Home/> } />

        <Route path='/contact' element={<ProtectedRoute> <Contact /> {/* Protected component */} </ProtectedRoute>} />

        <Route path='/main_kirana/:category' element={<ProtectedRoute> <MainKirana /> {/* Protected component */} </ProtectedRoute>} />

        <Route path='/cart' element={<ProtectedRoute> <Cart /> {/* Protected component */} </ProtectedRoute>} />

        <Route path='/payment' element={<Payment />} />

        <Route path='/order-confirmation' element={<OrderConfirmation />} />

      </Routes>
    </Router>
  );
}

export default App;
