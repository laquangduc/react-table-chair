import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { isAuthenticate } from '../../api/authenticate';
import { useNavigate } from 'react-router';

const Header = () => {
    const auth = isAuthenticate();
    const navigate = useNavigate()
    const Check = () => {
        const logout = () => {
            localStorage.clear()
            navigate('/')
        };
        if (auth) {
            return (
                <div>
                    <div className="">
                        Xin chào :<span className="text-green-400">{auth.name || auth.displayName}</span>
                    </div>
                    <button onClick={logout} className="font-medium hover:text-red-500">Đăng xuất</button>                  
                </div>
            )
        } else {
            return (
                <div className="flex justify-items-center py-2 text-center">
                    <Link to="/signup" className="border mr-2 px-4 hover:bg-gray-400 rounded-md text-sm font-semibold py-1">Đăng ký</Link>
                    <Link to="/signin" className="border py-1 px-4  text-white hover:bg-blue-300 bg-blue-700 rounded-md text-sm font-semibold">
                        Đăng nhập</Link>
                </div>
            )
        }
    }

    return (
        <div>
            <header >
            
                <div className="bg-gray-100 mx-auto py-3 top-0 fixed w-full z-20">
                    <div className="grid grid-cols-12 py-3 container mx-auto max-w-7xl">                   
                        <div className="col-span-5">
                            <Link to="/">
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Flogo.png?alt=media&token=f85dc38c-6ed6-4dc5-b398-13f8106859b4" alt="" />
                            </Link>
                        </div>
                        <div className="col-span-5 flex ">
                            <nav>
                                <ul className="flex py-2">
                                    <li>
                                        <NavLink className="px-3 text-gray-600 cursor-pointer hover:text-blue-300" activeclass="active" to="/">HOME</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="px-3 text-gray-600 cursor-pointer hover:text-blue-300" activeclass="active" to="/products">PRODUCTS</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="px-3 text-gray-600 cursor-pointer hover:text-blue-300" activeclass="active" to="/introduce">INTRODUCE</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="px-3 text-gray-600 cursor-pointer hover:text-blue-300" activeclass="active" to="/contact">CONTACT</NavLink>
                                    </li>
                                </ul>
                            </nav>
                            <Link to="/cart"><i class="fas fa-cart-plus" style={{fontSize:"25px",margin:"10px 0px 0px 80px"}}></i></Link>
                        </div>
                        <div className="col-span-2">
                            <div>
                                {Check()}
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </div>

    )
}

export default Header
