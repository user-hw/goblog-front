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
import MyMenu from '../Menu';
import {  Switch } from 'antd';




const { Header, Sider, Content } = Layout;
const App = () => {
  const [MenuTheme, setTheme] = useState('dark');
  const changePage=(value)=>{
    console.log("修改页面value===",value)
  }
  const changeTheme = (value) => {
    console.log('aaa')
    setTheme(value ? 'dark' : 'light');
  };

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
      <Sider 
      style={{
        // overflow: 'auto',
        height: '100vh',
        width: '500px',
        // position: 'fixed',
        left: 0,
        // top: "120px",
        bottom: 0,
        'max-width': '500px',
        'min-width': '500px',
        
      }}
      trigger={null} collapsible collapsed={collapsed} breakpoint="md"
        onBreakpoint={(broken) => {
          console.log(broken);
          setCollapsed(broken)
        }}
        >

        <MyMenu menuTheme={MenuTheme}/>
        
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            paddingLeft: '20px',
            height:'40px',
            'line-height': '0px',
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}


        <Switch
          style={{"float": "right"}}

          checked={MenuTheme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            // minHeight: 280,
            minHeight:'100%',
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
