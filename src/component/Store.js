
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
export default function Store () { 
        return (
            <div className="mb-5">
                <div className="store">
                    <div className="slide pb-4">
                        <div className="container p-4 mt-4">
                            <h1 className="text-center title">Các SiêU Thị Liên Kêt Với Home Martket</h1>
                            <div className="row pt-3">
                                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <p className="comment p-4">"BigC là thương hiệu của tập đoàn phân phối bán lẻ Groupe Casino (Pháp) tại Thái
                                            Lan và Việt Nam. BigC được thành lập vào năm 1993 và mở cửa hàng đầu tiên của mình tại ngã tư Wong
                                            Sawang, Bangkok, Thái Lan. ... Hiện tại, mỗi siêu thị BigC có khoảng hơn 40.000 mặt hàng để đáp ứng
                                            cho nhu cầu của Khách hàng.
                                            "</p>
                                            <img className="avt mt-3 ml-4" src="./img/STORE-COVER2x-removebg-preview (1).png" alt="" />
                                            <strong style={{ color: '#000000' }}>Siêu Thị BIG C</strong>
                                        </div>
                                        <div className="carousel-item">
                                            <p className="comment p-4">"Được thành lập từ năm 2013, chúng tôi là chuỗi cửa hàng phân phối thực phẩm sạch
                                            đến người tiêu dùng với định hướng kinh doanh từ nông trại đến bàn ăn. Thực phẩm canh tác tự nhiên, sơ
                                            chế thô, bảo quản nghiêm ngặt và giao tới tận tay khách hàng... đó là những gì 3Sạch Food đang hướng
                                            đến."</p>
                                            <img className="avt mt-3 ml-4" src="img/3sachfood-removebg-preview.png" alt="" />
                                            <strong style={{ color: '#000000' }}>3 Sạch Food</strong>
                                        </div>
                                        <div className="carousel-item">
                                            <p className="comment p-4">"Đã qua rồi cái thời mà
                                            bạn gửi hàng loạt email để biết tình trạng
                                            sẵn có và phải
                                            phân loại từng người để tìm ra thời điểm
                                            thích hợp nhất.
                                            "</p>
                                            <img className="avt mt-3 ml-4" src="images/avt1.JPG" alt="" />
                                            <strong style={{ color: '#000000' }}>Trần Tuấn Kiệt</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
         
                <div className="spkm logostore mb-4 bg-white">
                        <div className="card-deck mt-4 mb-4">
                            <div className="card text-center">
                                <img className="card-img-top1 W-100%" src="img/STORE-COVER2x-removebg-preview.png" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                </div>
                            </div>
                            <div className="card text-center">
                                <img className="card-img-top1 W-100%" src="img/3sachfood-removebg-preview.png" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                </div>
                            </div>
                            <div className="card text-center">
                                <img className="card-img-top1 W-100%" src="img/STORE-COVER-font212x-removebg-preview.png" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                </div>
                            </div>
                            <div className="card text-center">
                                <img className="card-img-top1 W-100%" src="img/8VUy8qPmS8iNxGu4egBj_logo_2x-removebg-preview.png" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                </div>
                            </div>
                            <div className="card text-center">
                                <img className="card-img-top1 W-100%" src="img/STORE-COVER2x-removebg-preview (1).png" alt="" />
                                <div className="card-body">
                                    <h4 className="card-title">Title</h4>
                                </div>
                            </div>
                            <div className="card text-center">

                                <span className="pt-4"></span>
                                <NavLink className="MenuRow" to="/ManyStore">Xêm Thêm</NavLink>
                                
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

