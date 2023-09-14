"use client";
import styled, { css } from "styled-components";
import { Cluster } from "../Cluster";

export const Header = () => {
  return <Wrapper>header</Wrapper>;
};

const Wrapper = styled(Cluster)`
  background-color: red;,
  height: 100px;
`;

export default Header;
