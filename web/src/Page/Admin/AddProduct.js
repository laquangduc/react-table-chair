import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {storage} from './../../firebase'
import {ref, uploadBytesResumable,getDownloadURL,uploadBytes} from '@firebase/storage';
import { ErrorMessage } from '@hookform/error-message';
const AddProduct = (props) => {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    const file = (data.images[0])
    console.log(file);
    const storageRef = ref(storage,'images/' + file.name);
    const uploadTask = uploadBytesResumable(storageRef,file);

    uploadBytes(storageRef,file).then(()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>{
        console.log(downloadURL)
        const newProducts = {
          ...data,
          images:downloadURL
        }
        props.onAddProduct(newProducts)
        navigate('/admin/product')
      })
    })

  
  }
  return (
    <div className="site-layout-background" style={{ padding: 24, marginLeft: 300, marginRight: 300, marginBottom: 100, }}>
      <h1 className="text-xl text-center font-bold">Thêm Sản Phẩm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className=" text-lg ">Tên Sản Phẩm</label>
          <br />
          <input type="text" {...register("name", {maxLength: 255 }, { required: true }   )} className="w-full py-3 border my-2" placeholder="Tên Sản Phẩm" id="product-name" /><br />
          {/* {errors.name && <span className="text-red-500">Vui lòng nhập đầy đủ .</span>}   */}
                <ErrorMessage errors={errors} name="singleErrorInput" />
      
      <ErrorMessage
        errors={errors}
        name="singleErrorInput"
        render={({ message }) => <p>{message}</p>}
      /> 
        </div>

        <div>
          <label className=" my-3 text-lg ">Danh Mục</label>
          <br />
          <select className="w-full border py-3" {...register("category")}>
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
          <input type="text" {...register("price",{min: 10000 }, { required: true })} className="w-full py-3 border my-2" placeholder="Giá" id="product-price" /><br />
          {errors.price && <span className="text-red-500">Vui lòng nhập đầy đủ</span>}
          {errors.price && errors.price.type==="min" && <span className="text-red-500">Vui lòng nhập số tiền lớn hơn 10000</span>}
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
          <input type="file" {...register("images", { required: true })} className="w-full py-3 border my-2" placeholder="Ảnh"  />
          {errors.images && <p className="text-red-500">field is required</p>}

        </div>
        <div>
          <label className="my-3 text-lg"> Trạng Thái</label>
          <select id="product-shipping" {...register('shipping', { required: true })} className="w-full py-3 mt-3 border" >
            <option value='true'>Còn Hàng</option>
            <option value='false'>Hết Hàng</option>
          </select>
        </div>
        <div>
          <button type="submit" className=" hover:bg-red-400 bg-gray-300 text-lg  my-3 px-6 rounded py-2 ">Thêm </button>
          <button onClick={() => navigate(-1)} className="bg-blue-300 px-3 text-lg  hover:bg-gray-300 mx-3 py-2 rounded">Quay lại</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
