import React from 'react';
import Menustore from '../component/Menustore';
import Footer from '../component/Footer';
function Addproduct() {
    return (
        <div className="Addproduct">
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
                    
                    <div className="col-md-10 c-12 menu_phai ">
                        <div className="row m-5 p-5 bg-white">
                            <div className="col-md-2 c-12">
                                Ảnh
                            <div className="input-group mb-3 c-12">
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="inputGroupFileAddon02">Choose file</label>
                                    </div>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="inputGroupFileAddon02">Upload</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                Thông tin cơ bản<br />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Mã sản phẩm</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Mã vạch</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <div style={{ border: 'solid 1px silver' }} className="dropdown">
                                            <a className="btn MenuR dropdown-toggle MenuRow1" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Danh mục
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                <a className="dropdown-item MenuRow" href="#">Action</a>
                                                <a className="dropdown-item MenuRow" href="#">Another action</a>
                                                <a className="dropdown-item MenuRow" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-5">
                                Thông tin cơ bản<br />
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Cửa hàng</label>
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Gía nhập</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Gía bán</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Vốn đầu</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Nhà cung cấp</label>
                                        <input type="text" className="form-control" id="exampleInputPassword1" />
                                    </div>
                                </form>
                            </div>
                            <div className="nut text-center">
                            <a href="#" className="btnlogin p-2">Lưu sản phẩm</a>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Addproduct;