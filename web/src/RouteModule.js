import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Introduce from './Page/Introduce';
import AddCategory from './Page/Admin/AddCategory';
import AddProduct from './Page/Admin/AddProduct';
import Admin from './Page/Admin/Admin';
import EditProduct from './Page/Admin/EditProduct';
import ListProduct from './Page/Admin/ListProduct';
import ListCategory from './Page/Admin/ListCategory';
import ContactPage from './Page/ContactPage';
import ProductDetail from './Page/DetailPage';
import HomePage from './Page/HomePage';
import ProductPage from './Page/ProductPage';
import EditCategory from './Page/Admin/EditCategoy';
import CategoryPage from './Page/CategoryPage';
import Signup from './Page/Signup';
import LayoutWebsite from './Layout/LayoutWebsite';
import LayoutAdmin from './Layout/LayoutAdmin';
import Signin from './Page/Signin';
import PrivateAdmin from './Component/Admin/PrivateAdmin';
import ListUser from './Page/Admin/ListUser';
import SearchProduct from './Page/SearchProduct';
import Cart from './Page/Cart';
import PrivateCart from './Component/Admin/PrivateCart';
const RouteModule = (props) => {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutWebsite />}>
                        <Route index element={<HomePage {...props} />} />
                        <Route path="products" element={<ProductPage {...props} />} />
                        <Route path="products/:id" element={<ProductDetail {...props} />} />
                        <Route path="introduce" element={<Introduce />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="category/:id" element={<CategoryPage {...props} />} />
                        <Route path="signup" element={<Signup />} />
                        <Route path="signin" element={<Signin {...props} />} />
                        <Route path="search" element={<SearchProduct {...props} />} />
                        <Route path="cart" element={<PrivateCart><Cart {...props} /></PrivateCart>} />
                    </Route>

                    <Route path="admin/*" element={<PrivateAdmin ><LayoutAdmin /></PrivateAdmin>} >
                        <Route index element={<Admin {...props} />} />
                        <Route path="product" element={<ListProduct {...props} />} />
                        <Route path="addproduct" element={<AddProduct {...props} />} />
                        <Route path="product/:id/edit" element={<EditProduct {...props} />} />

                        <Route path="addcategory" element={<AddCategory {...props} />} />
                        <Route path="category" element={<ListCategory {...props} />} />
                        <Route path="category/:id/edit" element={<EditCategory {...props} />} />
                        <Route path="acount" element={<ListUser {...props} />} />

                    </Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteModule
