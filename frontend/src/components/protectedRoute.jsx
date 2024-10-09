// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token'); // Get token from local storage

    if (!token) {
        return <Navigate to="/sign_in" />; // Redirect to sign-in if no token
    }

    return children; // Render the child components if token exists
};

export default ProtectedRoute;
