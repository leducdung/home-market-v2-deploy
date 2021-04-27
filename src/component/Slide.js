import React from 'react';

function Slide() {
    return (
        <div className="slide">
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://firebasestorage.googleapis.com/v0/b/capstone2-24fd3.appspot.com/o/product%2FGroup%20100%20(2).png?alt=media&token=c08853f4-7787-4ff1-8f2a-6425438eea17" className="img-slide d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="https://firebasestorage.googleapis.com/v0/b/capstone2-24fd3.appspot.com/o/product%2FGroup%207%20(3).png?alt=media&token=d98673f7-11f8-4905-b43a-1ff061538f8e" className="img-slide d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="https://firebasestorage.googleapis.com/v0/b/capstone2-24fd3.appspot.com/o/product%2FGroup%20100%20(2).png?alt=media&token=c08853f4-7787-4ff1-8f2a-6425438eea17" className="img-slide d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


        </div>
    );
}

export default Slide;