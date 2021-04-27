import './Spkm.css';
import CardDemo from '../component/user/combined/CardDemo';
import React from 'react';
import Menu from '../component/nav/Menu';
import Footer from '../component/Footer';

function InfomationStore() {

  const token =  localStorage.getItem('access_token');

    return (
      <>
      <Menu token={token}></Menu>
        <div className="mb-5 pt-5">

            <div className="container mt-5">
                <div style={{backgroundColor:'white',boxShadow:' 0 5px 0 rgb(200 200 200 / 20%)',backgroundColor:"white" }} className="row p-4">
                    <div  className="col-md-6">
                    <img src="https://dl.airtable.com/.attachments/af3c017bd2d70d483b021944b06fcae4/024827e6/STORE-COVER2x.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="col-md-6">
                        <h4 className='nameStore mb-4'> Lottel</h4>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto molestiae, soluta neque assumenda accusamus odio. Quis illo, molestiae eaque provident recusandae ad. Molestiae recusandae, corrupti labore autem optio ducimus dolorem!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis labore dolorum maxime voluptatem pariatur, sint qui possimus impedit similique ratione magnam aliquid, modi voluptatibus reiciendis aliquam sed nisi? Earum, consequuntur!
                    </div>

                </div>
                <CardDemo></CardDemo>
                <h5 className="mt-4">Gia cầm</h5>
                <CardDemo></CardDemo>
                <h5 className="mt-4">Thịt</h5>
                <CardDemo></CardDemo>
                <h5 className="mt-4">Trứng Sưã</h5>
                <CardDemo></CardDemo>
                <h5 className="mt-4">Đồ Đông Lạnh</h5>
                <CardDemo></CardDemo>
                <h5 className="mt-4">Cá </h5>
                <CardDemo></CardDemo>
            </div>
        </div>
        <Footer></Footer>
    </>
    );
}

export default InfomationStore;