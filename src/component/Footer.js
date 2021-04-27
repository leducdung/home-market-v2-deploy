import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className="footer">
                <h5 className="text-center pt-3" style={{ verticalAlign: 'inherit', color: 'white' }}>BẢN TIN</h5>
                <h2 className="mt-3 text-center" style={{ color: '#80b435', fontFamily: '"Oswald", sans-serif', fontSize: '38px', letterSpacing: '0px', fontWeight: 400, textTransform: 'uppercase' }}>NHẬN GIẢM GIÁ 30%</h2>
                <div style={{ maxWidth: '700px' }} className="container">
                    <form className="d-flex">
                        <input className="form-control ml-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn sent-email ml-2 pl-2 pr-2" type="submit"><i className="fa fa-envelope pr-2" />ĐĂNG
        KÍ</button>
                    </form>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h6 style={{ color: '#80b435', fontWeight: 'bold' }}>HƯỚNG DẪN MUA SẮM</h6>
                            <a href="#">Blog</a><br /><br />
                            <a href="#">Câu hỏi thường gặp</a> <br /><br />
                            <a href="#">Thanh toán</a><br /><br />
                            <a href="#">Lô hàng</a><br /><br />
                            <a href="#">Chính sách hoàn trả</a><br /><br />
                            <a href="#">Đơn hàng của tôi ở đâu?</a><br /><br />
                        </div>
                        <div className="col-md-3">
                            <h6 style={{ color: '#80b435', fontWeight: 'bold' }}>CỐ VẤN STYLE</h6>
                            <a href="#"> Tài khoản của bạn</a><br /><br />
                            <a href="#">Thông tin</a> <br /><br />
                            <a href="#">Địa chỉ</a><br /><br />
                            <a href="#">Giảm giá</a><br /><br />
                            <a href="#"> Lịch sử đơn hàng</a><br /><br />
                            <a href="#">Theo dõi đơn hàng</a><br /><br />
                        </div>
                        <div className="col-md-2">
                            <h6 style={{ color: '#80b435', fontWeight: 'bold' }}>THÔNG TIN</h6>
                            <a href="#"> Sơ đồ trang web</a><br /><br />
                            <a href="#">Cụm từ tìm kiếm</a> <br /><br />
                            <a href="#">tìm kiếm nâng cao</a><br /><br />
                            <a href="#">Về chúng tôi</a><br /><br />
                            <a href="#"> Liên hệ chúng tôi</a><br /><br />
                            <a href="#">Các nhà cung cấp</a><br /><br />
                        </div>
                        <div className="col-md-1 text-right">
                            <i className="fa fa-map-marker " aria-hidden="true" /><br />
                            <i className="fa fa-phone mt-3" aria-hidden="true" /><br />
                            <i className="fa fa-envelope mt-3" /><br />
                        </div>
                        <div className="col-md-3">
                            <a className="mb-3" href="#">254 Nguyễn Văn Linh, Phường Thạch Gián, Quận Thanh Khê, TP Đà Nẵng</a> <br /><br />
                            <a className="mb-3" href="#"> 0905674603</a> <br /><br />
                            <a className="mb-3" href="#">Homemaket@gmail.com</a>
                        </div>
                    </div>
                    <div style={{ color: 'whitesmoke', border: 'solid 1px whitesmoke' }} />
                    <div className="row mt-3">
                        <div className="col-md-4">
                            <div >
                                <div className="iconfb icon">
                                    <i className="fa fa-facebook p-2" aria-hidden="true" />
                                </div>
                                <div className="icontw icon">
                                    <i className="fa fa-twitter p-2" aria-hidden="true" />
                                </div>
                                <div className="iconytb icon">
                                    <i className="fa fa-youtube p-2" aria-hidden="true" />
                                </div>
                                <div className="iconpinterest icon">
                                    <i className="fa fa-pinterest p-2" aria-hidden="true" />
                                </div>
                                <div className="iconinsta icon">
                                    <i className="fa fa-instagram p-2" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        </div>
                        <div className="col-xs-12 col-sm-4 text-right">
                            <div className="payment-accept"> <img src="https://klbtheme.com/qualis/wp-content/uploads/2019/01/payment-1.png" alt="hình ảnh thanh toán" /> <img src="https://klbtheme.com/qualis/wp-content/uploads/2019/01/payment-3.png" alt="hình ảnh thanh toán" />
                                <img src="https://klbtheme.com/qualis/wp-content/uploads/2019/01/payment-2.png" alt="hình ảnh thanh toán" />
                                <img src="https://klbtheme.com/qualis/wp-content/uploads/2019/01/payment-4.png" alt="hình ảnh thanh toán" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
