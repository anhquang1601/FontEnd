import { Component } from "react";
import "./Login.css";
import { Typography } from "antd";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";
import { createFromIconfontCN } from "@ant-design/icons";

import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from 'antd';
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const { Title } = Typography;
export default class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="Login-item" style={{ borderRadius: 10 }}>
          <div className="Lgin-item-left">
            <div className="Lgin-item-left-Text">
              <Title style={{ fontWeight: "bold" }}>Sign in</Title>
            </div>
            <div className="icon">
              <FacebookOutlined style={{ fontSize: 25, marginRight: 10 }} />
              <IconFont
                style={{ fontSize: 25, marginRight: 10 }}
                type="icon-twitter"
              />
              <GooglePlusOutlined style={{ fontSize: 25 }} />
            </div>
            <div className="login-item-left-input">
              <Input placeholder="Basic usage" style={{width:'70%',marginLeft:'15%',height:40}}/>
              <Input.Password
                placeholder="input password"
                style={{width:'70%',marginLeft:'15%',marginTop:'5%',height:40}}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
              />
                <Title level={6} style={{fontSize:17,marginLeft:'30%',marginTop:'10%'}}>Forgot your password</Title>
                <Button type="primary" shape="round" style={{marginLeft:'37%',marginTop:'5%',width:'25%'}} > Sign in</Button>
            </div>
          </div>
          <div className="Lgin-item-right">
          <Title level={1} style={{fontWeight:'bold',marginTop:'40%',color:'white'}}>Hello,Friend!</Title>
          <Title level={6} style={{fontSize:17,color:'white',width:'75%',marginLeft:'13%'}}>Enter your personal details and start journey with us</Title>
          <Button shape="round" style={{marginLeft:'2%',marginTop:'5%',width:'25%',backgroundColor:"salmon",color:'white'}} > Sign up</Button>
          </div>
        </div>
      </div>
    );
  }
}
