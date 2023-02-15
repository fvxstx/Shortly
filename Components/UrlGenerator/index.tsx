import { useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";

const BoxSection = styled.section`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-top: 120px;
`;

const BoxInput = styled.div`
  display: flex;
  background: var(--dark-violet);
  background-image: url("/bg-shorten-desktop.svg");

  width: 100%;
  padding: 35px;
  gap: 18px;
  border-radius: 8px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const TextInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;

  border: none;
  background: white;
  color: black;
  font-family: "Poppins", sans-serif;
`;

const ButtonUrl = styled.button`
  width: 30%;
  border-radius: 4px;
  font-size: 16px;

  font-weight: bold;
  border: none;
  font-family: "Poppins", sans-serif;
  background-color: var(--cyan);

  &:hover {
    cursor: pointer;
    background-color: #6ae4e4;
  }

  @media only screen and (max-width: 430px) {
    height: 40px;
    width: 100%;
  }
`;

const SiteList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SiteItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000000;
  background-color: #fff;

  border-radius: 4px;
  padding: 0 18px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    font-size: 16px;
    padding: 0 18px 15px;
    border-radius: 8px;
  }
`;

const SiteAndCopy = styled.div`
  display: flex;
  color: var(--cyan);

  gap: 16px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    width: 100%;
  }
`;

const CopyButton = styled(ButtonUrl)`
  font-size: 12px;
  width: 75px;
  height: 30px;
  border-radius: 4px;

  @media only screen and (max-width: 430px) {
    width: 100%;
    height: 37px;
    font-size: 14px;
  }
`;

const UrlGenerator: NextPage = () => {
  const [copy, setCopy] = useState("Copy");

  return (
    <BoxSection>
      <BoxInput>
        <TextInput type="text" placeholder="Shorten a link here..." />
        <ButtonUrl>Shorten It!</ButtonUrl>
      </BoxInput>
      <SiteList>
        <SiteItem>
          <p>wwww.aleatoriosite.com.br</p>
          <SiteAndCopy>
            <a href="">urlaletoriaparaosite.com</a>
            <CopyButton
              onClick={(): void => {
                setCopy("Copied!");
              }}
            >
              {copy}
            </CopyButton>
          </SiteAndCopy>
        </SiteItem>
        <SiteItem>
          <p>wwww.aleatoriosite.com.br</p>
          <SiteAndCopy>
            <a href="">urlaletoriaparaosite.com</a>
            <CopyButton
              onClick={(): void => {
                setCopy("Copied!");
              }}
            >
              {copy}
            </CopyButton>
          </SiteAndCopy>
        </SiteItem>
        <SiteItem>
          <p>wwww.aleatoriosite.com.br</p>
          <SiteAndCopy>
            <a href="">urlaletoriaparaosite.com</a>
            <CopyButton
              onClick={(): void => {
                setCopy("Copied!");
              }}
            >
              {copy}
            </CopyButton>
          </SiteAndCopy>
        </SiteItem>
      </SiteList>
    </BoxSection>
  );
};

export default UrlGenerator;
