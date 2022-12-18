import styled from "styled-components";
import { NextPage } from "next";

const HeaderDiv = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;

const Head1 = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavPag = styled.nav`
  margin-bottom: 15px;
  width: 280px;
`;

const Pags = styled.ul`
  display: flex;
  list-style: none;

  font-size: 14px;
  margin-right: 220px;
  gap: 25px;
  font-weight: bold;
  padding: 0;

  color: var(--grey-violet);
`;

const PagsLi = styled.li`
  &:hover {
    color: var(--very-dark-violet);
  }
`;

const Buttons = styled.div`
  position: relative;
  margin-bottom: 15px;
  display: flex;
  gap: 10px;
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
      </Head1>

      <Buttons>
        <But>Login</But>
        <But>Sign up</But>
      </Buttons>
    </HeaderDiv>
  );
};

export default Pag;
