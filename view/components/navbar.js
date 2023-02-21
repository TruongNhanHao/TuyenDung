import styled from "styled-components";
import Image from "next/future/image";
import logo from "../img/logo.png";
import bg_b1 from "../img/bg_b1.png";
import ct3 from "../img/ct3.png";
import icon_admin from "../img/icon_admin.jpg";
import ct2 from "../img/ct2.jpg";
import ct1 from "../img/ct1.jpg";
import Link from "next/link";
import { Flex, ipad } from "../responsive";
import "animate.css";

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Top>
          <div>
            <Link href="/profile_cong_ty">
              <Image src={logo} alt="Logo" width={220} height={66} />
            </Link>
          </div>
          <Right>
            <div>
              <Link href="/">
                <a>Trang Chủ</a>
              </Link>
              <Link href="/danh_sach_viec_lam">
                <a>Việc làm</a>
              </Link>
              <div className="h">
                <Link href="/list_ung_vien">
                  <a>Ứng Viên</a>
                </Link>
                <ul className="active animate__animated animate__bounceIn">
                  <li>Chia Sẽ Hồ Sơ</li>
                  <li>Ứng Viên Mới</li>
                  <li>Thông Tin Ứng Viên</li>
                </ul>
              </div>
              <Link href="/detail_job">
                <a>Liên Hệ</a>
              </Link>
              <Link href="/nop_don_ung_tuyen">
                <a>Ứng Tuyển</a>
              </Link>
              <div className="after" />
              <Link href="/profile_ung_vien">
                <button>
                  <Image src={bg_b1} alt="login" width={50} height={50} />
                  <p>Đăng Nhập | Đăng Ký</p>
                </button>
              </Link>
            </div>
          </Right>
        </Top>
        <Bottom>
          <Left_Bot>
            <Image src={icon_admin} alt="Logo" width={172} height={172} />
          </Left_Bot>
          <Right_Bot className="">
            <div className="wrapper animate__animated animate__bounceInDown">
              <Image src={ct1} alt="Logo" width={65} height={65} />
              <div>
                <h5>Công Ty Luật TNHH Matrix</h5>
                <p>TP.Thủ Đức</p>
              </div>
            </div>
            <div className="wrapper animate__animated animate__bounceInDown">
              <Image src={ct2} alt="Logo" width={65} height={65} />
              <div>
                <h5>Công Ty TNHH CallUs</h5>
                <p>Quận Tân Bình</p>
              </div>
            </div>
            <div className="wrapper animate__animated animate__bounceInDown">
              <Image src={ct3} alt="Logo" width={65} height={65} />
              <div>
                <h5>Công Ty TNHH Dịch Vụ GalaxyDR</h5>
                <p>TP.Thủ Đức</p>
              </div>
            </div>
          </Right_Bot>
        </Bottom>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
const Container = styled.div`
  ${Flex("", "center")}
`;
const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  ${ipad({ padding: "0 5px" })}
`;
const Top = styled.div`
  ${Flex("center", "space-between")}
  padding: 30px 0;
  ${ipad({ display: "block" })}
`;
const Right = styled.div`
  div {
    ${Flex("center", "")}
    gap: 20px;
    ${ipad({ gap: "8px" })}
    position: relative;
    .active {
      display: none;
      width: 220px;
      position: absolute;
      z-index: 99;
      opacity: 1;
      visibility: visible;
      top: 190%;
      background: #0e142773;
      border-top: 2px solid #23c0e9;
      ${ipad({ top: "120%" })}
      ::before {
        content: "";
        position: absolute;
        top: -30px;
        width: 90px;
        height: 30px;
        cursor: pointer;
      }
    }
    li {
      letter-spacing: 1px;
      padding: 8px 10px 8px 20px;
      border-bottom: 1px solid #ffffff52;
      cursor: pointer;
      :hover {
        background-color: #23c0e9;
        transition: all 0.4s ease;
      }
    }
  }
  a {
    padding: 5px;
    text-align: center;
  }
  .h {
    :hover .active {
      display: block;
    }
  }

  button {
    width: 280px;
    height: 50px;
    ${Flex("center", "center")}
    border-radius: 7px;
    background-color: transparent;
    border: 1px solid #f6f6f6;
    cursor: pointer;
    p {
      line-height: 50px;
      height: 50px;
    }
  }
  .after {
    border: 0.3px solid #f6f6f6;
    width: 1px;
    height: 50px;
    margin: 0 30px;
    ${ipad({ margin: "0 10px" })}
  }
`;
const Bottom = styled.div`
  ${Flex("", "center")}
  margin: 30px 0 50px 0;
`;
const Left_Bot = styled.div`
  ${ipad({ display: "none" })}
`;
const Right_Bot = styled.div`
  ${Flex("center", "")}
  background-color: var(--primary-background-color);
  position: relative;
  overflow: hidden;
  width: 966px;
  min-width: 500px;
  height: 172px;
  ${ipad({ height: "140px" })}

  .wrapper {
    ${Flex("", "center")}
    position: relative;
    width: 322px;
    cursor: pointer;
    padding-left: 5px;
    Image {
      border-radius: 10px;
    }
    div {
      padding: 10px 5px;
    }
    p {
      font-size: var(--font-small);
    }
    :not(:last-child) {
      ::before {
        content: "";
        position: absolute;
        height: 150%;
        right: 0;
        top: -20px;
        opacity: 0.3;
        border: 0.2px solid #f6f6f6;
      }
    }
  }
`;
