import React from 'react';
import { NavLink
  } from "react-router-dom";
  import Footer from '../component/Footer';
  import Menu from '../component/nav/Menu';
import CardDemo2 from '../component/user/combined/CardDemo2';
function Beat() {
  const token =  localStorage.getItem('access_token');
    return (
      <>
      <Menu token={token}></Menu>
        <div className="mb-5 pt-5">

            <div className="container">
                <div className="row">
                <div style={{ boxShadow: ' 0 5px 0 rgb(200 200 200 / 20%)', backgroundColor: "white" }} className="col-md-3">
                        <div style={{border:'none'}} className="card mt-4">
                            <div className="card-header">
                               <h6 className="MenuColumn1"> NGÀNH HÀNG</h6>
                            </div>
                            <ul style={{ textTransform:'uppercase'}} className="list-group list-group-flush">
                                <li className="list-group-item"><NavLink className="MenuColumn1" to="/Beat">Thịt</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/Seafood">Hải Sản</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/Poultry">Gia Cầm</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/MilkEgg">Trứng, Sữa</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/Frozenfood">Đồ Đông Lạnh</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/Fruit">Trái Cây</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/Bread">Bánh Mì</NavLink></li>
                                <li className="list-group-item"><NavLink className="MenuColumn" to="/Vegartable">Rau, Củ</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 pr-0">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://dl.airtable.com/.attachments/470b99ae8a22a94a7b7f4b6f6ebadc6d/be65fde8/FS-vi2x.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://dl.airtable.com/.attachments/20e7c5182de672999d587dc48c9c3ee5/b3ce7bd7/FS-vi2x-.jpg" className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://dl.airtable.com/.attachments/4e17a50e334f3e19b84a612681c66eb0/a052cbf7/FS-Vi2x.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>


                    </div>
                </div>
                <h5 className="mt-4">THỊT</h5>
                <CardDemo2></CardDemo2>
                {/* <h5 className="mt-4">HẢI SẢN</h5> */}
                <CardDemo2></CardDemo2>
                {/* <h5 className="mt-4">GIA CẦM</h5> */}
                <CardDemo2></CardDemo2>
                {/* <h5 className="mt-4">TRỨNG SỮA</h5> */}
                <CardDemo2></CardDemo2>
                {/* <h5 className="mt-4">ĐỒ ĐÔNG LẠNH</h5> */}
                
            </div>
        </div>
        <Footer></Footer>
    </>
        );
}

export default Beat;