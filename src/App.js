/* import { Menu } from "antd"; */
import "antd/dist/antd.css";
/* import Body from "./Component/Home/Body"; */
/* import "./App.css"; */
/* import Hearder from "./Component/Home/Header"; */
/*  import Product from "./Component/Home/Product";  */ 
import Mainhome from "./Component/Home/Mainhome";
import { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="Container">
        <Mainhome/>
       {/*  <div className="header">
          <div className="menu">
            <Hearder />
          </div>
          <div className="maa">
            <div className="qqq">
              <h1>logo-murad</h1>
            </div>
            
              <div className="mmm">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.facebook.com/">
                      TRANG CHỦ
                    </a>
                    <button
                      class="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                      class="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul class="navbar-nav">
                        <li class="nav-item">
                           <a
                            class="navbar-brand"
                            href="https://www.facebook.com/"
                          >
                            VỀ MURAD
                          </a> 
                           
                        </li>
                        <li class="nav-item">
                          <a
                            class="navbar-brand"
                            href="https://www.facebook.com/"
                          >
                            SẢN PHẨM
                          </a>
                         
                        </li>
                        <li class="nav-item">
                          <a
                            class="navbar-brand"
                            href="https://www.facebook.com/"
                          >
                            GIẢI PHÁP
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="navbar-brand"
                            href="https://www.facebook.com/"
                          >
                            TIN TỨC
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="navbar-brand"
                            href="https://www.facebook.com/"
                          >
                            KHUYẾN MÃI
                          </a>
                        </li>
                        <li class="nav-item dropdown">
                          <a
                            class="navbar-brand dropdown-toggle"
                            href="https://www.facebook.com/"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            TÀI KHOẢN
                          </a>
                          <ul
                            class="dropdown-menu"
                            aria-labelledby="navbarDropdownMenuLink"
                          >
                            <li>
                              <a
                                class="dropdown-item"
                                href="https://www.facebook.com/"
                              >
                                Action
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="https://www.facebook.com/"
                              >
                                Another action
                              </a>
                            </li>
                            <li>
                              <a
                                class="dropdown-item"
                                href="https://www.facebook.com/"
                              >
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
           
              </div>
           
          </div>
        </div> */}
   {/*      <div className="body">
          <div className="Image">
            <Body />
          </div>
          <div class="sanpham">
             <Product /> 
          </div>
        </div>
        <div className="footer"></div> */}
      </div>
    );
  }
}
export default App;
