import React from 'react'
import { Outlet } from 'react-router'

import { Layout } from 'antd';
import NavAdmin from '../Component/Admin/NavAdmin';

const LayoutAdmin = () => {
    const { Header, Content, Footer } = Layout;
    return (
        <div>
         <Layout>
            <NavAdmin />
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                   
                    <Outlet />
                </Content>
                <Footer className=" w-full fixed bottom-0" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
        </div>
    )
}

export default LayoutAdmin
