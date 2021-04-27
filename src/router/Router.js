import React from 'react';
import {
    // BrowserRouter as Router,
    Route,
  }
from "react-router-dom";
// import App from '../App';
import Home from "../pageUser/Home";
import Industry from '../pageUser/Industry';
import InfomationStore from '../pageUser/InfomationStore';
import Introduce from '../pageUser/Introduce';
import KhuyenMai from '../pageUser/KhuyenMai';
import Register from '../pageUser/Register';
import Giohang from '../pageUser/Giohang';
import InfomationUser from '../pageUser/InfomationUser';
import Beat from '../pageUser/Beat';
import MilkEgg from '../pageUser/MilkEgg';
import Poultry from '../pageUser/Poultry';
import Frozenfood from '../pageUser/Frozenfood';
import Seafood from '../pageUser/Seafood';
import Bread from '../pageUser/Bread';
import Vegartable from '../pageUser/Vegartable';
import Fruit from '../pageUser/Fruit';
import ResetPassword from '../pageUser/ResetPassword';
import ManyStore from '../pageUser/ManyStore';
import AddCard from '../pageUser/AddCard';
import RegisterStore from '../pageStore/RegisterStore';
import Addproduct from '../pageStore/Addproduct';
import Product from '../pageUser/Product';
import Outofstock from '../pageStore/Outofstock';
import Productstore from '../pageStore/Productstore';
import Correctentryprice from '../pageStore/Correctentryprice';
import Pricefixes from '../pageStore/Pricefixes';
import DeletehistoryProduct from '../pageStore/DeletehistoryProduct';
import Warehouseentry from '../pageStore/Warehouseentry';
import Billofsale from '../pageStore/Billofsale';
import User from '../pageStore/User';
import Billofreturn from '../pageStore/Billofreturn';
import Sale from '../pageStore/Sale';

function Dieuhuong( props) {
  return (
    <div>
      <Route exact path="/"> <Home  ></Home> </Route>
      <Route path="/Introduce">  <Introduce></Introduce> </Route>
      <Route path="/Industry">  <Industry></Industry> </Route>
      <Route path="/KhuyenMai">  <KhuyenMai></KhuyenMai> </Route>
      <Route path="/Register">  <Register></Register> </Route>
      <Route path="/InformationStore">  <InfomationStore></InfomationStore> </Route>
      <Route path="/Giohang">  <Giohang></Giohang> </Route>
      <Route path="/InformationUser">  <InfomationUser></InfomationUser> </Route>
      <Route path="/Beat">  <Beat></Beat> </Route>
      <Route path="/MilkEgg">  <MilkEgg></MilkEgg> </Route>
      <Route path="/Poultry">  <Poultry></Poultry> </Route>
      <Route path="/Frozenfood">  <Frozenfood></Frozenfood> </Route>
      <Route path="/Seafood">  <Seafood></Seafood> </Route>
      <Route path="/Bread">  <Bread></Bread> </Route>
      <Route path="/Vegartable">  <Vegartable></Vegartable> </Route>
      <Route path="/Fruit">  <Fruit></Fruit></Route>
      <Route path="/ResetPassword"> <ResetPassword></ResetPassword> </Route>

      <Route path="/ManyStore"> <ManyStore></ManyStore> </Route>
      <Route path="/AddCard"> <AddCard></AddCard> </Route>
      <Route path="/RegisterStore"> <RegisterStore></RegisterStore> </Route>
      <Route path="/Addproduct"> <Addproduct></Addproduct> </Route>
      <Route path="/Product"> <Product></Product>  </Route>
      <Route path="/Outofstock"> <Outofstock></Outofstock></Route>
      <Route path="/Productstore"> <Productstore></Productstore> </Route>
      <Route path="/Correctentryprice"> <Correctentryprice></Correctentryprice> </Route>
      <Route path="/Pricefixes"><Pricefixes></Pricefixes> </Route>
      <Route path="/DeletehistoryProduct"><DeletehistoryProduct></DeletehistoryProduct> </Route>
      <Route path="/Warehouseentry"><Warehouseentry></Warehouseentry> </Route>
      <Route path="/Billofsale"><Billofsale></Billofsale> </Route>
      <Route path="/User"><User></User> </Route>
      <Route path="/Billofreturn"><Billofreturn></Billofreturn> </Route>
      <Route path="/Sale"><Sale></Sale> </Route>



    </div>
  );
}

export default Dieuhuong;