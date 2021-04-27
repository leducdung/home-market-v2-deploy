import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';

function Outofstock(props) {
    return (
        <div className="Outofstock">
            <Menustore></Menustore>
            <div className="container-fuild ">
                <div className="row">
                    <div className="col-md-2 c-12 menu-trai">
                        <div className="sanpham pt-2 pb-2 MenuRow1">
                            <i className="fa fa-cube" />  Xuất nhập kho
                        </div>
                        <div className="danhmuc-thuonghieu">
                            <select className="form-control ">
                                <option>Kiểm kho</option>
                                <option>Danh sách phiếu kiểm kho</option>
                                <option>Sản phẩm</option>
                            </select>
                        </div>
                        <div className="sanpham pt-2 pb-2">
                            Lịch sử xóa
                        </div>
                    </div>
                    <div className="col-md-10 c-12 menu_phai">
                        {/* thanhcongcu */}
                        <ul className="nav nav-tabs mt-2">
                            <li className="nav-item">
                                <a className="nav-link MenuRow " href="/Warehouseentry"> <i className="fa fa-edit pr-2" />Phiếu nhập kho</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active MenuRow1" href="/Outofstock"><i className="fa fa-edit pr-2" />Phiếu xuất kho</a>
                            </li>
                        </ul>
                        {/* themsanpham */}
                        <div className="themmoi mt-3 mb-3 ml-2">
                            <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
                        </div>
                        {/* bangsanpham */}
                        <div className="table-responsive-sm mt-3">
                            <table className="table table-bordered table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Ngày nhập</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Tổng số xuất</th>
                                        <th scope="col">Tồn</th>
                                        <th scope="col">Gía vốn</th>
                                        <th scope="col">Gía bán</th>
                                        <th scope="col">Tổng tiền</th>
                                        <th scope="col">Người lập biểu</th>
                                        <th scope="col">Ghi chú</th>
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
                                        <td>@mdo</td>
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
                                        <td>@mdo</td>
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

export default Outofstock;