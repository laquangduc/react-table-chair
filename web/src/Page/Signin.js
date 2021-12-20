import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { authenticate } from '../api/authenticate';
import { signin } from '../api/userApi';
import { GooglePlusOutlined } from '@ant-design/icons';

const Signin = () => {
    const navigate = useNavigate()
    const provider = new GoogleAuthProvider();
    const googleSigin = async () => {
        const { user } = await signInWithPopup(auth, provider)
        authenticate(user);
        navigate('/')
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
         signin(data)
         .then(({data}) => {
            authenticate(data.user);
            if (data.user.role === 1) {
                navigate('/admin/')
            } else {
                navigate('/')
            }
            //  console.log(response)
            // if(response.data){
            //     console.log(response.data)
            // }else{
            //     console.log(response)
            // }


         })
        //  .catch((errors) => {
        //  console.log(errors.JSON.stringify());
        // })
    }
    return (
        <div>

            <form id="form-sigup" onSubmit={handleSubmit(onSubmit)} className="mt-28">
                <div className="bg-green-100 container max-w-xl py-16 mx-auto my-20 border font-bold ">
                    <div className="grid justify-center">
                        <h1 className="font-bold text-2xl text-center mb-8">Đăng nhập</h1>                    
                        <div className="mb-3">
                            <label className>Email</label>
                            <input type="email" className="py-2 mx-10 focus:ring-2 focus:ring-blue-600  my-2 " id="email" size={40} placeholder="Email" {...register("email", { required: true })} />
                            {errors.email && <p className="text-red-500">field is required</p>}
                        </div>
                        <div className="mb-3">
                            <label className>Password</label>
                            <input type="password" className="py-2 mx-3 focus:ring-2 focus:ring-blue-600 my-2" size={40} placeholder="password" {...register("password", { required: true })} />
                            {errors.password && <p className="text-red-500">field is required</p>}
                        </div>
                        <button type="submit" className="px-3 bg-gray-200 py-3 text-black font-bold border hover:bg-blue-300">Signin</button>
                        <button onClick={googleSigin} className="px-3 bg-red-500 py-2 font-medium my-3"> <GooglePlusOutlined style={{ fontSize: 30 }} /> Google</button>
                    </div>
                </div>
            </form>


        </div>
    )
}

export default Signin
