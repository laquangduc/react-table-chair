import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { read } from '../../api/productApi';
import { useNavigate, useParams } from 'react-router';
import { storage } from './../../firebase'
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from '@firebase/storage';
const EditProduct = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  const [state, setState] = useState();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await read(id);
        reset(data);
        setState(data);
      } catch (error) { }
    };
    getProduct();
  }, [id, reset]);
  const onSubmit = (data) => {
    data.category = data.category.id
    console.log("edit",data.category);
    const avatar = document.querySelector("#product-images").files[0]
    if (avatar) {
      const storageRef = ref(storage, 'product/' + avatar.name);
      const uploadTask = uploadBytesResumable(storageRef, avatar);
      console.log("upload", uploadTask)
      uploadBytes(storageRef, avatar).then(() => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const newProducts = {
            ...data,
            images: downloadURL
          }
          props.onUpdate(newProducts);
          navigate('/admin/product')
        })
      })
    }
    props.onUpdate(data);
    console.log("file", avatar)
    navigate('/admin/product')

    // props.onUpdate(data,category);
    //     navigate('/admin/product')

  };

  return (

    <div className="site-layout-background mb-10" style={{ padding: 24, marginLeft: 300, marginRight: 300 }}>

      <h1 className="text-xl text-center font-bold">Sửa Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className=" text-lg ">Tên Sản Phẩm</label>
          <br />
          <input type="text" {...register("name", { required: true })} className="w-full py-3 border my-2" placeholder="Tên Sản Phẩm" id="product-name" /><br />
          {errors.name && <p className="text-red-500">field is required</p>}
        </div>

        <div>
          <label className=" my-3 text-lg ">Danh Mục</label>
          <br />
          <select className="w-full border py-3" {...register("category.id")}>
            {props.category ? props.category.map((category, index) => {
              return (
                <option value={category.id} key={index}>{category.name}</option>
              )
            }) : null}
          </select>

          <div>

          </div>
          <br />
        </div>

        <div>
          <label className=" my-3 text-lg ">Giá </label>
          <br />
          <input type="text" {...register("price", { required: true })} className="w-full py-3 border my-2" placeholder="Giá" id="product-price" /><br />
          {errors.price && <p className="text-red-500">field is required</p>}
        </div>
        <div>
          <label className=" my-3 text-lg ">Số lượng</label>
          <br />
          <input type="number" {...register("quantity", { required: true })} className="w-full py-3 border my-2" placeholder="số lượng" id="product-price" /><br />
          {errors.quantity && <p className="text-red-500">field is required</p>}
        </div>
        <div>
          <label className=" my-3 text-lg ">Mô tả</label>
          <br />
          <input type="text" {...register("description", { required: true })} className="w-full py-3 border my-2" placeholder="Mô tả" id="product-description" /><br />
          {errors.description && <p className="text-red-500">field is required</p>}

        </div>

        <div>
          <label className=" my-3 text-lg ">Ảnh</label>
          <br />
          <input type="file" className="w-full py-3 border my-2" placeholder="Ảnh" id="product-images" />
          <img src={state && state.images} className="w-20 " />


        </div>
        <div>
          <label className="my-3 text-lg"> Trạng Thái</label>
          <select id="product-shipping" {...register('shipping')} className="w-full py-3 mt-3 border" >
            <option value='true'>Còn Hàng</option>
            <option value='false'>Hết Hàng</option>
          </select>
        </div>
        <div>
          <button type="submit" className=" hover:bg-red-400 bg-gray-300 text-lg  my-3 px-6 rounded py-2 ">Cập nhật </button>
          {/* <button onClick={() => navigate(-1)} className="bg-blue-300 px-3 text-lg  hover:bg-gray-300 mx-3 py-2 rounded">Quay lại</button> */}
        </div>
      </form>
    </div>
  )
}

export default EditProduct
