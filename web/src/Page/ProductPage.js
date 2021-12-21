import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listLimit } from '../api/productApi'
import { useNavigate } from 'react-router'
import { useCart } from 'react-use-cart'
import NumberFormat from 'react-number-format';


const ProductPage = (props) => {
    const navigate = useNavigate()
    const [limit, setLimit] = useState()
    const {addItem} = useCart()
    console.log(addItem)
    useEffect( () => {
        const getLimit = async()=>{
            const { data } = await listLimit()
        setLimit(data)
        }
        getLimit()
        
    }, [])
const search = async (data) => {
    props.onSearch(data)
     navigate("/search/")
}
    return (
        <div className="mt-28">
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
                            <div className="my-3">
                                <h1 className="text-lg mb-3 uppercase">Từ khóa</h1>
                                <hr />
                                <form >
                                    <input type="search" onChange={(event)=>search(event.target.value)} placeholder="Từ khóa tìm kiếm" className="py-1 px-2 w-60 border mt-4" />
                                    <button >Tìm kiếm</button>
                                </form>
                            </div>
                            <div>
                                <h1 className="text-lg mb-3 uppercase">Giá sản phẩm</h1>
                                <hr />
                                <input type="range" className="w-60" />
                            </div>
                            <div>
                                <h1 className="text-lg mb-3 uppercase">Trạng Thái</h1>
                                <hr />
                                <input type="checkbox" /><span className="px-3">Mới Về</span><br />
                                <input type="checkbox" /><span className="px-3">Nổi bật</span><br />
                                <input type="checkbox" /><span className="px-3">Đang giảm giá</span><br />
                                <input type="checkbox" /><span className="px-3">Còn hàng</span>
                            </div>
                            <div className="my-3">
                                <h1 className="text-lg mb-3 ">BEST SELLER</h1>
                                <hr />
                                <div>
                                    {limit && limit.map((item, index) => {
                                        return (
                                            <div className="flex my-3" key={index}>
                                                <div className="w-1/3 ">
                                                    <img src={item.images} alt="" />
                                                </div>
                                                <div className="w-2/3 pl-2">
                                                    <Link to={`${item.id}`} className="hover:text-pink-500 text-sm">{item.name}</Link>
                                                    <p>{item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} ₫</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-9">
                            <div className="mx-10">
                                <h1 className="text-lg border-b">FURNITURE</h1>
                                <div className="grid grid-cols-3 my-5">
                                    {props.product && (props.product.map((item, index) => {
                                        return (
                                            <div key={index} className="text-center mx-3 my-2">
                                                <img src={item.images} alt="" className="transition duration-1000 ease-in-out transform hover:scale-x-90 cursor-pointer border mb-3" />
                                                <Link to={`${item.id}`} className="my-3 text-sm uppercase not-italic text-black">{item.name}</Link>
                                                <div className="mt-1 mb-1">
                                                    <span className="py-3 font-medium text-base"><NumberFormat value={item.price} displayType={'text'} thousandSeparator={true}  /> đ</span>

                                                </div>                                           
                                                {/* <button className="bg-blue-500 text-white px-6 py-2 my-2" onClick={() =>addItem(item)}>Add to cart</button> */}
                                     
                                         
                                            </div>
                                        )
                                    })) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default ProductPage



