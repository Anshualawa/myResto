import React from 'react';
import { Navigate } from 'react-router-dom';
// import NavBarManu from './NavBarManu';
const Logout = () => {
    localStorage.clear();
    return <Navigate to="/login" />
};

export default Logout;