import { css } from 'styled-components';

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const ipad = (props: any) => {
  return css`
    @media only screen and (max-width: 820px) {
      ${props}
    }
  `;
};

export const Navbar = (props: any) => {
  return css`
    background-repeat: no-repeat;
    background-size: 300px 200px;
    line-height: 30px;
    margin-top: -5px;
    ${props}
  `;
};
export const Payment = (props: any) => {
  return css`
    background-repeat: no-repeat;
    background-size: 368px 190px;
    line-height: 30px;
    margin-top: -5px;
    ${props}
    height: 20px;
    width: 20px;
  `;
};
export const Detail = (props: any) => {
  return css`
    background-repeat: no-repeat;
    background-size: 300px 180px;
    line-height: 30px;
    margin-top: -5px;
    ${props}
    height: 30px;
    width: 30px;
  `;
};
export const Detail1 = (props: any) => {
  return css`
    background-repeat: no-repeat;
    background-size: 300px 180px;
    line-height: 30px;
    margin-top: -5px;
    ${props}
  `;
};
export const Flex = (items: any, content: any) => {
  return css`
    display: flex;
    align-items: ${items};
    justify-content: ${content};
  `;
};
export const Block = (w: any, h: any, color: any) => {
  return css`
    width: ${w};
    height: ${h};
    background: ${color};
  `;
};
export const Arrows = (t: any) => {
  return css`
    position: absolute;
    z-index: 100;
    opacity: 0.6;
    padding: 8px;
    top: ${t};
  `;
};
