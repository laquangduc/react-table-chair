import React from 'react'
import { Link } from 'react-router-dom';


const ListUser = (props) => {
    return (
        <div className="site-layout-background" >

        <div className="pt-10">
        <Link to="/admin/addcategory" className="font-bold text-lg ml-10 " >Thêm</Link>

            <table className="table-fixed mx-10 table-listuser w-1/3 ">
                <thead>
                    <tr className="border">
                        <th className="w-1/6 ...">STT</th>
                        <th className="w-1/6 ...">Email</th>                               
                        <th className="w-1/6 ...">Chức Năng</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user ? (props.user.map((user, index) => {
                        return (
                            <tr className="border" key={index}>
                                <td className="text-center">{index + 1}</td>
                                <td className="text-center">{user.email}</td>
                                <td className=" flex">
                                    {/* <Link to={`${category.id}/edit`} className="bg-blue-500 rounded text-white px-4 py-2 mx-3 my-2 ">Edit</Link> */}
                                    <button className="bg-red-600 text-white rounded px-2 py-2 my-2" onClick={() => props.onRemoveUser(user.id)}>Remove</button>
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

export default ListUser
