import "antd/dist/antd.css";
import { Button } from "antd";
import React from "react";
import "./Style.css";
import Body from "./Body";
import Footer from "./Footer";
import { Component } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
class Product extends Component {
  render() {
    return (
      <div className="containe">
        <div>
          <Body />
        </div>
        <div className="title">
          <Title style={{ fontSize: 50 }} level={3}>
            Sản Phẩm
          </Title>
        </div>
        <div className="containe-name">
          <div className="containe-menun">
            <div className="containe-menun-item">
              {data.map((item) => (
                <div className="item" key={item.id}>
                  <img src={item.Image} className="anh1" alt="" />
                  <img
                    src="https://vinacheck.vn/media/2019/05/ma-qr-code_vinacheck.vm_001.jpg"
                    style={{ height: 40, width: 40, marginTop: 10 }}
                    alt=""
                  />
                  <div className="chitiet">
                    <Title
                      level={3}
                      style={{
                        marginTop: "5%",
                        height: 70,
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Title>
                    <Title
                      level={5}
                      style={{
                        marginTop: "5%",
                        fontSize: 20,
                        height: 70,
                        textAlign: "center",
                      }}
                    >
                      {item.mota}
                    </Title>
                    <Title
                      level={5}
                      style={{
                        marginTop: "3%",
                        textAlign: "center",
                        fontSize: 20,
                      }}
                    >
                      {item.price}
                    </Title>
                    <div className="button-detail">
                      <Button
                        shape="round"
                        style={{
                          width: 170,
                          marginTop: "5%",
                          height: 50,
                          fontSize: 15,
                          backgroundColor: "#0000ff",
                        }}
                      >
                        <Link
                          to={"/dashboard/" + item.id + ".html"}
                          style={{ fontSize: 20 }}
                        >
                          <Title level={4} style={{ marginTop: 3 }}>
                            {" "}
                            Xem Ngay{" "}
                          </Title>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
export default Product;

const data = [
  {
    id: 1,
    Image: "https://media3.scdn.vn/img4/2020/10_02/UnXV7MnGIfDeZnWwZijb.png",
    title: "Gạo Lanny Rice",
    mota: "Sữa rửa mặt tẩy trang sinh học 4 trong 1",
    price: "866.600 ₫",
  },
  {
    id: 2,
    Image:
      "https://salt.tikicdn.com/ts/product/a0/71/40/94b69ba8720718395df6f7e4b5a85348.png",
    title: "CLARIFYING CLEANSER",
    mota: "Gel rửa mặt dành cho da mụn",
    price: "1.078.000 ₫",
  },
  {
    id: 3,
    Image: "https://gaosachonline.com/wp-content/uploads/2020/06/gao-st25.png",
    title: "AHA/BHA EXFOLIATING CLEANSER",
    mota: "Sữa rửa mặt & Tẩy tế bào chết - Loại bỏ tạp chất và thông thoáng lỗ chân lông",
    price: "1.428.000 ₫",
  },
  {
    id: 4,
    Image: "https://gaosachonline.com/wp-content/uploads/2020/06/gao-st25.png",
    title: "AHA/BHA EXFOLIATING CLEANSER",
    mota: "Sữa rửa mặt & Tẩy tế bào chết - Loại bỏ tạp chất và thông thoáng lỗ chân lông",
    price: "1.428.000 ₫",
  },
  {
    id: 5,
    Image:
      "https://baobibinhminh.vn/wp-content/uploads/2018/07/20180720_134220.jpg",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "Sữa rửa mặt & Tẩy tế bào chết - Loại bỏ tạp chất và thông thoáng lỗ chân lông",
    price: "866.600 ₫",
  },
  {
    id: 6,
    Image:
      "https://gaosachonline.com/wp-content/uploads/2018/05/gao-bac-huong-400x400.png",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "Sữa rửa mặt tẩy trang sinh học 4 trong 1",
    price: "866.600 ₫",
  },
  {
    id: 7,
    Image: "https://cdn.tgdd.vn/2021/06/CookProduct/thumbgao-1200x676.jpg",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "Sữa rửa mặt tẩy trang sinh học 4 trong 1",
    price: "866.600 ₫",
  },
  {
    id: 8,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBP3hTodW_64cpZO4eiMv8FW2PU6iENESB0uuwHFKILS3xBxrVhgGsLk1sYsFzBic6pM&usqp=CAU",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "Sữa rửa mặt tẩy trang sinh học 4 trong 1",
    price: "866.600 ₫",
  },
];
