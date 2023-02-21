import styled from "styled-components";
import bg_b1 from "../img/bg_b1.png";
import Image from "next/future/image";
import Text from "../components/text";
import { Input } from "./input";

function Ung_Tuyen_Left() {
  return (
    <>
      <ListItem>
        <ItemLeft>
          <Text title="THÔNG TIN" />
          <div className="rows">
            <Image src={bg_b1} alt="Logo" width={98} height={98} />
            <Text title="Chọn Ảnh Cá Nhân" />
          </div>
          <Input title="Học và Tên" type="text" place="Họ và Tên của bạn" id="NameUT" Li="Vui lòng điền đầy đủ Họ và Tên"/>
          <Input title="Ngày Sinh" type="date" id="DateUT" />
          <Row>
            <div className="gioitinh">
              <select id="Gioitinh" name="Gioitinh">
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
                <option value="Nữ">Khác</option>
              </select>
              <br />
              <label htmlFor="Gioitinh">Giới Tính</label>
            </div>
            <div className="honnhan">
              <select id="Honnhan" name="Honnhan">
                <option value="Độc Thân">Độc thân</option>
                <option value="Đã có gia đình">Đã có gia đình</option>
                <option value="Đã ly dị">Đã ly dị</option>
              </select>
              <br />
              <label htmlFor="HonNhan">Hôn Nhân</label>
            </div>
          </Row>
          <InputLeft>
            <select id="Quequan" name="Quequan">
              <option value="">Quê Quán</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            </select>
            <label htmlFor="Quequan">Quê Quán</label>
          </InputLeft>
          <InputLeft>
            <select id="NoiSinh" name="NoiSinh">
              <option value="">Nơi Sinh</option>
              <option value="Phú Yên">Phú Yên</option>
              <option value="Tp.Cần Thơ">Tp.Cần Thơ</option>
              <option value="Tp.Đà Nẵng">Tp.Đà Nẵng</option>
              <option value="Tp.Hải Phòng">Tp.Hải Phòng</option>
            </select>
            <label htmlFor="NoiSinh">Nơi Sinh</label>
          </InputLeft>
          <Input title="Số CMND/CCCD"  place="Số CMND hoặc CCCD" id="CMND" Li="Số CMND bạn cung cấp sẽ được kiểm tra Danh sách CIC tại Ngân Hàng
              Nhà Nước Việt Nam"/>
          <Input title="Nơi Cấp Số CMND/CCCD"  place="Nơi Cấp" id="NoiCapCMND"/>
          <Input title="Ngày Cấp CMND/CCCD" type="date" id="NgayCMND"/>

        </ItemLeft>
        <ItemLeft>
          <Text title="LIÊN HỆ" />
          <Input title="Email" place ="Địa chỉ Email của bạn" id="Email" Li="P.Tuyển dụng sẽ thông báo kết quả phỏng vấn qua Email bạn cung
              cấp."/>
          <Input title="Số Điện Thoại"  place="Số điện thoại của bạn" id="sdt" Li="P.Tuyển dụng sẽ thông báo kết quả phỏng vấn qua Số Điện Thoại bạn
              cung cấp."/>
          <Input title="Địa chỉ thường trú" place="Địa chỉ hiện tại của bạn" id="thuongTru"/>
          <Input title="Địa chỉ liên lạc" place="Địa chỉ trên sổ hộ khẩu của bạn" id="address"/>
        </ItemLeft>
      </ListItem>
    </>
  );
}

export default Ung_Tuyen_Left;
const ListItem = styled.div`
  display: block;
  .rows {
    text-align: center;
    p {
      font-size: 20px;
      font-weight: 400;
    }
  }
`;
const ItemLeft = styled.div`
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  border: 1px solid #cbcbcb;
  padding: 30px;
  margin-bottom: 20px;
  border-radius: 5px;

  img {
    border-radius: 999999px;
    border: 5px solid #999;
    text-align: center;
    :hover {
      border-color: #f36969;
      transition: 0.4s all ease;
      cursor: pointer;
    }
  }
  label {
    font-size: var(--font-medium);
    font-weight: 570;
    color: #6f7e98;
    display: block;
  
  }
  select+ label{
    margin-bottom:22px ;
  }
  select {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: var(font--medium);
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  }
`;
const InputLeft = styled.div`
  label {
    margin-top: 7px;
  }

`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom:18px ;
  div {
    width: 50%;
    padding: 0 5px;
    label {
      margin-top: -12px;
    }
  }
`;
