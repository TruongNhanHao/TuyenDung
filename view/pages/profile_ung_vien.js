import styled from 'styled-components';
import Introduce from '../components/introduce';
import Navbar from '../components/navbar';
import { Flex, ipad } from '../responsive';
import Image from "next/future/image";
import bg_b1 from "../img/bg_b1.png";
import hocvan from "../img/hocvan.png";
import Text from "../components/text";
import { Input } from '../components/input';
import PrimaryButton from '../components/PrimaryButton';

function Profile_ung_vien() {
  return (
    <>
    <Navbar />
    <Container>
    <Wrapper>
          <Left>
          <ListItem>
        <ItemLeft>
          <div className="rows">
            <Image src={bg_b1} alt="Logo" width={98} height={98} />
            <Text title="Chọn Ảnh Cá Nhân" />
          </div>
            </ItemLeft>
        <ItemLeft>
          <Text title="THÔNG TIN" />
          <Input title="Học và Tên"  place="Họ và Tên của bạn" id="NameUT"/>
          <Input title="Công việc mong muốn"  place="Công việc mong muốn" id="NameUT"/>
          <Input title="Địa chỉ"  place="Địa chỉ hiện tại của bạn" id="NameUT"/>
          <Input title="Link Facebook"  place="Link " id="NameUT"/>
          <Input title="Link LinkedIn"  place="Link " id="NameUT"/>
        </ItemLeft>
        <ItemLeft>
          <Text title="LIÊN HỆ" />
          <Input title="Email"  place="Email của bạn" id="NameUT"/>
          <Input title="Số điện thoại"  place="Số điện thoại của bạn" id="NameUT"/>
        </ItemLeft>
      </ListItem>
          </Left>
          <Right>
            <ListItem>

          <ItemLeft>
          <Text title="GIỚI THIỆU BẢN THÂN" />
          <Input title="Trình Độ học vấn"  place="Học vấn" id="NameUT"/>
          <Input title="Mức lương "  place="Mức lương mong muốn" id="NameUT"/>
        </ItemLeft>
        <ItemLeft>
          <div className="rows">
            <Image src={hocvan} alt="Logo" width={98} height={98} />
            <Text title="HỌC VẤN" />
          </div>
          <Input title="Tên Trường"  place="Ngôi trường đã theo học" id="NameUT"/>
          <Input title="Chuyên ngành"  place="Chuyên nghành mà bạn đã học" id="NameUT"/>
          <Input title="Thời gian"  place="Thời gian theo học" id="NameUT"/>
          <Input title="Thành tích, chứng chỉ, bằng cấp"  place="Nếu có" id="NameUT"/>
            </ItemLeft>
            <ItemLeft>
          <div className="rows">
            <Image src={hocvan} alt="Logo" width={98} height={98} />
            <Text title="HỌC VẤN" />
          </div>
          <Input title="Tên Trường"  place="Ngôi trường đã theo học" id="NameUT"/>
          <Input title="Chuyên ngành"  place="Chuyên nghành mà bạn đã học" id="NameUT"/>
          <Input title="Thời gian"  place="Thời gian theo học" id="NameUT"/>
          <Input title="Thành tích, chứng chỉ, bằng cấp"  place="Nếu có" id="NameUT"/>
            </ItemLeft>
            <div className="center">
          <PrimaryButton ut title="CẬP NHẬT" />
        </div>
            </ListItem>
          </Right>
            
      </Wrapper>
    </Container>
    <Introduce />
    </>
  );
}

export default Profile_ung_vien;
const Container = styled.div`
  ${Flex('', 'center')}
background-color:white ;
`;
const Wrapper = styled.div`
  display:flex ;
  width:1140px;
  ${ipad({ display: "block" })}
  p {
    font-weight: 400;
  }
`;
const Left = styled.div`
  flex: 1;
  min-width: 300px;
`;
const ListItem = styled.div`
  display: block;
  .rows {
    text-align: center;
    p {
      font-size: 20px;
      font-weight: 400;
    }
  }
  .center {
    display: block;
    text-align: center;
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
`;
const Right = styled.div`
  min-width: 450px;
  margin-top:30px ;
  flex: 2;
  margin-left:5px ;
`;
