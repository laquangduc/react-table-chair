
import { useEffect, useState } from 'react';
import { getAll, add, remove, update } from './api/productApi';
import { getAllCate, addCate, removeCate, updateCate } from './api/categoryApi'
import RouteModule from './RouteModule';
import 'antd/dist/antd.css';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { deleteUser, getAllUsers } from './api/userApi';
import { useParams } from 'react-router';

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  const {id} = useParams()
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await getAll();
      setProducts(data)
    }
    const getCategories = async () => {
      const { data } = await getAllCate();
      setCategories(data)
    }
    const getUser = async () => {
      const { data } = await getAllUsers();
      setUsers(data)
    }

    getCategories();
    getProduct();
    getUser();

  }, [products.length, categories.length,id])


  const onHandleAddCate = async (category) => {
    try {
      const { data } = await addCate(category);
      setCategories([...categories, data]);
      toast.success("Thêm sản phẩm thành công!")
    } catch (error) {
      toast.error(error.response.data);
      console.log("Them loi", error)

    }
  }

  const RemoveCate = async (id) => {
    try {
      await removeCate(id);
      console.log(removeCate)
      const newCategory = categories.filter((item) => item.id !== id);
      toast.success("Remove Item Successfully");
      setCategories(newCategory);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const UpdateCate = async (category) => {
    try {
      const { data } = await updateCate(category);
      const newCategory = categories.map((item) =>
        item.id === data.id ? data : item
      );
      setCategories(newCategory);
      toast.success(`Cập nhật danh mục thành công`);
    } catch (error) {
      console.log('update lỗi!')
    }

  };

  //product
  const onHandleAddProduct = async (product) => {
    console.log("app", product)
    try {
      const { data } = await add(product);
      setProducts([...products, data]);
      toast.success("Thêm sản phẩm thành công!")
    } catch (error) {
      toast.error(error.response.data);
      console.log("loi")
    }
  }

  const onHandleRemove = async (id) => {
    try {
      await remove(id);
      const newProducts = products.filter((item) => item.id !== id);
      toast.success("Remove Item Successfully");
      setProducts(newProducts);
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  const onHandeUpdate = async (product) => {
    try {
      const { data } = await update(product);
      const newProducts = products.map((item) =>
        item.id === data.id ? data : item
      );
      setProducts(newProducts);
      toast.success(`Cập nhật sản phẩm thành công`);
    } catch (error) {
      console.log('update lỗi !')
    }

  };

  const RemoveUser = async (id) => {
    try {
      await deleteUser(id)
      const newUser = users.filter((user) => user.id !== id)
      toast.success("Remove item successfull")
      setUsers(newUser)
    } catch (error) {
      toast.error(error.response.data);

    }
  }
  const searchName = async (key) => {
    console.log(key)
    console.log(search)
    const newSearch = products.filter((item) => item.name.toLowerCase().includes(key.toLowerCase()));
    setSearch(newSearch);
  }

  return (
    <div className="App">
      <ToastContainer />
      <RouteModule product={products} onAddProduct={onHandleAddProduct}
        onAddCate={onHandleAddCate} category={categories} onRemove={onHandleRemove} onUpdate={onHandeUpdate} onRemoveCate={RemoveCate} onUpdateCate={UpdateCate} user={users} onRemoveUser={RemoveUser} onSearch={searchName} search={search} />

    </div>
  );
}