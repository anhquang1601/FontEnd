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
          Chi Ti???t S???n Ph???m
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
              <Title level={3}>Th??ng Tin S???n Ph???m</Title>
            </div>
            <div className="Detail-product-one">
              <div className="Detail-product-one-left">
                <Title level={4} style={{ height: 30 }}>
                  T??n S???n Ph???m
                </Title>
                <Title level={4} style={{ height: 100 }}>
                  M?? T??? S???n ph???m
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Ng??y S???n Xu???t
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Quy C??ch
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Gi?? S???n Ph???m
                </Title>
                <Title level={4} style={{ height: 30 }}>
                  Tr???ng Th??i S???n Ph???m
                </Title>
              </div>
              <div className="Detail-product-one-right">
                <Title level={5} style={{ height: 30, paddingTop: 2 }}>
                  T??n S???n Ph???m
                </Title>
                <Title
                  level={5}
                  style={{ height: 100, paddingTop: 2, marginTop: 24 }}
                >
                  G???o n???p ngon ?????c s???n c???a Th??i B??nh c?? c??u truy???n l???ch s??? th???i
                  nh?? Tr???n c??ch ????y 700 n??m.B???n s??? c???m nh???n v??? ngon kh?? c?????ng
                  khi n???m th???.Sau th???i gian nhi??n c???u v?? tri???n khai th???c hi???n,
                  ch??ng t??i t??? h??o khi c?? th??? ti???p t???c cho ra m???t th??m 1 s???n
                  ph???m m???i v???a ????p ???ng nhu c???u g???o ngon v???a ?????m b???o an to??n cho
                  ng?????i.
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
                  T??i 5kg.bao b?? ch???t l?????ng an to??n
                </Title>
                <Title
                  level={5}
                  style={{ height: 30, paddingTop: 2, marginTop: 24 }}
                >
                  25.000??/1kg
                </Title>
                <Title
                  level={5}
                  style={{ height: 30, paddingTop: 2, marginTop: 24 }}
                >
                  ???? ???????c ki???m ?????nh
                </Title>
              </div>
            </div>
          </div>
        </div>
        <div className="table1">
          <Title level={2} className="sq">
            Quy Tr??nh S???n Xu???t S???n Ph???m
          </Title>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <Title level={3}>T??n S???n Ph???m</Title>
                </th>
                <th scope="col">
                  {" "}
                  <Title level={3}>T??n Quy tr??nh</Title>
                </th>
                <th scope="col">
                  <Title level={3}>T???p Ch???ng Th???c</Title>
                </th>
                <th scope="col">
                  <Title level={3}>C?? Quan Ki???m ?????nh</Title>
                </th>
                <th scope="col">
                  <Title level={3}>Trang Th??i</Title>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="tb">
                <th scope="row">
                  <Title level={4}>G???o Lanny Rice</Title>
                </th>
                <th scope="row">
                  <Title level={4}>Quy Tr??nh Ch???n Gi???ng</Title>
                </th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400, marginBottom: 0 }}
                    src="https://botgaolut.com/wp-content/uploads/2017/07/B%E1%BB%98T-G%E1%BA%A0O-L%E1%BB%A8T-739x1024.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>C?? quan qu???n l?? an to??n th???c ph???m</Title>
                </td>
                <td>
                  <Title level={4}> ???? ???????c ki???m ?????nh</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">G???o Lanny Rice</th>
                <th scope="row">Quy tr??nh Ch??m S??c L??a</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>C?? quan qu???n l?? an to??n th???c ph???m 2</Title>
                </td>
                <td>
                  <Title level={4}> ???? ???????c ki???m ?????nh</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">G???o Lanny Rice</th>
                <th scope="row">Quy Tr??nh Thu ho???ch</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>C?? quan qu???n l?? an to??n th???c ph???m 3</Title>
                </td>
                <td>
                  <Title level={4}> ???? ???????c ki???m ?????nh</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">G???o Lanny Rice</th>
                <th scope="row">Quy tr??nh s???n xu???t t???i nh?? m??y</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>C?? quan qu???n l?? an to??n th???c ph???m 4</Title>
                </td>
                <td>
                  <Title level={4}> ???? ???????c ki???m ?????nh</Title>
                </td>
                <td></td>
              </tr>
              <tr style={{ height: 400, width: "100%" }}>
                <th scope="row">G???o Lanny Rice</th>
                <th scope="row">Quy tr??nh ????ng g??i s???n ph???m</th>
                <td>
                  <img
                    alt=""
                    style={{ height: 400, width: 400 }}
                    src="http://gaoterau.vn/sites/default/files/1997174134.jpg"
                  />
                </td>
                <td>
                  <Title level={4}>C?? quan qu???n l?? an to??n th???c ph???m 5</Title>
                </td>
                <td>
                  <Title level={4}> ???? ???????c ki???m ?????nh</Title>
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
    title: "G???o Lanny Rice",
    mota: "S???a r???a m???t t???y trang sinh h???c 4 trong 1",
    price: "866.600 ???",
  },
  {
    id: 2,
    Image:
      "https://salt.tikicdn.com/ts/product/a0/71/40/94b69ba8720718395df6f7e4b5a85348.png",
    title: "CLARIFYING CLEANSER",
    mota: "Gel r???a m???t d??nh cho da m???n",
    price: "1.078.000 ???",
  },
  {
    id: 3,
    Image: "https://gaosachonline.com/wp-content/uploads/2020/06/gao-st25.png",
    title: "AHA/BHA EXFOLIATING CLEANSER",
    mota: "S???a r???a m???t & T???y t??? b??o ch???t - Lo???i b??? t???p ch???t v?? th??ng tho??ng l??? ch??n l??ng",
    price: "1.428.000 ???",
  },
  {
    id: 4,
    Image: "https://gaosachonline.com/wp-content/uploads/2020/06/gao-st25.png",
    title: "AHA/BHA EXFOLIATING CLEANSER",
    mota: "S???a r???a m???t & T???y t??? b??o ch???t - Lo???i b??? t???p ch???t v?? th??ng tho??ng l??? ch??n l??ng",
    price: "1.428.000 ???",
  },
  {
    id: 5,
    Image:
      "https://baobibinhminh.vn/wp-content/uploads/2018/07/20180720_134220.jpg",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "S???a r???a m???t & T???y t??? b??o ch???t - Lo???i b??? t???p ch???t v?? th??ng tho??ng l??? ch??n l??ng",
    price: "866.600 ???",
  },
  {
    id: 6,
    Image:
      "https://gaosachonline.com/wp-content/uploads/2018/05/gao-bac-huong-400x400.png",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "S???a r???a m???t t???y trang sinh h???c 4 trong 1",
    price: "866.600 ???",
  },
  {
    id: 7,
    Image: "https://cdn.tgdd.vn/2021/06/CookProduct/thumbgao-1200x676.jpg",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "S???a r???a m???t t???y trang sinh h???c 4 trong 1",
    price: "866.600 ???",
  },
  {
    id: 8,
    Image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlBP3hTodW_64cpZO4eiMv8FW2PU6iENESB0uuwHFKILS3xBxrVhgGsLk1sYsFzBic6pM&usqp=CAU",
    title: "PREBIOTIC 4-IN-1 MULTICLEANSER",
    mota: "S???a r???a m???t t???y trang sinh h???c 4 trong 1",
    price: "866.600 ???",
  },
];
