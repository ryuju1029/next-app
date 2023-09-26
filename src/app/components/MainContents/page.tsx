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
`;

export default MainContents;
