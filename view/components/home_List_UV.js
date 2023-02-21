import styled from 'styled-components';
import { Flex } from '../responsive';
import Image from 'next/future/image';
import Text from './text';
import bg_g1 from '../img/bg_g1.png';
import icon_sn from '../img/icon_sn.png';
import icon_uv_creat from '../img/icon_uv_creat.png';
function List_Ung_Vien() {
  return (
    <>
      <Wrapper>
        <div className="title">
          <h4>Ứng Viên Tìm Việc</h4>
        </div>
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />{' '}
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
        <Item>
          <Image src={bg_g1} alt="Logo" width={60} height={60} />
          <Bot>
            <Text title="Tô Thị Kim Thư" />
            <div>
              <Image src={icon_sn} alt="SN" width={40} height={40} />
              <p>27/7/2002</p>
            </div>
            <div>
              <Image src={icon_uv_creat} alt="NT" width={40} height={40} />
              <p>10/4/2022</p>
            </div>
          </Bot>
        </Item>
        <hr />
      </Wrapper>
    </>
  );
}

export default List_Ung_Vien;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 270px;
  background-color: var(--primary-background-color);
  border-radius: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  .title {
    display: flex;
    align-items: center;
    width: 100%;
    height: 47px;
    padding-left: 10px;
    background-color: var(--header-background-color);
    color: var(--text-color);
    border-radius: 10px 10px 0 0;
  }
`;
const Item = styled.div`
  ${Flex('center', '')}
  padding:15px 5px;
`;
const Bot = styled.div`
  padding-left: 5px;
  p:first-child {
    padding-left: 8px;
  }
  div {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-left: 4px;
    p {
      font-size: var(--font-small);
    }
  }
`;
