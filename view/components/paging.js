import styled from 'styled-components';

function Paging() {
  return (
    <>
      <Wrapper>
        <Next>Trang Trước</Next>
        <Between>
          <div>1</div>
          <div>3</div>
          <div>4</div>
          <div>4</div>
          <div>4</div>
        </Between>
        <Next>Trang Sau</Next>
      </Wrapper>
    </>
  );
}

export default Paging;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 10px;
  width: 100%;
`;
const Next = styled.div`
  display: block;
  width: 200px;
  line-height: 40px;
  max-height: 40px;
  border-radius: 10px;
  background-color: var(--primary-background-color);
  text-align: center;
  :hover {
    transition: 0.4s all ease;
    cursor: pointer;
    background-color: var(--header-background-color);
  }
`;
const Between = styled.div`
  display: inline-flex;
  justify-content: center;
  flex-wrap: wrap;
  opacity: 0.8;
  margin: 0 15px;
  div {
    margin: 5px;
    border-radius: 5px;
    padding: 5px 16px;
    background-color: var(--primary-background-color);
    :hover {
      transition: 0.4s all ease;
      cursor: pointer;
      background-color: var(--header-background-color);
    }
  }
`;
