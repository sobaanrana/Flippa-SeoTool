// Library Imports

import axios from "axios";
import {
  Button,
  Typography,
  Form,
  Input,
  Row,
  Col,
  Divider,
  message,
  Space,
} from "antd";

// import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
// Pages, Components, Media & StyleSheets

import "../LoginPage/LoginPage.scss";

// ⬇ Redux Reducers

// import { loginReducer } from "../../redux/Slices/accountSlice";
import { useState } from "react";
import LoginPage from "../LoginPage/LoginPage";

// Library Constants

const { Text, Title } = Typography;

export default function SignUpPage({ setModalTitle }) {
  let navigate = useNavigate();
  // const dispatch = useDispatch();
  const [showLogIn, setShowLogIn] = useState(false);

  setModalTitle("Signup");

  const signup = (data) => {
    // console.log("Signup Payload", data);

    let body = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      password: data.password,
      has_account: true,
    };
    axios
      .post(process.env.REACT_APP_BACKEND_HOST + "/storefront/signup", body)
      .then((response) => {
        // debugger;

        // dispatch(loginReducer(response));
        // success();
        navigate("/account");
      })
      .catch((err) => {
        console.log("Signup Api Error: ", err);
        message.error(err.response?.data.detail);
      });
  };

  return (
    <>
      {!showLogIn ? (
        <Col lg={{ span: 24 }} className="login-signup-container">
          <Row
            style={{ overflow: "hidden" }}
            align="middle"
            justify="center"
            gutter={[0, 0]}
          >
            <Col lg={{ span: 24 }}>
              <Form
                name="signup_form"
                initialValues={{
                  remember: true,
                }}
                onFinish={signup}
                // onFinishFailed={onLoginFailed}
                autoComplete="off"
                style={{
                  width: "100%",
                }}
              >
                <Text>Name</Text>

                <Form.Item
                  name="firstName"
                  style={{ marginBottom: "10px" }}
                  rules={[
                    { required: true, message: "Please enter a valid name!" },
                    { min: 3, message: "Too Short!" },
                    { max: 15, message: "Too Long!" },
                    {
                      pattern: /^[aA-zZ\s]+$/,
                      message: "Only alphabets are allowed for this field ",
                    },
                  ]}
                >
                  <Input placeholder="Enter Name" />
                </Form.Item>

                <Text>Email</Text>
                <Form.Item
                  name="email"
                  style={{ marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid email!",
                    },
                    {
                      pattern:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Please enter a valid email!",
                    },
                  ]}
                >
                  <Input placeholder="John@example.com" />
                </Form.Item>
                {/* 
                <Text>Mobile Number</Text>
                <Form.Item
                  name="phone"
                  style={{ marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "Please enter a valid mobile number!",
                    },
                    { min: 3, message: "Too Short!" },
                    { max: 20, message: "Too Long!" },
                    {
                      // pattern: /^[aA-zZ\s]+$/,
                      //  message: "Only alphabets are allowed for this field ",
                    },
                  ]}
                >
                  <Input placeholder="9233333" />
                </Form.Item> */}

                <Text>Password</Text>
                <Form.Item
                  name="password"
                  style={{ marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    { min: 5, message: "Too Short!" },
                  ]}
                >
                  <Input.Password placeholder="*********" />
                </Form.Item>

                <Text>Confirm Password</Text>
                <Form.Item
                  name="password"
                  style={{ marginBottom: "10px" }}
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
                    { min: 5, message: "Too Short!" },
                  ]}
                >
                  <Input.Password placeholder="*********" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{ background: "#1890ff", borderRadius: "5px" }}
                  >
                    Sign Up
                  </Button>
                </Form.Item>
              </Form>
            </Col>
            <Row
              direction={"vertical"}
              gutter={[0, 5]}
              align="center"
              justify="center"
              className="modal-footer"
            >
              {/* <Col span={24} align="middle">
                <Text strong>Or Signup With</Text>
              </Col>
              <Col span={24}>
                <Space>
                  <Button icon={<AiOutlineGoogle className="google" />}>
                    Continue with Google
                  </Button>
                  <Button icon={<FaFacebookF className="facebook" />}>
                    Continue with Facebook
                  </Button>
                </Space>
              </Col> */}
              <Col span={24} align="middle" style={{ paddingTop: "20px" }}>
                <Text style={{ fontSize: "16px" }}>
                  Have an Account ?{" "}
                  <Link
                    className="sign-up-link"
                    onClick={() => setShowLogIn(true)}
                  >
                    Login
                  </Link>
                </Text>
              </Col>
            </Row>
          </Row>
        </Col>
      ) : (
        <LoginPage setModalTitle={setModalTitle} />
      )}
    </>
  );
}
