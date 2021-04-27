import React from 'react';
import Menu from '../component/nav/Menu';
import Footer from '../component/Footer';

function Product() {

  const token =  localStorage.getItem('access_token');

    return (
      <>
    <Menu token={token}></Menu>
        <div style={{marginTop:'45px'}}>
            <div>
                <div style={{ backgroundColor: '#fff', borderColor: '#eee #eee #d5d5d5 #eee', boxShadow: '0 5px 0 rgb(200 200 200 / 20%)', zIndex: 10, position: 'relative' }} className="container mb-5">
                    <div className="row">
                        <div style={{ backgroundColor: '#fff' }} className="col-md-6 mt-4 sp">
                            <img style={{ width: '400px', height: '400px' }} src="https://product.hstatic.net/1000301274/product/than-ngoai-bo-my-homefarm.png" alt="" />
                        </div>
                        <div className="col-md-6">
                            <h4 className="mt-3">ORGANIC SWEET CORN</h4>
                            <div style={{ color: '#80b435' }} className="rating">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                            </div>
                            <hr />
                            <h4 className="gia">900000 VNĐ</h4>
                            <div className="btn-group">
                                <div className="tanggiam">
                                    <button type="button" className="btn sl sum">+</button>
                                    <div style={{ width: '35px' }} className="soluong sl" />
                                    <button type="button" className="btn sl minus">-</button>
                                </div>
                                <button type="button" className="btn addcart ml-2"><i className="fa fa-cart-plus" aria-hidden="true" /> THÊM VÀO GIỎ
            HÀNG</button>
                            </div>
                            <div className="mt-4 mb-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni minima dignissimos ea officiis aliquam id hic,
                                consequuntur nulla labore quam illo maxime deleniti quaerat nesciunt? Vero aut animi deleniti laborum?
        </div>
                            <hr />
                            <button type="button" className="btn btnsub"><i className="fa fa-heart mr-2" aria-hidden="true" /> Thêm vào danh sách
          yêu thích</button>
                            <div className="mt-4 mb-4">
                                <div className>
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
                            <div className="mt-4">
                                <li>Miễn phí vận chuyển trong vòng 10km </li>
                                <li>Thời gian giao hàng 30-60p kể từ khi đặt hàng</li>
                                <li> Giảm giá thành viên</li>
                                <p> <b style={{ color: '#80b435' }}>Mã:</b> KJ7SA62 <b style={{ color: '#80b435' }}>Danh mục:</b> Rau</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff' }} className="container p-4 mb-5">
                    <h4>Sản Phẩm Thường Được Mua Chung</h4>
                    <div className="card-deck">
                       <div className="card">
                            <img className="card-img-top-1" src="./img/canuocngot/cahu.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top-1" src="./img/canuocngot/cahu.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top-1" src="./img/canuocngot/cahu.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top-1" src="./img/canuocngot/cahu.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Title</h4>
                                <p className="card-text">Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <Footer></Footer>
    </>
    );
}

export default Product;