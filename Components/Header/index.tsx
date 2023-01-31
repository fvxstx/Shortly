import styled from "styled-components";
import { NextPage } from "next";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Head1 = styled.div`
  gap: 40px;
  width: 100%;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 430px) {
    justify-content: space-between;
  }
`;

const NavPag = styled.nav`
  margin-bottom: 15px;
  width: 280px;

  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

const Pags = styled.ul`
  display: flex;
  list-style: none;
  font-weight: bold;
  color: var(--grey-violet);

  font-size: 14px;
  margin-right: 220px;
  gap: 25px;
  padding: 0;
`;

const PagsLi = styled.li`
  &:hover {
    color: var(--very-dark-violet);
  }
`;

const Hamburger = styled.button`
  display: none;

  @media only screen and (max-width: 430px) {
    display: flex;
    background-color: #ffffff;
    border: none;
  }
`;

const HamburIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const Buttons = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  gap: 10px;

  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

const But = styled.button`
  border: none;
  background: #ffffff;
  color: var(--grey-violet);
  font-weight: bold;

  height: 35px;
  width: 80px;
  border-radius: 18px;
  font-size: 14px;
  padding: 0;

  &:hover {
    cursor: pointer;
    background: var(--cyan);
    opacity: 0.5;
    color: #ffffff;
  }
`;

const Pag: NextPage = () => {
  return (
    <HeaderDiv>
      <Head1>
        <h1>
          <img src="/logo.svg" alt="" />
        </h1>

        <NavPag>
          <Pags>
            <PagsLi>
              <a href="">Features</a>
            </PagsLi>
            <PagsLi>
              <a href="">Pricing</a>
            </PagsLi>
            <PagsLi>
              <a href="">Resources</a>
            </PagsLi>
          </Pags>
        </NavPag>
        <Hamburger>
          <HamburIcon src="icon-menu.svg" alt="" />
        </Hamburger>
      </Head1>

      <Buttons>
        <But>Login</But>
        <But>Sign up</But>
      </Buttons>
    </HeaderDiv>
  );
};

export default Pag;
