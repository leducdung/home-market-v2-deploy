import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';

function Billofreturn(props) {
    return (
        <div>
            <Menustore></Menustore>
            <div className="container-fuild ">
                <div className="row">
                    <div className="col-md-2 c-12 menu-trai">
                        <div className="sanpham pt-2 pb-2">
                            <a className="MenuRow" href="/Billofsale"> <i className="fa fa-cube" />  Hóa đơn bán</a>
                        </div>
                        <div style={{ color: '#eb4d4b' }} className="sanpham pt-2 pb-2">
                            <a className="MenuRow1" href="/Bilofreturn"><i className="fa fa-cube" />  Hóa đơn trả hàng</a>
                        </div>
                    </div>
                    <div className="col-md-10 c-12 menu_phai">
                        {/* thanhcongcu */}
                        {/* themsanpham */}
                        <div className="themmoi mt-3 mb-3 ml-2">
                            <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
                        </div>
                        {/* bangsanpham */}
                        <div className="table-responsive-sm mt-3">
                            <table className="table table-bordered table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Ngày trả</th>
                                        <th scope="col">Khách hàng</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col">Sản phẩm</th>
                                        <th scope="col">Gía</th>
                                        <th scope="col">Số lượng</th>
                                        <th scope="col">Trả lại</th>
                                        <th scope="col">Phí phải trả</th>
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
                                        <td />
                                        <td />
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
                                        <td />
                                        <td />
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
                                        <td />
                                        <td />
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

export default Billofreturn;