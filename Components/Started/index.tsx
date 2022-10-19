import styled from "styled-components";
import { NextPage } from "next";

const Main = styled.section`
  display: flex;
  justify-content: space-between;
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
`;

const Paragraph = styled.p`
  margin: 0;
  color: var(--grey-violet);
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

  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const Ilustration = styled.img`
  width: 530px;

  position: relative;
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
