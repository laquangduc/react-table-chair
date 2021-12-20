import React from 'react'
import { Link } from 'react-router-dom';


const ListCategory = (props) => {
    return (
        <div className="site-layout-background" >

        <div className="pt-10">
        <Link to="/admin/addcategory" className="font-bold px-2 py-2 rounded text-lg ml-10 text-white bg-blue-400 hover:text-gray-300" >Thêm</Link>

            <table className="table-fixed mx-10 mt-3 table-listuser w-1/3 ">
                <thead>
                    <tr className="border">
                        <th className="w-1/6 ...">STT</th>
                        <th className="w-1/4 ...">NAME</th>                               
                        <th className="w-1/4 ...">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {props.category ? (props.category.map((category, index) => {
                        return (
                            <tr className="border" key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{category.name}</td>
                                <td className=" flex">
                                    <Link to={`${category.id}/edit`} className="bg-blue-500 rounded text-white px-4 py-2 mx-3 my-2 ">Edit</Link>
                                    <button className="bg-red-600 text-white rounded px-2 py-2 my-2" onClick={() => props.onRemoveCate(category.id)}>Remove</button>
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

export default ListCategory
