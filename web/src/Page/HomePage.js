import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { limitHome } from '../api/productApi'
import Banner from '../Component/Layout/Banner'
const HomePage = () => {
    const [limit,setLimit] = useState()
    useEffect(() => {
        const getLimit = async () => {
            const {data} = await limitHome()
            setLimit(data)
        }
        getLimit()
    },[])
  return (
    <div>  
      <Banner />
      <main >
            <div>
                <div className="text-center mt-7 mb-5">
                    <h2 className="font-bold text-3xl text-gray-800 py-3">New Arrivals</h2>
                    <span className>But I must explain to you how all this mistaken idea</span>
                </div>
                <div className="container mx-auto max-w-7xl">
                    {/*item1*/}
                    <div className="grid grid-cols-3">
                        <div className="relative ">
                            <span className="absolute bg-black opacity-50 bottom-0 py-5 right-0 text-white font-bold text-2xl w-full mb-10 pl-10">CHAIRS</span>
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner-chair.jpg?alt=media&token=4c627c06-8459-4110-aa1c-03ab3bddffba" />
                        </div>
                        <div className="relative ">
                            <span className="absolute bg-black opacity-50 bottom-0 py-5 right-0 text-white font-bold text-2xl w-full mb-10 pl-10">TABLES</span>
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner-table.jpg?alt=media&token=5e65f0b1-3bf7-49d3-a1d3-a2a4cdf8b55c" />
                        </div>
                        <div className="relative ">
                            <span className="absolute bg-black opacity-50 bottom-0 py-5 right-0 text-white font-bold text-2xl w-full mb-10 pl-10">LIVING
                                ROOM</span>
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner-sofa.jpg?alt=media&token=2b0e535f-a7a7-4c12-a0dd-c0b01f10e255" />
                        </div>
                    </div>
                    {/*item2*/}
                    <div className="grid grid-cols-12">
                        <div className="col-span-4">
                            <div className="relative ">
                                <span className="absolute bg-black opacity-50 bottom-0 py-5 right-0 text-white font-bold text-2xl w-full mb-10 pl-10">DINING
                                    ROOM</span>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Ftable-chair.jpg?alt=media&token=d7ba047f-9656-4dcf-95f8-27adb3f0c891" />
                            </div>
                        </div>
                        <div className="col-span-8">
                            <div className="relative ">
                                <span className="absolute bg-black opacity-50 bottom-0 py-5 right-0 text-white font-bold text-2xl w-full mb-10 pl-10">BEDROOM</span>
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner-bedroom.jpg?alt=media&token=528092a6-28cb-445d-abba-046d81f6ab04" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*service*/}
                <div className="bg-gray-100 my-16">
                    <div className="grid grid-cols-2 py-20 container mx-auto max-w-7xl">
                        <div>
                            <h2 className="text-4xl font-bold px-6 text-gray-700 color-black">Contrary to popular belief is
                                simply rand.</h2>
                            <h3 className="text-2xl px-6 mb-8 mt-6">Professor at Hamp deny dney College.</h3>
                            <a className="mx-6 px-6 py-3 text-white bg-pink-600">Read More</a>
                        </div>
                        <div>
                            <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fbanner3.png?alt=media&token=93182907-9617-4253-acf3-dbd4d62d5d97" />
                        </div>
                    </div>
                </div>
                {/*main content*/}
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 ">Best Seller</h2>
                        <h3 className="my-4">But I must explain to you how all this mistaken idea</h3>
                    </div>
                    {/* content 1*/}
                    <div className="grid grid-cols-4 gap-8 my-8">
                        {limit && limit.map((product, index) => {
                            return (

                                <div className="text-center" key={index}>
                                    <img src={product.images} className="transition duration-1000 ease-in-out transform hover:scale-x-90 cursor-pointer border mb-3" />
                                    <Link to={`/products/${product.id}`} className="my-6 text-lg hover:text-blue-300">{product.name}</Link><br />
                                    <span className="pt-5 font-bold">{product.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}₫</span>
                                </div>
                            )
                        })}     
                    </div>
                </div>
                {/*brand-icon*/}
                <div className="bg-gray-100 py-10 my-10 flex justify-center">
                    <div className="mx-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Ficon1.png?alt=media&token=20056b28-82bf-4a92-8187-e80504bb593d" />
                    </div>
                    <div className="mx-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Ficon2.png?alt=media&token=daa930d7-051c-45fc-b616-f29b58c925f2" />
                    </div>
                    <div className="mx-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Ficon1.png?alt=media&token=20056b28-82bf-4a92-8187-e80504bb593d" />
                    </div>
                    <div className="mx-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Ficon3.png?alt=media&token=554f2ddc-58ca-418a-a2c1-2e400a67e8ce" />
                    </div>
                    <div className="mx-16">
                        <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Ficon1.png?alt=media&token=20056b28-82bf-4a92-8187-e80504bb593d" />
                    </div>
                </div>
                {/*Our blog*/}
                <div className="my-10">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-800 ">Our Blog</h2>
                        <h3 className="my-4">But I must explain to you how all this mistaken idea</h3>
                    </div>
                    <div className="grid grid-cols-3 container mx-auto max-w-7xl gap-10 my-10">
                        <div className>
                            <div className="mx-auto">
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fimg-blog.jpg?alt=media&token=5b784334-45e8-424f-bedb-ba22543f1417" />
                                <i className="fal fa-clock" />
                                <span className="text-gray-500">09:50 - 09/06/2021</span>
                            </div>
                            <div className="my-3">
                                <a className="font-bold text-base text-gray-800 py-5">Minimal Interior House</a>
                                <p className="pb-5 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur rhoncus ex id varius placerat. Aenean sit amet malesuada odio,...</p>
                                <a className="text-red-400">Xem Thêm &gt;&gt;</a>
                            </div>
                        </div>
                        <div className>
                            <div className="mx-auto">
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fimg-blog2.jpg?alt=media&token=c72ae6c6-9799-44a8-954c-864840b83c3e" />
                                <i className="fal fa-clock" />
                                <span className="text-gray-500">09:50 - 09/06/2021</span>
                            </div>
                            <div className="my-3">
                                <a className="font-bold text-base text-gray-800 py-5">Minimal Interior House</a>
                                <p className="pb-5 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur rhoncus ex id varius placerat. Aenean sit amet malesuada odio,...</p>
                                <a className="text-red-400">Xem Thêm &gt;&gt;</a>
                            </div>
                        </div>
                        <div className>
                            <div className="mx-auto">
                                <img src="https://firebasestorage.googleapis.com/v0/b/react-38028.appspot.com/o/images%2Fimg-blog3.jpg?alt=media&token=3f3f7f9d-4b4a-4183-bc70-a04c71e92f0b" />
                                <i className="fal fa-clock" />
                                <span className="text-gray-500">09:50 - 09/06/2021</span>
                            </div>
                            <div className="my-3">
                                <a className="font-bold text-base text-gray-800 py-5">Minimal Interior House</a>
                                <p className="pb-5 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Curabitur rhoncus ex id varius placerat. Aenean sit amet malesuada odio,...</p>
                                <a className="text-red-400">Xem Thêm &gt;&gt;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </div>
  )
}

export default HomePage
