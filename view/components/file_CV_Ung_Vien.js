import styled from "styled-components";
import { Flex } from "../responsive";
import PrimaryButton from "./PrimaryButton";
import Text from "./text";
function File_CV_Ung_Vien() {
  return (
    <>
      <Wrapper>
        <div className="title">
          <h4>File CV Ứng Viên</h4>
        </div>
        <List>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <Item>
            <a href="/">
              <Text title="Trương Nhân Hào" />
            </a>
            <span>Lĩnh Vực: Quản Trị Kinh Doang</span>
            <br />
            <span className="small">(Xem Chi Tiết)</span>
          </Item>
          <PrimaryButton primary title="Ứng Tuyển" />
        </List>
      </Wrapper>
    </>
  );
}

export default File_CV_Ung_Vien;

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
  :last-child {
    div {
      width: 100%;
      text-align: center;
    }
  }
`;
const List = styled.ul`
  padding: 0 0 20px 40px;
`;
const Item = styled.li`
  margin-top: 20px;
  a {
    p {
      font-size: var(--font-lager);
    }
  }
  span {
    line-height: 20px;
    color: var(--font-color-blue);
  }
  .small {
    font-size: var(--font-medium);
    cursor: pointer;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 12px;
      left: -10px;
      border-top: 5px solid white;
      border-left: 5px solid transparent;
      border-bottom: 5px solid transparent;
    }
    :hover {
      font-weight: 600;
    }
  }
`;
