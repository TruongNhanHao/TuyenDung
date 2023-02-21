import Image from "next/future/image";
import styled from "styled-components";
import { Flex, ipad } from "../responsive";
import Phan_tich from "../components/phan_tich";
import List_ung_vien from "../components/list_ung_vien";
import Navbar from "../components/navbar";
import Introduce from "../components/introduce";

function Share_cv() {
  return (
    <>
      <Navbar />
      <Container>
        <W>
          <Wrapper>
            <Left>
              <Phan_tich />
              <Phan_tich />
            </Left>
            <Right>
              <List_ung_vien />
              <List_ung_vien />
              <List_ung_vien />
            </Right>
          </Wrapper>
        </W>
      </Container>
      <Introduce />
    </>
  );
}

export default Share_cv;

const Container = styled.div`
  ${Flex("", "center")}
  background-color: white;
`;
const W = styled.div`
  display: block;
  background-color: white;
  width: 1240px;
  ${ipad({ padding: "5px" })}
`;
const Wrapper = styled.div`
  display: flex;
  ${ipad({ display: "block" })}
`;
const Left = styled.div`
  flex: 1;
  min-width: 300px;
`;
const Right = styled.div`
  flex: 3;
  height: 100%;
  padding: 0 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 10px;
`;
