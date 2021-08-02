import React, { useState } from "react";
import Contents from "./content";
import styled from "styled-components";
import "../../App.scss";

const StyledFleches = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const ContentContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 20px;
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="website-offer-container">
      <div
        open={open}
        onClick={() => setOpen(!open)}
        style={{ width: `200px` }}
      >
        {" "}
        hello world
      </div>

      <ContentContainer>
        <Contents open={open} />
      </ContentContainer>
    </div>
  );
};

export default Burger;
