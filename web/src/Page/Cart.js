import React from 'react'
import { useCart } from "react-use-cart"
import NumberFormat from 'react-number-format';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
    } = useCart();
    console.log(items)
    if (isEmpty) return <p>Your cart is empty</p>;
    return (
        <div className="mt-40 my-16 container mx-auto max-w-7xl">

            <h1 className="text-xl">Sản Phẩm ({totalUniqueItems}) Tổng sản phẩm ({totalItems})</h1>
            <table class="table-fixed">
                <thead className="w-full">
                    <tr>
                        <th class="w-1/3 ...">Tên Sản Phẩm</th>
                        <th class="w-1/3 ...">Ảnh </th>
                        <th class="w-1/4 ...">Giá </th>
                        <th class="w-1/2 ...">Số Lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr>
                            <td className="text-center">{item.name}</td>
                            <td><img src={item.images} className="w-40 mx-auto" /></td>
                            <td className="text-center"> <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true}  />đ</td>
                            <td>
                                <div className="flex">
                                    <button
                                        className=" text-4xl font-medium"
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                        -
                                    </button>
                                    <button className=" mx-5 text-4xl font-medium"
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                        +
                                    </button>
                                    <button className=" mx-5 text-4xl font-medium" onClick={() => removeItem(item.id)}>&times;</button>
                                </div>
                            </td>
                        </tr>

                    ))}


                </tbody>
            </table>
            <div className="float-right flex pb-10">
                <h3 className="text-xl">Tổng tiền <NumberFormat value={cartTotal} displayType={'text'} thousandSeparator={true}  /> đ</h3>
                <button className="bg-blue-400 py-2 px-2 hover:bg-blue-300 text-white ml-2">Thanh Toán</button>
            </div>

        </div>
    )
}

export default Cart














