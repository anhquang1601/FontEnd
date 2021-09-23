import { Typography } from "antd";
import "./Footer.css";
const { Title } = Typography;

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-left-title">
          <Title level={2} style={{color:'white'}}> CÔNG TY CỔ PHẦN TẬP ĐOÀN THAIBINH</Title>
        </div>
        <div className="footer-left-home">
          <div className="footer-left-home-left">
            <img
              alt=""
              className="footer-left-home-left-Img"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDraULE26FOL2yBMaWGdP3HRUiG4723f8N5Q8m-y-ZuEl2wwlBfFjJCm4SbhoAPGu8xo&usqp=CAU"
            />
          </div>
          <div className="footer-left-home-right">
            <Title style={{marginTop:'3%',color:'white'}} level={4}>
              Địa Chỉ:36 Quang Trung-Phường Trần Hưng Đạo-TP Thanh Hóa-Thanh Hóa
            </Title>
            <Title style={{color:'white',marginTop:'1%'}} level={4}>Điện Thoại:(+84)123 456 789-(84.227)9 876 543</Title>
            <Title style={{marginTop:'1%'}} level={4}>Fex:(84.227)2 567 987</Title>
            <Title style={{marginTop:'1%'}} level={4}>Email:infor@gmail.com</Title>
            <Title style={{marginTop:'1%'}} level={4}>Website:www.gaosach.com</Title>
            <Title style={{marginTop:'1%'}} level={4}>Giấy phép ĐKKD số:123456 do sở kế hoạch đầu tư cấp ngày 5/5/2020.Thay đỗi lần cuối vào ngày 10/9/2020.Người đại diện :Nguyễn Văn A</Title>
          </div>
        </div>
      </div>
      <div className="footer-right">
          <div className="footer-right-left">
              <Title  level={2} style={{color:'white',textAlign:'center'}}>THÔNG TIN HỮU ÍCH</Title>
              <div className="footer-right-left-title">
              <Title level={4} style={{color:'white'}}>Về gạo niu vàng</Title>
              <Title level={4} style={{color:'white'}}>Đăng ký làm đại lý</Title>
              <Title level={4} style={{color:'white'}}>Hệ thống cửa hàng</Title>
              <Title level={4} style={{color:'white'}}>Chính sách ưu đãi</Title>
              <Title level={4} style={{color:'white'}}>Chính sách cho đại lý</Title>
              </div>
          </div>
          <div className="footer-right-right">
              <Title level={2}  style={{color:'white',textAlign:'center'}}>KẾT NỐI VỚI CHÚNG TÔI</Title>
                <div className="footer-right-right-img">
                    <img alt="" style={{height:50,width:50,borderRadius:40}} src="https://anh.eva.vn/upload/4-2016/images/2016-11-30/1480494815-facebook-sao-viet.png"/>
                    <img alt="" style={{height:50,width:50,marginLeft:'3%',borderRadius:40}} src="https://banner2.cleanpng.com/20181108/bow/kisspng-google-logo-google-search-search-engine-optimizati-5be4b4e62f2cf8.5260885315417151741932.jpg"/>
                    <img alt="" style={{height:50,width:50,marginLeft:'3%'}} src="https://webdoctor.vn/wp-content/uploads/2018/03/cuoc-song-tro-nen-don-gian-hon-voi-cach-tao-tai-khoan-youtube-tren-dien-thoai-02.png"/>
                    <img alt="" style={{height:50,width:50,marginLeft:'3%'}} src='../'/>
                </div>
          </div>
      </div>
    </div>
  );
}
export default Footer;
