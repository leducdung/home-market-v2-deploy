import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';


function Productstore() {
    return (
        <div className="container-fuild ">
            <Menustore></Menustore>
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
                        <a href="#" className="MenuRow sanpham pt-2 pb-2">
                            Thuộc tính
                        </a>
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
                <ul className="nav nav-tabs mt-2">
                            <li className="nav-item">
                                <a style={{ color: '#343a40' }} className="nav-link MenuRow" href="/Productstore"><i className="fa fa-bars pr-2" />Tất cả</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: '#343a40' }} className="nav-link MenuRow"  href="/Pricefixes"> <i className="fa fa-edit pr-2" />Có sửa giá bán</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active MenuRow1" href="/Correctentryprice"><i className="fa fa-edit pr-2" />Có sửa giá nhập</a>
                            </li>
                            <li className="nav-item">
                                <a style={{ color: '#343a40' }} className="nav-link MenuRow" href="/DeletehistoryProduct" tabIndex={-1} aria-disabled="true"><i className="fa fa-trash pr-2" />Lịch sử xóa</a>
                            </li>
                        </ul>
                    <div className="themmoi mt-3 mb-3 ml-2">
                        <a href="themsanpham.html" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
                    </div>
                    <div className="table-responsive-sm pb-5">
                        <table className="table table-bordered table-responsive-sm">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Ảnh</th>
                                    <th scope="col">Mã vạch</th>
                                    <th scope="col">Tên sản phẩm</th>
                                    <th scope="col">Gía nhập</th>
                                    <th scope="col">Gía bán</th>
                                    <th scope="col">Tổng tồn</th>
                                    <th scope="col">Đã bán</th>
                                    <th scope="col">Tổng tiền</th>
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
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>Mark</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                    <td>Mark</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Mark</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Productstore;