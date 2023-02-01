import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';

import HeaderAdmin from '../Header-admin';




const { Header, Sider, Content } = Layout;
const App = () => {

  const changePage=(value)=>{
    console.log("修改页面value===",value)
  }

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
    <Layout>
      <HeaderAdmin/>
    </Layout>

    <Layout style={{'margin':' 80px auto 0 auto'}}>  
      <Sider trigger={null} collapsible collapsed={collapsed} breakpoint="md"
        onBreakpoint={(broken) => {
          console.log(broken);
          setCollapsed(broken)
        }}
        >
        <div className="logo" />
        <Menu
          onClick={changePage}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
            {
              key: '4',
              icon: <UploadOutlined />,
              label: 'nav 4',
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content1
          
        </Content>
      </Layout>
    </Layout>
    </div>
  );
};
export default App;
