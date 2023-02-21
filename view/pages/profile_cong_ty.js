import styled from "styled-components";
import Introduce from "../components/introduce";
import Navbar from "../components/navbar";
import { Flex, ipad } from "../responsive";
import Image from "next/future/image";
import bg_b1 from "../img/bg_b1.png";
import congty from "../img/congty.png";
import Text from "../components/text";
import { Input } from "../components/input";
import PrimaryButton from "../components/PrimaryButton";

function Profile_cong_ty() {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <ListItem>
              <ItemLeft>
                <div className="rows">
                  <Image src={congty} alt="Logo" width={98} height={98} />
                  <Text title="CHỌN ẢNH CÔNG TY" />
                </div>
                <Input
                  title="Tên Công Ty"
                  place="Tên của Công Ty"
                  id="NameUT"
                />
                <Input
                  title="Quy mô nhân sự"
                  place="vd: 400-500 nhân viên"
                  id="NameUT"
                />
                <Input
                  title="Thành Lập"
                  place="Thành lập khi nào"
                  id="NameUT"
                />
                <Input title="Địa chỉ" place="Địa chỉ Công Ty" id="NameUT" />
              </ItemLeft>
              <div className="center">
                <PrimaryButton ut title="CẬP NHẬT CHỈNH SỬA" />
              </div>
            </ListItem>
          </Left>
          <Right>
            <ListItem>
              <ItemLeft>
                <Text title="THÔNG TIN LIÊN HỆ" />
                <Input
                  title="Người đại diện"
                  place="Họ và Tên của bạn"
                  id="NameUT"
                />
                <Input title="Email" place="Email của bạn" id="NameUT" />
                <Input
                  title="Số điện thoại"
                  place="Số điện thoại của bạn"
                  id="NameUT"
                />
                <Input title="Link Facebook" place="Link " id="NameUT" />
                <Input title="Link LinkedIn" place="Link " id="NameUT" />
              </ItemLeft>
              <ItemLeft>
                <Text title="BẢN ĐỒ" />
                <Input
                  title="Nhúng mã HTML của bản đồ"
                  place="Mã bản đồ"
                  id="NameUT"
                />
              </ItemLeft>
            </ListItem>
          </Right>
        </Wrapper>
      </Container>
      <Introduce />
    </>
  );
}

export default Profile_cong_ty;
const Container = styled.div`
  ${Flex("", "center")}
  background-color:white;
`;
const Wrapper = styled.div`
  display: flex;
  width: 1140px;
  ${ipad({ display: "block" })}
  p {
    font-weight: 400;
  }
`;
const Left = styled.div`
  flex: 2;
  min-width: 300px;
  margin-top: 50px;
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
  margin-top: 30px;
  flex: 1;
  margin-left: 5px;
`;
