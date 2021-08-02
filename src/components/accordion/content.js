import React from "react";
import styled from "styled-components";

const Ul = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fffff;

    transform: ${({ open }) => (open ? "translateX(80%)" : "translateX(500%)")};

    height: 500px;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <div className={`FAQ__container ${open ? " showing" : "Question__response "}`}>
      <p className=" ">
        Wij zijn digitale bouwmeesters. In dit digitale tijdperk is het
        belangrijk om als bedrijf of ZZP’er een online uithangbord te hebben.
        Wij zijn niet alleen gespecialiseerd in webshops, maar ook in websites.
        Wij geloven in het produceren van creatieve producten die harten
        veroveren, geesten inspireren en zakelijke resultaten opleveren. Hierbij
        ontwerpen wij specifiek gericht op de behoeftes van uw bedrijf. Hierdoor
        krijg je een geoptimaliseerde website die uw bedrijf uitstraalt.{" "}
      </p>
      <a href="/">Start project</a>
    </div>
  );
};

export default RightNav;
