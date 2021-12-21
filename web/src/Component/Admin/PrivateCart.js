import React from 'react'
import { Navigate } from 'react-router-dom';
import { isAuthenticate } from '../../api/authenticate'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const PrivateCart = ({ children }) => {
    const auth = isAuthenticate();
    if (!auth) {
        toast.success("Bạn cần đăng nhập để thêm giỏ hàng")
        return (           
            <Navigate to="/signin"  />
        )
    }

    return children
}

export default PrivateCart
