import React, { useEffect } from 'react'
import { useForm } from "react-hook-form";
import { getCate } from '../../api/categoryApi';
import { Layout } from 'antd';
import NavAdmin from '../../Component/Admin/NavAdmin';
import { useNavigate, useParams } from 'react-router';

const EditCategory = (props) => {
  console.log("edit", props)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  // Lấy ID trên url thông qua hook useParams
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // khai báo hàm getProduct
    const getCategory = async () => {
      try {
        // call API lấy thông tin sản phẩm thông qua ID gửi lên
        const { data } = await getCate(id);
        reset(data);
      } catch (error) { }
    };
    getCategory();
  }, [id, reset]);

  const onSubmit = (data) => {

    props.onUpdateCate(data);
    navigate('/admin/category')
  };

  return (

    <div className="site-layout-background" style={{ padding: 24, marginLeft: 300, marginRight: 300 }}>
    <h1 className="text-xl text-center font-bold">Update Sản Phẩm</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className=" text-lg ">Tên Sản Phẩm</label>
        <br />
        <input type="text" {...register("name", { required: true })} className="w-full py-3 border my-2" placeholder="Tên Sản Phẩm" id="product-name" /><br />
        {errors.name && <p className="text-red-500">field is required</p>}
      </div>

      <button type="submit" className=" hover:bg-red-400 bg-gray-300 text-lg  my-3 px-6 rounded py-2 cursor-pointer">Cập nhật</button>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </form>
  </div>
  )
}

export default EditCategory
