import { Component } from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import { Button } from "antd";
class Signature extends Component {
  render() {
    return (
      <div>
        <div className="site-layout-background" style={{ padding: 10 }}>
          <div>
            <h1 style={{ textAlign: "center" }}>Quy trình tạo chữ ký</h1>
          </div>
          <div>
            <h4 style={{ marginLeft: "25%" }}>Id</h4>
            <Input
              style={{ height: 50, width: "50%", marginLeft: "25%" }}
              placeholder="id"
            />
            <h4 style={{ marginLeft: "25%", marginTop: "3%" }}>Tài Khoản</h4>
            <Input
              style={{ height: 50, width: "50%", marginLeft: "25%" }}
              placeholder="tài Khoản"
            />
            <Button
              style={{ marginLeft: "45%", marginTop: "5%" }}
              type="primary"
              size={30}
            >
              Tạo Khóa Bí Mật
            </Button>
            <h4 style={{ marginTop: "2%" }}>Khóa Bí Mật Là</h4>
            <Input style={{height:50}} placeholder="" />
          </div>
        </div>
      </div>
    );
  }
}
export default Signature;
