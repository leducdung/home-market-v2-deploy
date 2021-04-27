export default function RegisterfFormValidationRule(values) {
  function checkPassword(str) {
    var re = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  }
  function checkEmail(str) {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(str);
  }

  let errors = {};
  
  if (!values.userName) {
    errors.userName = "không được để trống tên tài khoản";
  }

  if (!values.email) {
    errors.email = "Email không được để trống";
  } else if (!checkEmail(values.email)) {
    errors.email = "Định dạng của email không đúng";
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
