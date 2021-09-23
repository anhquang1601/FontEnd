import { Component } from "react";
class Signedproduct extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false,
    };
  }
  render() {
    return (
      <div className="site-layout-background" style={{ padding: 10 }}>
        <div>
          <h1 style={{ textAlign: "center" }}>Quản Lý Quy trình</h1>
        </div>
        <table class="table">
          <thead>
            <tr>
        
              <th scope="col">Tên Sản Phẩm</th>
          
              <th scope="col">Quy Trình Sản Xuất</th>
              <th scope="col">Têp Chứng Thực</th>
              <th scope="col">Cơ Quan Xác Thực</th>
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
                <td>Đã được kiểm định</td>
                <td>
                  <div>
                  <button>
                    <a href="/manage/Detail">Chi Tiết</a>
                  </button>
                  </div>
                </td>
              </tr>
           {/*  <tr>
           
              <td>PREBIOTIC 4-IN-1 MULTICLEANSER</td>
            
              <td>@PREBIOTIC 4-IN-1 MULTICLEANSER</td>
              <td>PREBIOTIC 4-IN-1 MULTICLEANSER</td>
              <td>Cơ quan kiểm định</td>
              <td>đã xác thực</td>
              <td>
                <div>
                  <button>
                    <a href="/manage/Detail">Chi Tiết</a>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
           
              <td>PREBIOTIC 4-IN-1 MULTICLEANSER</td>
           
              <td>@PREBIOTIC 4-IN-1 MULTICLEANSER</td>
              <td>PREBIOTIC 4-IN-1 MULTICLEANSER</td>
              <td>Cơ quan kiểm định</td>
              <td>Chưa xác thực</td>
              <td>
                <div>
                  <button>
                    <a href="/manage/Detail">Chi Tiết</a>
                  </button>
                </div>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Signedproduct;
