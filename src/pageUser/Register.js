import useForm from "../component/Userform";
import validate from "../helpers/validate/RegisterfFormValidationRule";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Menu from '../component/nav/Menu';
import Footer from "../component/Footer";
import { API } from "../config/ConfigENV";
import { Redirect } from 'react-router';

function Register() {

  const token =  localStorage.getItem('access_token');

  const [registerData, setRegisterData] = useState("");
  const [message, setMessage] = useState("");

  const { values, errors, handleChange, handleSubmit } = useForm(
    checkValiRegister,
    validate
  );

  const [isFindingDataOk, setIsFindingDataOk] = useState('false');

  const submitRegister = () => {
    setRegisterData({
      userName:values.userName,
      passWord:values.password,
      email:values.email
    })
  }

  const fetchData = async () => {
    const result = await axios({
      method: "post",
      url: `${API}/register`,
      data: {
        ...registerData,
      },
    });
    if (result.data.keyPattern) {
      if(result.data.keyPattern.email){
        setMessage('email đã tôn tại')
      }else
      if(result.data.keyPattern.userName){
        setMessage('Tài khoản đã tôn tại')
      }
    } else {
      setMessage()
    }
    if(result.data.role){
      setIsFindingDataOk('true')
    }
  };

  useEffect(() => {
    console.log(message);

  },[registerData]);

  function checkValiRegister() {
    fetchData()
    // fetchData();
  }
 
  if(!errors.password && !errors.userName && !errors.email && isFindingDataOk === 'true'){
    return (<Redirect to="/" />);
  }
  return (
    <>
      <Menu token={token}></Menu>
      <div className="mb-5" style={{ paddingTop: "5%" }}>
        <div style={{ color: "#747487" }} className="container form">
          <div className="row">
            <div style={{ color: "#fff" }} className="col-md-6 imglogin pt-5">
              <div className="text-center pt-5">
                <h1 className="login-title">ĐĂNG KÍ</h1>
                <h4 className="login-title mb-5">Chào mừng bạn</h4>
                <h6 className="pt-5">
                  Bạn đã có tài khoản home Market?{" "}
                  <a href="/"> Trở về trang chủ</a>
                </h6>
              </div>
            </div>
            <div
              style={{ backgroundColor: "white" }}
              className="col-md-6 pt-5 pr-5 pl-5 "
            >
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label">Tài khoản</label>
                  <input
                    autoComplete="off"
                    className={`input ${
                      errors.userName && "is-danger"
                    } w-100 form-control`}
                    type="userName"
                    name="userName"
                    onChange={handleChange}
                    value={values.userName || ""}
                    required
                  />
                  {errors.userName && (
                    <p className="help is-danger">{errors.userName}</p>
                  )}
                  <p className="help is-danger">{message}</p>
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    autoComplete="off"
                    className={`input ${
                      errors.email && "is-danger"
                    } w-100 form-control`}
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email || ""}
                    required
                  />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Mật khẩu
                  </label>
                  <input
                    className={`input ${
                      errors.password && "is-danger"
                    } w-100 form-control`}
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                {errors.password && (
                    <p className="help is-danger">{errors.password}</p>
                  )}
                </div>
                <button
                  type="submit"
                  className="button is-block is-info is-fullwidth btnlogin mt-3 p-2"
                  onClick={submitRegister}
                >
                  Login
                </button>
              </form>
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
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Chính sách Bảo mật
                    </font>
                  </font>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}> và </font>
                  </font>
                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}>
                      Điều Khoản Dịch Vụ
                    </font>
                  </font>

                  <font style={{ verticalAlign: "inherit" }}>
                    <font style={{ verticalAlign: "inherit" }}> .</font>
                  </font>
                </small>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Register;
