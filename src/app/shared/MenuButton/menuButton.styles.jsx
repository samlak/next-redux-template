import styled from "styled-components";

export const MBStyle = styled.button`
  width: 50px;
  height: 40px;
  color: white;
  background-color: transparent;
  position: fixed;
  top: 2.5vh;
  right: 75px;
  z-index: 10;
  cursor: pointer;

  div {
    background-color: ${({ open }) => (open === "close" ? "black" : "white")};
    transition: all 0.25s ease-in;
    transform-origin: center;
    position: relative;
    border-radius: 1px;
  }

  div.first {
    height: 2px;
    width: ${({ open }) => (open !== "close" ? "25px" : "35px")};
    transform: ${({ open }) =>
      open !== "close"
        ? "rotate(45deg) translateY(5px) translateX(5px)"
        : "rotate(0) translateY(0px)"};
  }

  div.second {
    height: 2px;
    width: ${({ open }) => (open !== "close" ? "25px" : "20px")};
    margin-top: 5px;
    transform: ${({ open }) =>
      open !== "close" ? "rotate(-45deg)" : "rotate(0)"};
  }
`;
