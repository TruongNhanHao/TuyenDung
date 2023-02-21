import Image from 'next/future/image';
import styled from 'styled-components';
import { Flex } from '../responsive';
import icon_admin from '../img/icon_admin.jpg';
import icon_w from '../img/icon_w.png';
import icon_address from '../img/icon_address.png';
import icon_balo from '../img/icon_balo.png';
import icon_fb from '../img/icon_fb.png';
import icon_people from '../img/icon_people.png';
import icon_email from '../img/icon_email.png';
import icon_phone from '../img/icon_phone.png';
import Text from './text';

function Introduce() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Image src={icon_admin} alt="Logo" width={120} height={120} />
        </Left>
        <Right>
          <Text title="OfficeJob - Việc Làm Văn Phòng" />
          <Top>
            <div>
              <Image src={icon_w} alt="Logo" width={30} height={30} />
              <span>https://tuyendung.me</span>
            </div>
            <div>
              <Image src={icon_people} alt="Logo" width={30} height={30} />
              <span>Hơn 800 Nhân Viên</span>
            </div>
            <div>
              <Image src={icon_balo} alt="Logo" width={30} height={30} />
              <span>Đa Lĩnh Vực | Nghành Nghề</span>
            </div>
          </Top>
          <hr />
          <Bottom>
            <div>
              <Image src={icon_phone} alt="Logo" width={50} height={50} />
              <p>Trương Nhân Hào: 0354107487 - 0326488487 (Admin)</p>
            </div>
            <div>
              <Image src={icon_email} alt="Logo" width={50} height={50} />
              <p>Email: truongnhanhao107@gmail.com</p>
            </div>
            <div>
              <Image src={icon_address} alt="Logo" width={50} height={50} />
              <p>Địa Chỉ: Ấp Châu Thành, Xã An Ninh, Huyện Châu Thành, Tỉnh Sóc Trăng</p>
            </div>
            <div>
              <Image src={icon_fb} alt="Logo" width={50} height={50} />
              <p>Fanpage: Việc Làm Văn Phòng TPCT</p>
            </div>
          </Bottom>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Introduce;
const Container = styled.footer`
  ${Flex('', 'center')}
`;
const Wrapper = styled.div`
  display: flex;
  background-color: #ffff;
  border-radius: 10px;
  width: 1140px;
  padding: 30px 0;
`;
const Left = styled.div`
  display: flex;
  justify-content: center;
  width: 180px;
  min-width: 129px;
`;
const Right = styled.div`
  color: var(--primary-background-color);
  opacity: 0.7;
  .title {
    color: transparent;
    font-size: 25px;
    background-image: linear-gradient(to right bottom, #ffa400, #00aefd);
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 700;
    padding-bottom: 15px;
  }
`;
const Top = styled.div`
  display: flex;
  margin-left: 10px;
  margin-bottom: 5px;
  div {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    :not(:first-child) {
      margin-left: 20px;
    }
    span {
      font-size: var(--font-small);
    }
  }
`;
const Bottom = styled.div`
  display: block;
  div {
    display: flex;
    align-items: center;
    padding-top: 10px;
    p {
      font-size: var(--font-medium);
      font-weight: 700;
    }
  }
`;
