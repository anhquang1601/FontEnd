import React, { useState } from "react";
import { Input } from "antd";
import { Typography } from "antd";
import { Modal, Button } from "antd";
import { useDropzone } from "react-dropzone";
const { Title } = Typography;
const { TextArea } = Input;
export default function Managaone() {
  const [isModalVisible, setIsModalVisible] = useState(false);
    

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
  });

  var files = acceptedFiles.map((e) => <h1 key={e.path}>{e.path}</h1>); 


 console.log(`${files}`)

  return (
    <div>
      <div className="site-layout-background" style={{ padding: 10 }}>
        <div>
          <h1 style={{ textAlign: "center" }}>Quản Lý Sản Phẩm</h1>
          <Button type="primary" onClick={showModal}>
            Thêm Mới
          </Button>
          <Modal
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width={800}
          >
         
            <Title style={{ marginBottom: 10 }} level={4}>
              Tên Sản Phẩm
            </Title>
            <Input style={{ marginBottom: 10 }} placeholder="Basic usage" />
            <Title style={{ marginBottom: 10 }} level={4}>
              Mô Tả{" "}
            </Title>
            <Input style={{ marginBottom: 10 }} placeholder="Basic usage" />
            <Title style={{ marginBottom: 10 }} level={4}>
            Giá Sản Phẩm
            </Title>
            <Input style={{ marginBottom: 10 }} placeholder="Basic usage" />
            <Title style={{ marginBottom: 10 }} level={4}>
              Hình Ảnh
            </Title>
            <TextArea rows={4} />
            <div className="container">
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />

                <button type="button" style={{marginLeft:-60,marginTop:20}} onClick={open}>
                  Open File 
                </button>
               
              </div>
            </div>
          </Modal>
        </div>
        <table class="table">
          <thead>
            <tr>
             
              <th scope="col">Tên Sản Phẩm</th>
              <th scope="col">Mô Tả</th>
              <th scope="col">Giá Sản Phẩm</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Trang Thái</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
          <tr>
            
              <th scope="row">Gạo Lanny Rice</th>
              <td>Đây là sản phẩm gạo độc quyền thương hiệu</td>
              <td>2.000.000 đ</td>
              <td>screen73.png</td>
              <td>Đã được kiểm định</td>
              <td>
                <div>
                  <button  onClick={showModal}>
                  Sưa
                  </button>
                  <button style={{marginLeft:10}}>
                   xóa
                  </button>
                </div>
              </td>
            </tr>
          {/*    <tr>
            
              <th scope="row">PREBIOTIC 4-IN-1 MULTICLEANSER</th>
              <td>PREBIOTIC 4-IN-1 MULTICLEANSER</td>
              <td>Cơ quan xác thực 2</td>
              <td>Đang chờ kiểm định</td>
              <td>
                <div>
                  <button>
                    <a href="kkkl">Sưa</a>
                  </button >
                  <button style={{marginLeft:10}}>
                    <a href="kkkl">xóa</a>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
             
              <th scope="row">PREBIOTIC 4-IN-1 MULTICLEANSER</th>
              <td>PREBIOTIC 4-IN-1 MULTICLEANSER</td>
              <td>Cơ quan xác thực 3</td>
              <td>Đang chờ kiểm định</td>
              <td>
                <div>
                  <button>
                    <a href="kkkl">Sưa</a>
                  </button>
                  <button style={{marginLeft:10}}>
                    <a href="kkkl">xóa</a>
                  </button>
                </div>
              </td>
            </tr>  */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
