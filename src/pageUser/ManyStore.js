import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Menu from '../component/nav/Menu';
import Footer from '../component/Footer';
function ManyStore() {

  const token =  localStorage.getItem('access_token');

    return (
      <>
      <Menu token={token}></Menu>
        <div className="mb-5">
            <h5 className="text-center m-4">Cửa Hàng Nổi Bật</h5>
            <div style={{backgroundColor:'white'}} className="container p-5">
                <div className="row">
                    <div className="col-md-3">
                    <NavLink className="TopMarket" to="/InformationStore">

                        <img className='w-100' src="https://dl.airtable.com/.attachments/af3c017bd2d70d483b021944b06fcae4/024827e6/STORE-COVER2x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4"> Top Market</h6>
                        </NavLink>
                    </div>

                    <div className="col-md-3">
                    <NavLink className="TopMarket" to="/InformationStore">

                        <img className='w-100' src="https://dl.airtable.com/gHI31HCSELYU8QuBRNwQ_AnNam%402x.png"></img>
                        <h6 className="MenuRow text-center mt-4"> Annam Gourmet </h6>
                    </NavLink>

                    </div>
                    <div className="col-md-3">
                        <img className='w-100' src="https://dl.airtable.com/4GEHCEMSH6S1VGinxdju_Nam%20an-large%402x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Nam An Market</h6>
                    </div>
                    <div className="col-md-3">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/ee169d6a5b5d149719c7d6bae6971a84/65130b46/STORE-COVER2x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Nông Sản Nhà Quê</h6>
                    </div>
                </div>
            </div>
            <h5 className="text-center m-4">Siêu Thị</h5>
            <div style={{backgroundColor:'white'}} className="container p-5">
                <div className="row mb-4">
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/af3c017bd2d70d483b021944b06fcae4/024827e6/STORE-COVER2x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Top Market </h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/e806f7d568a6712c39560d8f8d6126c6/506feecf/aeon-citimart2x.png"></img>
                        <h6 className="MenuRow text-center mt-4">Aeon Citimart</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/4GEHCEMSH6S1VGinxdju_Nam%20an-large%402x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Nam An Market </h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/gHI31HCSELYU8QuBRNwQ_AnNam%402x.png"></img>
                        <h6 className="MenuRow text-center mt-4">Annam Gourmet </h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/ee169d6a5b5d149719c7d6bae6971a84/65130b46/STORE-COVER2x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4"> Nông Sản Nhà Quê</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/54b438a3d1b6006921c19b6353ac41c9/b33c9e07/lotte-20200418-vi2x.png"></img>
                        <h6 className="MenuRow text-center mt-4">LotteMart </h6>
                    </div>

                </div>

                <div className='row'>
                <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/2bd4a4324645f3249be74c3f8b1e525b/c7757498/chopp-selects2x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">ChoppSelects</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/945c289a31f0c5b7f2861c7a2a8c1428/1b67e37c/logo-900x900-12x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">3SẠCH FOOD</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/8VUy8qPmS8iNxGu4egBj_logo%402x.png"></img>
                        <h6 className="MenuRow text-center mt-4">Cho Pho Fresh Food</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/.attachments/ef259272e9d348ae25a5f1753a39674a/0a1767a6/STORE-COVER-font212x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Ozzy Butchery</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/TuQQyVF5Q9Kl02dSRU71_Kashew-large%402x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Kashew Artisan Cheese</h6>
                    </div>
                    <div className="col-md-2">
                        <img className='w-100' src="https://dl.airtable.com/SUjLZ8vQf2nMSAHBpg5w_Meatwork-large%402x.jpg"></img>
                        <h6 className="MenuRow text-center mt-4">Meatworks Butchery</h6>
                    </div>

                </div>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}


export default ManyStore;