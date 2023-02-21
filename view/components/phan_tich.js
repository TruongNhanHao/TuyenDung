import Image from "next/future/image";
import styled from "styled-components";
import Text from "./text";
import icon_admin from "../img/icon_admin.jpg";

function Phan_tich() {
  return (
    <>
      <Item>
        <Top>
          <Image src={icon_admin} alt="Logo" width={70} height={70} />
          <Text title="HỒ SỞ OFFICEJOB" />
        </Top>
        <hr />
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>

        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>487</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN</h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>4872</span>
            </div>
          </div>
        </Bottom>
        <Bottom>
          <div>
            <h5>CÔNG NGHỆ THÔNG TIN </h5>
          </div>
          <div>
            <div className="item">
              <Bot></Bot>
              <span>4</span>
            </div>
          </div>
        </Bottom>
      </Item>
    </>
  );
}

export default Phan_tich;
const Item = styled.div`
  display: block;
  width: 300px;
  background: linear-gradient(to right, #735ce7, #acc3ff);
  border: 1px solid #cbcbcb;
  box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  margin: 20px 0;
`;
const Top = styled.div`
  text-align: center;
  margin: 20px 0;
  p {
    color: white;
    padding: 5px 0;
    font-weight: 400;
  }
`;
const Bottom = styled.div`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  .item {
    height: 20px;
    display: inline-flex;
    justify-content: center;
  }
  h5 {
    font-weight: 400;
  }
  span {
    width: 32px;
  }
`;
const Bot = styled.div`
  display: inline-block;
  width: 70px;
  margin-right: 3px;
  background-color: #6f7e98;
  height: 20px;
  border-radius: 10px;
`;
