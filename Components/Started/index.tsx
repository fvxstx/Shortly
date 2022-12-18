import styled from "styled-components";
import { NextPage } from "next";

const Main = styled.section`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

const Title = styled.h2`
  color: var(--dark-blue);

  font-size: 65px;
  line-height: 75px;
  margin: 0;

  @media only screen and (max-width: 820px) {
    font-size: 55px;
    line-height: 65px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  color: var(--grey-violet);

  @media only screen and (max-width: 820px) {
    font-size: 16px;
    width: 400px;
  }
`;

const Button = styled.button`
  height: 47px;
  width: 160px;
  font-size: 18px;
  margin-top: 25px;
  border-radius: 25px;

  background-color: var(--cyan);
  color: #ffffff;
  border: none;
  font-weight: bold;

  @media only screen and (max-width: 820px) {
    height: 40px;
    width: 130px;
    font-size: 16px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Ilustration = styled.img`
  width: 530px;

  position: relative;

  @media only screen and (max-width: 1190px) {
    width: 450px;
    position: absolute;
    right: -130px;
  }

  @media only screen and (max-width: 850px) {
    width: 400px;
  }
`;

const Started: NextPage = () => {
  return (
    <Main>
      <Texts>
        <Title>More than just shorter links</Title>
        <Paragraph>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </Paragraph>
        <Button>Get Started</Button>
      </Texts>

      <Ilustration src="/illustration-working.svg" alt="" />
    </Main>
  );
};

export default Started;
