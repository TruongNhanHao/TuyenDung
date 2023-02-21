import styled from 'styled-components';
import Viec_Lam_Hot from '../components/viec_lam_hot';
import { Flex, ipad } from '../responsive';
import Navbar from '../components/navbar';
import Paging from '../components/paging';
import Item_VL from '../components/item_Viec_Lam';

function List_work() {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <Left>
            <Title>
              Có<span style={{ color: '#27C6EF' }}> 24 </span> Việc Làm Dành Cho Bạn
            </Title>
            <Viec_Lam_Hot />
          </Left>
          <Right>
            <List>
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
              <Item_VL />
            </List>
            <Paging />
          </Right>
        </Wrapper>
      </Container>
    </>
  );
}

export default List_work;
const Title = styled.div`
  padding: 30px 0;
  font-size: 20px;
`;
const Container = styled.div`
  ${Flex('', 'center')}
`;
const Wrapper = styled.div`
  display: flex;
  ${ipad({ display: 'block' })}
  padding:5px;
  width: 1240px;
`;
const Left = styled.div`
  flex: 1;
  ${ipad({ marginRight: '0' })}
`;
const Right = styled.div`
  flex: 3;
  width: 80%;
  padding: 5px;
`;
const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 17px;
`;
const Item = styled.div`
  display: flex;
  max-width: 600px;
  border: 1px solid teal;
  background-color: #ffff;
  border-radius: 10px;
  color: var(--primary-background-color);
  padding: 30px 0;
`;
// const LeftItem = styled.div`
//   width: 180px;
//   display: block;
//   text-align: center;
//   padding: 30px 0;
//   p {
//     line-height: 30px;
//     margin-top: 7px;
//     color: var(--font-color-blue);
//     text-transform: uppercase;
//     font-weight: 500;
//     span {
//       font-size: var(--font-medium);
//       color: red;
//     }
//   }
// `;
// const RightItem = styled.div`
//   flex: 2;
//   position: relative;
//   p {
//     font-size: var(--font-lager);
//     font-weight: 400;
//     cursor: pointer;
//   }
//   div {
//     display: inline-flex;
//     align-items: center;
//     padding: 10px 0;
//     p {
//       font-size: var(--font-small);
//     }
//   }
// `;
