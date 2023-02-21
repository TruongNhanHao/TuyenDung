import Image from "next/future/image";
import styled from "styled-components";
import Text from "./text";
import icon_address from "../img/icon_address.png";
import icon_uv_creat from "../img/icon_uv_creat.png";
import icon_chuyenNganh from "../img/icon_chuyenNganh.png";
import PrimaryButton from "./PrimaryButton";
import Phan_tich from "./phan_tich";
function List_ung_vien() {
  return (
    <>
      <Item>
        <div className="nghanh">
          <div className="p14">
            <Text title="TRƯƠNG NHÂN HÀO" />
          </div>
          <h1>BUSINESS DEVELOPMENT</h1>
        </div>
        <Bottom>
          <div>
            <Image src={icon_chuyenNganh} alt="Logo" width={40} height={40} />
            <p>
              Chuyên Ngành:<b> Kinh tế</b>
            </p>
          </div>
          <div>
            <Image src={icon_address} alt="2" width={40} height={40} />
            <p>
              Địa Chỉ:<b> Cần Thơ</b>
            </p>
          </div>
          <div>
            <Image src={icon_uv_creat} alt="1" width={40} height={40} />
            <p>
              Ngày:<b> 7/10/2022</b>
            </p>
          </div>
          <PrimaryButton title="Xem thông tin ứng viên" list />
        </Bottom>
      </Item>
    </>
  );
}

export default List_ung_vien;
const Item = styled.div`
  width: 100%;
  max-width: 400px;
  height: 460px;
  border-radius: 10px;
  margin-top: 30px;
  border: 1px solid #cbcbcb;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  justify-content: center;
  .p14 {
    width: 90%;
    height: 50px;
    p {
      font-size: 16px;
    }
    display: block;
    text-align: center;
    line-height: 50px;
    background-color: white;
    border-radius: 0 0 10px 10px;
  }
  .nghanh {
    width: 100%;
    height: 160px;
    display: flex;
    justify-content: center;
    background-color: teal;
    position: relative;
    text-align: center;
    border-radius: 10px 10px 0 0;
    background: linear-gradient(to right, #735ce7, #acc3ff);
    color: white;
    h1 {
      position: absolute;
      bottom: 0;
      font-weight: 400;
    }
  }
`;
const Bottom = styled.div`
  display: block;
  height: 200px;
  div {
    display: flex;
    align-items: center;
    padding-top: 10px;
    margin: 0 10px;
    p {
      color: black;
      font-size: var(--font-large);
      font-weight: 400;
    }
  }
  div {
    :last-child {
      text-align: center;
      display: block;
    }
  }
`;
