import React from 'react';
import { useForm } from "react-hook-form";
import { Layout } from 'antd';
import { useNavigate } from 'react-router-dom';
const AddCategory = (props) => {
    let navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        await props.onAddCate(data)
        navigate('/admin/category')
    }
    return (
        <div className="site-layout-background" style={{ padding: 24, marginLeft: 300,marginRight: 300 }}>
                        <h1 className="text-xl text-center font-bold">Thêm Danh Mục</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className=" text-lg ">Tên Danh Mục</label>
                                <br />
                                <input type="text" {...register("name", { required: true })} className="w-full py-3 border my-2" placeholder="Tên Danh Mục" id="product-name" /><br />
                                {errors.name && <p className="text-red-500">field is required</p>}
                            </div>
                            <button type="submit" className=" hover:bg-red-400 bg-gray-300 text-lg  my-3 px-6 rounded py-2 cursor-pointer">Add</button>
                        </form>
                    </div>
    )
}

export default AddCategory
