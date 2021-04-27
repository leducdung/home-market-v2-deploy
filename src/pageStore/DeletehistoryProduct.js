import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';

function DeletehistoryProduct(props) {
    return (
        <div>
            <Menustore></Menustore>
            <div className="container-fuild ">
                <div className="row">
                    <div className="col-md-2 c-12 menu-trai">
                        <div className="sanpham MenuRow1 pt-2 pb-2">
                            <i className="fa fa-cube"/>  Sản Phẩm
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
                                    <a className="dropdown-item MenuRow" href="#">Action</a>
                                    <a className="dropdown-item MenuRow" href="#">Another action</a>
                                    <a className="dropdown-item MenuRow" href="#">Something else here</a>
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
                                <a className="nav-link MenuRow" href="/Pricefixes"> <i className="fa fa-edit pr-2" />Có sửa giá bán</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link MenuRow" href="/Correctentryprice"><i className="fa fa-edit pr-2" />Có sửa giá nhập</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active MenuRow1" href="/DeletehistoryProduct" tabIndex={-1} aria-disabled="true"><i className="fa fa-trash pr-2" />Lịch sử xóa</a>
                            </li>
                        </ul>
                        {/* bangsanpham */}
                        <div className="table-responsive-sm text-center mt-3">
                            <table style={{ margin: '0 auto' }} className="table table-bordered table-responsive-sm">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">Mã sản phẩm</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Người sửa</th>
                                        <th scope="col">Thời gian</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td />
                                        <td />
                                        <td />
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td />
                                        <td />
                                        <td />
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td />
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

export default DeletehistoryProduct;