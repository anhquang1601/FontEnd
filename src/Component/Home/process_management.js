import { Component } from "react";
import { Typography } from "antd";
import { Input } from "antd";

import { Modal, Button } from "antd";

import React, { createRef } from "react";
import Dropzone from "react-dropzone";
import { Select } from "antd";

const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
const { Title } = Typography;

const dropzoneRef = createRef();
const openDialog = () => {
  if (dropzoneRef.current) {
    dropzoneRef.current.open();
  }
};
class ProcessManagement extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
      file: "",
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
    const { isModalVisible } = this.state;
    return (
      <div>
        <div className="site-layout-background" style={{ padding: 10 }}>
          <div>
            <Title style={{ textAlign: "center" }} level={2}>
              Quản Lý Quy Trình
            </Title>
            <Button type="primary" onClick={() => this.showModal()}>
              Thêm Mới
            </Button>
            <Modal
              visible={isModalVisible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              width={1000}
            >
              <Title style={{ marginBottom: 10 }} level={4}>
                Tên Sản Phẩm
              </Title>
              <Input style={{ marginBottom: 10 }} placeholder="Basic usage" />
              <Title style={{ marginBottom: 10 }} level={4}>
                Tên Quy trình
              </Title>
              <Select
                defaultValue="Quy trình chọn giống lúa"
                style={{ width: 950 }}
                onChange={handleChange}
              >
                <OptGroup label="Manager">
                  <Option value="jack">Quy trình chọn giống lúa</Option>
                  <Option value="lucy1">Quy trình chăm sóc</Option>
                  <Option value="lucy3">Quy trình thu hoạch</Option>
                  <Option value="lucy4">Quy trình sản xuất tại nhà máy</Option>
                  <Option value="lucy5">Quy trình đóng gói sản phẩm</Option>

                </OptGroup>

              </Select>

              <Title style={{ marginBottom: 10 }} level={4}>
                Cơ Quan Kiểm Định
              </Title>
              <Select
                defaultValue="Cơ Quan Kiểm Định I"
                style={{ width: 950 }}
                onChange={handleChange}
              >
                <OptGroup label="Manager">
                  <Option value="jack">Cơ Quan Kiểm Định I</Option>
                  <Option value="lucy1">Cơ Quan Kiểm Định II</Option>
                  <Option value="lucy3">Cơ Quan Kiểm Định III</Option>
                  <Option value="lucy4">Cơ Quan Kiểm Định IV</Option>
                  <Option value="lucy5">Cơ Quan Kiểm Định V</Option>

                </OptGroup>

              </Select>
              <Title style={{ marginBottom: 10 }} level={4}>
                Tệp Chứng Thực
              </Title>
              <Input style={{ marginBottom: 10 }} placeholder="Basic usage" />
              <Dropzone ref={dropzoneRef} noClick noKeyboard>
                {({ getRootProps, getInputProps, acceptedFiles }) => {
                  return (
                    <div className="container">
                      <div {...getRootProps({ className: "dropzone" })}>
                        <input {...getInputProps()} />

                        <Button type="primary" onClick={openDialog}>
                          Open Dialog
                        </Button>
                      </div>
                      <aside>
                        <h1>{acceptedFiles.path}</h1>
                      </aside>
                    </div>
                  );
                }}
              </Dropzone>
            </Modal>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th scope="col">Tên Sản Phẩm</th>
                <th scope="col">Tên Quy trình</th>
                <th scope="col">Tệp Chứng Thực</th>
                <th scope="col">Cơ Quan Kiểm Định</th>
                <th scope="col">Trang Thái</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">quy trình chọn giống lúa</th>
                <td>Screen80.png</td>
                <td>Cơ quan quản lý an toàn thực phẩm 1</td>
                <td>Đang chờ kiểm định</td>
                <td>
                  <div>
                    <button>
                      <a href="kkkl">Sưa</a>
                    </button>
                    <button style={{ marginLeft: 10 }}>
                      <a href="kkkl">xóa</a>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">Quy trình chăm sóc</th>
                <td>Screen80.png</td>
                <td>Cơ quan quản lý an toàn thực phẩm 2</td>
                <td>Đang chờ kiểm định</td>
                <td>
                  <div>
                    <button onClick={() => this.showModal()}>
                     Sưa
                    </button>
                    <button style={{ marginLeft: 10 }}>
                      <a href="kkkl">xóa</a>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">quy trình thu hoạch</th>
                <td>Screen80.png</td>
                <td>Cơ quan quản lý an toàn thực phẩm 3</td>
                <td>Đang chờ kiểm định</td>
                <td>
                  <div>
                    <button onClick={() => this.showModal()}>
                    Sưa
                    </button>
                    <button style={{ marginLeft: 10 }}>
                      <a href="kkkl">xóa</a>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">quy trình sản xuất tại nhà máy</th>
                <td>Screen80.png</td>
                <td>Cơ quan quản lý an toàn thực phẩm 4</td>
                <td>Đang chờ kiểm định</td>
                <td>
                  <div>
                    <button onClick={() => this.showModal()}>
                    Sưa
                    </button>
                    <button style={{ marginLeft: 10 }}>
                      <a href="kkkl">xóa</a>
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <th scope="row">Gạo Lanny Rice</th>
                <th scope="row">quy trình đóng gói sản phẩm</th>
                <td>Screen80.png</td>
                <td>Cơ quan quản lý an toàn thực phẩm 5</td>
                <td>Đang chờ kiểm định</td>
                <td>
                  <div>
                    <button onClick={() => this.showModal()}>
                     Sưa
                    </button>
                    <button style={{ marginLeft: 10 }}>
                      <a href="kkkl">xóa</a>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ProcessManagement;
