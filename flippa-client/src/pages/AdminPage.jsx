import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Alert, Col, Input, MenuProps, notification, Row, Space } from "antd";
import { Menu } from "antd";
import { Layout } from "antd";
import { AudioOutlined } from "@ant-design/icons";

const { Header, Content, Footer } = Layout;
const { Search } = Input;

export const AdminPage = () => {
  const items = [
    "Home",
    "Find Domain Info",
    "Word Filter",
    "Send Mail",
    "Sent Mail",
    "Change Settings",
  ];

  const onSearch = (value) => alert;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );

  const openNotification = () => {
    notification.open({
      message: "Admin Logged Out Successfully",
      //      description:
      onClick: () => {
        console.log("Notification Clicked!");
      },
      placement: "bottomRight",
    });
  };
  return (
    <Layout className="layout">
      <Row style={{ padding: "10px 0px", background: "#1890ff" }}>
        <Col span={20}></Col>
        <Col
          span={4}
          style={{
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => openNotification()}
        >
          Logout
        </Col>
      </Row>
      <Header style={{ background: "#f5f5f5" }}>
        <div className="logo" />
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            background: "#f5f5f5",
            color: "#8c8c8c",
            fontWeight: "500",
          }}
          //defaultSelectedKeys={["2"]}
          items={new Array(6).fill(null).map((_, index) => {
            return {
              label: items[index],
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content" style={{ height: "500px" }}>
          <Alert
            message="Welcome Admin"
            type="success"
            showIcon
            closable
            style={{ marginTop: "20px" }}
          />
          <div style={{ marginTop: "20px" }}>
            <Search
              placeholder="Enter Keyword"
              allowClear
              enterButton="Search"
              size="large"
              suffix={suffix}
              onSearch={onSearch}
            />
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Flippa design ©2022 Created by rana_sobaan
      </Footer>
    </Layout>
  );
};
