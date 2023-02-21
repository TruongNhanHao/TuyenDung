import Image from "next/future/image";
import styled from "styled-components";
import ung_vien from "../img/ung_vien.png";
import nha_td from "../img/nha_td.png";
import Text from "./text";
import PrimaryButton from "./PrimaryButton";

function Main_register() {
  return (
    <>
      <Wrapper>
        <Item>
          <div>
            <Image src={ung_vien} alt="Logo" width={100} height={100} />
            <Text title="Ứng Viên Tìm Việc" />
          </div>
          <div>
            <span>
              Có Ngày Việc Làm <br></br>Nhận Ngày Công Việc Phù Hợp
            </span>
          </div>
          <PrimaryButton lg title="Đăng Ký" />
        </Item>
        <Item className="two">
          <div>
            <Image src={nha_td} alt="Logo" width={100} height={100} />
            <Text title="Nhà Tuyển Dụng" />
          </div>
          <div>
            <span>
              Tìm Kiếm Ứng Viên Miễn Phí <br></br>Chất Lượng Tạo Niềm Tin
            </span>
          </div>
          <PrimaryButton lg title="Đăng Ký" />
        </Item>
        <Dot>
          <p>Hoặc</p>
        </Dot>
      </Wrapper>
    </>
  );
}

export default Main_register;

const Wrapper = styled.div`
  display: inline-flex;
  height: 450px;
  max-width: 847px;
  position: relative;
  margin-bottom: 30px;
  .two {
    background-color: teal;
  }
`;
const Item = styled.div`
  width: 50%;
  background-color: var(--primary-background-color);
  text-align: center;

  div {
    display: inline-flex;
    align-items: center;
    span {
      padding: 50px 0 10px 0;
    }
  }
  padding: 80px 0;
`;
const Dot = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  background: #23c0e9;
  position: absolute;
  left: 45.5%;
  top: 50%;
  margin-top: -40px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  P {
    color: #fff;
    font-weight: 700;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    margin-top: 16px;
    margin-left: 14px;
  }
`;
