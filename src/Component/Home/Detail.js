import React from "react";
import "./Detail.css";
import { Typography } from "antd";
import { useParams } from "react-router-dom";
const { Title } = Typography;
export default function Detail(props) {
  let { id } = useParams();

  console.log(typeof id);
  return (
    <div className="containerDetail">
      <div className="headerDetail">
        <div className="Image1">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://ngoisaodoanhnhan.vn/wp-content/uploads/2020/10/1-11.jpg"
            alt=""
          />
        </div>
        <div className="Image2">
          <img
            style={{
              height: 160,
              width: "47%",
              marginLeft: "2%",
              backgroundColor: "red",
            }}
            alt=""
          ></img>
          <img
            style={{
              height: 160,
              width: "47%",
              marginLeft: "2%",
              backgroundColor: "red",
            }}
            alt=""
          ></img>
          <img
            style={{
              height: 160,
              width: "47%",
              marginLeft: "2%",
              backgroundColor: "red",
              marginTop: 10,
            }}
            alt=""
          ></img>
          <img
            style={{
              height: 160,
              width: "47%",
              marginLeft: "2%",
              backgroundColor: "red",
              marginTop: 10,
            }}
            alt=""
          ></img>
          <img
            style={{
              height: 160,
              width: "47%",
              marginLeft: "2%",
              backgroundColor: "red",
              marginTop: 10,
            }}
            alt=""
          ></img>
          <img
            style={{
              height: 160,
              width: "47%",
              marginLeft: "2%",
              backgroundColor: "red",
              marginTop: 10,
            }}
            alt=""
          ></img>
        </div>
      </div>

      <div className="bodyDetail">
        <Title level={2} className="title">
          Chi Tiết Sản Phẩm
        </Title>

        <div>
          {data.map((e, val) => {
            if (e.id === parseInt(id)) {
              return (
                <div>
                  <h3>Requested topic ID: {id}</h3>
                </div>
              );
            }
            return "";
          })}
        </div>

        <div className="bodyDetail1">
          <div className="Detail-image">
            <img
              alt=""
              className="Detail-image-one"
              src="https://baobianhsang.vn/wp-content/uploads/2017/08/bao-dung-gao-50kg-tren-thi-truong-hien-nay.jpg"
            />
          </div>
          <div className="Detail-product">
            <div className="Detail-product-thongtin">
              <Title level={3}>Thông Tin Sản Phẩm</Title>
            </div>
            <div className="Detail-product-one">
              <div className="Detail-product-one-left">
                <Title level={4} style={{ height: 30 }}>
                  Tên Sản Phẩm
                </Title>
                <Title level={4} style={{ height: 100 }}>
                  Mô Tả Sản phẩm
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Ngày Sản Xuất
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Quy Cách
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Giá Sản Phẩm
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Trạng Thái Sản Phẩm
                </Title>
              </div>
              <div className="Detail-product-one-right">
                <Title level={5} style={{ height: 30, paddingTop: 2 }}>
                  Tên Sản Phẩm
                </Title>
                <Title
                  level={5}
                  style={{ height: 100, paddingTop: 2, marginTop: 24 }}
                >
                  Gạo nếp ngon đặc sản của Thái Bình có câu truyện lịch sử thời
                  nhà Trần cách đây 700 năm.Bạn sẽ cảm nhận vị ngon khó cưỡng
                  khi nếm thử.Sau thời gian nhiên cứu và triển khai thực hiện,
                  chúng tôi tự hào khi có thể tiếp tục cho ra mắt thêm 1 sản
                  phẩm mới vừa đáp ứng nhu cầu gạo ngon vừa đảm bảo an toàn cho
                  người.
                </Title>
                <Title
                  level={5}
                  style={{ height: 30, paddingTop: 2, marginTop: 24 }}
                >
                  2/9/2021
                </Title>
                <Title
                  level={5}
                  style={{ height: 30, paddingTop: 2, marginTop: 24 }}
                >
                  Túi 5kg.bao bì chất lượng an toàn
                </Title>
                <Title
                  level={5}
                  style={{ height: 30, paddingTop: 2, marginTop: 24 }}
                >
                  25.000đ/1kg
                </Title>
                <Title
                  level={5}
                  style={{ height: 30, paddingTop: 2, marginTop: 24 }}
                >
                  Đã được kiểm định
                </Title>
              </div>
            </div>
          </div>
        </div>
        <div className="table1">
          <Title level={2} className="sq">
            Quy Trình Sản Xuất Sản Phẩm
          </Title>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <Title level={3}>Tên Sản Phẩm</Title>
                </th>
                <th scope="col">
                  {" "}
                  <Title level={3}>Tên Quy trình</Title>
                </th>
                <th scope="col">
                  <Title level={3}>Tệp Chứng Thực</Title>
                </th>
                <th scope="col">
                  <Title level={3}>Cơ Quan Kiểm Định</Title>
                </th>
                <th scope="col">
                  <Title level={3}>Trang Thái</Title>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tb">
                <th scope="row">
                  <Title level={4}>Gạo Lanny Rice</Title>
                </th>
                <th scope="row">
                  <Title level={4}>Quy Trình Chọn Giống</Title>
                </th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400, marginBottom: 0 }}
                    src="https://botgaolut.com/wp-content/uploads/2017/07/B%E1%BB%98T-G%E1%BA%A0O-L%E1%BB%A8T-739x1024.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>Cơ quan quản lý an toàn thực phẩm</Title>
                </td>
                <td>
                  <Title level={4}> Đã được kiểm định</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">Quy trình Chăm Sóc Lúa</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>Cơ quan quản lý an toàn thực phẩm 2</Title>
                </td>
                <td>
                  <Title level={4}> Đã được kiểm định</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">Quy Trình Thu hoạch</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>Cơ quan quản lý an toàn thực phẩm 3</Title>
                </td>
                <td>
                  <Title level={4}> Đã được kiểm định</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">Quy trình sản xuất tại nhà máy</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>Cơ quan quản lý an toàn thực phẩm 4</Title>
                </td>
                <td>
                  <Title level={4}> Đã được kiểm định</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">Quy trình đóng gói sản phẩm</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>Cơ quan quản lý an toàn thực phẩm 5</Title>
                </td>
                <td>
                  <Title level={4}> Đã được kiểm định</Title>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footerDetai"></div>
    </div>
  );
}

const data = [
  {
    id: 11,
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
