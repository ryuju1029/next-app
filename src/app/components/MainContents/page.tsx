"use client";
import React from "react";
import styled from "styled-components";

import ArticleList from "../ArticleList/page";
import SideBar from "../SideBar/page";

export const MainContents = () => {
  return (
    <Wrapper>
      <ArticleList />
      <SideBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 0 10%;
  width: 100%;

  @media screen and (max-width: 700px) {
    display: block;
    width: 100%;
    padding: 0 50px;
  }
`;

export default MainContents;
