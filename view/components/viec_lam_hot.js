import Image from "next/future/image";
import styled from "styled-components";
import { Flex } from "../responsive";
import ct1 from "../img/ct1.jpg";
import icon_cty from "../img/icon_cty.png";
import icon_price from "../img/icon_price.png";
import icon_address from "../img/icon_address.png";
import icon_balo from "../img/icon_balo.png";
import pdf from "../img/pdf.png";
import Text from "./text";
import PrimaryButton from "./PrimaryButton";
function Viec_Lam_Hot() {
  return (
    <>
      <Wrapper>
        <div className="title">
          <h4>
            Việc Làm
            <span style={{ color: "red", fontWeight: "400" }}> Hot</span>
          </h4>
        </div>
        <Item>
          <div>
            <div className="center">
              <Image src={ct1} alt="Logo" width={100} height={100} />
              <Text title="OfficeJob - Việc Làm Văn Phòng" />
            </div>
            <Bot>
              <div>
                <Image src={icon_cty} alt="Logo" width={36} height={36} />
                <span>Công Ty TNHH DV GALAXYDR</span>
              </div>
              <div>
                <Image src={icon_price} alt="Logo" width={36} height={36} />
                <span>Từ 8 Triệu - 12 Triệu/Tháng</span>
              </div>
              <div>
                <Image src={icon_address} alt="Logo" width={36} height={36} />
                <span>
                  Số 487, Ấp An Ninh, Huyện Châu Thành, Tỉnh Sóc Trăng
                </span>
              </div>
            </Bot>
            <div className="center">
              <PrimaryButton
                primary
                title="Ứng Tuyển"
                leftImg={
                  <Image src={icon_balo} alt="Logo" width={30} height={30} />
                }
              />
              <PrimaryButton
                primary
                title="Chi Tiết"
                leftImg={<Image src={pdf} alt="Logo" width={40} height={40} />}
              />
            </div>
          </div>
        </Item>
      </Wrapper>
    </>
  );
}

export default Viec_Lam_Hot;

const Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 290px;
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
  ${Flex("", "center")}
  padding: 30px;
  div {
    .center {
      width: 100%;
      display: inline-block;
      text-align: center;
    }
    p {
      padding-top: 30px;
    }
  }
`;
const Bot = styled.div`
  padding-top: 10px;
  color: var(--font-color-blue);
  div {
    display: inline-flex;
    align-items: center;
    padding: 7px;
    font-size: 13px;
    span {
      margin-left: 4px;
    }
  }
`;
