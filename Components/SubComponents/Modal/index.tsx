import styled from "styled-components";
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

const Hamburger = styled.button`
  display: none;

  @media only screen and (max-width: 430px) {
    display: flex;
    background-color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;

const HamburIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const ModalContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--dark-violet);

  z-index: 1;
  border-radius: 8px;
  width: 280px;
  height: 340px;
  top: 100px;
  left: 0;
  right: 0;
`;

const ModalListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
`;

const ModalLinks = styled.a`
  color: #ffffff;
  font-weight: 700;
  font-size: 16px;

  background: none;
  border: none;
`;

const DivLine = styled.div`
  background-color: #ffffff;
  width: 85%;
  height: 1px;
  opacity: 0.1;
  margin-top: 10px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;

const ButtonModal = styled(ModalLinks)`
  width: 220px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background: var(--cyan);
  }
`;

const Modal: NextPage = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  if (isBrowser) {
    return (
      <>
        <Hamburger
          onClick={() => {
            setIsBrowser(false);
          }}
        >
          <HamburIcon src="icon-menu.svg" alt="" />
        </Hamburger>
        <ModalContainer>
          <nav>
            <ModalListLinks>
              <li>
                <ModalLinks href="">Features</ModalLinks>
              </li>
              <li>
                <ModalLinks href="">Pricing</ModalLinks>
              </li>
              <li>
                <ModalLinks href="">Resources</ModalLinks>
              </li>
            </ModalListLinks>
          </nav>
          <DivLine></DivLine>
          <ButtonsDiv>
            <ButtonModal as="button">Login</ButtonModal>
            <ButtonModal as="button">Sign Up</ButtonModal>
          </ButtonsDiv>
        </ModalContainer>
      </>
    );
  } else {
    return (
      <>
        <Hamburger
          onClick={() => {
            setIsBrowser(true);
          }}
        >
          <HamburIcon src="icon-menu.svg" alt="" />
        </Hamburger>
      </>
    );
  }
};

export default Modal;
