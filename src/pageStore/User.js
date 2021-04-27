import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';

function User(props) {
    return (
        <div>
            <Menustore></Menustore>
            <div className="container-fuild ">
  <div className="row">
    <div className="col-md-2 c-12 menu-trai">
      <div className="sanpham pt-2 pb-2 MenuRow1">
        <i className="fa fa-cube" /> Khách hàng
      </div>
    </div>
    <div className="col-md-10 c-12 menu_phai">
      {/* thanhcongcu */}
      <ul className="nav nav-tabs mt-2">
        <li className="nav-item">
          <a className="nav-link active MenuRow1" href="#"><i className="fa fa-bars pr-2" /> Tất cả</a>
        </li>
        <li className="nav-item">
          <a className="nav-link MenuRow" href="#"> <i className="fa fa-shopping-cart" /> Mua nhiều</a>
        </li>
        <li className="nav-item">
          <a className="nav-link MenuRow" href="#"><i className="fa fa-birthday-cake" /> Mua nhiều,sinh nhật trong tháng</a>
        </li>
        <li className="nav-item">
          <a className="nav-link MenuRow" href="#" tabIndex={-1} aria-disabled="true"><i className="fa fa-trophy" /> Mua thường xuyên</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-danger " href="#" tabIndex={-1} aria-disabled="true"><i className="fa fa-exclamation-triangle" /> Lâu không mua hàng</a>
        </li>
      </ul>
      {/* themsanpham */}
      <div className="themmoi mt-3 mb-3 ml-2">
        <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>      
      </div>
      {/* bangsanpham */}
      <div className="table-responsive-sm pb-5">
        <table className="table table-bordered table-responsive-sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Khách hàng</th>
              <th scope="col">Cấp độ</th>
              <th scope="col">Điện thoại</th>
              <th scope="col">Tổng tiền</th>
              <th scope="col">Số lần mua</th>
              <th scope="col">Số SP</th>
              <th scope="col">Điểm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>Mark</td>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

            <Footer></Footer>
        </div>
    );
}

export default User;