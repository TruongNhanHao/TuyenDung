import styled from 'styled-components';
import { ipad } from '../responsive';
import { BasicTable } from './BasicTable';
import Text from './text';

function Info_Ung_Vien() {
  return (
    <>
      <Wrapper>
        <div className="pad">
          <Text title="THÔNG TIN ỨNG VIÊN" />
          <Info>
            <BasicTable />
          </Info>
        </div>
      </Wrapper>
    </>
  );
}

export default Info_Ung_Vien;

const Wrapper = styled.div`
  display: block;
  border-radius: 10px;
  background-color: var(--primary-background-color);
  margin-bottom: 15px;
  .pad {
    padding: 35px 30px;
    ${ipad({ padding: '15px 10px' })}
  }
`;
const Info = styled.div`
  display: block;
  margin-top: 30px;
  width: 100%;
  height: 720px;
  background-color: white;
  overflow-y: scroll;
`;
