import React from 'react';
import Footer from '../component/Footer';
import Menustore from '../component/Menustore';

function Sale() {
    return (
        <div>
            <Menustore></Menustore>
            <div className="container-fuild ">
                <div className="row">
                    <div className="col-md-2 c-12 menu-trai">
                        <div className="sanpham MenuRow1 pt-2 pb-2">
                            <i className="fa fa-cube" /> Khuyến mãi
      </div>
                    </div>
                    <div className="col-md-10 c-12 menu_phai">
                        <div className="row mt-5">
                            <div className="col md-6 khuyenmai ml-3 mr-4 mb-4 ">
                                <div className="themmoi mt-3 mb-3 ml-2">
                                    <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
            Khuyến mãi theo hóa đơn <br />
            VD:
            <br />
            - Hóa đơn từ 100.000 tới 200.000, KH cấp độ BẠC giảm 5%
            <br />
            - Hóa đơn từ 200.000 tới 300.000, KH cấp độ VÀNG giảm 10%
          </div>
                            </div>
                            <div className=" col md-6 khuyenmai ml-4 mb-4">
                                <div className="themmoi mt-3 mb-3 ml-2">
                                    <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
            Khuyến mãi theo danh mục sản phẩm <br />
            VD:
            <br />
            - Sản phẩm trong danh mục "Quần" giảm 5%
            <br />
            - Sản phẩm trong danh mục "Áo sơ mi" giảm 10%
          </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col md-6 khuyenmai ml-3 mr-4 mb-4 ">
                                <div className="themmoi mt-3 mb-3 ml-2">
                                    <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
            Khuyến mãi giảm giá theo só lượng sản phẩm <br />
            VD: 1 sản phẩm A giá 100.000
            <br />
            - Mua từ 2 - 3 sản phẩm A giảm 30.000
            <br />
            - Mua từ 4 - 6 sản phẩm A giảm 40.000
            <br />
            - Mua từ 7 sản phẩm A giảm 50.000
          </div>
                            </div>
                            <div className=" col md-6 khuyenmai ml-4 mb-4">
                                <div className="themmoi mt-3 mb-3 ml-2">
                                    <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
            Khuyến mãi giá theo số lượng sản phẩm <br />
            VD: 1 sản phẩm A giá 100.000
            <br />
            - Mua từ 2 - 3 sản phẩm A: giá bán mỗi sản phẩm còn 90.000
            <br />
            - Mua từ 4 - 6 sản phẩm A: giá bán mỗi sản phẩm còn 80.000
            <br />
            - Mua từ 7 sản phẩm A: giá bán mỗi sản phẩm còn 70.000
          </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col md-6 khuyenmai ml-3 mr-4 mb-4 ">
                                <div className="themmoi mt-3 mb-3 ml-2">
                                    <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
            Khuyến mãi theo từng sản phẩm <br />
            VD:
            <br />
            - IPhone 6 Vàng 32 GB giảm 5%
            <br />
            - IPad Air mini 64 GB giảm 200.000
          </div>
                            </div>
                            <div className=" col md-6 khuyenmai ml-4 mb-4">
                                <div className="themmoi mt-3 mb-3 ml-2">
                                    <a href="/Addproduct" className="btn btn-outline-danger">THÊM MỚI<i className="fa fa-plus pl-1" /></a>
            Khuyến mãi đồng giá<br />
            VD:
            <br />
            - Xả hàng quần bò đồng giá 250.000
            <br />
            - Xả hàng áo sơ mi 100.000
          </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}

export default Sale;