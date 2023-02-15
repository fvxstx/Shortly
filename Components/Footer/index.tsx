import styled from "styled-components";
import { NextPage } from "next";

const Box = styled.footer`
  padding-top: 220px;

  color: #ffffff;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  background: var(--very-dark-violet);

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TitleBox = styled.h4`
  margin: 0;
`;

const BoxLinks = styled.ul`
  display: flex;
  margin: 0;
  margin-bottom: 50px;
  gap: 20px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const ColumnLinks = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 430px) {
    & > h5 {
      margin-bottom: 8px;
    }
  }
`;

const ALink = styled.a`
  font-size: 14px;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;

const SocialMediaList = styled.ul`
  display: flex;
  text-align: center;
  margin: 0;
  gap: 20px;
  q & #kid {
    margin-top: 3px;
  }

  & > li > a > img:hover {
    filter: invert(38%) sepia(42%) saturate(739%) hue-rotate(131deg)
      brightness(97%) contrast(91%);
  }
`;

const Footer: NextPage = () => {
  return (
    <Box>
      <TitleBox>
        <img src="/logo-white.svg" alt="" />
      </TitleBox>
      <BoxLinks>
        <ColumnLinks>
          <h5>Features</h5>
          <ALink href="">Link Shortening</ALink>
          <ALink href="">Blog</ALink>
          <ALink href="">About</ALink>
        </ColumnLinks>
        <ColumnLinks>
          <h5>Resources</h5>
          <ALink href="">Branded Links</ALink>
          <ALink href="">Developers</ALink>
          <ALink href="">Our Team</ALink>
        </ColumnLinks>
        <ColumnLinks>
          <h5>Company</h5>
          <ALink href="">Analytics</ALink>
          <ALink href="">Support</ALink>
          <ALink href="">Careers</ALink>
          <ALink href="">Contact</ALink>
        </ColumnLinks>
      </BoxLinks>

      <SocialMediaList>
        <li>
          <a href="">
            <img src="/icon-facebook.svg" alt="" />
          </a>
        </li>
        <li id="kid">
          <a href="">
            <img src="/icon-twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/icon-pinterest.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="">
            <img src="/icon-instagram.svg" alt="" />
          </a>
        </li>
      </SocialMediaList>
    </Box>
  );
};

export default Footer;
