import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';

function Pricefixes() {
    return (
        <div>
            <Menustore></Menustore>
            <div className="container-fuild ">
                <div className="row">
                    <div className="col-md-2 c-12 menu-trai">
                        <div className="sanpham MenuRow1 pt-2 pb-2">
                            <i className="fa fa-cube" />  Sản Phẩm
      </div>
                        <div className="danhmuc-thuonghieu">
                            <div className="dropdown">
                                <a className="btn MenuRow dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Danh mục và thương hiệu
          </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                        <div className="sanpham MenuRow pt-2 pb-2">
                            Thuộc tính
      </div>
                        <div className="danhmuc-thuonghieu">
                            <div className="dropdown">
                                <a className="btn MenuRow dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Nhà cung cấp
          </a>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-10 c-12 menu_phai">
                        {/* thanhcongcu */}
                        <ul className="nav nav-tabs mt-2">
                            <li className="nav-item">
                                <a className="nav-link MenuRow" href="/Productstore"><i className="fa fa-bars pr-2" />Tất cả</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active MenuRow1" href="/Pricefixes"> <i className="fa fa-edit pr-2" />Có sửa giá bán</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link MenuRow" href="/Correctentryprice"><i className="fa fa-edit pr-2" />Có sửa giá nhập</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link MenuRow" href="/DeletehistoryProduct" tabIndex={-1} aria-disabled="true"><i className="fa fa-trash pr-2" />Lịch sử xóa</a>
                            </li>
                        </ul>
                        {/* themsanpham */}
                        {/* bangsanpham */}
                        <div className="table-responsive-sm mt-3">
                            <table className="table table-bordered table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Gía bán cũ</th>
                                        <th scope="col">Gía bán mới</th>
                                        <th scope="col">Người sửa</th>
                                        <th scope="col">Thời gian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
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

export default Pricefixes;