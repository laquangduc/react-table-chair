import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "../api/productApi";
import NumberFormat from 'react-number-format';
export default function ProductDetail(props) {
    const { id } = useParams();
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await read(id);
                setProduct(data);
            } catch (error) { }
        };
        getProduct();

    }, [id]);
    return (
        <>

            <div className="container mx-auto max-w-7xl mt-36">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
                        <div ><img src={products.images} style={{ width: 350, height: 450 }} /></div>
                    </div>
                    <div className="col-span-8 mx-5">
                        <div>

                            <div className="border-b">
                                <h1 className="text-4xl "> {products.name} </h1>
                                <span className="text-base">Thương Hiệu : <span className="font-medium "> Chanel </span> </span>
                                <span className="text-base mx-5">Mã sản phẩm : <span className="font-medium ">MNB4XyZ  </span> </span>
                            </div>
                            <div>
                                <p className="mt-5"> <span className="font-medium text-3xl text-red-500"><NumberFormat value={products.price} displayType={'text'} thousandSeparator={true}  /> đ</span></p>
                                <div className="my-3 flex">
                                    <label className="py-5">Màu sắc</label>
                                    <select className="my-5 py-2 w-full border">
                                        <option value="">Trắng</option>
                                        <option value="">Đỏ</option>
                                        <option value="">Vàng</option>
                                    </select>
                                </div>
                                <div className="my-5">
                                    SKU:	79481
                                    CATEGORY:	Armchairs
                                    TAGS:	chair, living room, sofas
                                </div>
                                <div>
                                    <button className="bg-blue-300 text-white px-5 py-3 hover:bg-red-400">Thêm Vào Giỏ Hàng</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="my-10">
                    <h2 className="text-2xl">Thông tin chi tiết</h2>
                    <p>{products.description}</p>
                </div>
                <div>
                    <h3>Đánh giá sản phẩm</h3>
                    <input type="text" className="w-full py-3 border " />
                    <button className="bg-blue-300 px-6 rounded py-2 mt-3">Gửi</button>
                </div>
            </div>

            <div className="container mx-auto max-w-7xl my-10 ">
                <h3 className="font-medium text-2xl">Sản Phẩm Liên Quan</h3>
                <div className="grid grid-cols-3 gap-10" style={{ width: 800 }}>

                    {products.id ? props.product.filter(product => product.category.id === products.category.id).filter(item => item.id != id).map((item, index) => {
                        return (
                            <div key={index} className="text-center">
                                <img src={item.images} className="py-3" />
                                <Link to={`/products/${item.id}`}  >{item.name}</Link>
                                <p>{item.price.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}đ</p>
                            </div>
                        )
                    }) : null}

                </div>
            </div>


        </>
    );
}
