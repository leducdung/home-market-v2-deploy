
import React, { Component } from 'react';
import CardDemo from '../component/user/combined/CardDemo';
export default function Sphamkhuyenmai() {
    return (
        <div>
            <section style={{ margin: '0 auto', position: 'relative', height: '763px' }} className="spkhuyenmai mt-4">
                <div className="bgimg">
                    <h1 className="text-center pt-5">SẢN PHẨM KHUYẾN MÃI</h1>
                    <div className="middle">
                        <p className="p-5 mb-3" id="timer" />
                    </div>
                    <div className="bottomleft">
                    </div>
                </div>
                <div className="container mt-5 spkm pb-4">
                    <h4 style={{ fontFamily: '"Oswald", sans-serif', fontWeight: 'bold' }} className="mb-4 pt-4 text-center">
                    </h4>
                    <CardDemo></CardDemo>
                    <div className="text-center mb-4">
                        <button type="button" className="btn btn-outline-success">Xem thêm</button>
                    </div>
                </div>
            </section>

        </div>
    )
}

