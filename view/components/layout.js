import styled from 'styled-components';
import { Flex, ipad } from '../responsive';
import File_CV_Ung_Vien from './file_CV_Ung_Vien';
import List_Ung_Vien from './home_List_UV';
import Info_Ung_Vien from './info_Ung_Vien';
import Main_register from './main_register';
import PrimaryButton from './PrimaryButton';
import Viec_Lam_Hot from './viec_lam_hot';

function Layout() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Main_register />
          <Info_Ung_Vien />
          <Info_Ung_Vien />
          <Info_Ung_Vien />
          <Info_Ung_Vien />
        </Left>
        <Right>
          <Viec_Lam_Hot />
          <File_CV_Ung_Vien />
          <List_Ung_Vien />
          <List_Ung_Vien />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Layout;
const Container = styled.div`
  ${Flex('', 'center')}
`;
const Wrapper = styled.div`
  display: flex;
  ${ipad({ display: 'block' })}
  padding:5px;
`;
const Left = styled.div`
  flex: 3;
  margin-right: 20px;
  ${ipad({ marginRight: '0' })}
`;
const Right = styled.div`
  flex: 1;
  padding: 5px;
`;
