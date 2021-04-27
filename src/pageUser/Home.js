import Danhmucsp from "../component/Danhmucsp";
import Sphamkhuyenmai from "../component/Sphamkhuyenmai";
import Store from "../component/Store";
import Spbanchay from "../component/user/Spbanchay";
import React, { useEffect, useState } from 'react';
// import Danhmucsp from './component/Danhmucsp';
// import Footer from './component/Footer';
// import Menu from './component/Menu';
// import Spbanchay from './component/user/Spbanchay';
// import Sphamkhuyenmai from './component/Sphamkhuyenmai';
// import Store from './component/Store';

import axios from 'axios';
import Loadpage from "../component/Loadpage";
import Slide from "../component/Slide";

import Footer from '../component/Footer';
import Menu from "../component/nav/Menu";

function Home() {
  
  const token =  localStorage.getItem('access_token');
  const [product, setProduct] = useState();

  const fetchData = async () => {
      const result = await axios.get('http://homemarket-hm.us-3.evennode.com/products', {
      })

    return result.data
  }

  useEffect(() => {
    fetchData().then(data => {
      setProduct(data)
    })
  }, [ ])

if(!product || product.lengh === 0 ){
  return <Loadpage></Loadpage>
}

console.log(product)

  return (
    <div className="index" style={{maxWidth:'1519px'}} >
    <Menu token ={token}></Menu>
    <div className="Home">
        <div className="cha">
        <Slide></Slide>
        <Danhmucsp></Danhmucsp>
        </div>
      <Spbanchay product={product} ></Spbanchay>
      <Sphamkhuyenmai></Sphamkhuyenmai>
      <Store></Store>
    </div>
    <Footer></Footer>
    </div>
  );
}
export default Home;
