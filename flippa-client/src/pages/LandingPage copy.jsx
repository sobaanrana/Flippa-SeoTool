import React from "react";

import { Alert, Col, Input, Row, Space } from "antd";
import { Menu } from "antd";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export const LandingPage = () => {
  const items = ["Home", "About", "Services", "Contact"];
  return (
    <Layout className="layout">
      <Row style={{ padding: "10px 0px", background: "#ffffff" }}>
        <Col span={20}></Col>
        <Col
          span={4}
          style={{
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Login
        </Col>
      </Row>
      <Header
        style={{
          background: "#ffffff",
        }}
      >
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            background: "#ffffff",
            color: "#8c8c8c",
            fontWeight: "500",
            justifyContent: "flex-end",
            height: "80px",
            border: "none",
          }}
          items={new Array(6).fill(null).map((_, index) => {
            return {
              label: items[index],
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}></Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Flippa design ©2022 Created by rana_sobaan
      </Footer> */}
    </Layout>
  );
};
