import React from 'react'
import { ApartmentOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';



const Admin = ({product,user,category}) => {
    return (
        <div className="site-layout-background" style={{ padding: 24 }}>
            <div className="grid grid-cols-3">
                <div className="text-2xl text-center">
                    <ShoppingOutlined style={{ fontSize: 100 }} />
                    <h1>Tổng Sản Phẩm</h1>
                    {product.length}
                </div>
                <div className="text-2xl text-center">
                    <ApartmentOutlined style={{ fontSize: 100 }} />
                    <h1>Tất Cả Danh Mục</h1>
                    {category.length}
                </div>
                <div className="text-2xl text-center">
                    <UserOutlined style={{ fontSize: 100 }} />
                    <h1>Tài Khoản</h1>
                    {user.length}
                </div>
            </div>
        </div>

    )
}

export default Admin
