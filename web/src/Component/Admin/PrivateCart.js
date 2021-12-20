import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../../api/authenticate'


const PrivateCart = ({ children }) => {
    const auth = isAuthenticate();
    if (!auth) {
        return <Navigate to="/signin" />
    }

    return children
}

export default PrivateCart
