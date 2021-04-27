import React, {
  //  useEffect,
  //  useReducer,
   useState
  } from 'react';
  import Menu from '../component/nav/Menu';
import Footer from '../component/Footer';
// import axios from "axios";
function ResetPassword() {

  const token =  localStorage.getItem('access_token');

    const[register, setRegister] =useState('')
    // const[dataApi, setDataApi] =useState('')
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJnb29nbGVJRCI6IjExMzA0MjkyMjU4OTkyODA1MjI3OCIsInJlc3VsdCI6eyJzdG9yZU93bmVySUQiOnsibmFtZSI6bnVsbCwicGhvdG9zIjpudWxsLCJlbWFpbCI6bnVsbCwiZGVzY3JpcHRpb24iOm51bGwsInBob25lTnVtYmVycyI6bnVsbCwiYWRkcmVzcyI6bnVsbCwic3RhdHVzIjoiTk9TVEFUVVMiLCJfaWQiOiI2MDc1YWFjNTQ3ZWZhYzAwM2JiMGUxNDUiLCJjcmVhdGVkQXQiOiIyMDIxLTA0LTEzVDE0OjI5OjI1LjUyN1oiLCJ1cGRhdGVkQXQiOiIyMDIxLTA0LTEzVDE0OjI5OjI1LjUyN1oiLCJfX3YiOjB9LCJlbXBsb3llZUlEIjpudWxsLCJwcm9maWxlUGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdnYmFpejFXMlFrVmxOd3J3OTVVN3poVWVtNGdqcVV4NlZnRjkzaWNRPXM5Ni1jIiwiZ2VuZGVyIjpudWxsLCJmdWxsTmFtZSI6IlF1YW5nIHVuZGVmaW5lZCIsImVtYWlsIjoicGh1cXVhbmcxOTdAZ21haWwuY29tIiwicGhvbmUiOm51bGwsImZhY2Vib29rSUQiOm51bGwsImdvb2dsZUlEIjoiMTEzMDQyOTIyNTg5OTI4MDUyMjc4Iiwic3RhdHVzIjoiVU5MT0NLIiwicm9sZVBlbmRpbmciOiJCQVNJQyIsInJvbGUiOiJCQVNJQyIsIl9pZCI6IjYwNzVhYWM1NDdlZmFjMDAzYmIwZTE0NiIsImNyZWF0ZWRBdCI6IjIwMjEtMDQtMTNUMTQ6Mjk6MjUuNTUyWiIsInVwZGF0ZWRBdCI6IjIwMjEtMDQtMTNUMTQ6Mjk6MjUuNTUyWiIsIl9fdiI6MH0sImlhdCI6MTYxODMyNDE2NSwiZXhwIjoxNjMzODc2MTY1fQ.5GDecqUleJ5p_2ZcKivo8GDpx139kw_wT2Zp0Sql1Ss'
    // const fetchData =  async() => {
    //      await axios({
    //     method: 'post',
    //     url: 'http://homemarket.us-3.evennode.com/register',
    //     data: {
    //      ...register,
    //     },
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    // }
    // function submit(){
    //   fetchData()
    //   console.log(register);
    // }
    // console.log(dataApi);
    return (
      <>
     <Menu token={token}></Menu>
        <div className="mb-5" style={{ marginTop: '134px' }}>
            <div style={{ color: '#747487' }} className="container form">
                <div style={{backgroundColor:'white',boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}} className="row">
                    <div style={{ color: '#fff' }} className="col-md-6 ">
                        <div className="text-center">
                            <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/173230510_1216984905426913_7821080656904254425_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=beudAN0rKa4AX_yQ37H&_nc_ht=scontent-hkg4-2.xx&oh=2eb159fd7b16e9349bfb667ec6be3368&oe=60AA2525"></img>
                        </div>
                    </div>
                    <div style={{backgroundColor:"white"}} className="col-md-6 pt-5 pr-5 pl-5 ">
                            <div className="mb-3">
                                <h6 className="MenuRow mb-4">THAY ĐỔI MẬT KHẨU</h6>
                                <label htmlFor="exampleInputPassword1" className="form-label">Nhập Mật Khẩu</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                 onChange={event => setRegister({...register,passWord:event.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Nhập Mật Khẩu Mới</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                 onChange={event => setRegister({...register,passWord:event.target.value})}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Nhập Lại Mật Khẩu</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                 onChange={event => setRegister({...register,passWord:event.target.value})}
                                />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mb-5">Submit</button>


                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}
export default ResetPassword
