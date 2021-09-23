import React, { Component } from "react";
import { Typography } from "antd";
import "./Home.css";
const { Title } = Typography;

export default class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="panel">
          <img
            className="panel-Image"
            alt=""
            src="http://gaonambinh.vn/wp-content/uploads/anh-3.jpg"
          />
        </div>
        <div className="logo">
          <div className="logo-Image-one">
            <img
              className="logo-Image-one-img"
              alt=""
              src="http://gaonambinh.vn/wp-content/uploads/hop-tac-min.jpg"
            />
            <Title className="logo-Text" level={3}>
              Đăng Ký Đại Lý
            </Title>
          </div>
          <div className="logo-Image-two">
            <img
              className="logo-Image-two-img"
              alt=""
              src="http://gaonambinh.vn/wp-content/uploads/gia-gao-hom-nay-min.jpg"
            />
            <Title className="logo-Text" level={3}>
              Giá Gạo Hôm Nay
            </Title>
          </div>
          <div className="logo-Image-three">
            <img
              className="logo-Image-three-img"
              alt=""
              src="http://gaonambinh.vn/wp-content/uploads/2020/12/IMG_E0924.jpg"
            />
            <Title className="logo-Text" level={3}>
              Về Chúng Tôi
            </Title>
          </div>
        </div>
        <div className="product-home">
            <div className="product-home-Text">
          <Title level={2}>
            Sản Phẩm
          </Title>
          </div>
          <div className="product-home-item">
                  {
                      data.map(e=>(
                          <div className="product-home-item-tem1">
                               <img className="product-home-item-img-one" src={e.img} alt=""/>
                                <Title className="product-home-item-img-one-title" level={3}>{e.title}</Title>
                                <Title className="product-home-item-img-one-title" level={4}>{e.price}</Title> 
                          </div>
                      ))
                  }
              
          </div>
        
        </div>
        <div className="Tindacbiet"></div>
      </div>
    );
  }
}
const data=[
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2021/04/Gao-ST25-Nam-Binh-bao-10kg.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/gao-nam-binh-xanh.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2020/07/z1969114477948_2dd011fbab04dc908a0f892d14480744.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2020/10/Thom-nam-binh-2.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2021/04/Gao-ST25-Nam-Binh-bao-10kg.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2020/07/z1969114477948_2dd011fbab04dc908a0f892d14480744.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2020/05/bachuong.jpg",price:'2.000.000đ'},
    {id:1,title:'Nam Bình Đỏ',img:"http://gaonambinh.vn/wp-content/uploads/2021/04/Gao-ST25-Nam-Binh-bao-10kg.jpg",price:'2.000.000đ'},

]
