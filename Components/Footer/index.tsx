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
`;

const Footer: NextPage = () => {
  return (
    <Box>
      <TitleBox>
        <img src="/logo.svg" alt="" />
      </TitleBox>
      <TableLinks>
        <thead>
          <tr>
            <th>Features</th>
            <th>Resources</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Link Shortening</td>
            <td>Blog</td>
            <td>About</td>
          </tr>
          <tr>
            <td>Branded Links</td>
            <td>Developers</td>
            <td>Our Team</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Support</td>
            <td>Careers</td>
          </tr>
          <tr>
            <td>Contact</td>
          </tr>
        </tbody>
      </TableLinks>
      <ul>
        <li>
          <a href="">
            <img src="/icon-facebook.svg" alt="" />
          </a>
        </li>
        <li>
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
      </ul>
    </Box>
  );
};

export default Footer;
