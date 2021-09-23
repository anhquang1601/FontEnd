
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import { Component } from "react";
import Product from "./Product";
import Detail from "./Detail";
import Manage from "./Manage";
import Home from "./Home"
import Login from "./Login";
/* import "./Style.css";  */
import "./Mainhome.css";
class Mainhome extends Component {
  render() {
    return (
      <Router>
        <div className="Container-one">
          <div className="Menu-left">
            <h1
              style={{
                fontFamily: "-moz-initial",
                marginLeft: "3%",
                fontSize: 60,
              }}
            >
              Murad
            </h1>
          </div>
          <div className="Menu-Right">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav">
                    <NavLink
                      activeClassName="active"
                      exact
                      to="/"
                      className="navbar-brand"
                    >
                      Trang Chủ
                    </NavLink>
                    <NavLink
                      activeClassName="active"
                      exact
                      to="/about"
                      className="navbar-brand"
                    >
                      Sản Phẩm
                    </NavLink>
                    <NavLink
                      activeClassName="active"
                      to="/capnhat1"
                      className="navbar-brand"
                    >
                      Tin Tức
                    </NavLink>
                    <NavLink
                      activeClassName="active"
                      to="/capnhat"
                      className="navbar-brand"
                    >
                      Giải Pháp
                    </NavLink>
                    <NavLink
                      exact
                      to="/manage"
                      activeClassName="active"
                      className="navbar-brand"
                    >
                      Trang Quản Lý
                    </NavLink>
                    <NavLink
                      activeClassName="active"
                      className="navbar-brand"
                      exact
                      to="/Login"
                    >
                      Tài Khoản
                    </NavLink>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <Product />
          </Route>
          <Route path="/dashboard/:id.html">
            <Detail />
          </Route>
          <Route path="/manage">
            <Manage />
          </Route>
          <Route path="/capnhat">
            <Home/>
          </Route>
          <Route path="/Login">
            <Login/>
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default Mainhome;


