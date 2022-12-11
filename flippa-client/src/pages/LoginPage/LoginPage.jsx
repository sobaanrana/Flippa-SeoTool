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

import "./LoginPage.scss";

import { useState } from "react";
import SignUpPage from "../SignUpPage/SignUpPage";

// Library Constants

const { Text, Title } = Typography;

export default function LoginPage({ setModalTitle }) {
  let navigate = useNavigate();
  // const dispatch = useDispatch();

  const [showSignUp, setShowSignUp] = useState(false);

  setModalTitle("Login");

  const onLogin = (values) => {
    axios
      .post(process.env.REACT_APP_BACKEND_HOST + "/storefront/signin", values)

      .then((response) => {
        // debugger;
        // console.log("Login Api Response", response);
        //dispatch(loginReducer(response));
        navigate("/account");
      })
      .catch((err) => {
        // console.log(err.response?.data?.detail);
        message.error(err.response?.data?.detail);
      });
  };

  const onLoginFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
    message.error(errorInfo);
  };

  return (
    <>
      {!showSignUp ? (
        <Col lg={{ span: 24 }} className="login-signup-container">
          <Row
            style={{ overflow: "hidden" }}
            align="middle"
            justify="center"
            gutter={[0, 0]}
          >
            <Col lg={{ span: 24 }}>
              <Form
                name="login_form"
                initialValues={{
                  remember: true,
                }}
                onFinish={onLogin}
                onFinishFailed={onLoginFailed}
                autoComplete="off"
                style={{
                  width: "100%",
                }}
              >
                <Text>Email</Text>
                <Form.Item
                  // label="Email"
                  style={{ marginBottom: "10px" }}
                  name="email"
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
                  <Input placeholder="Email" />
                </Form.Item>
                {/* <Row justify={"space-between"}>
                  <Text>Password</Text>
                  <Link>Forgot Your Password?</Link>
                </Row> */}

                <Form.Item
                  //label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your password!",
                    },
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
                    Login
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
                <Text strong>Or Login With</Text>
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
                  Create an Account a{" "}
                  <Link
                    className="sign-up-link"
                    onClick={() => setShowSignUp(true)}
                  >
                    Signup
                  </Link>
                </Text>
              </Col>
            </Row>
          </Row>
        </Col>
      ) : (
        <SignUpPage setModalTitle={setModalTitle} />
      )}
    </>
  );
}
