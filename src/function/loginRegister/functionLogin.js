import axios from "axios";
import { API } from '../../config/ConfigENV';
import { useState, useEffect } from 'react';

const FunctionLogin = () => {
  const [data, setData] = useState();
  // const [resultFetchData, setResultFetchData] = useState();

  // let dataLogin = {userName: "NamAnMarket", passWord: "NamAnMarket"}
  // const fetchData = async () => {
  //     const result =  axios({
  //         method: 'post',
  //         url: `${API}/login`,
  //         data: {
  //             ...dataLogin,
  //         },
  //     })
  //     setResultData(result)
  //     return result
  // }
  // console.log(resultData)
  // useEffect(() => {
  //   fetchData()
  // }, [resultData]);
  setData(1)
  return {data}
};

export default FunctionLogin