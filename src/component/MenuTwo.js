import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";

export default function MenuTow() {
  return (
    <div className="sticky-top" style={{ padding: '0px', margin: '0px' }}>
      <section className="menu container-fluid ">
        <nav style={{ backgroundColor: 'white' ,boxShadow:'0 1px 8px #555555' }} id="menu" className="navbar navbar-expand-lg navbar-light bg-light text-center ">
          <NavLink className="MenuRow" to="/"> <img width="70" height="70" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/173230510_1216984905426913_7821080656904254425_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=B-L1PQmC8g8AX_LFXex&_nc_ht=scontent.fdad2-1.fna&oh=a2347f8b7394837265bfe01fc2789205&oe=60A630A5"></img> </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span style={{ color: 'white' }} className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse pr-3" id="navbarText">
            <ul className="navbar-nav mr-auto justify-content-center">
              <li className="nav-item active">
                <NavLink className="nav-link js-scroll-trigger MenuRow1" to="/">TRANG CHỦ</NavLink>

              </li>
              <li className="nav-item">
                <NavLink className="nav-link js-scroll-trigger MenuRow" to="/Introduce">GIỚI THIỆU</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link js-scroll-trigger MenuRow" to="/Industry">NGÀNH HÀNG</NavLink>
              </li>
              <li className="nav-item ml-2 mr-2">
                <NavLink className="nav-link js-scroll-trigger MenuRow" to="/KhuyenMai">KHUYẾN MÃI</NavLink>
              </li>
            </ul>
            <span className="navbar-text pr-1">
            <input type="search"
                  className="form-control search " name="" id="" aria-describedby="helpId" placeholder="Search"/>
            </span>
            <span className="navbar-text pr-1">

              <NavLink className="nav-link cartMenu" to="/Giohang"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></NavLink>
            </span>
            <span className="navbar-text pr-3">
                <div className="dropdown open">
                    <button className="btn dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                            aria-expanded="false">
                            <img className='mr-4 avt' width='50px' alt="Generic placeholder image" src="https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/41708923_945274225666899_3528518235861286912_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=ad2b24&_nc_ohc=Kca1NJtAXF4AX9qWttT&_nc_oc=AQlbbwtPIEDRAJ8EihYOATqnMuq-K4BTFsp-PnmumUFp8ZORkIDlSAoOQ5ZfzCNMca0iKPT6DYPC8xAzKQBLWyrF&_nc_ht=scontent.fdad2-1.fna&oh=4b9ac5a0e2b31b853a2cda74ed39ea37&oe=60A3F646" />
                            </button>
                    <div className="dropdown-menu dropdown-menu-right p-3" aria-labelledby="triggerId">
                        <NavLink className="dropdown-item mb-2 MenuRow" to="/InformationUser">Thông Tin Cá Nhân</NavLink>
                        <NavLink className="dropdown-item  MenuRow" to="/ResetPassword">Đổi MẩT Khẩu</NavLink>
                        <NavLink className="dropdown-item  MenuRow" to="/RegisterStore">Đăng Kí Chủ Cửa Hàng</NavLink>

                    </div>
                </div>
            </span>
            <span className="navbar-text">
              {/* <div className="dropdown">
                <button className="" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h6a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>

                    </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <button className="dropdown-item" href="#">Action</button>
                  <button className="dropdown-item disabled" href="#">Disabled action</button>
                </div>
              </div> */}

            </span>
          </div>
        </nav>

      </section>
    </div >




  )

}
