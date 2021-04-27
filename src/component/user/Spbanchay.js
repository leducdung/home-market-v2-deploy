import React, { Component } from 'react';
import Card from './combined/Card';
import { makeid } from '../../helpers/create/create_key_index';
// import './App.css';
export default function Spbanchay (props ) {
    const { product } = props
        return (

            <div>

                <section className="spbanchay mb-5 ">
                    <div className="container pb-4">
                        <h4 style={{ fontFamily: '"Oswald", sans-serif', fontWeight: 'bold' }} className="mb-4 pt-4 text-center">SẢN PHẨM BÁN CHẠY
                        </h4>
                        <div className="row">
                            {
                                product.list.map((oneProduct) => {
                                    return <Card  key={makeid(10)} oneProduct = {oneProduct}></Card>
                                })
                            }
                        </div>
                        <div className="text-center mt-4 mb-4">
                            <button type="button" className="btn btn-outline-success">Xem thêm</button>
                        </div>
                    </div>
                </section>

            </div>
        )
    }

