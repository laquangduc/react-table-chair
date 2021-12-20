import React from 'react'
import { useForm } from 'react-hook-form';
import { signup } from '../api/userApi';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router';
const Signup = () => {
const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        signup(data)
        .then((response) => {
            console.log("dang ky",response.data)
             toast.success("Đăng ký thành công!")
             navigate('/signin')
        })
        .catch(error =>{
            toast.error("Đăng ký thất bại")
        })
    }
    return (
        <div>
        <ToastContainer />
            <form id="form-sigup" onSubmit={handleSubmit(onSubmit)} className="mt-28">
                <div className="bg-green-100 container max-w-xl py-16 mx-auto my-20 border font-bold ">
                    <div className="grid justify-center">
                        <h1 className="font-bold text-2xl text-center mb-8">Đăng Ký</h1>
                        <div className="mb-3">
                            <label className="">Email</label>
                            <input type="email" className="py-2 mx-10 focus:ring-2 focus:ring-blue-600  my-2 " id="email" size={40} placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <p className="text-red-500">field is required</p>}

                        </div>
                        <div className="mb-3">
                            <label className>Password</label>
                            <input type="password" className="py-2 mx-3 focus:ring-2 focus:ring-blue-600  my-2" id="password" size={40} placeholder="password" {...register("password", { required: true })} />
                            {errors.password && <p className="text-red-500">field is required</p>}

                        </div>
                        <div className="mb-3">
                            <label className>Name</label>
                            <input type="text" className="py-2 mx-9 focus:ring-2 focus:ring-blue-600  my-2 " id="name" placeholder="name" size={40} {...register("name", { required: true ,minLength: 6 })} />
                            {errors.name && <p className="text-red-500">field is required</p>}

                        </div>
                        <button type="submit" className=" py-3 bg-gray-300 text-black font-bold border hover:bg-blue-300">Create</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Signup
