import Image from "next/future/image";
import styled from "styled-components";
import Text from "../components/text";
import { Flex, ipad } from "../responsive";
import galaxy from "../img/galaxy.png";
import Ung_Tuyen_Left from "../components/ung_Tuyen_Left";
import Ung_Tuyen_Right from "../components/ung_Tuyen_Right";

function Nop_don_ung_tuyen() {
  return (
    <Container>
      <W>
        <RowW>
          <Text title="ĐƠN ỨNG TUYỂN" />
          <Image
            src={galaxy}
            className="hover"
            alt="Logo"
            width={160}
            height={110}
          />
        </RowW>
        <Wrapper>
          <Left>
            <Ung_Tuyen_Left />
          </Left>
          <Right>
            <Ung_Tuyen_Right />
          </Right>
        </Wrapper>
      </W>
    </Container>
  );
}

export default Nop_don_ung_tuyen;

const Container = styled.div`
  ${Flex("", "center")}
  background-color: white;
`;
const W = styled.div`
  display: block;
  background-color: white;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  border: 1px solid #cbcbcb;
  color: black;
  padding: 20px;
  width: 1200px;
  ${ipad({ padding: "5px" })}
`;
const Wrapper = styled.div`
  display: flex;
  ${ipad({ display: "block" })}
  p {
    font-weight: 400;
  }
`;
const Left = styled.div`
  flex: 1;
  min-width: 300px;
`;
const RowW = styled.div`
  text-align: center;
  p {
    font-size: 30px;
    margin-bottom: 50px;
  }
`;
const Right = styled.div`
  min-width: 450px;
  flex: 2;
`;
