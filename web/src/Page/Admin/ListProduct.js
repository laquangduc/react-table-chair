import React from 'react'
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
const ListProduct = (props) => {

    return (
        <div className="site-layout-background mb-20" >

            <div className="pt-10">
              <div>  <Link to="/admin/addproduct" className="font-bold px-2 py-2 rounded text-lg ml-10 text-white bg-blue-400 hover:text-gray-300">Thêm</Link></div>

                <table className="table-fixed mx-10 mt-3  table-listuser overflow-y-auto">
                    <thead>
                        <tr className="border">
                            <th className="w-1/8 ...">STT</th>
                            <th className="w-1/4 ...">NAME</th>
                            <th className="w-1/6 ...">Price</th>
                            {/* <th className="w-1/6 ...">Danh Mục</th> */}
                            <th className="w-1/6 ...">Số lượng</th>
                            <th className="w-1/4 ...">Ảnh</th>
                            <th className="w-1/4 ...">Trạng thái</th>
                            <th className="w-1/4 ...">Chức năng</th>
                        </tr>
                    </thead>
                    <tbody >
                        {props.product ? (props.product.map((product, index) => {
                            return (
                                <tr className="border" key={index}>
                                    <td className="text-center">{index + 1}</td>
                                    <td className="text-center">{product.name}</td>
                                    <td className="text-center"><NumberFormat value={product.price} displayType={'text'} thousandSeparator={true}  />đ</td>
                                    {/* <td className="text-center">{props.category.map((cate,index)=>{
                                        if(cate.id == product.category.id) {
                                            return cate.name
                                        }
                                    })}</td> */}
                                    <td className="text-center">{product.quantity}</td>
                                    <td className="text-center"><img src={product.images} className="rounded-full h-20 mx-auto" /></td>
                                    <td className="text-center">{product.shipping ? "Còn hàng" : "Hết hàng"}</td>
                                    <td className=" flex space-x-3 mx-auto">
                                        <Link to={`${product.id}/edit`} className="bg-blue-500 rounded text-white px-4 py-2  my-2 ">Edit</Link>
                                        <button className="bg-red-600 text-white rounded px-2 py-2 my-2" onClick={() => props.onRemove(product.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        })) : null}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default ListProduct
