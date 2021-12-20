import React from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const CategoryPage = (props) => {
    const { id } = useParams();
    return (
        <div>
            <div className="mt-20">
                <h1>Danh Mục Sản Phẩm</h1>
                <main>
                    <div className="container mx-auto max-w-7xl">
                        <div className="grid grid-cols-12">
                            <div className="col-span-3 px-5">
                                <h1 className="text-lg mb-2 uppercase">Danh Mục Sản Phẩm</h1>
                                <hr />
                                <nav className="mt-3">
                                    <ul className="space-y-2 ">
                                        {props.category && props.category.map((item, index) => {
                                            return (
                                                <li key={index}><Link to={`/category/${item.id}`} className="hover:text-pink-500 text-black">{item.name}</Link></li>
                                            )
                                        })}
                                    </ul>
                                </nav>
                            </div>
                            <div className="col-span-9">

                                <div className="mx-10">
                                    <h1 className="text-lg border-b">Sản Phẩm Theo Danh Mục</h1>
                                    <div className="grid grid-cols-3 my-5">

                                        {props.product.filter(product => product.category.id == id)
                                            .map((product) => {
                                                return (
                                                    <div className="text-center mx-3 my-2">
                                                        <img src={product.images} alt="" className="transition duration-1000 ease-in-out transform hover:scale-x-90 cursor-pointer border mb-3" />
                                                        <Link to={`/products/${product.id}`} className="my-3 text-sm uppercase not-italic text-black">{product.name}</Link>
                                                        <div className="mt-1 mb-1">
                                                            <span className="py-3 font-medium text-base">{product.price} đ</span>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )

}

export default CategoryPage
