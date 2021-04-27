import React from 'react';
import Menu from '../component/nav/Menu';
import Footer from '../component/Footer';

function InfomationUser() {

  const token =  localStorage.getItem('access_token');

    return (
      <>
      <Menu token={token}></Menu>
        <div className="mb-5 pt-5">
            <div className="container">
                <div style={{backgroundColor:'white',boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}} className="row p-4">
                    <div className="col-md-5 imgEdit">
                        <img src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/173230510_1216984905426913_7821080656904254425_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=beudAN0rKa4AX_yQ37H&_nc_ht=scontent-hkg4-2.xx&oh=2eb159fd7b16e9349bfb667ec6be3368&oe=60AA2525"></img>
                    </div>
                   <div style={{}}  className=" col-md-7 editUser w-100 p-5">
                   <h5 className='MenuRow'>THÔNG TIN CÁ NHÂN</h5>
                   <h6>Họ</h6>
                    <input type="text"
                        className="form-control mb-2" name="" id="" aria-describedby="helpId" placeholder="" />
                    <h6>Tên</h6>
                    <input type="text"
                        className="form-control mb-2" name="" id="" aria-describedby="helpId" placeholder="" />
                    <h6>Email</h6>
                    <input type="email"
                        className="form-control mb-2" name="" id="" aria-describedby="helpId" placeholder="" />
                    <h6>Số Điện Thoại</h6>
                    <input type="number"
                        className="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
                    <button type="button" className="btnsave p-2 mt-4">Lưu</button>
                   </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    );
}

export default InfomationUser;