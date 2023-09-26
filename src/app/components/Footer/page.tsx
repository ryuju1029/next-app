"use client";
import React, { use } from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <Nav>＠2023</Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
`;

const Nav = styled.nav`
  margin-left: auto;
`;

export default Footer;
