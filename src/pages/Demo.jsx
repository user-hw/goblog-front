import React from "react";
import { Layout } from '@feb-team/legao-react';
import '@feb-team/legao-react/dist/styles/css/legao.all.css';
import HeaderAdmin from "../Header-admin";


export default function Demo (){
    const { Header, Content, Footer, Sider } = Layout
    return (
      <Layout >
        <Header><HeaderAdmin/></Header>
        <Layout hasSider>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
