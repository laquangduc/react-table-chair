import React from 'react'
import Header from '../Component/Layout/Header';
import Footer from '../Component/Layout/Footer';
import { Outlet } from 'react-router';

const LayoutWebsite = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutWebsite
