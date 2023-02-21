import styled from "styled-components";
import Link from "next/link";
import { Block } from "../responsive";
function PrimaryButton({
  to,
  href,
  title,
  primary = false,
  lg = false,
  ut = false,
  list = false,
  leftIcon,
  leftImg,
  rightIcon,
  disabled = false,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  let classes = "";
  if (primary) {
    classes = "primary";
  } else if (lg) {
    classes = "lg";
  } else if (ut) {
    classes = "ut";
  } else if (list) {
    classes = "list";
  }

  // console.log(primary, bot, item);
  return (
    <Nav>
      <Comp className={classes} {...props}>
        {leftIcon && <span className="icon">{leftIcon}</span>}
        {leftImg}
        <span className="title">{title}</span>
        {rightIcon && <span className="icon">{rightIcon}</span>}
      </Comp>
    </Nav>
  );
}
const Nav = styled.div`
  user-select: none;
  + .wrapper {
    margin-left: 8px;
  }

  &.disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .icon + .title,
  .title + .icon {
    margin-left: 6px;
  }

  .icon {
    display: inline-block;
    width: 24px;
    text-align: center;
  }

  button {
    display: inline-flex;
    align-items: center;

    img {
      margin-left: 20px;
    }
  }
  .lg {
    margin-top: 30px;
    width: 280px;
    border: 1px solid white;
    text-align: center;
    border-radius: 10px;
    background-color: inherit;
    cursor: pointer;
    span {
      display: block;
      line-height: 50px;
      color: white;
      width: 100%;
      padding: 0;
      background-color: inherit;
      border-radius: 10px;
    }

    :hover {
      background-color: var(--button-color);
      transition: 0.4s all ease;
    }
  }
  :last-child {
    .primary {
      opacity: 0.8;
      background-color: var(--header-background-color);
      span {
        background-color: var(--header-background-color);
      }
    }
  }
  .primary {
    background-color: var(--list-background-color);
    border: none;
    margin-top: 15px;
    width: 160px;
    height: 50px;
    font-size: var(--font-large);
    cursor: pointer;
    position: relative;

    span {
      width: 100%;
      line-height: 50px;
      padding: 0px;
      background-color: var(--list-background-color);
    }
    &:hover {
      &:after {
        content: "";
        width: 100%;
        height: 1.2rem;
        background: transparent
          linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.479) 0%,
            rgba(77, 83, 83, 0.045) 100%
          )
          0% 0% no-repeat padding-box;
        box-shadow: 0 4px 6px #00000014;
        top: 0;
        left: 0;
        position: absolute;
      }
    }
    &:after {
      content: "";
      width: 100%;
      height: 1.2rem;
      background: transparent
        linear-gradient(
          180deg,
          rgba(77, 83, 83, 0.045) 0%,
          rgba(0, 0, 0, 0.479) 100%
        )
        0% 0% no-repeat padding-box;
      box-shadow: 0 4px 6px #00000014;
      bottom: 0;
      left: 0;
      position: absolute;
    }
  }
  .ut {
    margin-top: 30px;
    width: 90%;
    text-align: center;
    border-radius: 10px;
    background-color: var(--button-color);
    cursor: pointer;
    border: 0px;
    span {
      display: block;
      line-height: 50px;
      color: white;
      width: 100%;
      height: 50px;
      padding: 0;
      font-size: 22px;
      background-color: var(--button-color);
      border-radius: 10px;

      :hover {
        background-color: var(--header-background-color);
        transition: 0.4s all ease;
      }
    }

    :hover {
      background-color: var(--header-background-color);
      transition: 0.4s all ease;
    }
  }
  .list {
    margin-top: 20px;
    width: 60%;
    text-align: center;
    border-radius: 99999px;
    cursor: pointer;
    border: 0px;
    span {
      display: block;
      line-height: 50px;
      color: white;
      width: 100%;
      height: 50px;
      padding: 0;
      font-size: 14px;
      background-color: #acc3ff;
      border-radius: 10px;
      color: black;
      :hover {
        background: linear-gradient(to left, #735ce7, #acc3ff);
        transition: 0.2s all ease;
        box-shadow: 0 5px 10px rgb(0 0 0 / 10%);
        color: white;
      }
    }
  }
`;
export default PrimaryButton;
