import useForm from "../component/Userform";
import validate from "../helpers/validate/Loginformvalidationrule";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../config/ConfigENV";
import { Redirect } from 'react-router';

function Login() {
  const token =  localStorage.getItem('access_token');

  const [dataLogin, setDataLogin] = useState();
  const [resultDataLogin, setResultDataLogin] = useState();
  const [message, setMessage] = useState();
  const { values, errors, handleChange, handleSubmit } = useForm(
    checkLogin,
    validate
  );

  const fetchData = async () => {
    const result = await axios({
      method: "post",
      url: `${API}/login`,
      data: {
        ...dataLogin,
      },
    });

    if (dataLogin) {
      setMessage(result.data.message);
    }

    setResultDataLogin(result.data);

    if (result.data.access_token) {
      localStorage.setItem('access_token', resultDataLogin.access_token);
    }

    return result.data;
  };

  const submitLogin = () => {
    setDataLogin({
      userName: values.userName,
      passWord: values.password,
    });
    fetchData();
  };

  function checkLogin() {}

  useEffect(() => {
    fetchData();
  }, [dataLogin, message]);

  if (token) {
    window.location.reload();
  }
  return (
    <div className="section is-fullheight">
      <div className="column is-4 is-offset-4">
        <div className="box">
          <form onSubmit={handleSubmit} noValidate>
            <div className="field text-left">
              <label className="label">User name</label>
              <div className="control">
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
            </div>
            <div className="field text-left mt-3">
              <label className="label">Password</label>
              <div className="control">
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
              </div>
              {errors.password && (
                <p className="help is-danger">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="button is-block is-info is-fullwidth btnlogin mt-3 p-2"
              onClick={submitLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
