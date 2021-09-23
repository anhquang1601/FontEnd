import { Component } from "react";
import "antd/dist/antd.css";
import "./Manage.css";
import { Layout, Menu } from "antd";
import Managatwo from "./Signing_process";
import ProcessManagement from "./process_management";
import Managaone from "./Product_Management";
import Signature from "./Create_Signature";
import { BrowserRouter as Router, NavLink, Route, Switch } from "react-router-dom";
import {
  AppstoreOutlined,
   MailOutlined, 
  SettingOutlined,
} from "@ant-design/icons";
import Edit from "./Suadoi";
import DetailSignature from "./DetailSignature";
import { Typography  } from 'antd';
import Signedproduct from './Sanphamdaky';
const { Title } = Typography;
const { Content,  Sider } = Layout;
const { SubMenu } = Menu;
class Manage extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
    };
  }

  showModal = () => {
    this.setState({ isModalVisible: true });
  };

  handleOk = () => {
    this.setState({ isModalVisible: false });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };
  render() {
    /*   const { isModalVisible } = this.state; */
    return (
      <Router>
        <Layout>
          <Sider
            style={{
           
              height: "100vh",
              
             backgroundColor:'White',
             right:10
            }}
          >
           
            <Menu
             className="Menu"
              defaultSelectedKeys={["3"]}
              defaultOpenKeys={["sub1", "sub2", "sub4"]}
              mode="inline"
            >
               <SubMenu
                key="sub1"
                icon={<MailOutlined />}
              title="Quản Lý Chức Năng"
              style={{fontSize:17}}
              >
                <Menu.Item key="3" >
                <NavLink to="/manage/sanpham"><Title level={5}>Sản Phẩm</Title></NavLink>
                </Menu.Item>
                <Menu.Item key="4">
                <NavLink  activeClassName="actionmanagent_process"  exact to="/manage/"><Title level={5}>Quy Trình</Title></NavLink>
                
                </Menu.Item>
              </SubMenu> 
              <SubMenu
                key="sub2"
                icon={<AppstoreOutlined />}
                title="Quản Lý Chức Năng Ký"
                style={{fontSize:17}}
              >
                <Menu.Item key="5"><Title level={5}>Sản Phẩm Chưa Được Ký</Title></Menu.Item>
                <Menu.Item key="6">  <NavLink to="/manage/Signrdproduct"><Title level={5}>Sản Phẩm Đã Được Ký</Title></NavLink></Menu.Item>
                <Menu.Item key="7">
                  <NavLink to="/manage/ky"><Title level={5}>Quy Trình Ký</Title></NavLink>
                </Menu.Item>
                <Menu.Item key="8">
                  <NavLink to="/manage/chuky"><Title level={5}>Tạo Chữ Ký RSA</Title></NavLink>
                </Menu.Item>
                <Menu.Item key="9">  <NavLink to="/manage/Edit"><Title level={5}>Sản Phẩm Bị Sửa Đỗi</Title></NavLink></Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<SettingOutlined />} title="Tiện Ích" style={{fontSize:17}}>
                <Menu.Item key="98"><Title level={5}>Biểu Đồ</Title></Menu.Item>
                <Menu.Item key="10"><Title level={5}>Bảng</Title></Menu.Item>
                <Menu.Item key="11"><Title level={5}>Thay Đỗi</Title></Menu.Item>
                <Menu.Item key="12"><Title level={5}>Nhận Xét Sản Phẩm</Title></Menu.Item>
                <Menu.Item key="62"><Title level={5}>Khuyến Mãi</Title></Menu.Item>
                <Menu.Item key="62"><Title level={5}>Ưu Đãi</Title></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className="site-layout" style={{ marginLeft: 50 }}>
            <Content style={{ margin: "24px 0px 0", overflow: "initial" }}>
              <Switch>
                <Route exact path="/manage/">
                  <ProcessManagement />
                </Route>
                <Route  path="/manage/sanpham">
                  <Managaone />{" "}
                </Route>
                <Route path="/manage/ky">
                  <Managatwo />
                </Route>
                <Route path="/manage/chuky">
                  <Signature />
                </Route>
                <Route path="/manage/Detail">
                  <DetailSignature />
                </Route>
                <Route path="/manage/Signrdproduct">
                  <Signedproduct />
                </Route>
                <Route path="/manage/Edit">
                  <Edit />
                </Route>
              </Switch>
            </Content>
          
          </Layout>
        </Layout>
        <div className="fo0ter"></div>
      </Router>
    );
  }
}
export default Manage;
