import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../component/nav/Menu';
import MenuTow from '../component/MenuTwo';
import Footer from '../component/Footer';

AddCard.propTypes = {

};

function AddCard(props) {
  const token =  localStorage.getItem('access_token');
    return (
<>
<Menu token={token}></Menu>
        <div className="mb-5 pt-5">
            <div className="container">
                <div style={{ backgroundColor: 'white', boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)' }} className="row p-4">
                    <div className="col-md-5 imgEdit">

                    </div>
                    <div style={{}} className=" col-md-7 editUser w-100 p-5">
                        <h5 className='MenuRow'>THÊM THẺ</h5>
                        <h6>Mã Số Thẻ</h6>
                        <input type="text"
                            className="form-control mb-2" name="" id="" aria-describedby="helpId" placeholder="" />
                        <h6>Ngân Hàng</h6>
                        <select className="form-control mb-2" id="exampleFormControlSelect1" >
                            <option> </option>
                            <option>TP Bank</option>
                            <option>Viettin Bank</option>
                            <option>Vietcom Bank</option>
                            <option>AgriBank</option>
                            <option>Đông Á</option>
                        </select>
                        <h6>Quốc Gia</h6>
                        <input type="email"
                            className="form-control mb-2" name="" id="" aria-describedby="helpId" placeholder="" />
                        <h6>Mã Bưu Điện</h6>
                        <input type="text"
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

export default AddCard;