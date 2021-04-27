import React from 'react';
import {
    BrowserRouter as Router,
    NavLink
} from "react-router-dom";

CardDemo.propTypes = {

};

function CardDemo(props) {
    const { oneProduct } = props
    return (
        <div>
            <div className="row mt-3">
            <div className="col-md-3 mb-4">
                <div className="card product">
                    <div className="khoi">
                        <div className="layer1">
                            <img className="card-img-top mt-4" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12-768x768.jpg" alt="" />
                        </div>
                        <div style={{ width:'100%' }} className="layer2">
                            <div className="text-right">
                            <i class="fa fa-heart-o p-2 t"></i>
                            </div>
                            <div className="text-center">
                            <div className="icon-card-plus text-center">
                                <i className="fa fa-plus pt-3" aria-hidden="true"/>
                            </div>
                            </div>
                        </div>
                        <div className="card-body text-left ml-2">
                            <small className="sieuthi mb-3">Lotel mart</small> <br></br>
                            <div className="text-center">
                            <div><NavLink className="card-title tensp" to="/Product">Chanh Vàng</NavLink></div>
                            <small className="trongluong">500g</small>
                            <p className="gia mt-1">15000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card product">
                    <div className="khoi">
                        <div className="layer1">
                            <img className="card-img-top mt-4" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12-768x768.jpg" alt="" />
                        </div>
                        <div style={{ width:'100%' }} className="layer2">
                            <div className="text-right">
                            <i className="fa fa-heart-o p-2 t"></i>
                            </div>
                            <div className="text-center">
                            <div className="icon-card-plus text-center">
                                <i className="fa fa-plus pt-3" aria-hidden="true"/>
                            </div>
                            </div>
                        </div>
                        <div className="card-body text-left ml-2">
                            <small className="sieuthi mb-3">Lotel mart</small> <br></br>
                            <div className="text-center">
                            <div><NavLink className="card-title tensp" to="/Product">Chanh Vàng</NavLink></div>
                            <small className="trongluong">500g</small>
                            <p className="gia mt-1">15000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card product">
                    <div className="khoi">
                        <div className="layer1">
                            <img className="card-img-top mt-4" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12-768x768.jpg" alt="" />
                        </div>
                        <div style={{ width:'100%' }} className="layer2">
                            <div className="text-right">
                            <i className="fa fa-heart-o p-2 t"></i>
                            </div>
                            <div className="text-center">
                            <div className="icon-card-plus text-center">
                                <i className="fa fa-plus pt-3" aria-hidden="true"/>
                            </div>
                            </div>
                        </div>
                        <div className="card-body text-left ml-2">
                            <small className="sieuthi mb-3">Lotel mart</small> <br></br>
                            <div className="text-center">
                            <div><NavLink className="card-title tensp" to="/Product">Chanh Vàng</NavLink></div>
                            <small className="trongluong">500g</small>
                            <p className="gia mt-1">15000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card product">
                    <div className="khoi">
                        <div className="layer1">
                            <img className="card-img-top mt-4" src="https://klbtheme.com/qualis/wp-content/uploads/2018/12/p12-768x768.jpg" alt="" />
                        </div>
                        <div style={{ width:"100%" }} className="layer2">
                            <div className="text-right">
                            <i className="fa fa-heart-o p-2 t"></i>
                            </div>
                            <div className="text-center">
                            <div className="icon-card-plus text-center">
                                <i className="fa fa-plus pt-3" aria-hidden="true"/>
                            </div>
                            </div>
                        </div>
                        <div className="card-body text-left ml-2">
                            <small className="sieuthi mb-3">Lotel mart</small> <br></br>
                            <div className="text-center">
                            <div><NavLink className="card-title tensp" to="/Product">Chanh Vàng</NavLink></div>
                            <small className="trongluong">500g</small>
                            <p className="gia mt-1">15000 đ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default CardDemo;