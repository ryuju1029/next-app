"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";

export const ArticleList = () => {
  return (
    <Wrapper>
      <Link href="#">
        <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
          alt=""
          width="1280"
          height="3000"
        />
      </Link>
      <Contents>
        <Link href="#">Technolog</Link>
        <Title>
          <Link href="#">Next.js</Link>
        </Title>
        <Content>
          <Link href="#">v13になってからの変更点が色々とある</Link>
        </Content>
        <SuccessionLink>
          <Link href="#">続きを読む</Link>
        </SuccessionLink>
      </Contents>

      <Link href="#">
        <Image
          src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
          alt=""
          width="1280"
          height="3000"
        />
      </Link>
      <Contents>
        <Link href="#">Technolog</Link>
        <Title>
          <Link href="#">Next.js</Link>
        </Title>
        <Content>
          <Link href="#">v13になってからの変更点が色々とある</Link>
        </Content>
        <SuccessionLink>
          <Link href="#">続きを読む</Link>
        </SuccessionLink>
      </Contents>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 60%;
  text-align: center;
  padding-right: 20px;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Contents = styled.div`
  margin-bottom: 20px;
  padding: 10px 10px;
  background-color: white;
  border-radius: 5px;
  text-align: left;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 20px;
`;

const Content = styled.p`
  margin-top: 10px;
  font-size: 13px;
`;

const SuccessionLink = styled.div`
  margin-top: 10px;
  text-align: right;
  color: red;
`;

export default ArticleList;
