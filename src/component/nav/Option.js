import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Login from "../../pageUser/Login";
import { Redirect } from 'react-router';

export default function Menu(props) {
  const { token } = props;
  const logOut = () => {
    localStorage.removeItem("access_token");
    window.location.reload();
  }

  if (!token) {
    return (
      <span className="navbar-text pr-3">
        <button
          style={{ border: "none" }}
          className="btnlogin p-2"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Đăng Nhập
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog text-center">
            <div style={{ width: "890px" }} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Sign in
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div style={{ color: "#747487" }} className="container form">
                <div className="row">
                  <div
                    style={{ color: "#fff" }}
                    className="col-md-6 imglogin pt-5"
                  >
                    <div className="text-center pt-5">
                      <h1 className="login-title">ĐĂNG NHẬP</h1>
                      <h4 className="login-title mb-5">Chào mừng trở lại!</h4>
                      <h6 className="pt-5">
                        Bạn mới sử dụng Home Martket?
                        <a href="/Register">Đăng kí miễn phí</a>
                      </h6>
                    </div>
                  </div>
                  <div className="col-md-6 pt-5 pr-5 pl-5">
                    <Login></Login>
                    <form className="signwith pb-4">
                      <div className="row">
                        <div
                          className="col-md-4"
                          style={{ borderBottom: "solid 0.5px silver" }}
                        />
                        <div className="col-md-4 text-center">
                          <small>Hoặc đăng nhập bằng</small>
                        </div>
                        <div
                          className="col-md-4"
                          style={{ borderBottom: "solid 0.5px silver" }}
                        />
                      </div>
                      <div className="d-grid gap-2 d-md-block text-center">
                        <a className="btn fb" href="#" role="button">
                          <div className="icon_fb icon2">
                            <i className="fa fa-facebook" aria-hidden="true" />
                          </div>{" "}
                          <br />
                          <h6>Facebook</h6>
                        </a>
                        <a className="btn gm" href="#" role="button">
                          <div className="icongm icon2">
                            <i className="fa fa-google" aria-hidden="true" />
                          </div>
                          <br />
                          <h6>Gmail</h6>
                        </a>
                      </div>
                      <small className="pdt-md pt-4" id="agree-terms">
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}>
                            Bằng cách đăng nhập, tôi đồng ý với{" "}
                          </font>
                        </font>
                        <a className="rule" target="_blank" href="/privacy">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Chính sách Bảo mật
                            </font>
                          </font>
                        </a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}> và </font>
                        </font>
                        <a className="rule" target="_blank" href="/privacy">
                          <font style={{ verticalAlign: "inherit" }}>
                            <font style={{ verticalAlign: "inherit" }}>
                              Điều Khoản Dịch Vụ
                            </font>
                          </font>
                        </a>
                        <font style={{ verticalAlign: "inherit" }}>
                          <font style={{ verticalAlign: "inherit" }}> .</font>
                        </font>
                      </small>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }

  return (
    <span className="navbar-text pr-3">
      <div className="dropdown open">
        <button
          className="btn dropdown-toggle"
          type="button"
          id="triggerId"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            className="mr-4 avt"
            width="50px"
            alt="Generic placeholder image"
            src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/41708923_945274225666899_3528518235861286912_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=Kca1NJtAXF4AX9qWttT&_nc_oc=AQlbbwtPIEDRAJ8EihYOATqnMuq-K4BTFsp-PnmumUFp8ZORkIDlSAoOQ5ZfzCNMca0iKPT6DYPC8xAzKQBLWyrF&_nc_ht=scontent.fdad2-1.fna&oh=4b9ac5a0e2b31b853a2cda74ed39ea37&oe=60A3F646"
          />
        </button>
        <div
          className="dropdown-menu dropdown-menu-right p-3"
          aria-labelledby="triggerId"
        >
          <NavLink className="dropdown-item mb-2 MenuRow" to="/InformationUser">
            Thông Tin Cá Nhân
          </NavLink>
          <NavLink className="dropdown-item  MenuRow" to="/ResetPassword">
            Đổi MẩT Khẩu
          </NavLink>
          <NavLink className="dropdown-item  MenuRow" to="/RegisterStore">
            Đăng Kí Chủ Cửa Hàng
          </NavLink>
          <button  onClick={logOut} className="dropdown-item  MenuRow" to="/RegisterStore">
            Đăng xuất
          </button>
        </div>
      </div>
    </span>
  );
}
