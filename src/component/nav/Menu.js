import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
import Option from './Option';

export default function Menu(props) {
  const {token} = props
    return (
      <div className="sticky-top" style={{ padding: '0px', margin: '0px',zIndex:'101' }}>
        <section className="menu container-fluid ">
          <nav style={{ backgroundColor: 'white' ,boxShadow:'0 1px 8px #555555' }} id="menu" className="navbar navbar-expand-lg navbar-light bg-light text-center">
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
              <span className="navbar-text pr-3">
              <input type="search"
                    className="form-control search " name="" id="" aria-describedby="helpId" placeholder="Search"/>
              </span>
              <span className="navbar-text pr-3">

                <NavLink className="nav-link cartMenu" to="/Giohang"><i className="fa fa-cart-arrow-down" aria-hidden="true"></i></NavLink>
              </span>
              <Option token={token}></Option>
            </div>
          </nav>

        </section>
      </div >
    )

}
