import React from "react";
import styled from "styled-components";

export const Input = ({ title, set, place, sty, id, Li, type }) => {
  return (
    <>
      {sty === "1" ? (
        <From>
          <input
            onChange={(e) => set(e.target.value)}
            type="text"
            id={title}
            className="form__input"
            autoComplete="off"
            placeholder=" "
          />
          <label htmlFor={title} className="form__label">
            {title}
          </label>
        </From>
      ) : (
        <InputRight>
          <label htmlFor={id}>{title}</label>
          <input
            id={id}
            name={id}
            type={type ? type : "text"}
            placeholder={place}
          ></input>
          {Li ? <li>{Li}</li> : <p></p>}
        </InputRight>
      )}
    </>
  );
};
const InputRight = styled.div`
  margin-top: 10px;
  width: 100%;
  min-width: 70%;
  input:valid,
  input:focus {
    border-bottom: 2px solid #deb887;
  }
  input {
    width: 100%;
    height: 50px;
    font-size: var(--font-large);
    border: 0;
    transition: 0.2s ease-in-out;
    background-color: inherit;
    color: #6f7e98;
  }
  label {
    font-size: var(--font-medium);
    font-weight: 570;
    color: #6f7e98;
    display: block;
    text-align: left;
    margin-top: 12px;
  }
  li {
    padding: 10px 0;
    font-size: var(--font-medium);
    color: #707070;
  }
  p {
    padding: 10px 0;
  }
`;
const From = styled.div`
  position: relative;
  width: 260px;
  height: 36px;
  input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #e1e5ee;
    border-radius: 6px;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    padding: 10px;
    background: none;
    &:hover {
      border-color: teal;
    }
    &:focus {
      border-color: teal;
    }
  }
  label {
    position: absolute;
    left: 10px;
    top: 8px;
    padding: 0 6px;
    cursor: text;
    background-color: white;
    color: teal;
    border-radius: 10px;
    transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  }
  .form__input:focus ~ .form__label,
  .form__input:not(:placeholder-shown).form__input:not(:focus) ~ .form__label {
    top: -0.5rem;
    font-size: 14px;
    left: 0.8rem;
    color: teal;
  }
`;
