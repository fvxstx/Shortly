import styled from "styled-components";
import { NextPage } from "next";

const Box = styled.footer`
  padding-top: 220px;

  color: #ffffff;
  display: flex;
  justify-content: space-between;
  background: var(--very-dark-violet);
`;

const TitleBox = styled.h4`
  margin: 0;
`;

const TableLinks = styled.table`
  text-align: left;
  width: 50%;

  font-size: 15px;
  margin-bottom: 80px;

  @media only screen and (max-width: 820px) {
    font-size: 12px;
  }
`;

const CategoriesLinks = styled.tr`
  font-size: 16px;
  height: 40px;
  vertical-align: top;
  font-weight: 700;
`;

const ManyLinks = styled.tr`
  color: var(--grey-violet);
  height: 30px;

  & > td > a:hover {
    color: var(--cyan);
  }
`;

const SocialMediaList = styled.ul`
  display: flex;
  list-style-type: none;
  text-align: center;

  margin: 0;
  padding: 0;
  gap: 20px;
q
  & #kid {
    margin-top: 3px;
  }

  & > li > a > img:hover {
    filter: invert(38%) sepia(42%) saturate(739%) hue-rotate(131deg)
      brightness(97%) contrast(91%);90 
  }
`;

const Footer: NextPage = () => {
  return (
    <Box>
      <TitleBox>
        <img src="/logo-white.svg" alt="" />
      </TitleBox>
      <TableLinks>
        <thead>
          <CategoriesLinks>
            <th>Features</th>
            <th>Resources</th>
            <th>Company</th>
          </CategoriesLinks>
        </thead>
        <tbody>
          <ManyLinks>
            <td>
              <a href="">Link Shortening</a>
            </td>
            <td>
              <a href="">Blog</a>
            </td>
            <td>
              <a href="">About</a>
            </td>
          </ManyLinks>
          <ManyLinks>
            <td>
              <a href="">Branded Links</a>
            </td>
            <td>
              <a href="">Developers</a>
            </td>
            <td>
              <a href="">Our Team</a>
            </td>
          </ManyLinks>
          <ManyLinks>
            <td>
              <a href="">Analytics</a>
            </td>
            <td>
              <a href="">Support</a>
            </td>
            <td>
              <a href="">Careers</a>
            </td>
          </ManyLinks>
          <ManyLinks>
            <td></td>
            <td></td>
            <td>
              <a href="">Contact</a>
            </td>
          </ManyLinks>
        </tbody>
      </TableLinks>
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
