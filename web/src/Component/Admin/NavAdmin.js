import React from 'react'
import { Layout, Menu } from 'antd';
import {
    BarChartOutlined,
    BarsOutlined,
    UserOutlined,
    HomeOutlined

} from '@ant-design/icons';
import { Link } from 'react-router-dom';
const NavAdmin = () => {
    const { Sider } = Layout;
    return (
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div>
                <h1 className="text-xl text-white font-bold ml-8 pt-5">Admin</h1>
            </div>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<HomeOutlined />}>
                    <Link to="/admin" >Trang Chủ</Link>
                </Menu.Item>

                <Menu.Item key="4" icon={<BarChartOutlined />}>
                    <Link to="/admin/product">Quản lý Sản Phẩm</Link>

                </Menu.Item>

                <Menu.Item key="3" icon={<BarsOutlined />}>
                    <Link to="/admin/category">Danh mục</Link>

                </Menu.Item>

                <Menu.Item key="5" icon={<UserOutlined />}>
                    <Link to="/admin/acount">Tài Khoản</Link>

                </Menu.Item>
                <Menu.Item key="6" icon={<UserOutlined />}>
                    <Link to="/">Back Website</Link>

                </Menu.Item>

            </Menu>
        </Sider>
    )
}

export default NavAdmin
