import { Component } from "react";
import "./DetailSignature.css";
import { Typography } from "antd";
import { Input } from 'antd';
import { Button } from 'antd';
const { Title } = Typography;

class DetailSignature extends Component {
  render() {
    return (
      <div className="Detail-Signnature">
        <div className="Detail-Signnature-Home">
          <div className="Detail-Signnature-left">
            <img
              alt=""
              className="Image-left"
              src="https://gaosachonline.com/wp-content/uploads/2018/05/gao-bac-huong-400x400.png"
            />
            <div className="Detail-Signnature-Home-left">
              <div className="Detail-Signnature-left-left">
                <Title level={4}>Tên Sản Phẩm:</Title>
                <Title level={4}>Quy Trình:</Title>
                <Title level={4}>Mô Tả Sản Phẩm:</Title>
                <Title level={4}>Cơ Quan Kiểm Định:</Title>
                <Title level={4}>Trạng Thái:</Title>
              </div>
              <div className="Detail-Signnature-left-right">
                <Title level={4}>Tên Sản Phẩm</Title>
                <Title level={4}>Quy trình chọn giống lúa</Title>
                <Title level={4}>Cơ Quan Kiểm Định An Toàn Vệ Sinh I</Title>
                <Title level={4}>Cơ Quan Kiểm Định An Toàn Vệ Sinh I</Title>
                <Title level={4}>Đang Chờ Kiểm Định</Title>
              </div>
            </div>
          </div>
          <div className="Detail-Signnature-right">
            <Title level={4}>Tệp Kiểm Chứng</Title>
            <img
              className="Image-Right"
              src="https://botgaolut.com/wp-content/uploads/2017/07/B%E1%BB%98T-G%E1%BA%A0O-L%E1%BB%A8T-739x1024.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="Detail-Signnature-bottom">
        <Input placeholder="Basic usage" className="textinput"/>
        <Button className="button" type="primary">Xác Thực Chữ Ký</Button>
        </div>
      </div>
    );
  }
}
export default DetailSignature;
