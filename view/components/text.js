import styled from 'styled-components';

function Text({ title }) {
  return (
    <TextStyled>
      <p>{title}</p>
    </TextStyled>
  );
}

export default Text;
const TextStyled = styled.nav`
  p {
    color: transparent;
    font-size: 25px;
    background-image: linear-gradient(to right bottom, #ffa400, #00aefd);
    background-clip: text;
    -webkit-background-clip: text;
    font-weight: 700;
  }
`;
