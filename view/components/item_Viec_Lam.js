import styled from "styled-components";
import icon_price from "../img/icon_price.png";
import icon_cty from "../img/icon_cty.png";
import icon_address from "../img/icon_address.png";
import ct3 from "../img/ct3.png";
import Image from "next/future/image";
import Text from "./text";
function Item_VL() {
  return (
    <>
      <Item>
        <LeftItem>
          <Image src={ct3} alt="Logo" width={110} height={110} />
          <p>
            THỰC TẬP
            <br />
            <span>22/9/2022</span>
          </p>
        </LeftItem>
        <RightItem>
          <Text title="THỰC TẬP SINH IT HELPDESK" />
          <div>
            <Image src={icon_cty} alt="Logo" width={40} height={40} />
            <p>Công Ty TNHH DV GALAXYDR</p>
          </div>
          <hr />
          <div>
            <Image src={icon_price} alt="Logo" width={40} height={40} />
            <p>4 Triệu - 5 Triêu</p>
          </div>
          <hr />
          <div>
            <Image src={icon_address} alt="Logo" width={40} height={40} />
            <p>
              Địa Chỉ: Ấp Châu Thành, Xã An Ninh, Huyện Châu Thành, Tỉnh Sóc
              Trăng
            </p>
          </div>
        </RightItem>
      </Item>
    </>
  );
}

export default Item_VL;
const Item = styled.div`
  display: flex;
  max-width: 600px;
  border: 1px solid teal;
  background-color: #ffff;
  border-radius: 10px;
  color: var(--primary-background-color);
  padding: 30px 0;
`;

const LeftItem = styled.div`
  /* width: 180px; */
  flex: 1;
  display: block;
  text-align: center;
  padding: 30px 0;
  p {
    line-height: 30px;
    margin-top: 7px;
    color: var(--font-color-blue);
    text-transform: uppercase;
    font-weight: 500;
    span {
      font-size: var(--font-medium);
      color: red;
    }
  }
`;
const RightItem = styled.div`
  flex: 2;
  position: relative;
  p {
    font-size: var(--font-lager);
    font-weight: 400;
    cursor: pointer;
  }
  div {
    display: inline-flex;
    align-items: center;
    padding: 10px 0;
    p {
      font-size: var(--font-small);
    }
  }
`;
