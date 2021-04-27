import React from 'react'
import Menu from '../component/nav/Menu';
import Footer from '../component/Footer';
const Introduce=()=> {
  const token =  localStorage.getItem('access_token');
    return (

      <>
      <Menu token={token}></Menu>
        <div style={{ marginTop: '45px'}}>
            <div className="container">
                <section className="m-content list-news-detail">
                    <div className="news-d-content">
                        {/* <h1 className="title-news-d"></h1> */}
                        <h1 className="text-center">Cùng Bạn xây dựng thực đơn hợp lý cho cả Gia
        đình</h1>
                        <h2>Bối cảnh hiện tại:</h2>
                        <p><span><span>Người phụ nữ trong cuộc sống hiện đại vô cùng áp lực: Vừa phải đi làm kiếm tiền, vừa phải
            chu toàn công việc gia đình. Thật không đơn giản phải không các bạn.</span></span></p>
                        <p><span><span>Một trong những vấn đề luôn khiến các Mẹ băn khoăn là: Ngày mai ăn gì? Giá trị dinh dưỡng
            ra sao? Có phù hợp với mỗi thành viên trong gia đình mình không?</span></span></p>
                        <p><span><span>Đồng cảm với trăn trở của những người Mẹ, <span><strong>Home Martket</strong></span>
            đang hoàn thiện một số nội dung để hỗ trợ các Mẹ nhiều hơn trong cuộc sống:</span></span>
                        </p>
                        <p><span><span>- <strong>Tiết kiệm thời gian và chi phí đi chợ</strong>: Sản phẩm trên Home Martket rất
            đa dạng, tươi ngon; Bạn sẽ có cảm giác như đang mua hàng trong những vườn rau vậy. Giá cả
            rất hợp lý và được giao hàng tận nơi.</span></span></p>
                        <p><span><span>- <strong>Đảm bảo về nguồn gốc sản phẩm</strong>: Mỗi sản phẩm trên Home Martket đều có
            nguồn gốc và những tiêu chuẩn cụ thể, Bạn hoàn toàn an tâm nhé;</span></span></p>
                        <p><span><span>- Mỗi sản phẩm luôn có giới thiệu về thành phần dinh dưỡng để Bạn cân nhắc sử dụng phù
            hợp với các thành viên trong gia đình;</span></span></p>
                        <p><span><span>- <strong>Xây dựng thực đơn hợp lý</strong> cho gia đình: Thay vì phải suy nghĩ nên mua
            bao nhiêu loại thực phẩm và phối hợp ra sao, Bạn chỉ cần chọn món mình dự định nấu, Đi chợ
            Online sẽ tính toán khối lượng cụ thể cần mua theo nhu cầu dinh dưỡng của gia đình
            Bạn;</span></span></p>
                        <p><span><span>- Hướng dẫn nấu những món mà bạn chọn;</span></span></p>
                        <p><span><span>Mong muốn của Home Martket là giúp Bạn: Đi chợ nhanh, tiết kiệm tiền và dinh dưỡng hợp
            lý.</span></span></p>
                        <h2>Hiểu đúng về dinh dưỡng:</h2>
                        <p><span><span>Ngày nay, rất ít trẻ em mắc chứng suy dinh dưỡng nhưng lại rất nhiều người bị béo phì, cả
                        người lớn và trẻ em. Hiểu chưa đúng về dinh dưỡng và ăn uống không hợp lý là nguyên nhân
            chính dẫn đến bệnh béo phì.</span></span></p>
                        <p><span><span>Béo phì để lại nhiều hậu quả. Đầu tiên, người bị béo phì mất tự tin về ngoại hình của
                        mình, nhiều trường hợp dẫn đến ngại giao tiếp và trầm cảm. Béo phì là nguyên nhân trực tiếp
            gây ra các bệnh: Mỡ máu, cao huyết áp, tim mạch, tiểu đường, đột quỵ,…</span></span></p>
                        <p><span><span>Để tránh bị béo phì, tốt nhất là chỉ ăn đúng và ăn đủ. Nhưng làm sao xác định được đúng
                        và đủ là như thế nào? Đây là vấn đề liên quan đến chuyên môn và cần được tư vấn đúng
            cách.</span></span></p>
                        <p><span><span>Rất may, Home Martket đã được <a href="https://www.facebook.com/nguyen.vna"><span><strong>Bác sĩ
                        Nguyễn Lê Hồng
                  Vân</strong></span></a> hỗ trợ tư vấn dinh dưỡng. Bác sĩ Hồng Vân hiện là Trưởng
            khoa Dinh dưỡng - Bệnh viện Đa khoa Hoàn Mỹ Đà Nẵng, nhiều năm kinh nghiệm trong lĩnh vực
            dinh dưỡng.</span></span></p>
                        <div className="container mb-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <p className="text-center"><img alt="Bác sĩ Nguyễn Lê Hồng Vân tại phòng khám" height={300} src="http://dichoonline.com.vn/hoa/upload/images/Bac-si-Nguyen-Le-Hong-Van.jpg" width={500} /></p>
                                    <p className="text-center"><span>&nbsp;</span><em>Bác sĩ Nguyễn Lê Hồng Vân tại phòng khám</em></p>
                                </div>
                                <div className="col-md-6">
                                    <p className="text-center"><img alt="Bác sĩ Nguyễn Lê Hồng Vân lên sóng VTV6" src="http://dichoonline.com.vn/hoa/upload/images/Bac-si-Nguyen-Le-Hong-Van-len-VTV6.jpg" /></p>
                                    <p className="text-center"><em><span>Bác sĩ Nguyễn Lê Hồng Vân lên sóng VTV6</span></em></p>
                                </div>
                            </div>
                        </div>
                        <p><span><span>Bác sĩ Hồng Vân đang cùng Home Martket viết phần mềm "<strong><span>xây dựng thực đơn
                hợp lý</span>"</strong> cho gia đình. Bạn chỉ cần nhập những thông số về các thành
            viên trong gia đình như: giới tính, độ tuổi, chiều cao, cân nặng, tình trạng sức khỏe, sau
            đó chọn những món cần nấu cho gia đình, phần mềm sẽ tính cụ thể những thực phẩm cần mua theo
            một tỉ lệ hợp lý nhất. </span></span></p>
                        <p><span><span>Đây sẽ là phần mềm hỗ trợ đắc lực cho những người phụ nữ hiện đại: dù bận rộn nhưng Bạn
                        vẫn sẽ chăm sóc dinh dưỡng cho cả gia đình vô cùng hợp lý mà không mất nhiều thời
            gian.</span></span></p>
                        <h2><strong><span><span><span>Vệ sinh an toàn thực phẩm:</span></span></span></strong></h2>
                        <p><span><span>Vấn đề rất nóng và luôn được quan tâm. Việc làm ăn chộp giựt, chỉ biết chạy theo lợi
                        nhuận của một số nhà vườn và thương lái đã gây hoang mang cho toàn xã hội, làm chúng ta có
            cảm giác hầu hết mọi thực phẩm đều chứa hóa chất.</span></span></p>
                        <p><span><span>Home Martket xác định rằng: Những sản phẩm mình bán phải có nguồn gốc rõ ràng và phải
                        sạch thật sự. Home Martket luôn tìm kiếm những nhà cung cấp uy tín trên thị trường, đến tận
                        nơi tham quan và ký hợp đồng hợp tác. Không chỉ vậy, Home Martket còn mua sản phẩm về dùng
                        thử, thấy đúng là tươi, sạch và ngon thì mới dám cung cấp cho thị trường. Sản phẩm mình mua
                        mà còn ngao ngán lắc đầu, không dám ăn thì làm sao dám bán cho khách hàng đúng không các
            Bạn.</span></span></p>
                        <p><span><span>Hiện nay, Home Martket đã liên kết được với một số đơn vị như:</span></span></p>
                        <p><strong><a className="store" href="#">-
                  Lottlel Mart</a></strong></p>
                        <p><a className="store" href="#"><strong>-
                  Top Market</strong></a></p>
                        <p><a className="store" href="#">-
                  Nam An Market</a>
                        </p>
                        <p><a className="store" href="http://dichoonline.com.vn/happy-vegi-vuon-rau-huu-co-giua-long-thanh-pho.html">-
                  Nông Sản Nhà Quê</a>
                        </p>
                        <p><a className="store" href="http://dichoonline.com.vn/thuc-pham-huu-co-organica-da-dang-cho-su-lua-chon-cua-ban.html">-
                  Cho Pho Fresh Food</a></p>
                        <p><a className="store" href="http://dichoonline.com.vn/cty-tnhh-dich-vu-an-ha-mang-thit-heo-vietgap-den-tay-nguoi-tieu-dung.html">-
                  3SẠCH FOOD</a></p>
                        <p><a className="store" href="http://dichoonline.com.vn/aus-farm-trang-trai-thit-heo-huu-co-dau-tien-tai-viet-nam-duoc-hiep-hoi-huu-co-canada-chung-nhan.html">-
                  Ozzy Butchery</a></p>
                        <p><a className="store" href="http://dichoonline.com.vn/ban-co-biet-ga-ta-thao-moc-ngon-den-the-nao-khong-.html">-
                  Coop Mart</a></p>
                        <p><a className="store" href="http://dichoonline.com.vn/cong-ty-cho-binh-dien-the-gioi-thuy-hai-san-giua-thanh-pho-ho-chi-minh.html">-
                  Hải sản Hoàng Gia</a></p>
                        <p><span><span>- Một số mặt hàng được mua tại Co.op Mart, Satra Foods, Big C.</span></span></p>
                        <p><span><span>Đây là những đơn vị rất có uy tín. Mong muốn lớn nhất của Home Martket là có thể cung
            cấp thực phẩm thật sự sạch đến tận tay người tiêu dùng.</span></span></p>
                        <h2><strong><span><span><span>Những điều Home Martket cam kết sẽ làm
                được:</span></span></span></strong></h2>
                        <p><span><span>- Chỉ bán hàng có nguồn gốc rõ ràng, đảm bảo Vệ sinh an toàn thực phẩm;</span></span></p>
                        <p><span><span>- Chỉ bán hàng tươi sống, không bao giờ bán hàng kém chất lượng, hàng ế, hàng tồn, hàng
            để qua ngày;</span></span></p>
                        <p><span><span>- Hàng hóa đúng mẫu mã, quy cách, chất lượng như trên Website;</span></span></p>
                        <p><span><span>- Hàng hóa luôn đảm bảo cân đúng, cân đủ;</span></span></p>
                        <p><span><span>- Giá cả như trên Website, không bao giờ tự động nâng giá khi giao hàng;</span></span>
                        </p>
                        <p><span><span>- Giao hàng đúng thời gian yêu cầu;</span></span></p>
                        <p><span><span>- Khách hàng nhận hàng xong mới phải thanh toán tiền;</span></span></p>
                        <p><span><span>Home Martket viết bài Giới thiệu, cũng là lời tâm sự, chia sẻ những khó khăn của người
            phụ nữ. Home Martket đang cố gắng hết sức để sớm ra mắt phần mềm <strong>xây dựng thực đơn
              hợp lý</strong>, hy vọng sẽ giúp ích thật nhiều cho các Bạn trong vấn đề đi chợ và dinh
            dưỡng.</span></span></p>
                        <p><span><span>Rất mong nhận được những góp ý chân thành và sự ủng hộ từ các bạn.</span></span></p>
                        <p>&nbsp;</p>
                    </div>
                    {/* AddThis Button BEGIN */}
                </section>
            </div>
        </div>
        <Footer></Footer>
    </>
    )
}


export default Introduce
