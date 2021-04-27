import FunctionLogin from "../../function/loginRegister/functionLogin";

export default function Loginformvalidationrule(values) {
  function checkPassword(str) {
    var re = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }
  
  let errors = {};

  if (!values.userName) {
    errors.userName = "không được để trống tên tài khoản";
  }

  if (!values.password) {
    errors.password = "Mật khẩu không được để trống";
  } else if (parseInt(values.password.length) < 6) {
    errors.password = "Mật khẩu phải phải có độ dài lớn hơn 6";
  } else if (!checkPassword(values.password)) {
    errors.password = "Mật khẩu phải có ít nhất 1 CHỮ HOA và 1 chữ thường";
  }
  return errors;
}
