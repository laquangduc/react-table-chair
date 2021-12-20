import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="py-20" style={{ backgroundColor: '#1e1e1e' }}>
            <div className="container mx-auto max-w-7xl">
                <div className="grid-cols-1 sm:grid grid-cols-3 ml-3 sm:ml-0 ">
                    <div>
                        <div >
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Flogo.png?alt=media&token=f85dc38c-6ed6-4dc5-b398-13f8106859b4" className="my-5" />
                            <p className="text-white w-2/3 text-lg">Grabbing the concsumer’s attention isn’t enough you have
                                to keep
                                that
                                attention for at
                                least a.</p>
                        </div>
                    </div>
                    {/*end footer-1*/}
                    <div className="grid-cols-1 sm:grid grid-cols-2">
                        <div >
                            <h4 className="my-5 font-bold text-xl text-white">NAVICATION</h4>
                            <ul className="block text-gray-600">
                                <li className="hover:text-red-600 my-3"><NavLink activeclass="active" to="/">Home</NavLink></li>                            
                                <li className="hover:text-red-600 my-3"><NavLink activeclass="active" to="/products">Products</NavLink></li>
                                <li className="hover:text-red-600 my-3"><NavLink activeclass="active" to="/introduce">Introduce</NavLink></li>
                                <li className="hover:text-red-600 my-3"><NavLink activeclass="active" to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                        {/*1*/}
                        <div className>
                            <h4 className="my-5 font-bold text-xl text-white">USEFUL LINKS</h4>
                            <ul className="block text-gray-600">
                                <li className="hover:text-red-600 my-3"><Link activeclass="active" to="/">Registration</Link></li>
                                <li className="hover:text-red-600 my-3"><Link activeclass="active" to="/">Login</Link></li>
                                <li className="hover:text-red-600 my-3"><Link activeclass="active" to="/">Policy</Link></li>
                                <li className="hover:text-red-600 my-3"><Link activeclass="active" to="/">Terms &amp; Conditions</Link></li>
                            </ul>
                        </div>
                        {/*2*/}
                    </div>
                    {/*end footer-2*/}
                    <div>
                        <h4 className="my-5 text-white font-bold text-xl">
                            INSTAGRAM FEED
                        </h4>
                        <div className="grid grid-cols-3">
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Finstagram1.png?alt=media&token=5061a006-25f1-4c90-bd13-9724effc89eb" alt="" />
                            </div>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Finstagram2.png?alt=media&token=41ed2790-b346-4d42-a7cb-de8a5aaa0d56" alt=""/>
                            </div>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Finstagram3.png?alt=media&token=59b675e5-7fa6-4de6-9fd3-67f9db2c3930" alt=""/>
                            </div>
                        </div>
                        {/*end-1*/}
                        <div className="grid grid-cols-3">
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Finstagram4.png?alt=media&token=b5c9dfa5-5a1c-414d-878a-d98f645a05fa" alt="" />
                            </div>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Finstagram5.png?alt=media&token=a3ce9327-391b-4eaf-8f34-537b3c70624d" alt="" />
                            </div>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Finstagram6.png?alt=media&token=221ab353-bbcc-493c-a52d-16edb9b47983" alt="" />
                            </div>
                        </div>
                        {/*end-1*/}
                    </div>
                    {/*end footer 3*/}
                </div>
                {/*end cols-1 footer*/}
                <div className="grid-cols-1 sm:grid grid-cols-2 text-white mt-10">
                    <div>
                        <p>Copyright ©2021 All rights reserved | This template is made with by <i className="far fa-heart" /> <span className="text-red-500"> laquangduc </span></p>
                    </div>
                    <div className="flex ml-auto mt-8 sm:mt-0">
                        <span className="mr-5">Follow Us ------&gt;</span>
                        <div className>
                            <NavLink activeclass="active" to="/"><i className="fab fa-twitter" /></NavLink>
                            <NavLink activeclass="active" to="/" to="https://www.facebook.com/profile.php?id=100015941435661"><i className="fab fa-facebook" /></NavLink>
                            <NavLink activeclass="active" to="/"><i className="fas fa-globe" /></NavLink>
                            <NavLink activeclass="active" to="/"><i className="fab fa-instagram" /></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    )
}

export default Footer
