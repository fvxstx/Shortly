import styled from "styled-components";
import { NextPage } from "next";

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  background: var(--dark-violet);
  background-image: url("/bg-boost-desktop.svg");

  height: 180px;
  width: 100%;
  right: 0;

  @media only screen and (max-width: 430px) {
    height: 200px;
  }
`;

const Title = styled.h3`
  font-size: 30px;
  color: #ffffff;
  margin: 0;

  @media only screen and (max-width: 430px) {
    font-size: 24px;
  }
`;

const Button = styled.button`
  height: 47px;
  width: 160px;
  font-size: 18px;
  margin: 20px 0 0;
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

const BoostLinks: NextPage = () => {
  return (
    <Box>
      <Title>Boost your links today</Title>
      <Button>Get Started</Button>
    </Box>
  );
};

export default BoostLinks;
