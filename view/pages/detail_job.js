import styled from "styled-components";
import { Input } from "../components/input";
import Introduce from "../components/introduce";
import Item_VL from "../components/item_Viec_Lam";
import Navbar from "../components/navbar";
import PrimaryButton from "../components/PrimaryButton";
import Text from "../components/text";
import { Flex, ipad } from "../responsive";

function Detail() {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <Item_VL />
          </Left>
          <Right>
            <From>
              <Text title="GỬI ĐƠN ỨNG TUYỂN" />
              <Input title="Nhân Viên Truyền Thông Nội Bộ" sty="1" />
              <Input title="Tên Ứng Viên" sty="1" />
              <Input title="Email" sty="1" />
              <Input title="Số Điện Thoại" sty="1" />
              <div className="hi">
                <Input title="Nội Dung" sty="1" />
              </div>
              <PrimaryButton primary title="Ứng Tuyển" />
            </From>
          </Right>
        </Wrapper>
      </Container>
      <Introduce />
    </>
  );
}

export default Detail;
const Container = styled.div`
  ${Flex("", "center")}
`;
const Wrapper = styled.div`
  display: flex;
  ${ipad({ display: "block" })}
  padding:5px;
  width: 1140px;
  margin-bottom: 30px;
  background-color: black;
`;
const Left = styled.div`
  flex: 3;
  ${ipad({ marginRight: "0" })}
  div {
    max-width: 800px;
  }
`;
const Right = styled.div`
  flex: 1;
  padding: 5px;
`;
const From = styled.div`
  width: 360px;
  display: block;
  padding: 20px 30px;
  background-color: white;
  text-align: center;
  .hi {
    position: relative;
    div {
      height: 100px;
    }
  }
  div {
    width: 100%;
    margin: 30px 0;
  }
`;
