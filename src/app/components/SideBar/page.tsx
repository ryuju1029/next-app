"use client";
import React from "react";
import styled from "styled-components";

export const SideBar = () => {
  return (
    <Wrapper>
      <Content>SideBar1</Content>
      <Content>SideBar2</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40%;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Content = styled.div`
  margin: 20px 0;
  padding: 20px 10px;
  background-color: white;
  border-radius: 5px;
`;

export default SideBar;
