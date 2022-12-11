import React, { useState } from "react";

import {
  Alert,
  Button,
  Col,
  Image,
  Input,
  Modal,
  Row,
  Space,
  Typography,
} from "antd";
import { Menu } from "antd";
import { Layout } from "antd";
import { UserOutlined } from "@ant-design/icons";
import landingPgImg from "../assets/images/result.svg";
import "./LandingPage.scss";
import LoginPage from "./LoginPage/LoginPage";
const { Header, Content, Footer } = Layout;

const { Search } = Input;

const { Text, Title } = Typography;

export const LandingPage = () => {
  const items = ["Home", "About", "Services", "Contact", ""];
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState("");

  const showModal = () => {
    setModalTitle("Signin");
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Layout className="layout">
      <div className="header-container">
        <Header
          style={{
            background: "#ffffff",
          }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={18}>
              <Menu
                theme="light"
                mode="horizontal"
                style={{
                  background: "#ffffff",
                  color: "#8c8c8c",
                  fontWeight: "500",
                  justifyContent: "center",
                  border: "none",
                }}
                items={new Array(5).fill(null).map((_, index) => {
                  return {
                    label: items[index],
                  };
                })}
              />
            </Col>
            <Col span={4}>
              <Button
                icon={<UserOutlined />}
                onClick={() => setIsModalOpen(true)}
              >
                Login
              </Button>
            </Col>
          </Row>
        </Header>
      </div>
      <Content style={{ background: "#ffffff" }}>
        <Row>
          <Col
            span={12}
            style={{
              margin: "auto",
              padding: "0px 0px 50px 50px",
            }}
          >
            <Row>
              <Title style={{ fontWeight: "800" }}>
                Guranteed Increase Your Website Traffic
              </Title>
              <Text style={{ fontSize: "16px", marginBottom: "30px" }}>
                We build effective strategies to help you reach your customers
                and prospects across the entire web
              </Text>
              <Button
                type="primary"
                size={"large"}
                style={{ background: "#1890ff", fontWeight: "600" }}
              >
                Get Started
              </Button>
            </Row>
          </Col>
          <Col span={12}>
            <Image
              preview={false}
              alt="landing page image"
              src={landingPgImg}
            ></Image>
          </Col>
        </Row>
      </Content>
      {/* <Footer style={{ textAlign: "center" }}>
        Flippa design ©2022 Created by rana_sobaan
      </Footer> */}

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        footer={false}
        header={false}
        title={modalTitle}
        centered={true}
        onCancel={handleCancel}
      >
        <LoginPage setModalTitle={setModalTitle} />
      </Modal>
    </Layout>
  );
};
