import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { useLocalStorage } from "../../src/useLocalStorage";

const BoxSection = styled.section`
  width: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin-top: 120px;
`;

const BoxForm = styled.form`
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

  & > p {
    text-align: left;
    font-size: 16px;
  }

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

interface GeralLinks {
  linkURLType: string;
  resultURLType: string;
}

const UrlGenerator: NextPage = () => {
  const [liArray, setLiArray] = useLocalStorage("test", [
    {
      linkURLType: "https://github.com/fvxstx",
      resultURLType: "https://shrtco.de/VcsIzv",
    },
  ]);

  async function ShrtCodeAPI(url: string): Promise<string> {
    const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const results = await res.json();
    return results.result.full_short_link;
  }

  ShrtCodeAPI("https://github.com/fvxstx");

  function BoxFormComp(): JSX.Element {
    const [linkURL, setLinkURl] = useState("");

    return (
      <BoxForm>
        <TextInput
          name="linkAPI"
          type="text"
          placeholder="Shorten a link here..."
          value={linkURL}
          onChange={(e) => {
            setLinkURl(e.target.value);
          }}
        />
        <ButtonUrl
          onClick={async (e) => {
            e.preventDefault();
            const resultLin = await ShrtCodeAPI(linkURL);
            (setLiArray as Dispatch<SetStateAction<GeralLinks[]>>)(
              (arr: GeralLinks[]) => [
                {
                  linkURLType: linkURL,
                  resultURLType: resultLin,
                },
                ...arr,
              ]
            );
            setLinkURl("");
          }}
        >
          Shorten It!
        </ButtonUrl>
      </BoxForm>
    );
  }

  function ResultForm({ linkURLType, resultURLType }: GeralLinks): JSX.Element {
    const [copy, setCopy] = useState("Copy");
    return (
      <SiteItem>
        <p>
          <a href={`${linkURLType}`}>{linkURLType}</a>
        </p>
        <SiteAndCopy>
          <a href={`${resultURLType}`}>{resultURLType}</a>
          <CopyButton
            onClick={(): void => {
              setCopy("Copied!");
            }}
          >
            {copy}
          </CopyButton>
        </SiteAndCopy>
      </SiteItem>
    );
  }

  useEffect(() => {
    localStorage.setItem("arrayLinks", JSON.stringify(liArray));
  }, [liArray]);

  return (
    <BoxSection>
      <BoxFormComp />
      <SiteList>
        {(liArray as GeralLinks[])
          .slice(0, 3)
          .map((element: GeralLinks, index: number) => (
            <ResultForm
              key={index}
              linkURLType={element.linkURLType}
              resultURLType={element.resultURLType}
            />
          ))}
      </SiteList>
    </BoxSection>
  );
};

export default UrlGenerator;
