import styled from "styled-components";
import { NextPage } from "next";

const BoxInfos = styled.section`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-bottom: 120px;
`;

const Title = styled.h3`
  font-size: 35px;
  color: var(--dark-blue);
  margin: 0;
  margin-top: 80px;
`;

const Subtitle = styled.p`
  width: 540px;
  color: var(--grey-violet);
  line-height: 30px;
`;

const LinesInfos = styled.div`
  display: flex;
  align-items: center;
  text-align: left;

  margin-top: 60px;
`;

const DifInfos = styled.article<{ margin?: string }>`
  margin-bottom: ${(props) => props.margin || "0"};
  background-color: white;
  color: var(--grey-violet);

  font-size: 16px;
  max-width: 360px;
  height: 270px;
  padding: 10px 20px;
  border-radius: 8px;
`;

const SepareteBlue = styled.hr`
  background-color: var(--cyan);
  border: none;

  width: 30px;
  height: 8px;
`;

const BoxImages = styled.div`
  padding: 10px;
  padding-top: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  bottom: 50px;
  left: 10px;

  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-violet);
`;

const TitleInfos = styled.h4`
  font-weight: bold;
  color: var(--very-dark-violet);
  position: relative;

  bottom: 20px;
  font-size: 21px;
  margin: 0;
`;

const PInfos = styled.p`
  margin: 0;
`;

const Infos: NextPage = () => {
  return (
    <BoxInfos>
      <Title>Advanced Statistics</Title>
      <Subtitle>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Subtitle>
      <LinesInfos>
        <DifInfos margin={"70px"}>
          <BoxImages>
            <img src="/icon-brand-recognition.svg" alt="brand recognition" />
          </BoxImages>
          <TitleInfos>Brand Recognition</TitleInfos>
          <PInfos>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </PInfos>
        </DifInfos>
        <SepareteBlue />
        <DifInfos>
          <BoxImages>
            <img src="/icon-detailed-records.svg" alt="detailed records" />
          </BoxImages>
          <TitleInfos>Detailed Records</TitleInfos>
          <PInfos>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </PInfos>
        </DifInfos>
        <SepareteBlue />
        <DifInfos margin={"-70px"}>
          <BoxImages>
            <img src="/icon-fully-customizable.svg" alt="fully costomizable" />
          </BoxImages>
          <TitleInfos>Fully Customizable</TitleInfos>
          <PInfos>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </PInfos>
        </DifInfos>
      </LinesInfos>
    </BoxInfos>
  );
};

export default Infos;
